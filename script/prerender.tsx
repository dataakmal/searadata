import React from "react";
import { renderToString } from "react-dom/server";
import fs from "fs";
import path from "path";
import { ServerApp } from "../src/AppRoutes.tsx";

const DIST_DIR = path.resolve(process.cwd(), "dist");
const INDEX_HTML_PATH = path.resolve(DIST_DIR, "index.html");

async function prerender() {
  if (!fs.existsSync(INDEX_HTML_PATH)) {
    console.error("❌ dist/index.html not found. Run vite build first.");
    process.exit(1);
  }

  const templateHtml = fs.readFileSync(INDEX_HTML_PATH, "utf-8");

  // Load certificates list if available
  let certRoutes: string[] = ["/certificate/SD-DA-B1-001", "/certificate/SD-DA-B1-INS-001"];
  const certJsonPath = path.resolve(process.cwd(), "src/data/certificates.json");
  if (fs.existsSync(certJsonPath)) {
    try {
      const certs = JSON.parse(fs.readFileSync(certJsonPath, "utf-8"));
      for (const key of Object.keys(certs)) {
        const route = `/certificate/${key.toUpperCase()}`;
        if (!certRoutes.includes(route)) {
          certRoutes.push(route);
        }
      }
    } catch (e) {
      console.warn("Warning reading certificates.json for prerendering:", e);
    }
  }

  const routes = [
    "/",
    "/program",
    "/komunitas",
    "/mentoring",
    "/testimoni",
    ...certRoutes
  ];

  console.log("🚀 Pre-rendering static HTML for routes:", routes);

  for (const route of routes) {
    try {
      const appHtml = renderToString(
        <ServerApp location={route} />
      );

      // Inject rendered markup into <div id="root">
      const renderedHtml = templateHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      if (route === "/") {
        fs.writeFileSync(INDEX_HTML_PATH, renderedHtml, "utf-8");
        console.log(`  ✅ Pre-rendered: / -> dist/index.html`);
      } else {
        const routeWithoutSlash = route.replace(/^\//, "");
        const targetDir = path.resolve(DIST_DIR, routeWithoutSlash);
        fs.mkdirSync(targetDir, { recursive: true });
        
        const targetFilePath = path.resolve(targetDir, "index.html");
        fs.writeFileSync(targetFilePath, renderedHtml, "utf-8");
        
        // Also write fallback file e.g. dist/program.html for rewrite servers
        const altFilePath = path.resolve(DIST_DIR, `${routeWithoutSlash}.html`);
        fs.writeFileSync(altFilePath, renderedHtml, "utf-8");

        console.log(`  ✅ Pre-rendered: ${route} -> ${targetFilePath}`);
      }
    } catch (err) {
      console.error(`❌ Failed to pre-render route ${route}:`, err);
    }
  }

  console.log("✨ Pre-rendering completed successfully!");
}

prerender();
