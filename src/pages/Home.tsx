import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  UserCheck, 
  Building2, 
  PackageCheck, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  MessageSquare, 
  ArrowRight, 
  ExternalLink, 
  Zap,
  Check
} from "lucide-react";

export default function Home() {
  // Testimonial Carousel State
  const [currentTesti, setCurrentTesti] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Testimonial Data
  const testimonials = [
    {
      id: 1,
      name: "Muhammad Afnan Yusuf Dhiaulhaq",
      role: "Peserta Mini Course SQL & Python",
      rating: 5,
      content: "Mantap bang 👍 Penjelasannya terstruktur banget dan gampang dipahami buat yang baru mulai dari nol.",
      badge: "Mini Course"
    },
    {
      id: 2,
      name: "Dania Amelia Ansyori",
      role: "Peserta Mini Course Python Automation",
      rating: 5,
      content: "Penjelasannya mudah dimengerti, tidak terlalu cepat. Materi dan kebutuhan course sudah disiapin rapih. Untuk harga under 100k sangat worth it!",
      badge: "Mini Course"
    },
    {
      id: 3,
      name: "Yasril Jahja",
      role: "Alumni Bootcamp Data Analyst Batch 1",
      rating: 5,
      content: "Insightful banget mas! Penjelasannya to the point dan projectnya beneran aplikatif buat dipajang di portofolio LinkedIn & Vercel.",
      badge: "Bootcamp Batch 1"
    },
    {
      id: 4,
      name: "Risa Amalia",
      role: "Mentee Private 1-on-1 Career",
      rating: 5,
      content: "Sesi review CV dan simulasi interview nya ngebantu banget. Dikasih saran spesifik yang recruiter cari. Sekarang udah pede melamar!",
      badge: "Mentoring 1-on-1"
    },
    {
      id: 5,
      name: "Budi Santoso",
      role: "Pengguna Excel Analyst Starter Pack",
      rating: 5,
      content: "Template Power Pivot & DAX nya rapi banget, tinggal sesuaikan data kantor langsung jadi dashboard eksekutif dalam hitungan menit.",
      badge: "Digital Product"
    }
  ];

  // Auto-rotate testimonials every 5s unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentTesti((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  // FAQs Data
  const faqs = [
    {
      q: "Siapa yang cocok ikut program di Seara Data?",
      a: "Seara Data dirancang untuk fresh graduate, mahasiswa, career switcher, maupun profesional yang ingin menguasai data skill dari dasar hingga aplikatif tanpa harus latar belakang IT."
    },
    {
      q: "Apakah ada jaminan langsung dapat pekerjaan setelah program?",
      a: "Kami tidak menjual janji manis atau klaim instan. Namun, alumni yang aktif mengikuti bimbingan, konsisten mengerjakan proyek, dan memperbaiki portofolio terbukti berhasil mendapatkan karir data dalam 30–90 hari."
    },
    {
      q: "Berapa lama durasi proses belajar di Seara Data?",
      a: "Bervariasi sesuai program: Bootcamp berlangsung intensif 3–4 minggu (8 sesi), Mentoring Private secara flexible per sesi, Mini Course 1–2 minggu, dan Digital Products bersifat self-paced (akses selamanya)."
    },
    {
      q: "Bagaimana sistem pembayaran yang tersedia?",
      a: "Kami menerima pembayaran instan via QRIS (GoPay, OVO, ShopeePay, DANA), Transfer Bank, serta pendaftaran langsung via platform Clicky.id."
    },
    {
      q: "Apakah peserta mendapatkan akses materi selamanya (lifetime access)?",
      a: "Ya! Seluruh rekaman, modul, skrip Python/SQL, dan aset digital produk bootcamp & mini course dapat diakses selamanya (lifetime access)."
    },
    {
      q: "Apakah ada komunitas atau support setelah program selesai?",
      a: "Tentu saja! Setiap peserta akan bergabung di grup WhatsApp Komunitas Seara Data (1,000+ member) dengan weekly Q&A, info lowongan kerja, dan diskusi rutin bersama mentor."
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const scrollToDetail = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50/50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Top Ticker Alert Banner */}
        <div className="bg-seara-dark text-white py-2 px-4 overflow-hidden border-b border-white/10 text-xs font-semibold">
          <motion.div 
            className="whitespace-nowrap flex gap-12 items-center"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-8 items-center text-gray-300">
                <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Bootcamp Batch 2 Pendaftaran Dibuka!</span>
                </span>
                <span>•</span>
                <span>Mentoring Private 1-on-1 Available</span>
                <span>•</span>
                <span>1,000+ Alumni & Member Joined</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 1. HERO SECTION */}
        <section className="py-20 md:py-28 px-6 text-center bg-gradient-to-b from-orange-50/80 via-white to-neutral-50/50 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-seara-orange/10 blur-[130px] pointer-events-none rounded-full" />

          <div className="max-w-4xl mx-auto relative z-10 space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-orange-100/90 border border-orange-200/80 text-seara-orange px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Komunitas Belajar Data Dari 0</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black text-seara-dark tracking-tight font-display leading-[1.1]"
            >
              Mulai Perjalanan <br />
              <span className="text-seara-orange">Data-mu Hari Ini</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Seara Data hadir untuk membimbingmu memahami data—dari belajar, mentoring, hingga tools digital siap pakai. Sudah <strong>1.000+ alumni & member</strong> bersama kami.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center items-center gap-4 pt-4"
            >
              <button 
                onClick={() => scrollToDetail("detail-bootcamp")}
                className="bg-seara-orange text-white px-7 py-4 rounded-2xl font-bold text-base shadow-lg shadow-orange-500/20 hover:brightness-95 hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <span>Daftar Bootcamp Batch 2</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={() => scrollToDetail("detail-mentoring")}
                className="bg-white text-seara-dark border border-gray-200 px-7 py-4 rounded-2xl font-bold text-base shadow-sm hover:bg-orange-50/50 hover:border-orange-200 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <UserCheck className="w-4 h-4 text-seara-orange" />
                <span>Booking Mentoring 1-on-1</span>
              </button>
            </motion.div>

            {/* Quick Trust Badges */}
            <div className="pt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>100% Praktis & Hands-on</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Dibimbing Mentor Industri</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Grup WA Support Seumur Hidup</span>
              </span>
            </div>
          </div>
        </section>

        {/* 2. WHY SEARA SECTION */}
        <section className="py-16 px-6 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-seara-dark font-display tracking-tight">
                Kenapa Harus Seara Data?
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Empat alasan utama kenapa ribuan pembelajar data memilih melangkah bersama kami.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div {...fadeIn} className="bg-neutral-50 p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-orange-200 transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-seara-orange flex items-center justify-center font-bold">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-seara-dark font-display">✓ Bimbingan Personal</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Tidak ada janji instan. Kami menghargai proses belajarmu dari dasar, selangkah demi selangkah hingga mahir.
                </p>
              </motion.div>

              <motion.div {...fadeIn} className="bg-neutral-50 p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-orange-200 transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-seara-orange flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-seara-dark font-display">✓ Mentor Pengalaman</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Pengajar dari praktisi aktif industri di Bank Danamon, Dekoruma, dan Pancaran Inland Group.
                </p>
              </motion.div>

              <motion.div {...fadeIn} className="bg-neutral-50 p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-orange-200 transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-seara-orange flex items-center justify-center font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-seara-dark font-display">✓ Komunitas Aktif</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Grup WhatsApp dengan 1,000+ member aktif. Dukungan Q&A harian, diskusi, dan update info lowongan kerja.
                </p>
              </motion.div>

              <motion.div {...fadeIn} className="bg-neutral-50 p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-orange-200 transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-seara-orange flex items-center justify-center font-bold">
                  <PackageCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-seara-dark font-display">✓ Tools & Resources</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Template, dataset eksklusif, dan skrip siap pakai berstandar industri dengan harga yang sangat terjangkau.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* SECTION 1: "6 PROGRAM UTAMA" (Grid 3 Columns, Ringkas) */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section id="program-ringkas" className="py-20 px-6 max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-100 px-3.5 py-1 rounded-full">
              Overview Ringkas
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-seara-dark font-display tracking-tight mt-3">
              5 Program Utama Seara Data
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
              Pilih program yang kamu butuhkan. Klik tombol untuk langsung mendaftar/konsultasi atau melihat rincian penjelasan di bawah.
            </p>
          </div>

          {/* Grid 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* 1. Bootcamp & Mini Course */}
            <motion.div 
              {...fadeIn}
              className="bg-gradient-to-b from-orange-50/70 to-white rounded-3xl border-2 border-seara-orange/40 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative"
            >
              <div className="absolute -top-3 right-4 bg-seara-orange text-white text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Flagship
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-bold text-xl shadow-sm">
                    🚀
                  </div>
                  <span className="text-[11px] font-bold bg-orange-100 text-seara-orange px-2.5 py-1 rounded-full">
                    Rp 249K+
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-seara-dark font-display">
                    Bootcamp & Mini Course
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    Kelas intensif live & recording hands-on project bersama mentor berpengalaman.
                  </p>
                </div>
                <div className="pt-2 border-t border-orange-100">
                  <span className="text-xs text-gray-400 font-semibold block">Harga:</span>
                  <span className="text-sm font-extrabold text-seara-orange">Mulai Rp 249.000 / Gratis</span>
                </div>
              </div>

              <div className="pt-6 space-y-2">
                <Link
                  to="/bootcamp"
                  className="w-full bg-seara-orange text-white text-center py-2.5 rounded-xl font-bold text-xs shadow-md hover:brightness-95 transition-all block"
                >
                  Lihat Bootcamp Journey (Batch 1-3)
                </Link>
                <button 
                  onClick={() => scrollToDetail("detail-bootcamp")}
                  className="w-full text-seara-dark text-center py-1.5 font-bold text-xs hover:underline cursor-pointer flex items-center justify-center gap-1"
                >
                  <span>Lihat Penjelasan Singkat</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* 2. Mentoring Private 1-on-1 */}
            <motion.div 
              {...fadeIn}
              className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xl">
                    🎯
                  </div>
                  <span className="text-[11px] font-bold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">
                    Rp 300K/Sesi
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-seara-dark font-display">
                    Mentoring Private 1-on-1
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    Bimbingan karir personal, review CV/LinkedIn, interview prep & Machine Learning.
                  </p>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-xs text-gray-400 font-semibold block">Harga:</span>
                  <span className="text-sm font-extrabold text-seara-dark">Rp 300.000 / Sesi (60-90m)</span>
                </div>
              </div>

              <div className="pt-6 space-y-2">
                <a 
                  href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea,%20saya%20tertarik%20booking%20Mentoring%20Private%201-on-1." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-seara-orange text-white text-center py-2.5 rounded-xl font-bold text-xs shadow-md hover:brightness-95 transition-all block"
                >
                  Booking Mentoring
                </a>
                <button 
                  onClick={() => scrollToDetail("detail-mentoring")}
                  className="w-full text-seara-dark text-center py-1.5 font-bold text-xs hover:underline cursor-pointer flex items-center justify-center gap-1"
                >
                  <span>Lihat Penjelasan Detail</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* 4. Digital Product & Tools */}
            <motion.div 
              {...fadeIn}
              className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xl">
                    📦
                  </div>
                  <span className="text-[11px] font-bold bg-indigo-100 text-indigo-800 px-2.5 py-1 rounded-full">
                    Rp 69K+
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-seara-dark font-display">
                    Digital Product & Tools
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    Template Excel DAX, skrip Python, Power BI, & dataset eksklusif siap pakai.
                  </p>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-xs text-gray-400 font-semibold block">Harga:</span>
                  <span className="text-sm font-extrabold text-seara-dark">Mulai Rp 69.000 (Akses Lifetime)</span>
                </div>
              </div>

              <div className="pt-6 space-y-2">
                <a 
                  href="https://clicky.id/searadata" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-seara-orange text-white text-center py-2.5 rounded-xl font-bold text-xs shadow-md hover:brightness-95 transition-all block"
                >
                  Jelajahi Produk
                </a>
                <button 
                  onClick={() => scrollToDetail("detail-digital")}
                  className="w-full text-seara-dark text-center py-1.5 font-bold text-xs hover:underline cursor-pointer flex items-center justify-center gap-1"
                >
                  <span>Lihat Penjelasan Detail</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* 5. Portfolio Website Data Analyst */}
            <motion.div 
              {...fadeIn}
              className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xl">
                    💼
                  </div>
                  <span className="text-[11px] font-bold bg-purple-100 text-purple-800 px-2.5 py-1 rounded-full">
                    Rp 900K+
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-seara-dark font-display">
                    Portfolio Website Data
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    Pembuatan website portofolio profesional custom hosted di Vercel seumur hidup.
                  </p>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-xs text-gray-400 font-semibold block">Harga:</span>
                  <span className="text-sm font-extrabold text-seara-dark">Rp 900.000 (Professional)</span>
                </div>
              </div>

              <div className="pt-6 space-y-2">
                <a 
                  href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea,%20saya%20tertarik%20pembuatan%20Portfolio%20Website%20Data." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-seara-dark text-white text-center py-2.5 rounded-xl font-bold text-xs hover:bg-black transition-all block"
                >
                  Pesan Website
                </a>
                <button 
                  onClick={() => scrollToDetail("detail-portfolio")}
                  className="w-full text-seara-orange text-center py-1.5 font-bold text-xs hover:underline cursor-pointer flex items-center justify-center gap-1"
                >
                  <span>Lihat Penjelasan Detail</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* 6. Training Corporate */}
            <motion.div 
              {...fadeIn}
              className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl">
                    🏢
                  </div>
                  <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                    Corporate
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-seara-dark font-display">
                    Training Corporate
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    In-house training data & dashboarding khusus kebutuhan internal perusahaan Anda.
                  </p>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-xs text-gray-400 font-semibold block">Harga:</span>
                  <span className="text-sm font-extrabold text-seara-dark">Custom Corporate Proposal</span>
                </div>
              </div>

              <div className="pt-6 space-y-2">
                <a 
                  href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea,%20saya%20ingin%20tanya%20Training%20Corporate." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-seara-dark text-white text-center py-2.5 rounded-xl font-bold text-xs hover:bg-black transition-all block"
                >
                  Tanya Program Corporate
                </a>
                <button 
                  onClick={() => scrollToDetail("detail-training")}
                  className="w-full text-seara-orange text-center py-1.5 font-bold text-xs hover:underline cursor-pointer flex items-center justify-center gap-1"
                >
                  <span>Lihat Penjelasan Detail</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* SECTION 2: "DETAIL PROGRAM" (Penjelasan Lengkap)        */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section id="detail-program-section" className="py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-neutral-50 border-t border-gray-200">
          <div className="max-w-5xl mx-auto space-y-16">

            {/* Header Section 2 */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-100 px-4 py-1.5 rounded-full">
                Rincian & Informasi Lengkap
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-seara-dark font-display tracking-tight">
                Penjelasan Detail Setiap Program
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Berikut rincian cakupan materi, skema harga, durasi, fasilitas, serta cara pendaftaran untuk masing-masing dari 6 program kami.
              </p>
            </div>

            {/* ────────────────────────────────────────────────────── */}
            {/* 1️⃣ BOOTCAMP & MINI COURSE */}
            {/* ────────────────────────────────────────────────────── */}
            <motion.div 
              id="detail-bootcamp" 
              {...fadeIn}
              className="bg-gradient-to-b from-orange-50/50 via-white to-white rounded-3xl border-2 border-seara-orange/30 p-8 sm:p-10 shadow-md scroll-mt-28 space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-orange-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-seara-orange text-white flex items-center justify-center text-3xl font-bold shadow-md">
                    🚀
                  </div>
                  <div>
                    <span className="text-xs font-bold text-seara-orange uppercase tracking-wide">Program 1 (Flagship)</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-seara-dark font-display">
                      BOOTCAMP & MINI COURSE
                    </h3>
                  </div>
                </div>
                <span className="bg-seara-orange text-white font-bold text-xs px-4 py-1.5 rounded-full shadow-sm">
                  Pendaftaran Batch 2 Dibuka
                </span>
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Akselerasi skill data komprehensif melalui program intensif berfokus praktik nyata. Dirancang khusus bagi yang ingin membangun portofolio solid dan siap melamar pekerjaan.
              </p>

              {/* Sub-Programs Comparison Table / Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2">
                {/* Sub 1 */}
                <div className="bg-white p-5 rounded-2xl border-2 border-seara-orange/40 shadow-sm space-y-3">
                  <span className="text-[10px] font-extrabold bg-orange-100 text-seara-orange px-2 py-0.5 rounded uppercase">Batch 2 Active</span>
                  <h5 className="text-base font-bold text-seara-dark font-display">Bootcamp Data Analyst</h5>
                  <p className="text-xs text-gray-500">8 Sesi Live Zoom + Real Case Project</p>
                  <div className="pt-2 border-t border-gray-100">
                    <span className="text-xs text-gray-400 line-through">Rp299.000</span>
                    <p className="text-lg font-black text-seara-orange">Rp 249.000</p>
                    <span className="text-[10px] text-gray-500 font-semibold block mt-1">29 Juli – 22 Agustus 2026</span>
                  </div>
                </div>

                {/* Sub 2 */}
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                  <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded uppercase">Self-Paced</span>
                  <h5 className="text-base font-bold text-seara-dark font-display">Mini Course Python</h5>
                  <p className="text-xs text-gray-500">Python Automation & Scripting Case</p>
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-lg font-black text-seara-dark">Rp 66.000</p>
                    <span className="text-[10px] text-gray-500 font-semibold block mt-1">Lifetime Recording + Code</span>
                  </div>
                </div>

                {/* Sub 3 */}
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                  <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded uppercase">Open Access</span>
                  <h5 className="text-base font-bold text-seara-dark font-display">Mini Class Intro</h5>
                  <p className="text-xs text-gray-500">Pengenalan Dasar SQL & Python</p>
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-lg font-black text-emerald-600">FREE / Gratis</p>
                    <span className="text-[10px] text-gray-500 font-semibold block mt-1">Grup WhatsApp Komunitas</span>
                  </div>
                </div>
              </div>

              {/* Instructors Info */}
              <div className="bg-orange-50/80 p-4 rounded-2xl border border-orange-100 space-y-2">
                <span className="text-xs font-bold text-seara-orange uppercase tracking-wider block">👨‍🏫 Instruktur Berpengalaman:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="font-bold text-seara-dark">M. Zahrul Wafi</p>
                    <p className="text-gray-600">Specialist Excel, Power BI & Business Intelligence (Bank Danamon & Dekoruma)</p>
                  </div>
                  <div>
                    <p className="font-bold text-seara-dark">Achmad Kurniansyah</p>
                    <p className="text-gray-600">Specialist Python, SQL & Data Engineering (Senior Industry Practitioner)</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-seara-dark uppercase tracking-wider">Fasilitas & Benefit Peserta:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                    <Check className="w-4 h-4 text-seara-orange shrink-0 mt-0.5" />
                    <span>Akses Selamanya (Lifetime) ke seluruh rekaman & modul</span>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                    <Check className="w-4 h-4 text-seara-orange shrink-0 mt-0.5" />
                    <span>Dataset eksklusif & skrip Python/SQL standar industri</span>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                    <Check className="w-4 h-4 text-seara-orange shrink-0 mt-0.5" />
                    <span>E-Certificate Resmi dengan ID verifikasi unik</span>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                    <Check className="w-4 h-4 text-seara-orange shrink-0 mt-0.5" />
                    <span>Grup WhatsApp diskusi & bimbingan langsung mentor</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">Pendaftaran langsung diproses secara otomatis via platform Clicky.id</p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/bootcamp"
                    className="bg-white border border-gray-300 text-seara-dark hover:border-seara-orange hover:text-seara-orange px-5 py-3 rounded-xl font-bold text-xs transition-all flex items-center gap-2"
                  >
                    <span>Explore Bootcamp Journey (Batch 1-3)</span>
                    <ArrowRight className="w-4 h-4 text-seara-orange" />
                  </Link>
                  <a 
                    href="https://clicky.id/searadata" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-seara-orange text-white px-6 py-3 rounded-xl font-bold text-xs hover:brightness-95 transition-all flex items-center gap-2 shadow-md"
                  >
                    <span>Daftar Sekarang (Clicky.id)</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ────────────────────────────────────────────────────── */}
            {/* 2️⃣ MENTORING PRIVATE 1-ON-1 */}
            {/* ────────────────────────────────────────────────────── */}
            <motion.div 
              id="detail-mentoring" 
              {...fadeIn}
              className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-sm scroll-mt-28 space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-3xl font-bold shadow-sm">
                    🎯
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wide">Program 2</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-seara-dark font-display">
                      MENTORING PRIVATE 1-ON-1
                    </h3>
                  </div>
                </div>
                <span className="bg-amber-50 border border-amber-200 text-amber-800 font-bold text-xs px-4 py-1.5 rounded-full">
                  Direct Mentor Bimbingan Personal
                </span>
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Sesi konsultasi & bimbingan personal secara eksklusif satu lawan satu bersama mentor praktisi aktif. Bahas kendala spesifik, bedah CV, simulasi interview, hingga bimbingan Machine Learning.
              </p>

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                <div className="bg-neutral-50 p-5 rounded-2xl border border-gray-200 space-y-2">
                  <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded uppercase">Track 1: Career & Portfolio</span>
                  <h5 className="text-lg font-bold text-seara-dark font-display">Mentoring Karir & CV Review</h5>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Bedah CV ATS-Friendly, optimasi profil LinkedIn, personal branding, mock interview recruiter, dan arahan karir data.
                  </p>
                  <div className="pt-2">
                    <span className="text-xs text-gray-400 block font-semibold">Harga per Sesi:</span>
                    <span className="text-xl font-black text-seara-orange">Rp 300.000 <span className="text-xs font-normal text-gray-500">/ 60-90 Menit</span></span>
                  </div>
                </div>

                <div className="bg-neutral-50 p-5 rounded-2xl border border-gray-200 space-y-2">
                  <span className="text-[10px] font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded uppercase">Track 2: Machine Learning</span>
                  <h5 className="text-lg font-bold text-seara-dark font-display">Machine Learning Mentoring Pack</h5>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Bimbingan 8 sesi intensif: Customer Churn Prediction, Time Series Forecasting, Customer Segmentation & deployment.
                  </p>
                  <div className="pt-2">
                    <span className="text-xs text-gray-400 block font-semibold">Harga Paket (8 Sesi):</span>
                    <span className="text-xl font-black text-seara-dark">Rp 2.400.000 <span className="text-xs font-normal text-gray-500">(Bisa dicicil per block)</span></span>
                  </div>
                </div>
              </div>

              {/* Includes */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-seara-dark uppercase tracking-wider">Apa Yang Kamu Dapatkan:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Live 1-on-1 Zoom Session dengan Senior Practitioner</span>
                  </div>
                  <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Rekaman Video Sesi + Catatan Evaluasi Khusus Mentee</span>
                  </div>
                  <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Jadwal Fleksibel (Diselaraskan via Google Calendar)</span>
                  </div>
                  <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Akses Template CV ATS-friendly & LinkedIn Checklist</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">Bisa booking untuk tanggal minggu ini via Admin Rea.</p>
                <a 
                  href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea,%20saya%20tertarik%20booking%20Mentoring%20Private%201-on-1." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-seara-orange text-white px-6 py-3 rounded-xl font-bold text-xs hover:brightness-95 transition-all flex items-center gap-2 shadow-md"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Booking Sesi Mentoring</span>
                </a>
              </div>
            </motion.div>

            {/* ────────────────────────────────────────────────────── */}
            {/* 3️⃣ DIGITAL PRODUCT & TOOLS */}
            {/* ────────────────────────────────────────────────────── */}
            <motion.div 
              id="detail-digital" 
              {...fadeIn}
              className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-sm scroll-mt-28 space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-3xl font-bold shadow-sm">
                    📦
                  </div>
                  <div>
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide">Program 3</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-seara-dark font-display">
                      DIGITAL PRODUCT & TOOLS
                    </h3>
                  </div>
                </div>
                <span className="bg-indigo-50 border border-indigo-200 text-indigo-800 font-bold text-xs px-4 py-1.5 rounded-full">
                  Instant Download & Lifetime Access
                </span>
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Kumpulan 20+ aset digital, template dashboard Excel Power Pivot/DAX, skrip Python automation, dan dataset bisnis eksklusif untuk mempercepat pengerjaan tugas dan proyek data Anda.
              </p>

              {/* Product Highlight */}
              <div className="bg-indigo-50/60 p-6 rounded-2xl border border-indigo-100 space-y-3">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <span className="text-[10px] font-bold bg-indigo-200 text-indigo-900 px-2 py-0.5 rounded uppercase">Best Seller Product</span>
                    <h5 className="text-lg font-bold text-seara-dark font-display mt-1">Excel Analyst Starter Pack</h5>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 line-through">Rp 99.000</span>
                    <p className="text-xl font-black text-seara-orange">Promo Rp 69.000</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 pt-2 border-t border-indigo-100">
                  <p>• <strong>Sesi 1:</strong> Data Cleaning & Validation Master</p>
                  <p>• <strong>Sesi 2:</strong> Dynamic Pivot Tables & Slice Filtering</p>
                  <p>• <strong>Sesi 3:</strong> Power Query ETL Automation</p>
                  <p>• <strong>Sesi 4:</strong> Data Modeling with Power Pivot & DAX</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">20+ Produk Digital Lainnya Tersedia Langsung di Clicky.id</p>
                <a 
                  href="https://clicky.id/searadata" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-seara-orange text-white px-6 py-3 rounded-xl font-bold text-xs hover:brightness-95 transition-all flex items-center gap-2 shadow-md"
                >
                  <PackageCheck className="w-4 h-4" />
                  <span>Jelajahi Semua Produk di Clicky.id</span>
                </a>
              </div>
            </motion.div>

            {/* ────────────────────────────────────────────────────── */}
            {/* 4️⃣ PORTFOLIO WEBSITE DATA ANALYST */}
            {/* ────────────────────────────────────────────────────── */}
            <motion.div 
              id="detail-portfolio" 
              {...fadeIn}
              className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-sm scroll-mt-28 space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-3xl font-bold shadow-sm">
                    💼
                  </div>
                  <div>
                    <span className="text-xs font-bold text-purple-600 uppercase tracking-wide">Program 4</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-seara-dark font-display">
                      PORTFOLIO WEBSITE DATA ANALYST
                    </h3>
                  </div>
                </div>
                <span className="bg-purple-50 border border-purple-200 text-purple-800 font-bold text-xs px-4 py-1.5 rounded-full">
                  Personal Branding & Vercel Hosted
                </span>
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Tampilkan hasil karya dan proyek data-mu dengan website portofolio modern yang elegan. Dirancang khusus untuk memikat recruiter, terintegrasi analytics, dan dapat diakses dari mana saja tanpa biaya bulanan.
              </p>

              {/* Tier Prices */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2">
                <div className="bg-neutral-50 p-5 rounded-2xl border border-gray-100">
                  <span className="text-[11px] font-bold text-gray-400 uppercase block">STARTER TIER</span>
                  <p className="text-lg font-black text-seara-dark mt-1">Anchor Price</p>
                  <p className="text-[11px] text-gray-500 mt-1">Standard template layout, Vercel deployment, responsive view.</p>
                </div>

                <div className="bg-purple-50/60 p-5 rounded-2xl border-2 border-purple-200 relative">
                  <span className="absolute -top-2.5 right-3 bg-purple-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">RECOMMENDED</span>
                  <span className="text-[11px] font-bold text-purple-700 uppercase block">PROFESSIONAL TIER</span>
                  <p className="text-lg font-black text-seara-orange mt-1">Rp 900.000</p>
                  <p className="text-[11px] text-gray-600 mt-1">Custom interactive components, Tableau/PowerBI embed, Analytics.</p>
                </div>

                <div className="bg-neutral-50 p-5 rounded-2xl border border-gray-100">
                  <span className="text-[11px] font-bold text-gray-400 uppercase block">PROFESSIONAL+ TIER</span>
                  <p className="text-lg font-black text-seara-dark mt-1">Rp 1.300.000</p>
                  <p className="text-[11px] text-gray-500 mt-1">Custom domain (.com/.id), SEO optimization & multi-page portfolio.</p>
                </div>
              </div>

              {/* Showcase Links */}
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200/80 space-y-2">
                <span className="text-xs font-bold text-seara-dark uppercase tracking-wider block">🌐 Contoh Portfolio Hasil Alumni:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <a href="https://azmi-nafis.vercel.app" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white rounded-xl border border-gray-200 text-seara-orange hover:border-seara-orange transition-all font-semibold flex items-center justify-between">
                    <span>azmi-nafis.vercel.app (Azmi Nafis)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://akmalfauzan.vercel.app" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white rounded-xl border border-gray-200 text-seara-orange hover:border-seara-orange transition-all font-semibold flex items-center justify-between">
                    <span>akmalfauzan.vercel.app (Akmal Fauzan)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">Estimasi pengerjaan: 3 - 5 hari kerja setelah data proyek lengkap.</p>
                <a 
                  href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea,%20saya%20tertarik%20pembuatan%20Portfolio%20Website%20Data%20Analyst." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-seara-dark text-white px-6 py-3 rounded-xl font-bold text-xs hover:bg-black transition-all flex items-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-seara-orange" />
                  <span>Pesan Website Portfolio</span>
                </a>
              </div>
            </motion.div>

            {/* ────────────────────────────────────────────────────── */}
            {/* 5️⃣ TRAINING CORPORATE */}
            {/* ────────────────────────────────────────────────────── */}
            <motion.div 
              id="detail-training" 
              {...fadeIn}
              className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-sm scroll-mt-28 space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl font-bold shadow-sm">
                    🏢
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">Program 5</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-seara-dark font-display">
                      TRAINING CORPORATE
                    </h3>
                  </div>
                </div>
                <span className="bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs px-4 py-1.5 rounded-full">
                  Corporate In-House Workshop
                </span>
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Program pelatihan data komprehensif yang dirancang khusus untuk kebutuhan korporasi & peningkatan kapasitas analitik tim internal perusahaan Anda.
              </p>

              {/* Case Study Highlight */}
              <div className="bg-neutral-50 p-6 rounded-2xl border border-gray-200 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded uppercase">Studi Kasus Nyata</span>
                  <h5 className="text-base font-bold text-seara-dark font-display">EDW Socialization - Pancaran Inland Group</h5>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-600 pt-1">
                  <li className="bg-white p-3 rounded-xl border border-gray-100">• 16-slide training deck komprehensif</li>
                  <li className="bg-white p-3 rounded-xl border border-gray-100">• Akses Pentaho Cube & Superset dashboard</li>
                  <li className="bg-white p-3 rounded-xl border border-gray-100">• 30 hari post-training support & ROI tracking</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-1">
                <div className="bg-neutral-50 p-4 rounded-2xl border border-gray-100">
                  <span className="text-[11px] font-bold text-gray-400 uppercase block">PRICING</span>
                  <p className="text-sm font-extrabold text-seara-dark mt-1">Proposal Sesuai Jumlah Tim</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-2xl border border-gray-100">
                  <span className="text-[11px] font-bold text-gray-400 uppercase block">FORMAT</span>
                  <p className="text-sm font-extrabold text-seara-dark mt-1">On-Site / Online Hybrid</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-2xl border border-gray-100">
                  <span className="text-[11px] font-bold text-gray-400 uppercase block">DELIVERABLES</span>
                  <p className="text-sm font-extrabold text-seara-dark mt-1">Syllabus, Slide, Case Datasets</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">Hubungi tim kami untuk konsultasi awal & penyusunan proposal program.</p>
                <a 
                  href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea,%20saya%20ingin%20bertanya%20mengenai%20Training%20Corporate." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-seara-dark text-white px-6 py-3 rounded-xl font-bold text-xs hover:bg-black transition-all flex items-center gap-2 shadow-sm"
                >
                  <Building2 className="w-4 h-4 text-seara-orange" />
                  <span>Minta Proposal Corporate</span>
                </a>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 4. KOMUNITAS SECTION */}
        <section className="py-20 px-6 bg-gradient-to-tr from-orange-50 via-white to-orange-100/40 border-y border-orange-100">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-100 px-3.5 py-1 rounded-full">
              Komunitas Seara Data
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-seara-dark font-display tracking-tight">
              Jangan Jalan Sendirian Lagi.
            </h2>

            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Gue pernah ada di posisi lo—bingung, kewalahan, dan nggak tau harus mulai dari mana. Di Seara Data, lo bakal dapat bimbingan nyata dari teman & mentor sefrekuensi.
            </p>

            <div className="bg-white p-8 rounded-3xl border border-orange-200/80 shadow-md max-w-2xl mx-auto space-y-4">
              <div className="flex justify-center items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-bold text-seara-dark font-display">WhatsApp Group (@searadata)</h4>
                  <p className="text-xs text-gray-500">1,000+ Members • Weekly Support & Q&A • Job Updates</p>
                </div>
              </div>

              <a 
                href="https://chat.whatsapp.com/IEtToynaCUP2GAwelBolQc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Bergabung Dengan WhatsApp Community</span>
              </a>
            </div>
          </div>
        </section>

        {/* 5. TESTIMONIAL CAROUSEL SECTION */}
        <section 
          className="py-20 px-6 bg-white border-b border-gray-100"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
                Testimoni Alumni
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-seara-dark font-display tracking-tight mt-3">
                Apa Kata Alumni & Member Kami?
              </h2>
            </div>

            {/* Testimonial Card Display */}
            <div className="relative bg-neutral-50 p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm min-h-[220px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentTesti}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(testimonials[currentTesti].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-seara-orange">
                      {testimonials[currentTesti].badge}
                    </span>
                  </div>

                  <p className="text-base sm:text-lg text-seara-dark font-medium leading-relaxed italic">
                    "{testimonials[currentTesti].content}"
                  </p>

                  <div className="pt-2">
                    <h4 className="text-base font-bold text-seara-dark font-display">
                      {testimonials[currentTesti].name}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium">
                      {testimonials[currentTesti].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="flex justify-between items-center pt-8 border-t border-gray-200/60 mt-6">
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTesti(idx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        currentTesti === idx ? "w-8 bg-seara-orange" : "w-2.5 bg-gray-300"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentTesti((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                    className="p-2 rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-seara-orange hover:border-seara-orange transition-all cursor-pointer"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setCurrentTesti((prev) => (prev + 1) % testimonials.length)}
                    className="p-2 rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-seara-orange hover:border-seara-orange transition-all cursor-pointer"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FAQ SECTION */}
        <section className="py-20 px-6 max-w-4xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-seara-dark font-display tracking-tight mt-3">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 font-bold text-seara-dark text-base font-display hover:text-seara-orange transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${isOpen ? "rotate-180 text-seara-orange" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 border-t border-gray-100 pt-3 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* 7. SOCIAL PROOF / STATS SECTION */}
        <section className="py-16 px-6 bg-seara-dark text-white border-y border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
                Seara Data by The Numbers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <div className="text-4xl sm:text-5xl font-black text-seara-orange font-display mb-2">1,000+</div>
                <div className="text-sm font-semibold text-gray-300">Alumni & Member Komunitas</div>
              </div>

              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <div className="text-4xl sm:text-5xl font-black text-seara-orange font-display mb-2">16+</div>
                <div className="text-sm font-semibold text-gray-300">Sesi Training & Workshop</div>
              </div>

              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <div className="text-4xl sm:text-5xl font-black text-seara-orange font-display mb-2">20+</div>
                <div className="text-sm font-semibold text-gray-300">Digital Products & Templates</div>
              </div>
            </div>
          </div>
        </section>


        {/* 9. FINAL CTA SECTION */}
        <section className="py-20 px-6 text-center bg-gradient-to-tr from-orange-600 via-seara-orange to-amber-500 text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight leading-tight">
              Siap Gaspol Bareng Seara Data?
            </h2>

            <p className="text-orange-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Jangan jalan sendirian lagi. Mulai perjalanan data-mu hari ini dengan bimbingan dari praktisi yang sudah makan asam garam di industri.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a 
                href="https://clicky.id/searadata" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-seara-dark text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl hover:bg-black transition-all flex items-center gap-2 active:scale-95"
              >
                <span>Daftar Bootcamp Batch 2</span>
                <ArrowRight className="w-5 h-5 text-seara-orange" />
              </a>

              <a 
                href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea,%20saya%20tertarik%20booking%20mentoring%201-on-1!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-seara-dark px-8 py-4 rounded-2xl font-bold text-base shadow-xl hover:bg-orange-50 transition-all flex items-center gap-2 active:scale-95"
              >
                <UserCheck className="w-5 h-5 text-seara-orange" />
                <span>Booking Mentoring 1-on-1</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
