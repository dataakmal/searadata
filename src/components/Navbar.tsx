import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Program", path: "/program" },
    { name: "Komunitas", path: "/komunitas" },
    { name: "Mentoring", path: "/mentoring" },
    { name: "Testimoni", path: "/testimoni" },
  ];

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <Link to="/" onClick={handleClose} className="flex items-center gap-3 active:scale-95 transition-transform">
          <div className="h-12 w-auto flex items-center">
            <img 
              src="/logo-seara.png" 
              alt="Logo Seara Data" 
              className="h-full w-auto object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold flex items-center gap-1">
            <span className="text-seara-orange">Seara</span>
            <span className="text-seara-dark">Data</span>
          </h1>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-all ${
                isActive(link.path)
                  ? "text-seara-orange font-bold text-base"
                  : "text-seara-dark hover:text-seara-orange text-base"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea,%20saya%20ingin%20bertanya%20lebih%20lanjut%20mengenai%20layanan%20dan%20program%20di%20Seara%20Data.%20Terima%20kasih!" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-seara-orange text-white px-6 py-2.5 rounded-full hover:brightness-95 transition-all shadow-md active:scale-95 font-semibold text-sm"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className="p-2 text-seara-dark hover:text-seara-orange focus:outline-none transition-colors rounded-xl"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-orange-100 overflow-hidden shadow-lg"
          >
            <div className="px-6 py-4 flex flex-col gap-3 font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleClose}
                  className={`py-2.5 px-2 rounded-xl transition-all ${
                    isActive(link.path)
                      ? "text-seara-orange bg-orange-50/55 font-bold"
                      : "text-seara-dark hover:text-seara-orange hover:bg-gray-50/50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea,%20saya%20ingin%20bertanya%20lebih%20lanjut%20mengenai%20layanan%20dan%20program%20di%20Seara%20Data.%20Terima%20kasih!" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="bg-seara-orange text-white text-center py-3 rounded-2xl font-bold tracking-wide shadow-md hover:brightness-105 active:scale-95 transition-all mt-2 block"
              >
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
