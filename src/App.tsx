import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Mentoring from "./pages/Mentoring";
import Program from "./pages/Program";
import Komunitas from "./pages/Komunitas";

// Scroll to top on route change for smooth user experience
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/komunitas" element={<Komunitas />} />
        <Route path="/mentoring" element={<Mentoring />} />
      </Routes>
    </Router>
  );
}
