import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API or health check routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  const distPath = path.join(process.cwd(), "dist");

  // Serve static assets directly if built
  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath, { index: false }));
  }

  if (process.env.NODE_ENV !== "production") {
    // In dev mode, use Vite middleware with appType: 'custom' so SSR handler gets HTML requests
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);

    // Dynamic SSR in development mode for curl/bots/previews
    app.use("*", async (req, res, next) => {
      const url = req.originalUrl;

      // Ignore static files that were not caught by static middleware
      if (url.includes(".") && !url.endsWith(".html")) {
        return next();
      }

      try {
        let template = fs.readFileSync(path.resolve(process.cwd(), "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);

        // Pre-render in dev mode dynamically using ServerApp
        const { ServerApp } = await vite.ssrLoadModule("/src/AppRoutes.tsx");
        const { renderToString } = await import("react-dom/server");
        const React = await import("react");

        const appHtml = renderToString(
          React.createElement(ServerApp, { location: url })
        );

        const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    // Production mode: serve pre-rendered HTML matching path or fallback
    app.get("*", (req, res) => {
      const cleanPath = req.path.replace(/\/$/, "");
      
      const exactIndex = path.join(distPath, cleanPath, "index.html");
      const htmlFile = path.join(distPath, `${cleanPath}.html`);
      const fallbackIndex = path.join(distPath, "index.html");

      if (cleanPath !== "" && fs.existsSync(exactIndex)) {
        return res.sendFile(exactIndex);
      } else if (cleanPath !== "" && fs.existsSync(htmlFile)) {
        return res.sendFile(htmlFile);
      } else if (fs.existsSync(fallbackIndex)) {
        return res.sendFile(fallbackIndex);
      } else {
        return res.status(404).send("Not found");
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
