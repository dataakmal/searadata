import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  ExternalLink,
  BookOpen,
  Star,
  Zap,
  BarChart3,
  Video,
  FileSpreadsheet,
  Download,
  Users,
  MessageSquare,
  Award,
  ChevronDown,
  PlayCircle,
  HelpCircle,
  TrendingUp,
  Check,
  Building2,
  Code2
} from "lucide-react";

export default function MiniCourse() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedTopic, setSelectedTopic] = useState<number>(0);

  const CLICKY_CHECKOUT_URL = "https://clicky.id/searadata";
  const WA_CONSULT_URL = "https://wa.me/6287811856600?text=Halo%20Admin%20Rea,%20saya%20tertarik%20dengan%20Mini%20Course%20Tableau!";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  // Tableau Mini Course Modules (3 Pertemuan)
  const tableauSessions = [
    {
      session: "Pertemuan 1",
      title: "Tableau Basics & Visualization",
      badge: "Fundamentals",
      desc: "Mempelajari fundamental Tableau, menghubungkan data, memahami tipe data, serta prinsip arsitektur visual dashboard yang efektif.",
      points: [
        "Pengenalan Tableau & interface",
        "Connect data",
        "Dimension vs Measure",
        "Basic chart: Bar Chart & Line Chart",
        "Konsep dashboard yang baik: fokus, hierarchy, clarity, dan tidak berantakan",
        "Contoh dashboard bagus vs kurang bagus",
        "Praktik membuat basic visualization"
      ]
    },
    {
      session: "Pertemuan 2",
      title: "Analysis with Tableau",
      badge: "Data Analysis",
      desc: "Mendalami teknik kalkulasi, pemfilteran dinamis, dan parameter interaktif menggunakan satu studi kasus bisnis terarah.",
      points: [
        "Recap konsep dasar Tableau",
        "Calculated Field",
        "Filter",
        "Parameter",
        "Praktik analisis menggunakan satu studi kasus",
        "Membuat visualisasi yang lebih interaktif"
      ]
    },
    {
      session: "Pertemuan 3",
      title: "Building Interactive Dashboard",
      badge: "Dashboard Development",
      desc: "Menyatukan seluruh visualisasi menjadi executive dashboard interaktif dengan actions terintegrasi hingga publikasi ke Tableau Public.",
      points: [
        "Recap konsep dashboard",
        "Menggabungkan visualisasi menjadi dashboard",
        "Layout & visual hierarchy",
        "Dashboard interactivity",
        "Filter & Filter Action",
        "Finalisasi dashboard",
        "Publish ke Tableau Public"
      ]
    }
  ];

  // Other Mini Courses Archive (Data Engineer & Python)
  const otherCourses = [
    {
      id: "mini-course-data-engineer",
      title: "Mini Course Data Engineer",
      image: "/mini-course-data-engineer.png",
      tag: "Arsip / Recorded",
      desc: "Pahami fundamental pipeline data, ekstraksi API, arsitektur database analitik, dan workflow modern Data Engineering dari dasar.",
      link: "https://clicky.id/searadata"
    },
    {
      id: "mini-course-python",
      title: "Mini Course Python for Automation",
      image: "/mini-course-python.png",
      tag: "Arsip / Recorded",
      desc: "Otomatisasi pengolahan data, integrasi tools & script Python untuk memangkas waktu pengerjaan analisis data secara drastis.",
      link: "https://clicky.id/searadata"
    }
  ];

  // Testimonials from Mini Course Data Engineer & Mini Course Python
  const miniCourseTestimonials = [
    {
      name: "Dania Amelia Ansyori",
      role: "Peserta Mini Course Python For Automation",
      rating: 10,
      content: "Mini course seru, insightful, ramah pemula, dan sangat worth it! Penjelasannya mudah dimengerti, tidak terlalu cepat, materi dan kebutuhan course sudah disiapin rapih.",
      badge: "Mini Course Python"
    },
    {
      name: "Melvia Eriva Ikhsan",
      role: "Peserta Mini Course Data Engineer",
      rating: 10,
      content: "Materi berkelas dengan banyak aha moment and penjelasan yang sistematis. Sangat membantu memahami pipeline data dan arsitektur analitik dari nol.",
      badge: "Mini Course Data Engineer"
    },
    {
      name: "Stevanus Gunawan",
      role: "Peserta Mini Course Python For Automation",
      rating: 10,
      content: "Penjelasannya mudah dimengerti dan ramah untuk pemula. Materi sangat terstruktur dan diajarkan dari nol sampai bisa.",
      badge: "Mini Course Python"
    },
    {
      name: "Dinda Raraswati",
      role: "Peserta Mini Course Data Engineer",
      rating: 9,
      content: "Mendapat insight baru terkait API dan data pipeline dengan penjelasan yang mudah dipahami dan langsung aplikatif.",
      badge: "Mini Course Data Engineer"
    },
    {
      name: "Muhammad Rhesa Dhiyaulhaq",
      role: "Peserta Mini Course Python For Automation",
      rating: 10,
      content: "Ilmunya sangat berdaging bagi yang berkonsentrasi di bidang data. Step-by-step jelas, use case konkret, dan sangat straightforward!",
      badge: "Mini Course Python"
    },
    {
      name: "Azmi Muhammad Nafis",
      role: "Peserta Mini Course Data Engineer",
      rating: 9,
      content: "Sangat insightful, dibimbing dari nol, dan sangat ramah untuk pemula yang ingin memahami workflow data engineering di industri.",
      badge: "Mini Course Data Engineer"
    }
  ];

  const faqs = [
    {
      q: "Bagaimana cara mendaftar dan checkout Mini Course Tableau?",
      a: "Kamu bisa langsung klik tombol 'Daftar Sekarang / Checkout di Clicky.id' pada halaman ini. Setelah pembayaran berhasil di platform Clicky.id, kamu akan otomatis mendapatkan tautan akses kelas dan grup WhatsApp peserta."
    },
    {
      q: "Apakah pemula tanpa latar belakang IT bisa mengikuti Mini Course Tableau?",
      a: "Tentu saja! Mini Course ini dirancang ramah pemula (beginner-friendly). Mentor akan membimbing dari dasar pengenalan antarmuka Tableau, cara mengimpor data, hingga tips membuat visualisasi yang disukai eksekutif."
    },
    {
      q: "Apakah ada rekaman video jika berhalangan hadir saat sesi live?",
      a: "Ya! Seluruh sesi memiliki rekaman video berkualitas tinggi dengan akses seumur hidup (lifetime access), lengkap dengan file workbook (.twbx), dataset latihan, dan rangkuman modul."
    },
    {
      q: "Apakah peserta mendapatkan sertifikat kelulusan?",
      a: "Ya, setiap peserta yang menyelesaikan sesi dan tugas project mini course berhak menerima e-Certificate resmi dari Seara Data yang dapat diverifikasi keasliannya dan dipajang di LinkedIn."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Top Notification Banner */}
        <div className="bg-seara-dark text-white py-2 px-4 border-b border-white/10 text-xs font-semibold">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-seara-orange"></span>
              </span>
              <span className="text-orange-300 font-bold uppercase tracking-wider text-[11px]">Sedang Berlangsung:</span>
              <span className="text-gray-200">Mini Course Tableau for Data Analytics & Interactive Dashboarding</span>
            </div>
            <a 
              href={CLICKY_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-seara-orange hover:text-orange-300 font-bold text-xs"
            >
              <span>Checkout di Clicky.id</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 1. HERO SECTION: ACTIVE MINI COURSE TABLEAU */}
        <section className="py-14 md:py-20 px-6 bg-gradient-to-b from-orange-50/80 via-white to-neutral-50 relative overflow-hidden border-b border-gray-100">
          <div className="absolute top-10 right-10 w-96 h-96 bg-seara-orange/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Course Details */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-7 space-y-6"
              >
                {/* Active Badge & Dates */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Pendaftaran Terbuka • Sedang Berlangsung</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 bg-orange-100/80 border border-orange-200 text-seara-orange px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>25 – 27 Sept</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-seara-orange font-display">
                    Mini Course Tableau
                  </span>
                  <h1 className="text-3xl sm:text-5xl md:text-5xl font-black text-seara-dark tracking-tight font-display leading-[1.15]">
                    Beginner to <br className="hidden sm:inline" />
                    <span className="text-seara-orange">Interactive Dashboard</span>
                  </h1>
                </div>

                {/* Learning Path / Roadmap */}
                <div className="bg-white p-3.5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                    Learning Roadmap:
                  </span>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                    <span className="bg-orange-50 text-seara-orange px-2.5 py-1 rounded-lg border border-orange-200">
                      1. Fundamentals
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    <span className="bg-amber-50 text-amber-700 px-2.5 py-1 rounded-lg border border-amber-200">
                      2. Data Analysis
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    <span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg border border-emerald-200">
                      3. Dashboard Development
                    </span>
                  </div>
                </div>

                {/* Final Goal Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/5 border border-orange-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-seara-orange text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-seara-dark uppercase tracking-wider block">
                      Tujuan Akhir Pelatihan
                    </span>
                    <p className="text-xs sm:text-sm text-gray-700 font-medium mt-0.5 leading-relaxed">
                      Peserta mampu membuat <strong>1 interactive dashboard</strong> di Tableau dari data mentah sampai <strong>publish ke Tableau Public</strong>.
                    </p>
                  </div>
                </div>

                {/* Key Points Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-orange-100 text-seara-orange flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-semibold text-seara-dark">
                      3 Sesi | 90–120 Menit/Sesi
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-orange-100 text-seara-orange flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-semibold text-seara-dark">
                      Calculated Fields & Filter Actions
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-orange-100 text-seara-orange flex items-center justify-center shrink-0">
                      <Video className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-semibold text-seara-dark">
                      Live Zoom + Lifetime Replay
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-orange-100 text-seara-orange flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-semibold text-seara-dark">
                      e-Certificate & Portofolio Ready
                    </div>
                  </div>
                </div>

                {/* Pricing & Checkout CTAs */}
                <div className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl border border-orange-200/80 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-bold text-gray-500 uppercase block">Investasi Belajar:</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-black text-seara-orange font-display">
                          Akses Spesial
                        </span>
                        <span className="text-xs text-gray-500">di Clicky.id</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-seara-orange text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                        Instant Checkout
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-nowrap gap-3 pt-2">
                    <a
                      href={CLICKY_CHECKOUT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 bg-seara-orange hover:bg-orange-600 text-white py-4 px-6 rounded-2xl font-bold text-sm sm:text-base text-center shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Daftar / Checkout di Clicky.id</span>
                    </a>

                    <a
                      href={WA_CONSULT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-white border border-gray-200 text-seara-dark hover:bg-orange-50 hover:border-orange-300 py-4 px-5 rounded-2xl font-bold text-sm text-center transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-seara-orange" />
                      <span>Tanya Admin</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Pembayaran Instan via QRIS, GoPay, OVO, Bank
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Akses Langsung Masuk Grup WA
                  </span>
                </div>
              </motion.div>

              {/* Right Column: Poster Image Preview */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-5"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-seara-orange to-amber-500 rounded-[32px] blur-lg opacity-25 group-hover:opacity-40 transition duration-500" />
                  
                  <div className="relative bg-white rounded-3xl p-3 border border-gray-200 shadow-xl overflow-hidden">
                    <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-square sm:aspect-auto">
                      <img 
                        src="/mini-course-tableau.png" 
                        alt="Poster Mini Course Tableau - Seara Data" 
                        className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-4 bg-white space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-seara-orange uppercase tracking-wider">
                          Poster Resmi Event
                        </span>
                        <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                          25 – 27 Sept
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">
                        Klik tombol di bawah untuk langsung mengamankan slot belajarmu sebelum kuota kelas terpenuhi.
                      </p>
                      <a
                        href={CLICKY_CHECKOUT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-seara-dark hover:bg-black text-white py-3 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-2 transition-all block shadow-sm"
                      >
                        <span>Checkout Sekarang (Clicky.id)</span>
                        <ArrowRight className="w-3.5 h-3.5 text-seara-orange" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 2. SYLLABUS & CURRICULUM BREAKDOWN */}
        <section className="py-16 px-6 max-w-5xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-seara-orange px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>Silabus & Materi • 3 Sesi</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-seara-dark font-display tracking-tight">
              Kurikulum Mini Course Tableau
            </h2>
            <p className="text-gray-500 text-sm">
              Alur belajar terstruktur: <strong>Fundamentals → Data Analysis → Dashboard Development</strong> (90–120 Menit per sesi).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tableauSessions.map((mod, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:border-orange-300 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-xl bg-orange-100 text-seara-orange flex items-center justify-center font-bold font-display text-xs">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-100">
                      {mod.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                      {mod.session}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-seara-dark font-display leading-snug mt-0.5">
                      {mod.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {mod.desc}
                  </p>
                  
                  <div className="pt-3 space-y-2 border-t border-gray-100">
                    {mod.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. FASILITAS & BENEFIT */}
        <section className="py-16 px-6 bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-100 px-3.5 py-1 rounded-full">
                Fasilitas Lengkap
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-seara-dark font-display tracking-tight">
                Benefit Ikut Mini Course Seara Data
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-neutral-50 p-6 rounded-3xl border border-gray-100 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-seara-orange flex items-center justify-center font-bold">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-seara-dark font-display">Akses Rekaman Selamanya</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Tidak perlu takut ketinggalan materi. Akses rekaman video HD dapat kamu putar ulang kapan saja dan di mana saja.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-3xl border border-gray-100 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                  <Download className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-seara-dark font-display">Dataset & Workbook Asli</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Dapatkan dataset bisnis nyata (.csv / .xlsx) serta file master project Tableau Workbook (.twbx) siap pakai.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-3xl border border-gray-100 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-seara-dark font-display">e-Sertifikat Resmi</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Sertifikat penyelesaian resmi dengan credential ID terverifikasi yang dapat kamu sematkan di LinkedIn.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-3xl border border-gray-100 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-seara-dark font-display">Grup Diskusi WhatsApp</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Bergabung langsung ke grup WA eksklusif peserta untuk diskusi kendala teknis dan networking bersama rekan sejawat.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-3xl border border-gray-100 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-seara-dark font-display">Portofolio Siap Kerja</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Hasil tugas akhir langsung dipublikasikan ke Tableau Public dan Vercel untuk menarik perhatian recruiter.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-3xl border border-gray-100 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-seara-dark font-display">Dibimbing Praktisi Aktif</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Mentor praktisi berpengalaman yang memahami kebutuhan standar industri saat ini (Bank Danamon, Dekoruma, dll).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. OTHER MINI COURSES / ARCHIVE */}
        <section className="py-16 px-6 max-w-5xl mx-auto space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
                Katalog Lengkap
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-seara-dark font-display mt-2">
                Mini Course & Workshop Lainnya
              </h3>
            </div>
            <a
              href={CLICKY_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-seara-orange hover:underline flex items-center gap-1"
            >
              <span>Jelajahi Semua di Clicky.id</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherCourses.map((c) => (
              <div 
                key={c.id}
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
                    <img 
                      src={c.image} 
                      alt={c.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 bg-seara-dark/80 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {c.tag}
                    </span>
                  </div>
                  <div className="p-6 space-y-2">
                    <h4 className="text-lg font-bold text-seara-dark font-display">
                      {c.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-orange-50 hover:bg-orange-100 text-seara-orange border border-orange-200 py-2.5 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors block"
                  >
                    <span>Akses Modul di Clicky.id</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. TESTIMONIALS */}
        <section className="py-16 px-6 bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
                Ulasan Peserta
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-seara-dark font-display tracking-tight">
                Pengalaman Belajar di Mini Course
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {miniCourseTestimonials.map((t, idx) => (
                <div 
                  key={idx}
                  className="bg-neutral-50 p-6 rounded-3xl border border-gray-100 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(10)].map((_, sIdx) => {
                          const isFilled = sIdx < t.rating;
                          return (
                            <Star 
                              key={sIdx} 
                              className={`w-3.5 h-3.5 ${
                                isFilled 
                                  ? "fill-[#FF4A3F] text-[#FF4A3F]" 
                                  : "fill-gray-200 text-gray-200"
                              }`} 
                            />
                          );
                        })}
                        <span className="text-xs font-black text-seara-dark ml-1">{t.rating}/10</span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100/80 text-seara-orange border border-orange-200">
                        {t.badge}
                      </span>
                    </div>

                    <p className="text-xs text-gray-700 italic leading-relaxed">
                      "{t.content}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-200/60">
                    <h5 className="text-xs font-bold text-seara-dark font-display">{t.name}</h5>
                    <p className="text-[11px] text-gray-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FAQ SECTION */}
        <section className="py-16 px-6 max-w-4xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
              FAQ Mini Course
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-seara-dark font-display tracking-tight">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 font-bold text-seara-dark text-sm sm:text-base font-display hover:text-seara-orange transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${isOpen ? "rotate-180 text-seara-orange" : ""}`} />
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

        {/* 7. FINAL CTA */}
        <section className="py-16 px-6 text-center bg-gradient-to-tr from-orange-600 via-seara-orange to-amber-500 text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight leading-tight">
              Mulai Bangun Dashboard Tableau Pertamamu
            </h2>

            <p className="text-orange-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Daftar sekarang melalui Clicky.id dan nikmati bimbingan praktis langsung dari praktisi industri.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href={CLICKY_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-seara-dark text-white px-8 py-4 rounded-2xl font-bold text-sm sm:text-base shadow-xl hover:bg-black transition-all flex items-center gap-2 active:scale-95"
              >
                <span>Checkout di Clicky.id</span>
                <ExternalLink className="w-4 h-4 text-seara-orange" />
              </a>

              <a
                href={WA_CONSULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-seara-dark px-7 py-4 rounded-2xl font-bold text-sm sm:text-base shadow-xl hover:bg-orange-50 transition-all flex items-center gap-2 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-seara-orange" />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
