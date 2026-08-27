import { Routes, Route, useLocation, MemoryRouter } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Mentoring from "./pages/Mentoring";
import Program from "./pages/Program";
import Komunitas from "./pages/Komunitas";
import Testimoni from "./pages/Testimoni";
import FGSeara from "./pages/FGSeara";
import CertificateVerify from "./pages/CertificateVerify";

// Scroll to top on route change for smooth user experience
function ScrollToTop() {
  if (typeof window === "undefined") return null;
  
  try {
    const location = useLocation();
    const pathname = location?.pathname;
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  } catch (e) {
    // Ignore in SSR
  }

  return null;
}

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Program />} />
        <Route path="/fg-seara" element={<FGSeara />} />
        <Route path="/fgseara" element={<FGSeara />} />
        <Route path="/komunitas" element={<Komunitas />} />
        <Route path="/mentoring" element={<Mentoring />} />
        <Route path="/testimoni" element={<Testimoni />} />
        <Route path="/certificate/:certificateId" element={<CertificateVerify />} />
      </Routes>
    </>
  );
}

export function ServerApp({ location }: { location: string }) {
  return (
    <MemoryRouter initialEntries={[location]}>
      <AppRoutes />
    </MemoryRouter>
  );
}

export default AppRoutes;
