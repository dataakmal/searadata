import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, GraduationCap, Globe, UserCheck, Building2, PackageCheck, Sparkles, MessageSquare, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const programList = [
    {
      id: "mentoring",
      title: "Mentoring Private 1-on-1",
      desc: "CV review, interview prep & ML mentoring",
      icon: UserCheck,
      badge: "Personal",
      route: "/mentoring",
    },
    {
      id: "digital",
      title: "Digital Product & Tools",
      desc: "20+ aset template, dataset & Excel Starter Pack",
      icon: PackageCheck,
      badge: "Ready Use",
    },
    {
      id: "portfolio",
      title: "Portfolio Website Data Analyst",
      desc: "Personal brand dengan website custom Vercel",
      icon: Globe,
      badge: "Vercel Hosted",
    },
    {
      id: "training",
      title: "Training Corporate",
      desc: "In-house corporate training & custom workshop",
      icon: Building2,
      badge: "Corporate",
    },
  ];

  const handleProgramClick = (id: string) => {
    handleClose();
    if (id === "bootcamp") {
      navigate("/bootcamp");
      return;
    }
    if (id === "mentoring") {
      navigate("/mentoring");
      return;
    }
    if (location.pathname === "/") {
      const element = document.getElementById(`detail-${id}`) || document.getElementById(`program-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        const mainProgram = document.getElementById("program-ringkas");
        mainProgram?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(`/#detail-${id}`);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <Link to="/" onClick={handleClose} className="flex items-center gap-3 active:scale-95 transition-transform">
          <div className="h-11 w-auto flex items-center bg-orange-50/80 p-1.5 rounded-xl">
            <img 
              src="/logo-seara.png" 
              alt="Logo Seara Data" 
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold leading-none tracking-tight font-display">
              <span className="text-seara-orange">Seara</span>
              <span className="text-seara-dark">Data</span>
            </span>
            <span className="text-[10px] text-gray-400 font-medium tracking-wide">Learner Community</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7 font-medium">
          {/* Bootcamp Standalone Link */}
          <Link
            to="/bootcamp"
            className={`flex items-center gap-1.5 py-2 text-base transition-colors ${
              isActive("/bootcamp") || isActive("/bootcamp-data-analyst")
                ? "text-seara-orange font-bold"
                : "text-seara-dark hover:text-seara-orange font-semibold"
            }`}
          >
            <GraduationCap className="w-4 h-4 text-seara-orange" />
            <span>Bootcamp</span>
          </Link>

          {/* FG Seara Standalone Link */}
          <Link
            to="/fg-seara"
            className={`flex items-center gap-1.5 py-2 text-base transition-colors ${
              isActive("/fg-seara") || isActive("/fgseara")
                ? "text-seara-orange font-bold"
                : "text-seara-dark hover:text-seara-orange font-semibold"
            }`}
          >
            <Sparkles className="w-4 h-4 text-seara-orange" />
            <span>FG Seara</span>
          </Link>

          {/* Testimoni Standalone Link */}
          <Link
            to="/testimoni"
            className={`flex items-center gap-1.5 py-2 text-base transition-colors ${
              isActive("/testimoni") || isActive("/testimonial")
                ? "text-seara-orange font-bold"
                : "text-seara-dark hover:text-seara-orange font-semibold"
            }`}
          >
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Testimoni</span>
          </Link>

          {/* Program Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className={`flex items-center gap-1.5 py-2 text-base transition-colors font-medium ${
                dropdownOpen || location.pathname === "/program"
                  ? "text-seara-orange font-bold"
                  : "text-seara-dark hover:text-seara-orange"
              }`}
            >
              <span>Program</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-seara-orange" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[420px] bg-white rounded-2xl shadow-xl border border-gray-100 p-3 z-50 grid grid-cols-1 gap-1"
                >
                  <div className="px-3 py-1.5 mb-1 border-b border-gray-50 flex justify-between items-center">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">5 Program & Layanan</span>
                    <Link 
                      to="/#program-section" 
                      onClick={() => setDropdownOpen(false)}
                      className="text-[11px] font-semibold text-seara-orange hover:underline"
                    >
                      Lihat Semua
                    </Link>
                  </div>

                  {programList.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleProgramClick(item.id)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/60 transition-colors text-left group w-full"
                      >
                        <div className="w-8 h-8 rounded-lg bg-orange-100/70 text-seara-orange flex items-center justify-center shrink-0 group-hover:bg-seara-orange group-hover:text-white transition-colors mt-0.5">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-bold text-seara-dark group-hover:text-seara-orange transition-colors truncate">
                              {item.title}
                            </span>
                            <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 group-hover:bg-orange-200/60 group-hover:text-seara-orange shrink-0">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About Link */}
          <Link
            to="/about"
            className={`text-base transition-colors ${
              isActive("/about")
                ? "text-seara-orange font-bold"
                : "text-seara-dark hover:text-seara-orange font-medium"
            }`}
          >
            About
          </Link>

          {/* Contact Button */}
          <a
            href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Seara%20Data!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-seara-orange text-white px-5 py-2 rounded-full hover:brightness-95 transition-all shadow-sm hover:shadow-md active:scale-95 font-semibold text-sm flex items-center gap-1.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Hubungi Kami</span>
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg max-h-[85vh] overflow-y-auto"
          >
            <div className="px-5 py-4 flex flex-col gap-2 font-medium text-sm">
              {/* Standalone Bootcamp on Mobile */}
              <Link
                to="/bootcamp"
                onClick={handleClose}
                className={`py-2.5 px-3 rounded-xl text-base flex items-center justify-between ${
                  isActive("/bootcamp") || isActive("/bootcamp-data-analyst")
                    ? "text-seara-orange bg-orange-50 font-bold"
                    : "text-seara-dark font-semibold hover:bg-gray-50"
                }`}
              >
                <span className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-seara-orange" />
                  <span>Bootcamp Data Analyst</span>
                </span>
                <span className="text-[10px] font-bold text-gray-400">
                  Batch 1-3
                </span>
              </Link>

              {/* Standalone FG Seara on Mobile */}
              <Link
                to="/fg-seara"
                onClick={handleClose}
                className={`py-2.5 px-3 rounded-xl text-base flex items-center justify-between ${
                  isActive("/fg-seara") || isActive("/fgseara")
                    ? "text-seara-orange bg-orange-50 font-bold"
                    : "text-seara-dark font-semibold hover:bg-gray-50"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-seara-orange" />
                  <span>FG Seara (Fresh Graduate)</span>
                </span>
              </Link>

              {/* Standalone Testimoni on Mobile */}
              <Link
                to="/testimoni"
                onClick={handleClose}
                className={`py-2.5 px-3 rounded-xl text-base flex items-center justify-between ${
                  isActive("/testimoni") || isActive("/testimonial")
                    ? "text-seara-orange bg-orange-50 font-bold"
                    : "text-seara-dark font-semibold hover:bg-gray-50"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>Testimoni Alumni</span>
                </span>
                <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                  100+ Ulasan
                </span>
              </Link>

              {/* Program Mobile Section */}
              <div className="py-1">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex justify-between items-center py-2 px-2 text-seara-dark font-bold text-base rounded-xl hover:bg-gray-50"
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-seara-orange" />
                    <span>Program & Layanan (5)</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${dropdownOpen ? "rotate-180 text-seara-orange" : ""}`} />
                </button>

                {dropdownOpen && (
                  <div className="pl-3 mt-1 space-y-1.5 border-l-2 border-orange-200 py-1">
                    {programList.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleProgramClick(item.id)}
                          className="w-full flex items-center gap-2.5 py-1.5 px-2 text-left text-xs font-medium text-gray-700 hover:text-seara-orange hover:bg-orange-50 rounded-lg"
                        >
                          <IconComp className="w-3.5 h-3.5 text-seara-orange shrink-0" />
                          <span className="truncate">{item.title}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                onClick={handleClose}
                className={`py-2.5 px-2 rounded-xl text-base ${
                  isActive("/about")
                    ? "text-seara-orange bg-orange-50 font-bold"
                    : "text-seara-dark hover:text-seara-orange"
                }`}
              >
                About (Tentang Kami)
              </Link>

              <div className="pt-2">
                <a
                  href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea!"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="bg-seara-orange text-white text-center py-3 rounded-xl font-bold shadow-md hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 w-full"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Hubungi Kami via WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
