import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { 
  Globe, 
  GraduationCap, 
  Linkedin, 
  Instagram, 
  FileText, 
  BarChart3, 
  MessageSquare, 
  ArrowUpRight, 
  Sparkles, 
  Mail, 
  Briefcase, 
  BookOpen, 
  Award,
  ChevronRight,
  TrendingUp,
  LayoutGrid
} from "lucide-react";

export default function Komunitas() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const groups = [
    {
      title: "💬 Komunitas Belajar Data dari Nol",
      description: "Tempat diskusi, sharing, dan belajar bareng seputar dunia data secara interaktif dan produktif.",
      badge: "Gratis",
      badgeColor: "bg-green-100 text-green-700",
      info: "Terbuka Untuk Umum",
      hasCta: false
    },
    {
      title: "💼 Info Loker",
      description: "Update lowongan kerja harian, internship/magang, dan peluang karier terbaru di bidang data analytics.",
      badge: "Gratis",
      badgeColor: "bg-green-100 text-green-700",
      info: "Update Setiap Hari",
      hasCta: false
    },
    {
      title: "🎓 Bootcamp Data Analyst",
      description: "Program intensif belajar Excel, SQL, Python, Power BI, hingga membangun portfolio project premium.",
      badge: "Berbayar — Batch 2 Open",
      badgeColor: "bg-orange-100 text-seara-orange font-bold",
      info: "Jadwal: Sesuai Pilihan Sesi",
      hasCta: true,
      ctaText: "Daftar",
      ctaLink: "https://clicky.id/searadata"
    },
    {
      title: "📊 Fresh Graduate",
      description: "Grup diskusi khusus fresh graduate yang sedang fokus mempersiapkan karier pertamanya di bidang data.",
      badge: "Gratis",
      badgeColor: "bg-green-100 text-green-700",
      info: "Review CV & Portofolio",
      hasCta: false
    },
    {
      title: "🎯 Mini Course",
      description: "Belajar topik spesifik data analytics dalam program singkat dan praktikal bersama praktisi senior.",
      badge: "Berbayar — 3 Pertemuan",
      badgeColor: "bg-orange-100 text-seara-orange font-bold",
      info: "Jadwal menyusul",
      hasCta: true,
      ctaText: "Info Lebih Lanjut",
      ctaLink: "https://clicky.id/searadata"
    },
    {
      title: "🛠️ Mini Class",
      description: "Kelas webinar gratis secara berkala untuk belajar fundamental data dan industry insights terkini.",
      badge: "Gratis",
      badgeColor: "bg-green-100 text-green-700",
      info: "Mini Class Python & SQL — 25 Mei 2026",
      hasCta: true,
      ctaText: "Daftar Gratis",
      ctaLink: "https://clicky.id/searadata"
    }
  ];

  const quickLinks = [
    {
      label: "Website Utama",
      url: "https://searadata.vercel.app",
      icon: Globe,
      color: "text-blue-600 bg-blue-50"
    },
    {
      label: "Daftar Bootcamp & Mini Course",
      url: "https://clicky.id/searadata",
      icon: GraduationCap,
      color: "text-seara-orange bg-orange-50"
    },
    {
      label: "LinkedIn Seara Data",
      url: "https://www.linkedin.com/company/seara-data/",
      icon: Linkedin,
      color: "text-sky-700 bg-sky-50"
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/searadata",
      icon: Instagram,
      color: "text-pink-600 bg-pink-50"
    },
    {
      label: "Form Gabung Komunitas",
      url: "https://bit.ly/formseara",
      icon: FileText,
      color: "text-emerald-700 bg-emerald-50"
    },
    {
      label: "Dashboard Komunitas",
      url: "https://lookerstudio.google.com/u/0/reporting/48873aa4-a551-46b3-adfd-c5cdf49028aa/page/HWZSE/edit",
      icon: BarChart3,
      color: "text-indigo-600 bg-indigo-50"
    }
  ];

  return (
    <div className="min-h-screen bg-seara-cream text-seara-dark font-sans flex flex-col justify-between">
      <div>
        {/* Navigation */}
        <Navbar />

        {/* Section 1 - Hero */}
        <header className="py-24 px-6 text-center">
          <motion.div 
            className="max-w-4xl mx-auto space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-[#f4ece3] border border-orange-100 text-seara-orange px-4 py-2 rounded-full text-xs font-black tracking-wide uppercase">
              <Sparkles className="w-4 h-4 animate-spin-slow" /> 1.000+ MEMBER TELAH BERGABUNG
            </motion.div>

            <motion.h2 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-black text-seara-dark leading-[1.1] tracking-tight font-display"
            >
              Seara Data <span className="text-seara-orange">Community</span>
            </motion.h2>

            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-[#5a5a5a] max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Tempat belajar, berdiskusi, dan berkembang bersama bagi kamu yang tertarik dengan dunia data — dari yang baru mulai hingga yang sedang membangun karier di bidang data 🚀
            </motion.p>

            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
            >
              <a 
                href="https://bit.ly/formseara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-seara-orange text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#eb5e40] active:scale-95 transition-all shadow-lg hover:shadow-orange-500/20"
              >
                Gabung Komunitas
              </a>
              <a 
                href="https://lookerstudio.google.com/u/0/reporting/48873aa4-a551-46b3-adfd-c5cdf49028aa/page/HWZSE/edit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white border-2 border-seara-orange text-seara-orange px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50/50 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Lihat Dashboard Komunitas <ArrowUpRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </header>

        {/* Section 2 - Group Seara Data */}
        <section className="py-20 px-6 bg-white rounded-t-[48px] border-t border-orange-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <span className="text-xs font-black uppercase text-seara-orange tracking-widest bg-orange-50 px-4 py-1.5 rounded-full">
                OUR SUBGROUPS
              </span>
              <h3 className="text-3xl md:text-5xl font-black font-display text-seara-dark">
                Group Seara Data
              </h3>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                Kami membagi komunitas ke dalam jalur fokus spesifik agar kamu bisa berdiskusi secara tepat sasaran dengan topik yang kamu minati.
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {groups.map((group, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-[32px] border border-orange-100 p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-start gap-4">
                      <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ${group.badgeColor}`}>
                        {group.badge}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-seara-dark group-hover:text-seara-orange transition-colors">
                        {group.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-orange-50/50 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="text-xs font-semibold text-gray-400">
                      {group.info}
                    </div>

                    {group.hasCta && group.ctaLink && (
                      <a
                        href={group.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-seara-orange hover:brightness-110 border border-seara-orange/20 hover:border-seara-orange bg-orange-50/30 px-4 py-2 rounded-xl transition-all active:scale-95 shadow-sm"
                      >
                        {group.ctaText} <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 3 - Link Penting */}
        <section className="py-24 px-6 bg-seara-cream/30 border-y border-orange-100/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <span className="text-xs font-black uppercase text-seara-orange tracking-widest bg-orange-50 px-4 py-1.5 rounded-full">
                USEFUL LINKS
              </span>
              <h3 className="text-3xl md:text-5xl font-black font-display text-seara-dark">
                Link Penting Seara Data
              </h3>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                Tautan cepat ke semua platform digital kami untuk mengakses info terlengkap, pendaftaran, dan materi gratis.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-[24px] border border-orange-100/80 p-6 flex items-center gap-5 hover:shadow-lg hover:scale-[1.02] active:scale-98 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${link.color} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                    <div className="flex justify-between items-center w-full">
                      <span className="font-bold text-seara-dark text-sm sm:text-base leading-snug group-hover:text-seara-orange transition-colors">
                        {link.label}
                      </span>
                      <ArrowUpRight className="text-gray-400 group-hover:text-seara-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all w-5 h-5 shrink-0" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4 - CTA Banner */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-white rounded-[32px] border border-orange-100 shadow-xl overflow-hidden relative">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>

            <div className="relative p-12 md:p-20 text-center space-y-8">
              <h3 className="text-3xl md:text-5xl font-black font-display text-seara-dark leading-tight">
                Siap Mulai Perjalanan Datamu?
              </h3>
              <p className="text-[#5a5a5a] text-lg max-w-2xl mx-auto leading-relaxed">
                Bergabunglah dengan <span className="text-seara-orange font-bold">1.000+ member</span> yang sudah belajar, berkolaborasi, dan berkembang bersama Seara Data Community.
              </p>
              <div>
                <a 
                  href="https://bit.ly/formseara" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex bg-seara-orange text-white px-10 py-5 rounded-2xl font-bold text-xl hover:brightness-105 active:scale-95 transition-all shadow-xl shadow-orange-500/15"
                >
                  Gabung Sekarang
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-seara-dark text-white py-12 font-sans mt-12 w-full">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="text-xs opacity-60 italic font-display">
              Mulai perjalanan datamu hari ini
            </div>
            
            <div className="flex gap-6">
              <a href="https://www.instagram.com/searadata" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/company/seara-data" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity"><Linkedin className="w-5 h-5" /></a>
              <a href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea!" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity"><MessageSquare className="w-5 h-5" /></a>
            </div>

            <p className="text-gray-400 text-[10px] italic opacity-40">
              &copy; 2026 <span className="font-bold">Seara Data Community</span>. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
