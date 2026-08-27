import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  Sparkles, 
  ArrowRight, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  BookOpen, 
  Users, 
  Award, 
  Briefcase, 
  Code, 
  Database, 
  BarChart2, 
  ChevronDown, 
  ShieldCheck, 
  GraduationCap, 
  Clock, 
  Calendar, 
  Video, 
  MessageSquare, 
  Layers,
  UserCheck,
  Zap,
  Target,
  CreditCard,
  Check,
  Building2,
  Copy,
  CheckCheck
} from "lucide-react";

export default function FGSeara() {
  const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfHNIef1-k3DL2PE7V3LJvb2mfB9S9ub-GrYyRAnt5TYmCrxw/viewform";
  const DIRECT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfHNIef1-k3DL2PE7V3LJvb2mfB9S9ub-GrYyRAnt5TYmCrxw/viewform";
  const SYLLABUS_URL = "https://docs.google.com/document/d/1LKaBcIYusO5GcHQlH0cZzWJ0NzcGx9zc08AUug2t51w/edit?usp=sharing";

  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(REGISTRATION_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenRegistration = (e: React.MouseEvent) => {
    // Open in new tab explicitly to ensure reliable navigation in iframe/sandboxed environments
    window.open(REGISTRATION_URL, "_blank", "noopener,noreferrer");
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const [activePhaseTab, setActivePhaseTab] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const curriculumPhases = [
    {
      month: "Month 1",
      phase: "Foundation",
      focus: "Excel for Data Analysis, SQL Fundamentals, Career Foundation",
      desc: "Membangun pemahaman fundamental analisis data bisnis menggunakan Microsoft Excel tingkat lanjut dan penguasaan query database SQL dari nol.",
      sessions: [
        {
          sessionNum: 1,
          date: "1 September 2026",
          topic: "Welcoming Day & Program Onboarding",
          details: [
            "Pengenalan ekosistem Seara Data & alur belajar 3 bulan",
            "Pembentukan Accountability Group (5 orang/tim) & penunjukan Group Leader",
            "Setup tools & environment: Classroom, WhatsApp Group & Zoom Meeting",
            "Mindset Data Analyst: Memahami peranan data di dunia bisnis modern"
          ]
        },
        {
          sessionNum: 2,
          date: "11 September 2026",
          topic: "Excel for Data Analysis",
          details: [
            "Data Cleaning & Transformation: Mengatasi missing values, duplicate data & outliers",
            "Rumus Esensial: XLOOKUP, INDEX-MATCH, SUMIFS, COUNTIFS, Nested IF",
            "Pivot Tables, Calculated Fields, Dynamic Slicers & Timeline",
            "Session Assignment 1: Analisis data penjualan ritel multi-cabang"
          ]
        },
        {
          sessionNum: 3,
          date: "21 September 2026",
          topic: "SQL Fundamentals & Relational Database",
          details: [
            "Konsep Relational Database Management System (RDBMS) & PostgreSQL",
            "Querying Dasar: SELECT, WHERE, GROUP BY, HAVING, ORDER BY",
            "Relasi Multi-Tabel: INNER JOIN, LEFT JOIN, RIGHT JOIN & FULL JOIN",
            "Session Assignment 2: Ekstraksi metrik performa transaksi database e-commerce"
          ]
        }
      ]
    },
    {
      month: "Month 2",
      phase: "Build",
      focus: "Python for Data Analytics, Power BI Dashboard, Portfolio Development",
      desc: "Meningkatkan kemampuan komputasi dengan pemrograman Python, perancangan dashboard interaktif Power BI, serta penyusunan portofolio berbasis industri.",
      sessions: [
        {
          sessionNum: 4,
          date: "1 Oktober 2026",
          topic: "Python for Data Analytics",
          details: [
            "Fundamental Python untuk Data: Data structure (List, Dict), manipulasi data dengan Pandas & NumPy",
            "Exploratory Data Analysis (EDA): Pembersihan dataset, summary statistics, distribusi data",
            "Visualisasi Data dengan Matplotlib & Seaborn untuk insight bisnis",
            "Session Assignment 3: EDA & automasi data reporting dengan Python"
          ]
        },
        {
          sessionNum: 5,
          date: "11 Oktober 2026",
          topic: "Power BI Dashboard & Data Storytelling",
          details: [
            "Prinsip Data Storytelling & Dashboard UI/UX yang actionable bagi stakeholder",
            "Data Modeling & Star Schema (Fact Tables vs Dimension Tables)",
            "Kalkulasi DAX (Data Analysis Expressions): CALCULATE, RELATED, Time Intelligence (YoY, MoM)",
            "Session Assignment 4: Pembuatan Interactive Executive Dashboard di Power BI"
          ]
        },
        {
          sessionNum: 6,
          date: "21 Oktober 2026",
          topic: "Portfolio Development & Project Structuring",
          details: [
            "Strukturisasi portofolio data standar industri: Problem Statement, Metodologi, Insight, Rekomendasi",
            "Dokumentasi proyek di GitHub & pembuatan live dashboard link",
            "Penyusunan Executive Summary untuk pembaca non-teknis",
            "Session Assignment 5: Draft portofolio proyek terintegrasi"
          ]
        }
      ]
    },
    {
      month: "Month 3",
      phase: "Launch",
      focus: "CV & LinkedIn Optimization, Interview Preparation, Final Project & Career Strategy",
      desc: "Fase persiapan karir menyeluruh: Bedah CV ATS-Friendly, optimasi profil LinkedIn, simulasi interview rekrutmen, hingga presentasi Final Project.",
      sessions: [
        {
          sessionNum: 7,
          date: "1 November 2026",
          topic: "CV & LinkedIn Optimization",
          details: [
            "Penyusunan CV ATS-Friendly dengan standar rekrutmen korporat & tech company",
            "Penulisan Bullet Points berdampak tinggi (Action Verb + Context + Measurable Result)",
            "Optimasi LinkedIn Profile: Headline, Summary, Featured Portfolio, Search Keyword Strategy",
            "Session Assignment 6: Finalisasi CV ATS & Submission Link LinkedIn"
          ]
        },
        {
          sessionNum: 8,
          date: "11 November 2026",
          topic: "Interview Preparation & Technical Test Simulation",
          details: [
            "Struktur menjawab User Interview: Framework STAR (Situation, Task, Action, Result)",
            "Simulasi Technical Test SQL & Live Problem Solving Data",
            "Strategi negosiasi gaji & tips menghadapi pertanyaan 'Culture Fit' HR",
            "Live Mock Interview bersama mentor praktisi"
          ]
        },
        {
          sessionNum: 9,
          date: "21 November 2026",
          topic: "Final Project & Career Strategy",
          details: [
            "Presentasi Final Capstone Project di hadapan panel mentor",
            "Feedback komprehensif & evaluasi portofolio kelulusan",
            "Career roadmap: Strategi melamar kerja efektif, networking & referensi loker",
            "Awarding, Graduation & Penyerahan Certificate of Completion resmi"
          ]
        }
      ]
    }
  ];

  const learningMethods = [
    {
      num: "01",
      title: "Live Class",
      icon: Video,
      desc: "Sesi pembelajaran interaktif yang dipandu langsung oleh mentor melalui kombinasi penyampaian materi, demonstrasi live, studi kasus, serta diskusi sehingga peserta memperoleh pemahaman yang dapat langsung diterapkan."
    },
    {
      num: "02",
      title: "Session Assignment",
      icon: Layers,
      desc: "Setiap sesi akan diikuti dengan assignment berbasis studi kasus yang bertujuan untuk memperkuat pemahaman peserta terhadap materi. Assignment dirancang secara bertahap sehingga seluruh hasil pekerjaan dapat dikembangkan menjadi portfolio industri."
    },
    {
      num: "03",
      title: "Project-Based Learning",
      icon: Target,
      desc: "Peserta akan mengembangkan portfolio melalui proyek yang dikerjakan secara bertahap selama program berlangsung. Setiap proyek dirancang berdasarkan studi kasus yang merepresentasikan kebutuhan industri nyata."
    },
    {
      num: "04",
      title: "Accountability Group",
      icon: Users,
      desc: "Peserta dibagi ke dalam kelompok kecil yang terdiri dari 5 orang. Setiap kelompok dipimpin oleh Group Leader yang bertugas mengkoordinasikan diskusi, memantau progres pembelajaran, serta menjaga konsistensi seluruh anggota."
    },
    {
      num: "05",
      title: "Monthly Mentoring Ticket",
      icon: UserCheck,
      desc: "Setiap peserta memperoleh satu sesi mentoring pribadi setiap bulan (total 3 tiket) yang dapat dimanfaatkan untuk konsultasi teknis, review portfolio, review CV, optimasi LinkedIn, maupun persiapan interview."
    },
    {
      num: "06",
      title: "Career Support",
      icon: Briefcase,
      desc: "Peserta memperoleh pendampingan karier melalui penyusunan CV ATS-Friendly, optimasi profil LinkedIn, simulasi interview, strategi pencarian kerja, serta informasi lowongan pekerjaan yang relevan."
    }
  ];

  const learningOutcomes = [
    "Menggunakan Microsoft Excel untuk analisis data.",
    "Menulis query SQL untuk mengolah dan mengekstraksi data.",
    "Menggunakan Python untuk data cleaning dan data analysis.",
    "Membangun dashboard interaktif menggunakan Power BI.",
    "Menyusun portofolio berbasis proyek nyata yang representatif.",
    "Memiliki CV yang sudah berstandar ATS-Friendly.",
    "Memiliki LinkedIn Profile yang profesional dan teroptimasi.",
    "Memahami proses rekrutmen Data Analyst end-to-end.",
    "Siap percaya diri melamar pekerjaan sebagai Data Analyst."
  ];

  const faqs = [
    {
      q: "Apa itu program Seara Data Fresh Graduate Accelerator (FG Seara)?",
      a: "Seara Data Fresh Graduate Accelerator merupakan program akselerasi karier selama tiga bulan yang dirancang khusus untuk membantu fresh graduate dan mahasiswa tingkat akhir membangun kompetensi teknis (Excel, SQL, Python, Power BI), portofolio proyek nyata, serta kesiapan memasuki dunia kerja melalui mentoring dan career support."
    },
    {
      q: "Berapa lama durasi program dan kapan jadwal pembelajarannya?",
      a: "Program berdurasi 3 bulan dengan total 9 sesi pembelajaran (± 2 jam per sesi). Jadwal belajar diselenggarakan secara berkala setiap tanggal 1, 11, dan 21 setiap bulan melalui Zoom Meeting, Classroom, dan WhatsApp Group."
    },
    {
      q: "Siapa saja target peserta program ini?",
      a: "Program ini ditujukan bagi: (1) Fresh Graduate dari berbagai jurusan yang ingin berkarir di bidang data, (2) Mahasiswa Tingkat Akhir (Final Year Students) yang sedang mempersiapkan karir, dan (3) Junior Data Professional yang ingin memperkuat fundamental Data Analytics."
    },
    {
      q: "Berapa kuota peserta dalam satu batch?",
      a: "Untuk menjaga kualitas pembelajaran dan efektivitas mentoring 1-on-1, setiap batch dibatasi maksimal 30 peserta (dibagi menjadi 6 Accountability Groups @ 5 peserta)."
    },
    {
      q: "Bagaimana opsi investasi dan metode pembayaran program?",
      a: "Tersedia 2 opsi pembayaran: Option 1 — Pay in Full sebesar Rp250.000 (pembayaran satu kali di awal untuk 3 bulan penuh), atau Option 2 — Monthly Payment sebesar Rp90.000/bulan selama 3 bulan (total Rp270.000)."
    },
    {
      q: "Apa yang dimaksud dengan Monthly Mentoring Ticket?",
      a: "Setiap peserta mendapatkan 1 tiket mentoring 1-on-1 pribadi setiap bulan (total 3 tiket selama program). Tiket ini bebas digunakan untuk sesi konsultasi privat membahas kendala teknis, bedah portofolio, review CV ATS, atau simulasi interview bersama mentor praktisi."
    },
    {
      q: "Di mana saya bisa melihat dokumen silabus lengkap dan mendaftar?",
      a: "Dokumen silabus resmi dapat diakses di https://docs.google.com/document/d/1LKaBcIYusO5GcHQlH0cZzWJ0NzcGx9zc08AUug2t51w/edit?usp=sharing dan pendaftaran dilakukan secara online melalui https://s.id/FGSeara"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50/50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="bg-gradient-to-b from-orange-50/90 via-white to-neutral-50/50 py-16 md:py-24 px-6 border-b border-gray-100 relative overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-seara-orange/10 blur-[130px] pointer-events-none rounded-full" />

          <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
            {/* Top Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-orange-100 text-seara-orange px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Seara Data • Fresh Graduate Accelerator</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-seara-dark tracking-tight font-display leading-[1.1]"
            >
              Become a <span className="text-seara-orange">Job-Ready Data Analyst</span> <br className="hidden sm:inline" />
              in 3 Months
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Program akselerasi karier selama <strong>3 bulan</strong> yang dirancang untuk membantu <strong>fresh graduate</strong> & <strong>final year students</strong> membangun kompetensi teknis, portofolio nyata, serta kesiapan memasuki dunia kerja sebagai Data Analyst.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center items-center gap-4 pt-4"
            >
              {/* Primary Registration Button */}
              <a 
                href={REGISTRATION_URL}
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleOpenRegistration}
                className="bg-seara-orange text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl shadow-orange-500/20 hover:brightness-95 hover:-translate-y-0.5 transition-all flex items-center gap-2.5 active:scale-95 group cursor-pointer"
              >
                <span>Daftar Sekarang (s.id/FGSeara)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Syllabus Google Docs Button */}
              <a 
                href={SYLLABUS_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-seara-dark border-2 border-gray-200 px-7 py-4 rounded-2xl font-bold text-base shadow-sm hover:bg-orange-50/50 hover:border-seara-orange hover:text-seara-orange transition-all flex items-center gap-2.5 active:scale-95 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-seara-orange" />
                <span>Dokumen Silabus Resmi (Docs)</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </a>

              {/* Quick Copy Link Button */}
              <button
                type="button"
                onClick={handleCopyLink}
                className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-4 rounded-2xl font-semibold text-xs transition-all flex items-center gap-2 active:scale-95"
                title="Salin tautan formulir pendaftaran"
              >
                {copied ? <CheckCheck className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-gray-500" />}
                <span>{copied ? "Link Tersalin!" : "Salin Link"}</span>
              </button>
            </motion.div>

            {/* Direct Form Backup Link notice */}
            <div className="text-xs text-gray-500 pt-1">
              <span>Link Pendaftaran: </span>
              <a 
                href={REGISTRATION_URL}
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleOpenRegistration}
                className="text-seara-orange font-bold hover:underline"
              >
                https://s.id/FGSeara
              </a>
              <span className="mx-2 text-gray-300">•</span>
              <a 
                href={DIRECT_FORM_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-seara-orange underline text-[11px]"
              >
                (Alternatif Link Google Form)
              </a>
            </div>

            {/* Program Quick Specs Table */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-6 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 text-left"
            >
              <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">DURASI PROGRAM</span>
                <span className="text-sm font-extrabold text-seara-dark mt-1 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-seara-orange" /> 3 Bulan (9 Sesi)
                </span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">JADWAL KELAS</span>
                <span className="text-sm font-extrabold text-seara-dark mt-1 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-seara-orange" /> Tgl 1, 11 & 21
                </span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">KUOTA PER BATCH</span>
                <span className="text-sm font-extrabold text-seara-dark mt-1 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-seara-orange" /> Maks. 30 Peserta
                </span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">SKEMA INVESTASI</span>
                <span className="text-sm font-extrabold text-seara-orange mt-1 flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4" /> Mulai Rp90.000/bln
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. PROGRAM OVERVIEW & OBJECTIVES */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-100 px-3.5 py-1 rounded-full">
                Program Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-seara-dark font-display tracking-tight leading-tight">
                Membantu Fresh Graduate Menembus Karir Impian di Dunia Data
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Seara Data Fresh Graduate Accelerator mengkombinasikan pembelajaran teknis, studi kasus berbasis industri, mentoring personal, dan career support dalam satu kurikulum yang terstruktur. Peserta tidak hanya diajarkan mengoperasikan tools, tetapi juga mampu menerapkannya untuk menyelesaikan permasalahan bisnis yang nyata.
              </p>

              {/* Target Participants */}
              <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-3">
                <span className="text-xs font-bold text-seara-orange uppercase tracking-wider block">Target Peserta Program:</span>
                <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>Fresh Graduate</strong> dari berbagai jurusan yang ingin berkarier di bidang data.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>Final Year Students</strong> (Mahasiswa Tingkat Akhir) yang mempersiapkan portofolio kerja.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>Junior Data Professional</strong> yang ingin memperkuat fundamental Data Analytics.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Objectives & Benefits Card */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-gradient-to-br from-seara-dark to-neutral-900 text-white p-8 rounded-3xl border border-white/10 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold text-seara-orange uppercase tracking-wider">Program Objectives</span>
                  <h3 className="text-2xl font-bold font-display mt-1">Tujuan Pembelajaran</h3>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <span className="text-seara-orange font-bold mt-0.5">1.</span>
                    <span>Membekali peserta dengan fundamental Data Analytics yang kuat.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-seara-orange font-bold mt-0.5">2.</span>
                    <span>Mengembangkan kemampuan menggunakan <strong>Microsoft Excel, SQL, Python, dan Power BI</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-seara-orange font-bold mt-0.5">3.</span>
                    <span>Membimbing peserta dalam membangun portofolio berbasis studi kasus industri nyata.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-seara-orange font-bold mt-0.5">4.</span>
                    <span>Mempersiapkan proses rekrutmen melalui CV ATS, LinkedIn Optimization, dan Interview Preparation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-seara-orange font-bold mt-0.5">5.</span>
                    <span>Meningkatkan kesiapan memasuki dunia kerja melalui mentoring dan career support berkelanjutan.</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-400">Penyelenggara:</span>
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-seara-orange" /> PT. Que Seara Data
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CURRICULUM OVERVIEW & SCHEDULE (PER BATCH) */}
        <section className="py-20 px-6 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-100 px-3.5 py-1 rounded-full">
                Kurikulum & Jadwal
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-seara-dark font-display tracking-tight">
                Curriculum Overview (3 Months & 9 Sessions)
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                FG Seara (per Batch): September to November 2026 • Setiap tanggal 1, 11, dan 21 via Zoom Meeting (± 2 Jam/sesi).
              </p>

              <div className="pt-2">
                <a 
                  href={SYLLABUS_URL}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-seara-orange bg-orange-50 hover:bg-orange-100 border border-orange-200 px-4 py-2 rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Buka Silabus Lengkap di Google Docs</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phase Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {curriculumPhases.map((phase, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhaseTab(idx)}
                  className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${
                    activePhaseTab === idx 
                      ? "bg-seara-orange text-white shadow-md shadow-orange-500/20" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span>{phase.month}: {phase.phase}</span>
                </button>
              ))}
            </div>

            {/* Active Phase Details */}
            <div className="bg-neutral-50 p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
              <div className="mb-8 pb-6 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-seara-orange text-white">
                      {curriculumPhases[activePhaseTab].month} — {curriculumPhases[activePhaseTab].phase}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-seara-dark font-display mt-2">
                    Fokus: {curriculumPhases[activePhaseTab].focus}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-3xl">
                    {curriculumPhases[activePhaseTab].desc}
                  </p>
                </div>
              </div>

              {/* Sessions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {curriculumPhases[activePhaseTab].sessions.map((session, sIdx) => (
                  <div 
                    key={sIdx}
                    className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-orange-300 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-seara-orange bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-100">
                          Sesi {session.sessionNum}
                        </span>
                        <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-gray-400" /> {session.date}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-seara-dark font-display">
                        {session.topic}
                      </h4>

                      <ul className="space-y-2 text-xs text-gray-600">
                        {session.details.map((d, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="text-seara-orange font-bold">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-3 border-t border-gray-100 text-[11px] text-gray-400 flex items-center justify-between">
                      <span>Platform: Zoom & Classroom</span>
                      <span className="font-semibold text-seara-orange">± 2 Jam</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. 6 METODE PEMBELAJARAN (LEARNING METHODS) */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-100 px-3.5 py-1 rounded-full">
              Learning Methods
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-seara-dark font-display tracking-tight">
              6 Metode Pembelajaran Terstruktur
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Dirancang untuk memastikan setiap peserta benar-benar memahami konsep dan konsisten sampai lulus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningMethods.map((m, idx) => {
              const IconComp = m.icon;
              return (
                <motion.div 
                  key={idx}
                  {...fadeIn}
                  className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-orange-100 text-seara-orange flex items-center justify-center">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black text-gray-200 font-display">
                        {m.num}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-seara-dark font-display">
                      {m.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 5. LEARNING OUTCOMES & PARTICIPANT QUOTA */}
        <section className="py-20 px-6 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Learning Outcomes Checklist */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-100 px-3.5 py-1 rounded-full">
                  Learning Outcomes
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-seara-dark font-display tracking-tight">
                  Kompetensi yang Akan Kamu Kuasai
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Setelah menyelesaikan seluruh rangkaian program dan Capstone Project, peserta diharapkan mampu:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {learningOutcomes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-neutral-50 p-3.5 rounded-2xl border border-gray-100 text-xs text-gray-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quota & Accountability Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-gradient-to-b from-orange-50 to-amber-50/60 p-8 rounded-3xl border-2 border-seara-orange/40 shadow-md space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-seara-orange text-white">
                      Participant Quota
                    </span>
                    <span className="text-xs font-bold text-seara-orange">per Batch</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-seara-dark font-display">
                      Eksklusif & Terbatas
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Untuk menjaga kualitas pembelajaran dan efektivitas mentoring 1-on-1, setiap batch dibatasi maksimal 30 peserta agar pendampingan berlangsung optimal.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 text-xs">
                    <div className="bg-white p-3.5 rounded-xl border border-orange-100 flex items-center justify-between">
                      <span className="text-gray-600 font-semibold">Maksimal Peserta:</span>
                      <span className="font-extrabold text-seara-dark">30 Participants</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-orange-100 flex items-center justify-between">
                      <span className="text-gray-600 font-semibold">Accountability Groups:</span>
                      <span className="font-extrabold text-seara-dark">6 Groups</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-orange-100 flex items-center justify-between">
                      <span className="text-gray-600 font-semibold">Peserta per Group:</span>
                      <span className="font-extrabold text-seara-dark">5 Participants</span>
                    </div>
                  </div>

                  <a 
                    href={REGISTRATION_URL}
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleOpenRegistration}
                    className="w-full bg-seara-orange text-white py-3.5 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-2 hover:brightness-105 transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Daftar & Amankan Slot (s.id/FGSeara)</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PROGRAM INVESTMENT & PRICING OPTIONS */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-100 px-3.5 py-1 rounded-full">
              Program Investment
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-seara-dark font-display tracking-tight">
              Investasi Terjangkau untuk Karir Jangka Panjang
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Pilih metode pembayaran yang paling fleksibel dan nyaman untukmu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Option 1: Pay in Full */}
            <motion.div 
              {...fadeIn}
              className="bg-white p-8 sm:p-10 rounded-3xl border-2 border-seara-orange shadow-lg relative flex flex-col justify-between space-y-8"
            >
              <div className="absolute -top-3.5 right-8 bg-seara-orange text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-sm">
                Paling Hemat & Populer
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">OPTION 1</span>
                <h3 className="text-2xl font-bold text-seara-dark font-display">Pay in Full</h3>
                <div className="pt-2">
                  <span className="text-4xl sm:text-5xl font-black text-seara-dark font-display">Rp250.000</span>
                  <span className="text-xs text-gray-500 block mt-1">Pembayaran satu kali di awal untuk 3 bulan penuh</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pt-2">
                  Akses penuh selama 3 bulan program tanpa biaya bulanan tambahan. Termasuk 9 live class, project review, dan 3 tiket mentoring 1-on-1.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="text-xs font-bold text-seara-dark uppercase tracking-wider">Yang Didapatkan:</div>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>9 Live Classes via Zoom (± 2 Jam/sesi)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>3 Monthly Mentoring Tickets (1-on-1 Private)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Accountability Group (5 orang/tim)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Career Support, CV Review ATS & Mock Interview</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Certificate of Completion Resmi Seara Data</span>
                  </li>
                </ul>
              </div>

              <a 
                href={REGISTRATION_URL}
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleOpenRegistration}
                className="w-full bg-seara-orange text-white py-4 rounded-2xl font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md hover:brightness-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Pilih Pay in Full (Rp250k)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Option 2: Monthly Payment */}
            <motion.div 
              {...fadeIn}
              className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm hover:border-gray-300 transition-all flex flex-col justify-between space-y-8"
            >
              <div className="space-y-4">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">OPTION 2</span>
                <h3 className="text-2xl font-bold text-seara-dark font-display">Monthly Payment</h3>
                <div className="pt-2">
                  <span className="text-4xl sm:text-5xl font-black text-seara-dark font-display">Rp90.000</span>
                  <span className="text-xs text-gray-500 block mt-1">per bulan (selama 3 bulan • total Rp270.000)</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pt-2">
                  Skema cicilan per bulan yang ringan dan ramah di kantong fresh graduate maupun mahasiswa tingkat akhir.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="text-xs font-bold text-seara-dark uppercase tracking-wider">Yang Didapatkan:</div>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>9 Live Classes via Zoom (± 2 Jam/sesi)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>3 Monthly Mentoring Tickets (1-on-1 Private)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Accountability Group (5 orang/tim)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Career Support, CV Review ATS & Mock Interview</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Certificate of Completion Resmi Seara Data</span>
                  </li>
                </ul>
              </div>

              <a 
                href={REGISTRATION_URL}
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleOpenRegistration}
                className="w-full bg-seara-dark hover:bg-black text-white py-4 rounded-2xl font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <span>Pilih Cicilan (Rp90k/bln)</span>
                <ArrowRight className="w-4 h-4 text-seara-orange" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* 7. STEP-BY-STEP ALUR PENDAFTARAN */}
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-100 px-3.5 py-1 rounded-full">
                Langkah Bergabung
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-seara-dark font-display tracking-tight">
                Alur Pendaftaran FG Seara
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Proses pendaftaran mudah, cepat, dan transparan dalam 4 langkah terarah.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-neutral-50 p-6 rounded-3xl border border-gray-200 shadow-sm relative">
                <span className="text-3xl font-black text-orange-300 font-display block mb-2">01</span>
                <h3 className="text-base font-bold text-seara-dark font-display mb-1.5">Buka Form Pendaftaran</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Kunjungi link resmi <strong>https://s.id/FGSeara</strong> untuk mengakses formulir pendaftaran.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-3xl border border-gray-200 shadow-sm relative">
                <span className="text-3xl font-black text-orange-300 font-display block mb-2">02</span>
                <h3 className="text-base font-bold text-seara-dark font-display mb-1.5">Isi Data & Background</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Lengkapi nama, jurusan, tahun kelulusan, serta preferensi opsi pembayaran (Full / Bulanan).
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-3xl border border-gray-200 shadow-sm relative">
                <span className="text-3xl font-black text-orange-300 font-display block mb-2">03</span>
                <h3 className="text-base font-bold text-seara-dark font-display mb-1.5">Proses Screening</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Tim Seara Data akan melakukan screening data, profil, dan kesiapan peserta sebelum konfirmasi akhir.
                </p>
              </div>

              <div className="bg-orange-50/50 p-6 rounded-3xl border-2 border-seara-orange shadow-md relative">
                <span className="text-3xl font-black text-seara-orange font-display block mb-2">04</span>
                <h3 className="text-base font-bold text-seara-dark font-display mb-1.5">Onboarding</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Masuk ke grup WhatsApp & Classroom eksklusif, ikuti Welcoming Day, dan mulai perjalanan akselerasimu.
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-12 text-center space-y-4">
              <a 
                href={REGISTRATION_URL}
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleOpenRegistration}
                className="inline-flex items-center gap-2.5 bg-seara-orange text-white px-9 py-4 rounded-2xl font-bold text-base shadow-xl shadow-orange-500/20 hover:brightness-95 active:scale-95 transition-all cursor-pointer"
              >
                <span>Isi Formulir Pendaftaran (https://s.id/FGSeara)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-gray-400 font-medium">Kuota peserta dibatasi maksimal 30 orang per batch.</p>
            </div>
          </div>
        </section>

        {/* 8. FAQ ACCORDION SECTION */}
        <section className="py-20 px-6 max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-100 px-3.5 py-1 rounded-full">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-seara-dark font-display tracking-tight">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-gray-600 text-sm">
              Temukan jawaban cepat seputar program Fresh Graduate Accelerator (FG Seara).
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div 
                  key={i}
                  className={`rounded-2xl border transition-all overflow-hidden ${isOpen ? "border-seara-orange bg-orange-50/20" : "border-gray-200 bg-white"}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-seara-dark text-sm sm:text-base font-display"
                  >
                    <span>{f.q}</span>
                    <ChevronDown className={`w-4 h-4 text-seara-orange shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-orange-100/60 pt-3">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 9. FINAL CALL TO ACTION */}
        <section className="py-20 px-6 text-center bg-gradient-to-tr from-orange-600 via-seara-orange to-amber-500 text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10 space-y-6">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>Amankan Kursi Akselerasimu</span>
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight leading-tight">
              Siap Melangkah Menjadi Talenta Data Profesional?
            </h2>

            <p className="text-orange-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Dapatkan bimbingan intensif 3 bulan, bangun portofolio berbasis industri nyata, dan persiapkan karir datamu bersama Seara Data.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
              <a 
                href={REGISTRATION_URL}
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleOpenRegistration}
                className="bg-seara-dark text-white px-8 py-4 rounded-2xl font-bold text-base shadow-2xl hover:bg-black transition-all flex items-center gap-2.5 active:scale-95 group cursor-pointer"
              >
                <span>Daftar FG Seara (https://s.id/FGSeara)</span>
                <ArrowRight className="w-4 h-4 text-seara-orange group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href={SYLLABUS_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-seara-dark px-7 py-4 rounded-2xl font-bold text-base shadow-xl hover:bg-orange-50 transition-all flex items-center gap-2.5 active:scale-95 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-seara-orange" />
                <span>Lihat Dokumen Silabus</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </a>
            </div>

            <div className="pt-4 space-y-1 text-xs text-orange-100">
              <p>PT. Que Seara Data • Email: searadata@gmail.com</p>
              <a 
                href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea,%20saya%20ingin%20tanya%20seputar%20pendaftaran%20program%20FG%20Seara!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-white inline-flex items-center gap-1.5 font-medium"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Admin Rea (+62 878-1185-6600)</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
