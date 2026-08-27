import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  Users, 
  Calendar, 
  Clock, 
  BookOpen, 
  HelpCircle, 
  Sparkles, 
  ChevronDown, 
  ArrowRight, 
  TrendingUp, 
  Tag, 
  MonitorPlay, 
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

        {/* SECTION 1: Program Terdekat (Upcoming) */}
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="mb-10 text-center md:text-left"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl md:text-4xl font-extrabold font-display text-seara-dark">
                Program Terdekat <span className="inline-block animate-bounce">🔥</span>
              </h3>
              <p className="text-gray-500 mt-2">Jangan lewatkan kesempatan belajar interaktif secara intensif.</p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-[32px] border border-orange-100 shadow-xl overflow-hidden p-8 md:p-12 flex flex-col lg:flex-row gap-10 items-center hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute top-4 left-4 bg-seara-orange text-white text-xs font-black uppercase px-4 py-2 rounded-xl shadow-lg flex items-center gap-1.5 z-10">
                  Batch 2 Pendaftaran Dibuka 🚀
                </div>
                <img 
                  src="/bootcamp-data-analyst-batch2.png" 
                  alt="Bootcamp Data Analyst Batch 2" 
                  className="w-full aspect-[4/3] object-cover rounded-[24px] border border-orange-50 shadow-inner"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "https://picsum.photos/seed/bootcamp/800/600";
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-md">
                    INTENSIVE BOOTCAMP - BATCH 2 SLOTS AVAILABLE
                  </span>
                  <h4 className="text-3xl font-bold text-seara-dark leading-snug">
                    Bootcamp Data Analyst Specialization (Batch 2)
                  </h4>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed">
                    Kuasai metodologi analisis data riil, mulai dari data querying, visualisasi dinamis, hingga persiapan portofolio premium yang diakui industri. Amankan slot bimbingan intensifmu sekarang di Batch 2!
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-y border-orange-50 py-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-seara-orange w-5 h-5 shrink-0" />
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Periode Kelas</div>
                      <div className="text-xs font-extrabold text-[#5a5a5a]">Pendaftaran Aktif</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MonitorPlay className="text-seara-orange w-5 h-5 shrink-0" />
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Metode Format</div>
                      <div className="text-xs font-extrabold text-[#5a5a5a]">Online via Zoom</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-seara-orange w-5 h-5 shrink-0" />
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Durasi Kelas</div>
                      <div className="text-xs font-extrabold text-[#5a5a5a]">~4 Minggu Intensif</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Tag className="text-seara-orange w-5 h-5 shrink-0" />
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Biaya & Promo</div>
                      <div className="text-xs font-extrabold text-seara-orange">Mulai Baru (Batch 2)</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <a 
                    href="https://clicky.id/searadata" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full md:w-auto justify-center items-center gap-2 bg-seara-orange text-white px-8 py-4 rounded-2xl font-bold text-lg hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-orange-500/10 transition-all text-center h-fit"
                  >
                    Daftar Batch 2 Sekarang <ArrowRight className="w-5 h-5" />
                  </a>
                  <Link to="/testimoni" className="text-seara-orange hover:underline text-sm font-semibold flex items-center gap-1.5 whitespace-nowrap">
                    Lihat Testimoni Alumni →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: Layanan & Program Seara Data */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <span className="text-xs font-black uppercase text-seara-orange tracking-widest bg-orange-50 px-4 py-1.5 rounded-full">
                ALL PROGRAMS & SERVICES
              </span>
              <h3 className="text-3xl md:text-5xl font-extrabold font-display text-seara-dark">
                Layanan & Program Seara Data
              </h3>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Kami menyediakan fleksibilitas belajar sesuai timeline dan preferensi belajarmu dari kelas mandiri, sesi singkat, hingga pendampingan intensif.
              </p>
              <div className="pt-2">
                <Link to="/testimoni" className="inline-flex items-center gap-2 bg-orange-50/50 hover:bg-orange-50 text-seara-orange border border-orange-100 px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm">
                  ⭐️ Lihat Testimoni Alumni Seara Data →
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
                      <span className="font-extrabold text-seara-orange">Mentor:</span> Zahrul Wafi (Excel & Power BI), Akmal Fauzan (Python & Career) & Achmad Kurniansyah (Excel, Python, SQL, Tableau)
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Durasi:</span> Pilihan Sesi 30 / 60 / 90 Menit
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Harga:</span> Mulai dari Rp99.000 / sesi
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

              {/* Program B: Mini Course */}
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-seara-cream/30 rounded-[32px] border border-orange-100 p-8 flex flex-col justify-between space-y-8 hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-seara-orange">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-seara-dark">Mini Course</h4>
                    <p className="text-[#5a5a5a] text-sm mt-2 leading-relaxed">
                      Kelas sinkronus interaktif singkat yang fokus membedah satu topik utama secara runut dan menyeluruh serta interaktif.
                    </p>
                  </div>
                  <div className="space-y-2 text-xs text-[#5a5a5a] pt-2">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Kelas Tersedia:</span> SQL + Python, Excel + Power BI
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Durasi:</span> Sesi Intensif Webinar & Praktik Terbimbing
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Harga:</span> Mulai dari Rp125.000
                    </div>
                  </div>
                </div>

                <div>
                  <a 
                    href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea,%20saya%20ingin%20bertanya%20mengenai%20jadwal%20dan%20pendaftaran%20Mini%20Course%20terdekat.%20Terima%20kasih!" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full justify-center items-center gap-2 bg-white border-2 border-seara-orange text-seara-orange py-3 rounded-2xl font-bold text-sm hover:bg-orange-50 active:scale-95 transition-all animate-pulse"
                  >
                    Tanya via WhatsApp <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Program C: Bootcamp */}
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-seara-cream/30 rounded-[32px] border border-orange-100 p-8 flex flex-col justify-between space-y-8 hover:shadow-md transition-shadow relative"
              >
                <div className="absolute top-6 right-6 bg-seara-orange text-white text-[10px] uppercase font-black px-2.5 py-1 rounded-md">
                  Pendaftaran Dibuka 🚀
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-seara-orange">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-seara-dark">Bootcamp</h4>
                    <p className="text-[#5a5a5a] text-sm mt-2 leading-relaxed">
                      Program belajar komprehensif berdurasi multi-minggu (Batch 2) yang memadukan teori, project nyata, review personal, dan bimbingan karier.
                    </p>
                  </div>
                  <div className="space-y-2 text-xs text-[#5a5a5a] pt-2">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Topik Utama:</span> Data Analyst Spec / Professional Analyst Pathway
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Metode:</span> Live Zoom Sesi & Penugasan Berkelompok
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Fasilitas:</span> Sertifikat, Networking, Portofolio & Bimbingan Resume
                    </div>
                  </div>
                </div>

                <div>
                  <a 
                    href="https://clicky.id/searadata" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full justify-center items-center gap-2 bg-seara-orange text-white py-3.5 rounded-2xl font-bold text-sm hover:brightness-105 active:scale-95 transition-all text-center"
                  >
                    Daftar Batch 2 <ArrowRight className="w-4 h-4" />
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
