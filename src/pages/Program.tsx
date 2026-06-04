import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  ChevronRight, 
  Calendar, 
  Clock, 
  BookOpen, 
  Instagram, 
  Linkedin, 
  Mail, 
  MessageSquare,
  HelpCircle,
  Sparkles,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  Tag,
  MonitorPlay
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
        <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                {/* Logo PNG */}
                <div className="h-12 w-auto flex items-center">
                  <img 
                    src="/logo-seara.png" 
                    alt="Logo Seara Data" 
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
              <h1 className="text-2xl font-bold flex items-center gap-1">
                <span className="text-seara-orange">Seara</span>
                <span className="text-seara-dark">Data</span>
              </h1>
            </Link>
            <div className="hidden md:flex items-center gap-8 font-medium">
              <Link to="/program" className="text-seara-orange font-bold hover:brightness-110 transition-colors">Program</Link>
              <Link to="/komunitas" className="hover:text-seara-orange transition-colors">Komunitas</Link>
              <Link to="/mentoring" className="hover:text-seara-orange transition-colors">Mentoring</Link>
              <a 
                href="https://wa.me/6281779052788?text=Halo%20Seara%20Data,%20saya%20ingin%20bertanya%20lebih%20lanjut%20mengenai%20layanan%20dan%20program%20di%20Seara%20Data.%20Terima%20kasih!" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-seara-orange text-white px-6 py-2.5 rounded-full hover:brightness-95 transition-all shadow-md active:scale-95"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </nav>

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
                <div className="absolute top-4 left-4 bg-seara-orange text-white text-xs font-black uppercase px-4 py-2 rounded-xl shadow-lg flex items-center gap-1.5 z-10 animate-pulse">
                  Segera Dimulai 🔥
                </div>
                <img 
                  src="/bootcamp-data-analyst.png" 
                  alt="Bootcamp Data Analyst" 
                  className="w-full aspect-[4/3] object-cover rounded-[24px] border border-orange-50 shadow-inner"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "https://picsum.photos/seed/bootcamp/800/600";
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-md">
                    INTENSIVE BOOTCAMP
                  </span>
                  <h4 className="text-3xl font-bold text-seara-dark leading-snug">
                    Bootcamp Data Analyst Specialization
                  </h4>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed">
                    Kuasai metodologi analisis data riil, mulai dari data querying, visualisasi dinamis, hingga persiapan portofolio premium yang diakui industri.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-y border-orange-50 py-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-seara-orange w-5 h-5 shrink-0" />
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Tanggal Mulai</div>
                      <div className="text-xs font-extrabold text-[#5a5a5a]">3 - 20 Juni 2025</div>
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
                      <div className="text-xs font-extrabold text-[#5a5a5a]">~3 Minggu Intensif</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Tag className="text-seara-orange w-5 h-5 shrink-0" />
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Biaya & Promo</div>
                      <div className="text-xs font-extrabold text-seara-orange">Cek di Pendaftaran</div>
                    </div>
                  </div>
                </div>

                <div>
                  <a 
                    href="https://clicky.id/searadata/bootcamp-data-analyst" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full md:w-auto justify-center items-center gap-2 bg-seara-orange text-white px-8 py-4 rounded-2xl font-bold text-lg hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-orange-500/10 transition-all text-center"
                  >
                    Daftar Sekarang <ArrowRight className="w-5 h-5" />
                  </a>
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
                      <span className="font-extrabold text-seara-orange">Mentor:</span> Zahrul Wafi (Excel & Power BI) & Akmal Fauzan (Python & Career)
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Durasi:</span> Pilihan Sesi 30 / 60 / 90 Menit
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-seara-orange">Harga:</span> Mulai dari Rp75.000 / sesi
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
                      <span className="font-extrabold text-seara-orange">Harga:</span> Terjangkau Under Rp100.000!
                    </div>
                  </div>
                </div>

                <div>
                  <a 
                    href="https://wa.me/6281779052788?text=Halo%20Seara%20Data,%20saya%20ingin%20bertanya%20mengenai%20jadwal%20dan%20pendaftaran%20Mini%20Course%20terdekat.%20Terima%20kasih!" 
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
                className="bg-seara-cream/30 rounded-[32px] border border-orange-100 p-8 flex flex-col justify-between space-y-8 hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-seara-orange">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-seara-dark">Bootcamp</h4>
                    <p className="text-[#5a5a5a] text-sm mt-2 leading-relaxed">
                      Program belajar komprehensif berdurasi multi-minggu yang memadukan teori, project nyata, review personal, dan bimbingan karier.
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
                    href="https://clicky.id/searadata/bootcamp-data-analyst" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full justify-center items-center gap-2 bg-seara-orange text-white py-3.5 rounded-2xl font-bold text-sm hover:brightness-105 active:scale-95 transition-all"
                  >
                    Lihat Bootcamp <ArrowRight className="w-4 h-4" />
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
      <footer className="bg-seara-dark text-white py-12 font-sans mt-12 w-full">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="text-xs opacity-60 italic font-display">
              Mulai perjalanan datamu hari ini
            </div>
            
            <div className="flex gap-6">
              <a href="https://www.instagram.com/searadata" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/company/seara-data" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity"><Linkedin className="w-5 h-5" /></a>
              <a href="https://wa.me/6281779052788?text=Halo%20Seara%20Data!" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity"><MessageSquare className="w-5 h-5" /></a>
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
