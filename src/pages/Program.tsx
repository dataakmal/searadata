import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  Users, 
  BookOpen, 
  HelpCircle, 
  Sparkles, 
  ChevronDown, 
  ArrowRight, 
  Globe, 
  Check, 
  Plus, 
  ExternalLink, 
  FileText, 
  AlertCircle
} from "lucide-react";

export default function Program() {
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

  const cardHover = {
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(249, 115, 22, 0.08)",
      borderColor: "rgb(249, 115, 22)",
      transition: { duration: 0.3 }
    }
  };

  // FAQ interactive state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apakah program ini cocok untuk pemula tanpa latar belakang TI?",
      answer: "Sangat cocok! Semua program kami dirancang ramah bagi pemula. Kami mengupas tuntas mulai dari konsep dasar fundamental hingga studi kasus riil di industri, sehingga siapa pun bisa belajar dengan nyaman."
    },
    {
      question: "Bagaimana sistem dan jadwal pelaksanaan pembelajaran?",
      answer: "Pembelajaran kami bersifat interaktif. Kelas diselenggarakan secara online via Zoom dengan live mentoring bersama ahli industri. Ditambah dengan latihan mandiri, diskusi grup komunitas, dan review tugas secara langsung."
    },
    {
      question: "Apakah saya akan mendapatkan sertifikat pencapaian?",
      answer: "Ya! Setiap peserta yang berhasil menyelesaikan mini course ataupun bootcamp serta memenuhi tugas akhir yang diberikan, akan berhak mendapatkan sertifikat resmi kelulusan dari Seara Data."
    },
    {
      question: "Apakah sesi live di program direkam dan bisa diputar kembali?",
      answer: "Tentu saja. Semua sesi live kami direkam dan rekamannya akan dibagikan kepada peserta secara lifetime agar bisa dipelajari kembali kapan saja tanpa batas."
    }
  ];

  return (
    <div className="min-h-screen bg-seara-cream text-seara-dark font-sans flex flex-col justify-between">
      <div>
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <header className="py-20 px-6 text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.span 
              variants={fadeIn}
              className="inline-block bg-orange-100 text-seara-orange px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-6"
            >
              📚 EKSKLUSIF LEARNING ROADMAP
            </motion.span>
            
            <motion.h2 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-extrabold mb-8 leading-[1.1] text-seara-dark tracking-tight font-display"
            >
              Pilih Program Pembelajaran <br />
              <span className="text-seara-orange">Sesuai Kebutuhan Kariermu</span>
            </motion.h2>

            <motion.p 
              variants={fadeIn}
              className="text-lg text-[#5a5a5a] max-w-2xl mx-auto leading-relaxed"
            >
              Seara Data menyediakan berbagai modul praktis dan program interaktif untuk menunjang transisi karier serta menguasai data secara end-to-end.
            </motion.p>
          </motion.div>
        </header>

        {/* SECTION: Layanan & Program Seara Data */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <span className="text-xs font-black uppercase text-seara-orange tracking-widest bg-orange-50 px-4 py-1.5 rounded-full">
                ALL PROGRAMS & SERVICES
              </span>
              <h3 className="text-3xl md:text-5xl font-extrabold font-display text-seara-dark">
                Layanan & Program Seara Data
              </h3>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Kami menyediakan fleksibilitas belajar sesuai timeline dan preferensi belajarmu dari kelas mandiri, sesi bimbingan 1-on-1, hingga pembuatan portfolio profesional.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <Link to="/testimoni" className="inline-flex items-center gap-2 bg-orange-50/50 hover:bg-orange-50 text-seara-orange border border-orange-100 px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm">
                  ⭐️ Lihat Testimoni Alumni Seara Data →
                </Link>
                <Link to="/bootcamp" className="inline-flex items-center gap-2 bg-white hover:border-seara-orange text-seara-dark border border-gray-200 px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm">
                  🚀 Menuju Halaman Bootcamp Data Analyst →
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Program A: Mentoring 1-on-1 */}
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-seara-cream/30 rounded-[32px] border border-orange-100 p-8 flex flex-col justify-between space-y-8 hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-seara-orange">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-seara-dark">Mentoring 1-on-1</h4>
                    <p className="text-[#5a5a5a] text-sm mt-2 leading-relaxed">
                      Sesi tatap muka personal virtual eksklusif (Excel, SQL, Power BI, Python, hingga Review Resume) langsung bersama expert industri.
                    </p>
                  </div>
                  <div className="space-y-2 text-xs text-[#5a5a5a] pt-2">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Mentor:</span> Zahrul Wafi (Excel & Power BI) & Achmad Kurniansyah (Python, SQL, ML)
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Durasi:</span> Pilihan Sesi 60 / 90 Menit
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Harga:</span> Mulai dari Rp300.000 / sesi
                    </div>
                  </div>
                </div>

                <div>
                  <Link 
                    to="/mentoring"
                    className="inline-flex w-full justify-center items-center gap-2 bg-seara-orange text-white py-3.5 rounded-2xl font-bold text-sm hover:brightness-105 active:scale-95 transition-all"
                  >
                    Booking Sekarang <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Program B: Mini Course (Tableau Sedang Berlangsung) */}
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-[32px] border-2 border-orange-200 p-8 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Sedang Berlangsung 🔥</span>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-seara-orange">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold text-seara-orange bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100">
                        25 – 27 Sept
                      </span>
                      <span className="text-[11px] font-bold text-gray-500">
                        3 Sesi (90–120 Mnt)
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold text-seara-dark">Mini Course Tableau</h4>
                    <p className="text-[#5a5a5a] text-sm mt-1.5 leading-relaxed">
                      <strong>Beginner to Interactive Dashboard</strong>: Dari data mentah sampai publish 1 interactive dashboard ke Tableau Public.
                    </p>
                  </div>

                  {/* Thumbnail Preview */}
                  <div className="relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 aspect-[16/9]">
                    <img 
                      src="/mini-course-tableau.png" 
                      alt="Mini Course Tableau" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="space-y-1.5 text-xs text-[#5a5a5a] pt-1">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Tools:</span> Tableau Public / Desktop
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Fasilitas:</span> Live Zoom, Recording Lifetime, Dataset & e-Sertifikat
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Checkout:</span> Langsung via Clicky.id
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <a 
                    href="https://clicky.id/searadata" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full justify-center items-center gap-2 bg-seara-orange text-white py-3.5 rounded-2xl font-bold text-sm hover:brightness-105 active:scale-95 shadow-md shadow-orange-500/20 transition-all"
                  >
                    Daftar / Checkout di Clicky.id <ExternalLink className="w-4 h-4" />
                  </a>

                  <Link
                    to="/mini-course"
                    className="inline-flex w-full justify-center items-center gap-2 bg-white border border-gray-200 text-seara-dark py-2.5 rounded-xl font-bold text-xs hover:bg-orange-50/50 hover:border-orange-200 transition-all"
                  >
                    <span>Lihat Rincian Silabus & Jadwal</span>
                    <ArrowRight className="w-3.5 h-3.5 text-seara-orange" />
                  </Link>
                </div>
              </motion.div>

              {/* Program C: Jasa Website Portfolio */}
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-seara-cream/30 rounded-[32px] border border-orange-100 p-8 flex flex-col justify-between space-y-8 hover:shadow-md transition-shadow relative"
              >
                <div className="absolute top-6 right-6 bg-purple-600 text-white text-[10px] uppercase font-black px-2.5 py-1 rounded-md">
                  Personal Branding 🌐
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-seara-orange">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-seara-dark">Website Portfolio Analyst</h4>
                    <p className="text-[#5a5a5a] text-sm mt-2 leading-relaxed">
                      Jasa pembuatan website portofolio modern & cepat dengan deploy Vercel tanpa biaya bulanan untuk memikat HR & recruiter.
                    </p>
                  </div>
                  <div className="space-y-2 text-xs text-[#5a5a5a] pt-2">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Pilihan Paket:</span> Starter (Rp500k), Professional (Rp900k), Plus (Rp1.1jt)
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Waktu Kerja:</span> 5 - 7 Hari Kerja
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Fasilitas:</span> Responsive, Vercel Analytics, Maintenance Bonus
                    </div>
                  </div>
                </div>

                <div>
                  <a 
                    href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea,%20saya%20tertarik%20pembuatan%20Website%20Portfolio%20Data%20Analyst." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full justify-center items-center gap-2 bg-seara-dark text-white py-3.5 rounded-2xl font-bold text-sm hover:bg-black active:scale-95 transition-all text-center"
                  >
                    Pesan Website Portfolio <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Program D: Free Content */}
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-seara-cream/30 rounded-[32px] border border-orange-100 p-8 flex flex-col justify-between space-y-8 hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-seara-orange">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-seara-dark">Free Content & Community</h4>
                    <p className="text-[#5a5a5a] text-sm mt-2 leading-relaxed">
                      Dapatkan update insight gratis secara reguler seputar tutorial pengolahan data, tips lowongan kerja, hingga tren industri terkini.
                    </p>
                  </div>
                  <div className="space-y-2 text-xs text-[#5a5a5a] pt-2">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Platform:</span> Instagram, LinkedIn, Webinar Gratis, Komunitas WhatsApp
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Manfaat:</span> Mini Tips, Template Gratis, Live Sharing, Teman Belajar Baru
                    </div>
                  </div>
                </div>

                <div>
                  <a 
                    href="https://www.instagram.com/searadata" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full justify-center items-center gap-2 bg-white border-2 border-seara-orange text-seara-orange py-3 rounded-2xl font-bold text-sm hover:bg-orange-50 active:scale-95 transition-all"
                  >
                    Kunjungi Instagram <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* FG Seara Batch 2 Featured Hero Card in Program Page */}
            <div className="mt-14 bg-gradient-to-r from-neutral-900 via-stone-900 to-seara-dark rounded-[36px] p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-orange-500/20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-seara-orange/10 blur-[100px] pointer-events-none rounded-full" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-4 shrink-0">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-orange-400/40 shadow-xl group">
                    <img 
                      src="/fg-seara.png" 
                      alt="FG Seara Batch 2" 
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow">
                      Batch 2 Open Now
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-seara-orange text-white text-xs font-black uppercase px-3.5 py-1 rounded-full">
                      🔥 Fresh Graduate Accelerator
                    </span>
                    <span className="bg-white/10 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                      📅 Start 3 October 2026
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight text-white">
                    Become a <span className="text-seara-orange">Job-Ready Data Analyst</span> in 3 Months
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                    Program 3 bulan (9 sesi intensif) khusus fresh graduate & mahasiswa tingkat akhir. Dilengkapi kurikulum industri, portofolio nyata, review CV, mock interview, dan bimbingan eksklusif.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl">
                      <span className="text-[10px] text-gray-400 font-bold block uppercase">Durasi</span>
                      <span className="text-xs font-bold text-white">3 Bulan (9 Sesi)</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl">
                      <span className="text-[10px] text-gray-400 font-bold block uppercase">Kickoff</span>
                      <span className="text-xs font-bold text-amber-300">3 Okt 2026</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl">
                      <span className="text-[10px] text-gray-400 font-bold block uppercase">Kuota</span>
                      <span className="text-xs font-bold text-emerald-400">30 Peserta</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl">
                      <span className="text-[10px] text-gray-400 font-bold block uppercase">Investasi</span>
                      <span className="text-xs font-bold text-orange-400">Rp90k/bln</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link
                      to="/fgseara"
                      className="bg-seara-orange text-white hover:brightness-110 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-lg shadow-orange-500/25"
                    >
                      <span>Lihat Rincian FGSeara Batch 2</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href="https://s.id/FGSeara"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
                    >
                      <span>Daftar via s.id/FGSeara</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Website Portfolio Pricelist */}
        <section className="py-24 px-6 bg-[#fdfdfb] border-t border-orange-100/50">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
              <span className="text-xs font-black uppercase text-seara-orange tracking-widest bg-orange-50 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-seara-orange" /> SERVICE PORTFOLIO
              </span>
              <h3 className="text-3xl md:text-5xl font-extrabold font-display text-seara-dark">
                Pricelist Website Portfolio <span className="text-seara-orange">by Seara Data</span> 🌐
              </h3>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                Tampilkan kepribadian profesional, pencapaian terbaik, dan portofolio premium dengan website personal responsif berkecapatan tinggi tanpa biaya bulanan.
              </p>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              
              {/* Card 1: Starter */}
              <motion.div 
                whileHover="hover"
                variants={cardHover}
                className="bg-white rounded-[32px] border border-orange-100 p-8 flex flex-col justify-between relative overflow-hidden shadow-sm"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-amber-600 uppercase bg-amber-50 px-3 py-1 rounded-md">
                      Starter Package
                    </span>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-seara-dark">Rp500.000</div>
                    <p className="text-xs text-gray-400 mt-1">Satu kali bayar • Akses Seumur Hidup</p>
                  </div>
                  <hr className="border-orange-50" />
                  
                  {/* Features */}
                  <div className="space-y-3">
                    <div className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">Fitur Utama</div>
                    <ul className="space-y-2.5 text-sm text-[#5a5a5a]">
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>1 Halaman</strong> (One Page)</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Responsive Design (Desktop & Mobile)</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Deploy Online (Vercel)</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>Lifetime Access</strong> <span className="text-[11px] text-gray-400">(Akses Seumur Hidup, tidak ada biaya bulanan)</span></span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>2x revisi minor</span>
                      </li>
                    </ul>
                  </div>

                  {/* Sections */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">Section Terintegrasi</div>
                    <p className="text-xs text-[#5a5a5a] bg-orange-50/40 p-3 rounded-xl border border-orange-100/50 leading-relaxed font-semibold">
                      Home, About Me, Experience, Projects, Certifications, Contact
                    </p>
                  </div>

                  {/* Bonus Maintenance */}
                  <div className="pt-2 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50">
                    <div className="text-xs font-bold text-emerald-700 flex items-center gap-1.5 mb-1">
                      <span>🎁 Maintenance Bonus</span>
                    </div>
                    <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                      1x update Project, Experience, atau Sertifikasi setelah website selesai.
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <a 
                    href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea,%20saya%20tertarik%20dengan%20Website%20Portfolio%20*Starter%20Package*%20(Rp500.000).%20Mohon%2520bantu%2520informasi%2520selanjutnya.%2520Terima%2520kasih!" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full justify-center items-center gap-2 bg-[#fafaf8] border border-orange-200 text-seara-orange py-3.5 rounded-2xl font-bold text-sm hover:bg-seara-orange hover:text-white transition-all text-center"
                  >
                    Pilih Starter <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Card 2: Professional - RECOMMENDED */}
              <motion.div 
                whileHover="hover"
                variants={cardHover}
                className="bg-white rounded-[32px] border-2 border-seara-orange p-8 flex flex-col justify-between relative overflow-hidden shadow-md shadow-orange-500/5"
              >
                <div className="absolute top-0 right-0 bg-seara-orange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-3xl tracking-widest">
                  POPULAR ⭐
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-seara-orange uppercase bg-orange-50 px-3 py-1 rounded-md">
                      Professional Package
                    </span>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-seara-dark">Rp900.000</div>
                    <p className="text-xs text-gray-400 mt-1">Satu kali bayar • Akses Seumur Hidup</p>
                  </div>
                  <hr className="border-orange-100" />
                  
                  {/* Features */}
                  <div className="space-y-3">
                    <div className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">Semua Fitur Starter, Ditambah:</div>
                    <ul className="space-y-2.5 text-sm text-[#5a5a5a]">
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>Multi-Page Website</strong></span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Interactive <strong>Project Showcase</strong></span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>Vercel Analytics Setup</strong></span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>3x revisi minor</span>
                      </li>
                    </ul>
                  </div>

                  {/* Sections */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">Halaman Terintegrasi</div>
                    <p className="text-xs text-[#5a5a5a] bg-orange-50/40 p-3 rounded-xl border border-orange-100/50 leading-relaxed font-semibold">
                      Home, About Me, Experience, Projects, Certifications, Contact
                    </p>
                  </div>

                  {/* Bonus Maintenance */}
                  <div className="pt-2 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50">
                    <div className="text-xs font-bold text-emerald-700 flex items-center gap-1.5 mb-1">
                      <span>🎁 Maintenance Bonus</span>
                    </div>
                    <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                      Update Project, Experience, atau Sertifikasi <strong>setiap 3 bulan selama 1 tahun</strong> (maks 4x).
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <a 
                    href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea,%20saya%20tertarik%20dengan%20Website%20Portfolio%20*Professional%20Package*%20(Rp900.000).%20Mohon%2520bantu%2520informasi%2520selanjutnya.%2520Terima%2520kasih!" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full justify-center items-center gap-2 bg-seara-orange text-white py-3.5 rounded-2xl font-bold text-sm hover:brightness-105 active:scale-95 transition-all text-center shadow-md"
                  >
                    Pilih Professional <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Card 3: Professional Plus */}
              <motion.div 
                whileHover="hover"
                variants={cardHover}
                className="bg-white rounded-[32px] border border-orange-100 p-8 flex flex-col justify-between relative overflow-hidden shadow-sm"
              >
                <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-3xl tracking-widest">
                  ULTIMATE COMPLETE ✨
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-md">
                      Professional Plus
                    </span>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-seara-dark">Rp1.100.000</div>
                    <p className="text-xs text-gray-400 mt-1">Satu kali bayar • Akses Seumur Hidup</p>
                  </div>
                  <hr className="border-orange-50" />
                  
                  {/* Features */}
                  <div className="space-y-3">
                    <div className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">Fitur Premium Lengkap</div>
                    <ul className="space-y-2.5 text-sm text-[#5a5a5a]">
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>LinkedIn Audit & Feedback Tertulis</strong> <span className="text-[11px] text-gray-400">(Headline, About, Experience, Skills, Featured)</span></span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>CV Review & Recommendations</strong></span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>Personal Branding Brief</strong> <span className="text-[11px] text-gray-400">(tone, bio, dan tagline yang konsisten)</span></span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>Priority Response via WhatsApp</strong> <span className="text-[11px] text-gray-400">(1x24 jam kerja)</span></span>
                      </li>
                    </ul>
                  </div>

                  {/* Sections */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">Halaman Terintegrasi</div>
                    <p className="text-xs text-[#5a5a5a] bg-orange-50/40 p-3 rounded-xl border border-orange-100/50 leading-relaxed font-semibold">
                      Home, About Me, Experience, Projects, Certifications, Contact
                    </p>
                  </div>

                  {/* Bonus Maintenance */}
                  <div className="pt-2 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50">
                    <div className="text-xs font-bold text-emerald-700 flex items-center gap-1.5 mb-1">
                      <span>🎁 Maintenance Bonus</span>
                    </div>
                    <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                      Update Project, Experience, atau Sertifikasi <strong>setiap 3 bulan selama 1 tahun</strong> (maks 4x).
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <a 
                    href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea,%20saya%20tertarik%20dengan%20Website%20Portfolio%20*Professional%20Plus%20Package*%20(Rp1.100.000).%20Mohon%2520bantu%2520informasi%2520selanjutnya.%2520Terima%2520kasih!" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full justify-center items-center gap-2 bg-[#fafaf8] border border-orange-200 text-indigo-600 py-3.5 rounded-2xl font-bold text-sm hover:bg-indigo-600 hover:text-white transition-all text-center"
                  >
                    Pilih Professional Plus <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

            </div>

            {/* Grid 2: Add-on & Extra Details (Requirements, revision policy, timelines) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              
              {/* Optional Add-ons */}
              <div className="bg-white rounded-[32px] border border-orange-100 p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-seara-orange">
                    <Plus className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-seara-dark">➕ Add-on (Opsional)</h4>
                    <p className="text-xs text-gray-400">Pilihan tambahan fungsionalitas untuk mengoptimalkan branding kamu</p>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs md:text-sm">
                  <div className="flex justify-between items-center py-2.5 border-b border-orange-50">
                    <div className="text-[#5a5a5a] font-medium">🔹 Extra revisi minor <span className="text-[10px] text-gray-400">(selama masa pengerjaan, per sesi)</span></div>
                    <div className="font-extrabold text-[#5a5a5a]">Rp75.000</div>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-orange-50">
                    <div className="text-[#5a5a5a] font-medium">🔹 Update konten di luar jadwal <span className="text-[10px] text-gray-400">(setelah website diserahkan)</span></div>
                    <div className="font-extrabold text-[#5a5a5a]">Rp100.000</div>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-orange-50">
                    <div className="text-[#5a5a5a] font-medium">🔹 Perpanjangan maintenance tahun ke-2</div>
                    <div className="font-extrabold text-[#5a5a5a]">Rp200.000</div>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-orange-50">
                    <div className="text-[#5a5a5a] font-medium">🔹 GitHub Profile Cleanup & README Setup</div>
                    <div className="font-extrabold text-[#5a5a5a]">Rp150.000</div>
                  </div>
                  <div className="flex justify-between items-center py-2.5">
                    <div className="text-[#5a5a5a] font-medium">🔹 Custom Domain .com <span className="text-[10px] text-gray-400">(include pembelian domain & konfigurasi)</span></div>
                    <div className="font-extrabold text-seara-orange">Rp300.000 / tahun</div>
                  </div>
                </div>
              </div>

              {/* Requirement & Revision Policy */}
              <div className="flex flex-col gap-6">
                
                {/* Requirements & Timeline */}
                <div className="bg-white rounded-[24px] border border-orange-100 p-6 shadow-sm flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="text-seara-orange w-5 h-5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-seara-dark">📋 Yang Perlu Disiapkan</h4>
                      <div className="text-xs font-semibold text-emerald-600">⏳ Estimasi Pengerjaan: 5–7 Hari Kerja</div>
                    </div>
                  </div>
                  <ul className="text-xs md:text-sm text-[#5a5a5a] space-y-2 list-none font-semibold">
                    <li className="flex items-center gap-2">🟢 Curriculum Vitae (CV)</li>
                    <li className="flex items-center gap-2">🟢 Tautan Profil LinkedIn Active</li>
                    <li className="flex items-center gap-2">🟢 Project Portfolio <span className="text-[10px] text-gray-400">(About Me, Experience, Projects, Certifications, Contact)</span></li>
                    <li className="flex items-center gap-2">🟢 Foto Profesional Resolusi Tinggi</li>
                    <li className="flex items-center gap-2">🟢 Berkas Sertifikasi Pendukung <span className="text-[10px] text-gray-400">(opsional)</span></li>
                  </ul>
                </div>

                {/* Revision Note */}
                <div className="bg-amber-50/55 rounded-[24px] border border-amber-200/50 p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="text-amber-500 w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-amber-900 text-sm">📌 Catatan Revisi Penting</h4>
                      <p className="text-xs text-amber-800 mt-1 leading-relaxed font-semibold">
                        Revisi minor mencakup: perubahan teks, penggantian foto, atau penyesuaian warna. Tidak termasuk perubahan layout dasar, penambahan halaman baru di luar paket, atau perubahan struktur konten utama.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Showcase & Examples */}
            <div className="bg-orange-50/20 rounded-[32px] border border-orange-100 p-8 md:p-12 text-center relative overflow-hidden mb-8">
              <div className="max-w-xl mx-auto space-y-6">
                <span className="text-[10px] font-bold text-seara-orange uppercase tracking-widest bg-orange-100/50 px-3 py-1 rounded-md">
                  🖥️ CONTOH LIVE WEBSITE PORTFOLIO
                </span>
                <h4 className="text-2xl font-bold font-display text-seara-dark">
                  Contoh Website yang Sudah Kami Buat
                </h4>
                <p className="text-sm text-[#5a5a5a] leading-relaxed font-medium">
                  Lihat contoh nyata website portofolio premium yang di-deploy gratis online menggunakan paket Professional.
                </p>
                <div className="pt-2">
                  <a 
                    href="https://azmi-nafis.vercel.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-seara-dark hover:text-seara-orange border border-orange-200 px-6 py-3 rounded-full text-xs md:text-sm font-bold transition-all shadow-sm group active:scale-95"
                  >
                    <span>🔗 Azmi Nafis Portfolio Website</span>
                    <span className="text-xs text-emerald-500 font-bold bg-emerald-50 py-0.5 px-2.5 rounded-full">Professional Package</span>
                    <ExternalLink className="w-4 h-4 text-seara-orange group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Section CTA */}
            <div className="bg-seara-dark text-white rounded-[32px] p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
              <div className="max-w-xl mx-auto space-y-6 relative z-10">
                <h4 className="text-2xl md:text-3xl font-extrabold leading-tight">
                  Konsultasikan Profil Portofolio Karirmu
                </h4>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  📩 Kirim CV atau LinkedIn kamu untuk mendapatkan rekomendasi paket yang sesuai.
                </p>
                <div className="pt-2">
                  <a 
                    href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea,%20saya%20ingin%2520berkonsultasi%2520mengenai%2520rekomendasi%2520paket%2520Website%2520Portfolio%2520Seara%2520Data.%2520Berikut%252520tautan%252520LinkedIn/CV%252520saya..." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-seara-orange text-white px-8 py-4 rounded-2xl font-bold text-sm md:text-base hover:brightness-105 active:scale-95 transition-all shadow-lg shadow-orange-500/10"
                  >
                    Kirim CV / LinkedIn via WhatsApp <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-seara-orange/15 blur-[120px] rounded-full pointer-events-none"></div>
            </div>

          </div>
        </section>

        {/* SECTION 3: FAQ Singkat */}
        <section className="py-24 px-6 bg-seara-cream/40">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-2">
              <h3 className="text-3xl md:text-5xl font-extrabold font-display text-seara-dark">
                Pertanyaan yang Sering Diajukan
              </h3>
              <p className="text-gray-500">Punya kendala atau pertanyaan? Temukan jawabannya di bawah ini.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-orange-100/80 rounded-[24px] overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-6 md:p-8 flex justify-between items-center gap-4 hover:bg-orange-50/20 transition-all"
                    >
                      <span className="font-bold text-lg text-seara-dark flex items-center gap-3">
                        <HelpCircle className="text-seara-orange shrink-0 w-5 h-5" />
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-seara-orange shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 md:px-8 pb-6 md:pb-8 text-sm text-[#5a5a5a] md:text-base leading-relaxed border-t border-orange-50/50 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
