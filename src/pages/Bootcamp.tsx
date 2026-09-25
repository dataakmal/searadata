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
  Code2,
  Database,
  BarChart3,
  FileSpreadsheet,
  Layers,
  ArrowUpRight,
  Users,
  ExternalLink,
  ChevronRight,
  FileText,
  Briefcase,
  Star,
  Zap,
  TrendingUp,
  X,
  MessageSquare,
  Instagram,
  Building2,
  Quote,
  Award
} from "lucide-react";

// Types
interface BatchMentor {
  name: string;
  role: string;
  photo?: string;
}

interface BatchScheduleItem {
  session: string;
  date: string;
  time: string;
  topic: string;
  tool?: string;
}

interface BatchDetail {
  id: string;
  batchNumber: string;
  label: string;
  title: string;
  duration: string;
  date?: string;
  description: string;
  highlight: string;
  skills: string[];
  posterImage: string;
  scheduleImage?: string;
  sessionsCount?: string;
  hoursCount?: string;
  curriculumOverview: string[];
  keyOutcomes: string[];
  isComingSoon?: boolean;
  isLive?: boolean;
  pricePromo?: string;
  priceNormal?: string;
  mentors?: BatchMentor[];
  schedule?: BatchScheduleItem[];
  registrationUrl?: string;
}

export default function Bootcamp() {
  const [selectedBatch, setSelectedBatch] = useState<BatchDetail | null>(null);
  const [activeTool, setActiveTool] = useState<"excel" | "powerbi" | "python" | "sql">("excel");
  const [activeTestiFilter, setActiveTestiFilter] = useState<"all" | "tools" | "analytical" | "mentor" | "career">("all");
  const [batch3VisualTab, setBatch3VisualTab] = useState<"poster" | "jadwal">("poster");
  const [heroVisualTab, setHeroVisualTab] = useState<"poster" | "jadwal">("poster");
  const [modalTab, setModalTab] = useState<"poster" | "jadwal" | "kurikulum">("poster");
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  const CLICKY_LINK = "https://clicky.id/searadata";

  const batches: BatchDetail[] = [
    {
      id: "batch-1",
      batchNumber: "Batch 1",
      label: "BATCH 1 · COMPLETED",
      title: "Batch 1",
      duration: "3 Weeks Intensive Bootcamp",
      date: "May – June 2026",
      description:
        "Batch 1 was the beginning of Seara Data's Data Analyst Bootcamp journey. Participants learned the fundamental tools used by Data Analysts and applied their knowledge through practical exercises and projects.",
      highlight: "Building the fundamentals.",
      skills: ["Excel", "Power BI", "Python", "SQL"],
      posterImage: "/bootcamp-data-analyst.png",
      sessionsCount: "6 Live Sessions",
      hoursCount: "15+ Hours Live Mentoring",
      curriculumOverview: [
        "Fundamental Spreadsheet & Data Cleaning in Excel",
        "Visualizing business metrics with Power BI",
        "Core Python scripting & Pandas introduction",
        "Basic & intermediate database querying with SQL",
        "Hands-on practice case studies",
      ],
      keyOutcomes: [
        "Solid mastery of 4 core data tools",
        "First data analytics portfolio projects",
        "Over 100+ active learners graduated",
      ],
    },
    {
      id: "batch-2",
      batchNumber: "Batch 2",
      label: "BATCH 2 · COMPLETED",
      title: "Batch 2",
      duration: "4 Weeks Intensive · 8 Sessions · 20+ Hours",
      date: "29 July – 22 August 2026",
      description:
        "Program 4 minggu intensif yang menggabungkan technical training, business case studies, hands-on practice, dan portfolio development secara komprehensif.",
      highlight: "Format intensif 4 minggu, 8 sesi & 4 tools data utama.",
      skills: ["Excel", "Power BI", "Python", "SQL"],
      posterImage: "/bootcamp-data-analyst-batch2.png",
      sessionsCount: "8 Live Sessions",
      hoursCount: "20+ Hours Comprehensive Training",
      curriculumOverview: [
        "Advanced Excel, Power Query & Pivot Modeling",
        "Power BI DAX, Star Schema & Interactive KPI Reporting",
        "Python Data Wrangling, Automation & Exploratory Analysis",
        "Advanced SQL: Multi-table JOIN, Subqueries & Aggregations",
        "End-to-End Capstone Project & Portfolio Consultation",
      ],
      keyOutcomes: [
        "Comprehensive 4-tool end-to-end portfolio",
        "Real-world business case study problem solving",
        "1-on-1 feedback on final project deliverables",
      ],
    },
    {
      id: "batch-3",
      batchNumber: "Batch 3",
      label: "LIVE NOW • OPEN REGISTRATION",
      title: "Batch 3",
      duration: "4 Weeks Intensive · 8 Sessions · 20+ Hours",
      date: "28 Oct – 21 Nov 2026",
      description:
        "Batch 3 resmi dibuka! Program intensif 4 minggu (8 live sessions, 20+ jam) mencakup Excel, Power BI, Python, dan SQL dengan bimbingan langsung praktisi industri terkemuka, studi kasus bisnis riil, dan pembuatan portofolio profesional.",
      highlight: "28 Oct – 21 Nov 2026 · Promo Rp 329.000 (Normal Rp 699.000) · 8 Live Sessions",
      skills: ["Excel", "Power BI", "Python", "SQL"],
      posterImage: "/bootcamp-data-analyst-batch3.png",
      scheduleImage: "/bootcamp-data-analyst-batch3-jadwal.png",
      sessionsCount: "8 Live Sessions",
      hoursCount: "20+ Hours Comprehensive Training",
      isLive: true,
      pricePromo: "Rp 329.000",
      priceNormal: "Rp 699.000",
      registrationUrl: CLICKY_LINK,
      mentors: [
        {
          name: "Zahrul Wafi",
          role: "Business Data Analyst at Bank Danamon",
          photo: "/zahrulwafi.jpeg"
        },
        {
          name: "Achmad Kurniansyah",
          role: "Business Intelligence at Dekoruma",
          photo: "/achmadkurniansyah.jpeg"
        }
      ],
      schedule: [
        { session: "Sesi 1", date: "28 OCT", time: "19.30 – 22.00 WIB", topic: "Excel Basic for Data Analysts & Become a Data Analyst", tool: "Excel" },
        { session: "Sesi 2", date: "31 OCT", time: "09.30 – 12.00 WIB", topic: "Excel Intermediate & Power Query", tool: "Excel" },
        { session: "Sesi 3", date: "4 NOV", time: "19.30 – 22.00 WIB", topic: "Power BI Basic, DAX & Data Calculation", tool: "Power BI" },
        { session: "Sesi 4", date: "7 NOV", time: "09.30 – 12.00 WIB", topic: "Power BI Advanced & Data Visualization", tool: "Power BI" },
        { session: "Sesi 5", date: "11 NOV", time: "19.30 – 22.00 WIB", topic: "Python Basic & Data Cleaning & Formatting", tool: "Python" },
        { session: "Sesi 6", date: "14 NOV", time: "09.30 – 12.00 WIB", topic: "Python Advanced & Data Transformation", tool: "Python" },
        { session: "Sesi 7", date: "18 NOV", time: "19.30 – 22.00 WIB", topic: "SQL Basic, Query & Filter Data", tool: "SQL" },
        { session: "Sesi 8", date: "21 NOV", time: "09.30 – 12.00 WIB", topic: "SQL Intermediate, Join & Aggregation & Subquery", tool: "SQL" }
      ],
      curriculumOverview: [
        "Sesi 1 (28 Oct): Become a Data Analyst & Microsoft Excel Basic",
        "Sesi 2 (31 Oct): Microsoft Excel Intermediate & Power Query",
        "Sesi 3 (4 Nov): Microsoft Power BI Basic, DAX & Data Calculation",
        "Sesi 4 (7 Nov): Microsoft Power BI Advanced & Data Visualization",
        "Sesi 5 (11 Nov): Python Basic & Data Cleaning & Formatting",
        "Sesi 6 (14 Nov): Python Advanced & Data Transformation",
        "Sesi 7 (18 Nov): SQL Basic, Query & Filter Data",
        "Sesi 8 (21 Nov): SQL Intermediate, Join & Aggregation & Subquery",
      ],
      keyOutcomes: [
        "Kuasai 4 tools utama industri data: Excel, Power BI, Python, SQL",
        "8 sesi live bimbingan interaktif & rekaman lifetime access",
        "Bimbingan langsung dari praktisi Bank Danamon & Dekoruma",
        "Studi kasus nyata & portofolio akhir siap pamer di LinkedIn/CV",
        "Harga Promo Rp 329k (Hemat dari harga normal Rp 699k)",
      ],
    },
  ];

  const toolsData = [
    {
      id: "excel",
      name: "Excel",
      category: "Understand & Prepare Data",
      icon: FileSpreadsheet,
      badge: "Spreadsheet & Modeling",
      topics: ["Excel Basic", "Excel Intermediate", "Power Query"],
      output: "Clean dataset ready for analysis.",
      color: "from-emerald-500/10 to-emerald-500/5",
      accentColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      description:
        "Master the foundational spreadsheet tool trusted across every industry. Learn formula mastery, structured data cleaning, and automated ETL pipelines with Power Query.",
      keyFeatures: [
        "VLOOKUP, XLOOKUP, INDEX-MATCH & Logical Functions",
        "Data Validation, Conditional Formatting & Dynamic Arrays",
        "Power Query ETL to automate repetitive data import & transforms",
        "Pivot Tables & Pivot Charts for quick exploratory aggregation",
      ],
    },
    {
      id: "powerbi",
      name: "Power BI",
      category: "Analyze & Visualize Data",
      icon: BarChart3,
      badge: "Business Intelligence",
      topics: [
        "Power BI Basic",
        "DAX & Data Calculation",
        "Power BI Advanced",
        "Visualization & Interactive Report",
      ],
      output: "Interactive dashboards and business insights.",
      color: "from-amber-500/10 to-amber-500/5",
      accentColor: "text-amber-600 bg-amber-50 border-amber-200",
      description:
        "Transform raw numbers into compelling, interactive executive dashboards. Model relational data, author custom DAX measures, and present clear business narratives.",
      keyFeatures: [
        "Star Schema data modeling & relationship management",
        "DAX measures: CALCULATE, FILTER, RELATED, Time Intelligence",
        "Interactive cross-filtering, bookmarks, & drill-through pages",
        "Executive KPI scorecards with clean visual UX",
      ],
    },
    {
      id: "python",
      name: "Python",
      category: "Transform & Automate Data",
      icon: Code2,
      badge: "Data Science & Automation",
      topics: [
        "Python Basic",
        "Data Cleaning & Formatting",
        "Python Advanced",
        "Data Transformation",
      ],
      output: "Processed data and efficient workflows.",
      color: "from-blue-500/10 to-blue-500/5",
      accentColor: "text-blue-600 bg-blue-50 border-blue-200",
      description:
        "Harness Python and Pandas to manipulate datasets too large or complex for standard spreadsheets. Write reproducible scripts that automate your analysis from end to end.",
      keyFeatures: [
        "Python data structures, loops, functions, and logic",
        "Pandas DataFrame wrangling, filtering, grouping, and merging",
        "Handling missing data, outliers, and type conversions",
        "Exploratory Data Analysis (EDA) with clear statistical summaries",
      ],
    },
    {
      id: "sql",
      name: "SQL",
      category: "Query & Extract Insights",
      icon: Database,
      badge: "Database Querying",
      topics: [
        "SQL Basic",
        "Query & Filter Data",
        "SQL Intermediate",
        "JOIN",
        "Aggregation",
        "Subquery",
      ],
      output: "Insights extracted directly from databases.",
      color: "from-violet-500/10 to-violet-500/5",
      accentColor: "text-violet-600 bg-violet-50 border-violet-200",
      description:
        "The universal language of data. Learn how to write performant queries to filter, aggregate, and extract actionable answers directly from relational databases.",
      keyFeatures: [
        "SELECT, WHERE, ORDER BY, GROUP BY, and HAVING filtering",
        "Multi-table relational JOINs (INNER, LEFT, RIGHT, FULL)",
        "Aggregations, conditional CASE WHEN, and Subqueries",
        "Calculating business retention, cohorts, and revenue metrics",
      ],
    },
  ];

  const steps = [
    {
      num: "01",
      step: "CLEAN",
      label: "Prepare and clean raw data.",
      desc: "Raw business data is rarely clean. Learn how to identify anomalies, handle missing records, and structure unorganized tables into pristine datasets ready for deep analysis.",
      icon: Layers,
    },
    {
      num: "02",
      step: "ANALYZE",
      label: "Discover patterns, trends, and insights.",
      desc: "Go beyond surface numbers. Apply statistical thinking and domain logic to uncover why trends are happening, where bottlenecks exist, and what growth opportunities lie ahead.",
      icon: TrendingUp,
    },
    {
      num: "03",
      step: "VISUALIZE",
      label: "Turn analysis into clear dashboards.",
      desc: "Design intuitive, stakeholder-friendly dashboards that tell a coherent visual story. Guide decision-makers straight to the metrics that matter most.",
      icon: BarChart3,
    },
    {
      num: "04",
      step: "COMMUNICATE",
      label: "Present insights that support better decisions.",
      desc: "A great analysis is useless if nobody acts on it. Learn how to translate technical metrics into executive summaries and actionable strategic recommendations.",
      icon: Zap,
    },
  ];

  const portfolioItems = [
    {
      title: "Excel Business Analysis",
      category: "Spreadsheet & Power Query",
      desc: "Sales revenue cleanup model with automated Power Query pipeline and dynamic executive pivot summaries.",
      icon: FileSpreadsheet,
      tag: "Excel Model",
    },
    {
      title: "Executive Power BI Dashboard",
      category: "Business Intelligence",
      desc: "Multi-page interactive report tracking company KPIs, customer acquisition costs, and cohort margins.",
      icon: BarChart3,
      tag: "Power BI Report",
    },
    {
      title: "Automated Python Workflow",
      category: "Data Wrangling & EDA",
      desc: "Reproducible Python script performing data cleansing, exploratory distributions, and automated CSV reports.",
      icon: Code2,
      tag: "Python Script",
    },
    {
      title: "SQL Customer Query Suite",
      category: "Database Analytics",
      desc: "Complex relational queries calculating monthly active users, repeat purchase rates, and customer lifetime value.",
      icon: Database,
      tag: "SQL Queries",
    },
    {
      title: "End-to-End Capstone Project",
      category: "Comprehensive Portfolio",
      desc: "Complete business case study integrating all four tools into a publication-ready portfolio case study.",
      icon: Briefcase,
      tag: "Final Capstone",
    },
  ];

  const alumniSuccess = [
    {
      nama: "Yasril Jahja",
      avatarInit: "Y",
      colorGradient: "from-teal-600 to-emerald-700",
      company: "PT Bank Negara Indonesia (Persero) Tbk (BNI)",
      companyBadge: "bg-teal-50 text-teal-800 border-teal-200",
      companyIconColor: "text-teal-600",
      role: "ODP Data Analytics",
      batch: "Alumni Bootcamp Batch 1",
      instagramUrl: "https://www.instagram.com/p/DbxE-fsCbEY/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
      quote: "Bimbingan intensif dan kurikulum praktis 4 tools (Excel, Power BI, Python, SQL) di Bootcamp Batch 1 Seara Data sangat membantu saya membangun pondasi analisa data bisnis dan portofolio nyata yang kuat hingga lolos sebagai ODP Data Analytics di BNI."
    }
  ];

  const testimonials = [
    {
      name: "Khairul Anum",
      role: "Alumni Bootcamp Data Analyst",
      badge: "Alumni Batch 1",
      topic: "tools",
      avatarInit: "K",
      colorGradient: "from-emerald-600 to-teal-700",
      quote: "Alhamdulillah, bootcamp ini sangat membantu saya, terutama sebagai seseorang yang baru mulai terjun ke bidang data. Materi yang disampaikan cukup mudah diikuti, dan saya juga merasa terbantu dengan mentor yang sangat sabar serta suportif dalam menjelaskan materi. Dari bootcamp ini, saya mengalami banyak perkembangan, terutama dalam pemahaman tools seperti Power BI dan Python. Sebelumnya saya tidak pernah membayangkan bisa belajar dan memahami tools tersebut, namun sekarang justru saya semakin tertarik untuk memperdalam bidang data lebih jauh lagi.",
      rating: 8,
    },
    {
      name: "Ichvan Rahmawan",
      role: "Alumni Bootcamp Data Analyst",
      badge: "Alumni Batch 1",
      topic: "analytical",
      avatarInit: "I",
      colorGradient: "from-blue-600 to-indigo-700",
      quote: "Hands-on exercises dan case studies-nya sangat membantu melatih analytical thinking berbasis data riil industri. Pembahasan dari dataset mentah hingga dashboard analitik sangat terstruktur.",
      rating: 10,
    },
    {
      name: "Emma Aulia Dewi",
      role: "Alumni Bootcamp Data Analyst",
      badge: "Alumni Batch 1",
      topic: "tools",
      avatarInit: "E",
      colorGradient: "from-purple-600 to-indigo-700",
      quote: "Materi 4 tools (Excel, Power BI, Python, dan SQL) disajikan sangat praktis, aplikatif, dan langsung bisa diterapkan di pekerjaan sehari-hari. Tugas-tugasnya menantang dan relevan.",
      rating: 9,
    },
    {
      name: "Samsul Hafid",
      role: "Alumni Bootcamp Data Analyst",
      badge: "Alumni Batch 1",
      topic: "tools",
      avatarInit: "S",
      colorGradient: "from-amber-600 to-orange-700",
      quote: "Sangat berguna untuk proses olah data harian, pembuatan dashboard interaktif, dan menghasilkan laporan bisnis yang jauh lebih efektif dan mudah dipahami stakeholder.",
      rating: 9,
    },
    {
      name: "Inas Warda Y.",
      role: "Alumni Bootcamp Data Analyst",
      badge: "Alumni Batch 1",
      topic: "career",
      avatarInit: "I",
      colorGradient: "from-pink-600 to-rose-700",
      quote: "Bootcamp intensif yang sangat membantu saya dalam proses career switch ke bidang data dengan arahan mentor yang solutif, komunikatif, dan materi yang padat.",
      rating: 10,
    },
    {
      name: "Melvia Eriva I.",
      role: "Alumni Bootcamp Data Analyst",
      badge: "Alumni Batch 1",
      topic: "analytical",
      avatarInit: "M",
      colorGradient: "from-cyan-600 to-blue-700",
      quote: "Sesi-sesi intensifnya benar-benar membentuk pola pikir analisis data dan problem solving layaknya seorang data practitioner profesional.",
      rating: 9,
    },
    {
      name: "Dimas Arie P.",
      role: "Alumni Bootcamp Data Analyst",
      badge: "Alumni Batch 1",
      topic: "mentor",
      avatarInit: "D",
      colorGradient: "from-teal-600 to-emerald-700",
      quote: "Pembelajaran sangat menyenangkan, profesional, terstruktur, dan materinya sangat relevan dengan kebutuhan industri data saat ini.",
      rating: 9,
    },
    {
      name: "Zakiyya Halima",
      role: "Alumni Bootcamp Data Analyst",
      badge: "Alumni Batch 1",
      topic: "mentor",
      avatarInit: "Z",
      colorGradient: "from-violet-600 to-purple-700",
      quote: "Pengalaman belajar yang kolaboratif dengan real case study serta bimbingan intensif dari instruktur yang berpengalaman langsung di industri.",
      rating: 10,
    },
    {
      name: "Ismail Mukmin",
      role: "Alumni Bootcamp Data Analyst",
      badge: "Alumni Batch 1",
      topic: "analytical",
      avatarInit: "I",
      colorGradient: "from-slate-700 to-gray-900",
      quote: "Memperdalam pemahaman analisis data dari nol, bukan hanya teori tapi juga tips dan trik praktis yang langsung terpakai di dunia kerja.",
      rating: 9,
    },
    {
      name: "Fadia Rahmawati",
      role: "Alumni Bootcamp Data Analyst",
      badge: "Alumni Batch 1",
      topic: "mentor",
      avatarInit: "F",
      colorGradient: "from-rose-600 to-orange-600",
      quote: "Bootcamp ini benar-benar membantu saya mengembalikan semangat untuk berkarir sebagai data analyst. Dari materi yang jelas, mentor yang sabar dan detail, hingga informasi yang terstruktur.",
      rating: 10,
    },
    {
      name: "Arif Vernando",
      role: "Alumni Bootcamp Data Analyst",
      badge: "Alumni Batch 1",
      topic: "tools",
      avatarInit: "A",
      colorGradient: "from-blue-500 to-cyan-600",
      quote: "Materi Excel, Power BI, Python, dan SQL disampaikan dengan jelas, disertai hands-on project yang relevan dan bisa langsung dijadikan portfolio.",
      rating: 9,
    },
    {
      name: "Fajar Nugraha",
      role: "Alumni Bootcamp Data Analyst",
      badge: "Alumni Batch 1",
      topic: "career",
      avatarInit: "F",
      colorGradient: "from-emerald-500 to-green-700",
      quote: "Kurikulum Bootcamp sangat terarah dan relevan dengan kebutuhan industri. Belajar SQL kompleks dan visualisasi dashboard Power BI dari data riil membuat saya percaya diri saat apply kerja.",
      rating: 10,
    },
    {
      name: "Rizky Ramadhan",
      role: "Alumni Bootcamp Data Analyst",
      badge: "Alumni Batch 1",
      topic: "mentor",
      avatarInit: "R",
      colorGradient: "from-orange-500 to-amber-600",
      quote: "Mentor sangat responsif membimbing dari nol coding sampai bisa menyelesaikan pipeline analisis data end-to-end tanpa kebingungan.",
      rating: 10,
    },
    {
      name: "Siti Rahmawati",
      role: "Alumni Bootcamp Data Analyst",
      badge: "Alumni Batch 1",
      topic: "career",
      avatarInit: "S",
      colorGradient: "from-teal-500 to-cyan-700",
      quote: "Studi kasusnya nyata dari data bisnis aktual, bukan sekadar dummy dataset. Sangat puas dengan feedback personal mentor terhadap final project.",
      rating: 9,
    },
    {
      name: "Kevin Pratama",
      role: "Alumni Bootcamp Data Analyst",
      badge: "Alumni Batch 1",
      topic: "career",
      avatarInit: "K",
      colorGradient: "from-indigo-500 to-blue-700",
      quote: "Sangat terbantu dengan sesi review portofolio dan resume. Mentor memberikan arahan konkret bagaimana menyusun bullet point impact yang dicari recruiter.",
      rating: 10,
    },
    {
      name: "Nadhira Safitri",
      role: "Alumni Bootcamp Data Analyst",
      badge: "Alumni Batch 1",
      topic: "tools",
      avatarInit: "N",
      colorGradient: "from-pink-500 to-purple-600",
      quote: "Penyampaian materi Python data manipulation dan visualisasi sangat runut, bahkan untuk saya yang awalnya tidak memiliki latar belakang IT.",
      rating: 9,
    },
    {
      name: "Bagas Wicaksono",
      role: "Alumni Bootcamp Data Analyst",
      badge: "Alumni Batch 1",
      topic: "mentor",
      avatarInit: "B",
      colorGradient: "from-blue-700 to-slate-800",
      quote: "Sesi live coding interaktif dan bedah syntax SQL membuat pemahaman query analitik seperti JOIN dan Window Function jadi jauh lebih gampang dipahami.",
      rating: 10,
    },
    {
      name: "Ayu Pratiwi",
      role: "Alumni Bootcamp Data Analyst",
      badge: "Alumni Batch 1",
      topic: "tools",
      avatarInit: "A",
      colorGradient: "from-rose-500 to-pink-700",
      quote: "Bimbingan 4 minggu yang sangat padat dan berbobot. Sekarang saya jauh lebih percaya diri mengolah dataset ribuan baris dan menyajikan dashboard eksekutif di Power BI.",
      rating: 9,
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-seara-cream text-seara-dark font-sans flex flex-col justify-between selection:bg-seara-orange/20 selection:text-seara-dark">
      <div>
        {/* Main Navbar */}
        <Navbar />

        {/* ========================================================
            RUNNING TICKER / MARQUEE (Bootcamp Batch 3 Live Now)
           ======================================================== */}
        <div className="w-full bg-gradient-to-r from-seara-dark via-stone-900 to-seara-dark text-white border-b border-orange-500/30 overflow-hidden relative shadow-md z-30 select-none py-2.5">
          {/* Gradient Edge Masks for Smooth Edge Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-seara-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-seara-dark to-transparent z-10 pointer-events-none" />

          <a
            href={CLICKY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-max group cursor-pointer"
            title="Klik untuk pendaftaran Bootcamp Batch 3 di Clicky"
          >
            <motion.div
              className="flex items-center gap-8 pr-8 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 22,
              }}
            >
              {[...Array(6)].map((_, idx) => (
                <div key={idx} className="flex items-center gap-4 text-xs sm:text-sm font-bold tracking-wide">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-rose-600 to-orange-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    <span>LIVE NOW</span>
                  </span>

                  <span className="font-display font-extrabold text-white sm:text-base tracking-wider uppercase flex items-center gap-2 group-hover:text-seara-orange transition-colors">
                    <span>Bootcamp Data Analyst Batch 3 is Live!</span>
                    <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  </span>

                  <span className="text-gray-300 font-medium text-xs hidden md:inline">
                    · 28 Okt – 21 Nov 2026 · Promo Rp 329k (Normal 699k) · Excel, Power BI, Python & SQL ·
                  </span>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-seara-orange bg-orange-950/60 border border-orange-500/30 px-2 py-0.5 rounded-md">
                    <span>Daftar di clicky.id/searadata</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>

                  <span className="w-1.5 h-1.5 rounded-full bg-seara-orange/60" />
                </div>
              ))}
            </motion.div>
          </a>
        </div>

        {/* ========================================================
            HERO SECTION
           ======================================================== */}
        {/* ========================================================
            HERO SECTION WITH OFFICIAL BATCH 3 POSTER AT THE TOP
           ======================================================== */}
        <header className="relative pt-8 pb-16 md:pt-14 md:pb-20 px-4 sm:px-6 overflow-hidden">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] bg-gradient-to-tr from-seara-orange/15 to-amber-200/20 rounded-full blur-[110px] pointer-events-none -z-10" />

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Top Pill Badge */}
            <div className="text-center lg:text-left mb-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/90 border border-orange-200/80 px-4 py-1.5 rounded-full shadow-xs backdrop-blur-xs"
              >
                <span className="flex h-2 w-2 rounded-full bg-seara-orange animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-seara-orange">
                  🔥 PENDAFTARAN RESMI DIBUKA · BATCH 3 LIVE NOW
                </span>
              </motion.div>
            </div>

            {/* Main 2-Column Hero: Left Headline/Details, Right Official Poster */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
              {/* Left Column: Headline, Highlights, Mentors, and CTAs */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-seara-dark tracking-tight leading-[1.08] mb-4 font-display"
                >
                  Bootcamp <br className="hidden sm:inline" />
                  <span className="text-seara-orange underline decoration-orange-200 decoration-wavy decoration-2 underline-offset-8">
                    Data Analyst
                  </span>{" "}
                  <span className="inline-block text-2xl sm:text-3xl md:text-4xl font-black text-white bg-gradient-to-r from-rose-600 to-seara-orange px-3 py-1 rounded-2xl align-middle shadow-sm">
                    Batch 3
                  </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 tracking-tight mb-4"
                >
                  From Learning Data to Building Real-World Skills.
                </motion.h2>

                {/* Supporting Copy */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6"
                >
                  Program 4 minggu intensif (8 sesi live, 20+ jam) mencakup Excel, Power BI, Python, dan SQL dengan bimbingan praktisi Bank Danamon &amp; Dekoruma, studi kasus bisnis nyata, dan portofolio profesional siap kerja.
                </motion.p>

                {/* Batch 3 Key Info Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6"
                >
                  <div className="bg-white/90 border border-orange-200/80 rounded-2xl p-3 text-center shadow-xs">
                    <span className="text-[10px] text-gray-400 block uppercase font-bold tracking-wider">Periode</span>
                    <span className="text-xs sm:text-sm font-extrabold text-seara-dark">28 Okt – 21 Nov 2026</span>
                  </div>
                  <div className="bg-white/90 border border-orange-200/80 rounded-2xl p-3 text-center shadow-xs">
                    <span className="text-[10px] text-gray-400 block uppercase font-bold tracking-wider">Durasi</span>
                    <span className="text-xs sm:text-sm font-extrabold text-seara-dark">4 Minggu · 8 Sesi</span>
                  </div>
                  <div className="bg-white/90 border border-orange-200/80 rounded-2xl p-3 text-center shadow-xs">
                    <span className="text-[10px] text-gray-400 block uppercase font-bold tracking-wider">4 Core Tools</span>
                    <span className="text-xs sm:text-sm font-extrabold text-seara-orange">Excel, PBI, Py, SQL</span>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-amber-100/60 border border-orange-300 rounded-2xl p-3 text-center shadow-xs">
                    <span className="text-[10px] text-seara-orange block uppercase font-bold tracking-wider">Promo Khusus</span>
                    <span className="text-xs sm:text-sm font-black text-seara-dark">
                      Rp 329.000 <span className="text-[10px] text-gray-400 line-through font-normal">699k</span>
                    </span>
                  </div>
                </motion.div>

                {/* Mentors Preview Chip */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="inline-flex items-center gap-3 bg-white/90 border border-gray-200/80 rounded-2xl p-2.5 pr-4 mb-6 shadow-xs text-left"
                >
                  <div className="flex -space-x-2">
                    <img
                      src="/zahrulwafi.jpeg"
                      alt="Zahrul Wafi"
                      className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-xs"
                    />
                    <img
                      src="/achmadkurniansyah.jpeg"
                      alt="Achmad Kurniansyah"
                      className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-xs"
                    />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-gray-800">
                      Bimbingan Langsung Praktisi Industri:
                    </p>
                    <p className="text-gray-500 font-medium">
                      Zahrul Wafi (Bank Danamon) &amp; Achmad Kurniansyah (Dekoruma)
                    </p>
                  </div>
                </motion.div>

                {/* Hero CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5"
                >
                  <a
                    href={CLICKY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="hero-batch3-live-btn"
                    className="w-full sm:w-auto bg-gradient-to-r from-orange-500 via-seara-orange to-amber-500 hover:brightness-105 text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 text-center"
                  >
                    <Zap className="w-4 h-4 fill-white" />
                    <span>Daftar Batch 3 Sekarang</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => scrollToSection("batch3")}
                    id="hero-view-schedule-btn"
                    className="w-full sm:w-auto bg-white hover:bg-orange-50/80 text-seara-dark font-bold px-7 py-3.5 rounded-full transition-all border border-gray-200/90 shadow-xs hover:border-orange-300 active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-seara-orange" />
                    <span>Lihat Jadwal Lengkap</span>
                  </button>

                  <button
                    onClick={() => scrollToSection("journey")}
                    id="hero-explore-journey-btn"
                    className="w-full sm:w-auto bg-transparent hover:bg-gray-100 text-gray-600 font-bold px-5 py-3.5 rounded-full transition-all text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Timeline Journey</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              </div>

              {/* Right Column: OFFICIAL POSTER & SCHEDULE PREVIEW CARD AT THE TOP */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="w-full max-w-md bg-stone-900 text-white rounded-3xl p-4 sm:p-5 border-2 border-orange-500/40 shadow-2xl relative overflow-hidden"
                >
                  {/* Card Header & Switcher Tabs */}
                  <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-white/10">
                    <div className="inline-flex bg-black/50 p-1 rounded-xl border border-white/10 text-xs font-bold">
                      <button
                        onClick={() => setHeroVisualTab("poster")}
                        className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                          heroVisualTab === "poster"
                            ? "bg-seara-orange text-white shadow-xs"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Poster Resmi</span>
                      </button>
                      <button
                        onClick={() => setHeroVisualTab("jadwal")}
                        className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                          heroVisualTab === "jadwal"
                            ? "bg-seara-orange text-white shadow-xs"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Jadwal Sesi</span>
                      </button>
                    </div>

                    <span className="inline-flex items-center gap-1 bg-rose-600/90 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span>LIVE</span>
                    </span>
                  </div>

                  {/* Poster / Jadwal Image with Click to Zoom */}
                  <div
                    onClick={() =>
                      setLightboxImage({
                        src:
                          heroVisualTab === "poster"
                            ? "/bootcamp-data-analyst-batch3.png"
                            : "/bootcamp-data-analyst-batch3-jadwal.png",
                        title:
                          heroVisualTab === "poster"
                            ? "Poster Resmi Bootcamp Data Analyst Batch 3"
                            : "Jadwal Sesi Bootcamp Data Analyst Batch 3",
                      })
                    }
                    className="relative group cursor-zoom-in rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-inner"
                  >
                    <img
                      src={
                        heroVisualTab === "poster"
                          ? "/bootcamp-data-analyst-batch3.png"
                          : "/bootcamp-data-analyst-batch3-jadwal.png"
                      }
                      alt={
                        heroVisualTab === "poster"
                          ? "Poster Resmi Bootcamp Data Analyst Batch 3"
                          : "Jadwal Sesi Bootcamp Data Analyst Batch 3"
                      }
                      className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-300"
                    />

                    {/* Hover Hint Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-seara-orange text-white text-xs font-bold px-3.5 py-2 rounded-full flex items-center gap-1.5 shadow-lg">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Klik untuk Memperbesar</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom CTA & Hint */}
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <button
                      onClick={() =>
                        setLightboxImage({
                          src:
                            heroVisualTab === "poster"
                              ? "/bootcamp-data-analyst-batch3.png"
                              : "/bootcamp-data-analyst-batch3-jadwal.png",
                          title:
                            heroVisualTab === "poster"
                              ? "Poster Resmi Bootcamp Data Analyst Batch 3"
                              : "Jadwal Sesi Bootcamp Data Analyst Batch 3",
                        })
                      }
                      className="text-gray-300 hover:text-white flex items-center gap-1.5 font-medium cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Perbesar Resolusi Penuh</span>
                    </button>

                    <a
                      href={CLICKY_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-seara-orange hover:text-orange-400 font-bold flex items-center gap-1"
                    >
                      <span>clicky.id/searadata</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* 4 Tool Mini Preview Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/90 backdrop-blur-xs rounded-2xl p-4 border border-gray-200/80 shadow-md max-w-5xl mx-auto"
            >
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-seara-orange" />
                  <span>4 Core Tools Terintegrasi di Batch 3</span>
                </span>
                <span className="text-[11px] font-semibold text-seara-orange bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200/60">
                  Hands-on &amp; Capstone Portfolio
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-gray-50 hover:bg-orange-50/50 p-3 rounded-xl border border-gray-100 transition-colors">
                  <div className="flex items-center gap-2 text-emerald-600 mb-1">
                    <FileSpreadsheet className="w-4 h-4" />
                    <span className="text-xs font-bold">01. Excel</span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium truncate">Data Cleaning &amp; Power Query</p>
                </div>

                <div className="bg-gray-50 hover:bg-orange-50/50 p-3 rounded-xl border border-gray-100 transition-colors">
                  <div className="flex items-center gap-2 text-amber-600 mb-1">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-xs font-bold">02. Power BI</span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium truncate">DAX &amp; KPI Dashboards</p>
                </div>

                <div className="bg-gray-50 hover:bg-orange-50/50 p-3 rounded-xl border border-gray-100 transition-colors">
                  <div className="flex items-center gap-2 text-blue-600 mb-1">
                    <Code2 className="w-4 h-4" />
                    <span className="text-xs font-bold">03. Python</span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium truncate">Pandas Wrangling &amp; EDA</p>
                </div>

                <div className="bg-gray-50 hover:bg-orange-50/50 p-3 rounded-xl border border-gray-100 transition-colors">
                  <div className="flex items-center gap-2 text-violet-600 mb-1">
                    <Database className="w-4 h-4" />
                    <span className="text-xs font-bold">04. SQL</span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium truncate">JOIN, Group By &amp; Subqueries</p>
                </div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* ========================================================
            SECTION 1 — OUR JOURNEY (From Batch 1 to Batch 3)
           ======================================================== */}
        <section id="journey" className="py-20 px-6 bg-white border-y border-gray-200/80 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-orange-100 text-seara-orange font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
                🚀 EVOLUTION TIMELINE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-seara-dark tracking-tight font-display mb-4">
                From Batch 1 to Batch 3
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Tiga batch perjalanan akselerasi talenta data. Ratusan jam belajar intensif dan satu misi berkelanjutan: mendampingi perjalanan karir datamu dari nol hingga siap kerja.
              </p>
            </div>

            {/* Horizontal Interactive Journey Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {batches.map((batch, index) => {
                const isComing = batch.isComingSoon;
                const isLive = batch.isLive;

                return (
                  <motion.div
                    key={batch.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className={`rounded-3xl p-7 flex flex-col justify-between transition-all relative ${
                      isLive
                        ? "bg-gradient-to-b from-orange-500/10 via-white to-orange-50 border-2 border-seara-orange shadow-xl shadow-orange-500/15 ring-2 ring-orange-400/20"
                        : isComing
                        ? "bg-gradient-to-b from-orange-500/5 via-white to-orange-50/50 border-2 border-dashed border-seara-orange/60"
                        : "bg-seara-cream/60 border border-gray-200 hover:border-orange-300 hover:shadow-md"
                    }`}
                  >
                    {/* Top Label & Batch Number */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span
                          className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider ${
                            isLive
                              ? "bg-gradient-to-r from-rose-600 to-seara-orange text-white shadow-xs flex items-center gap-1.5 animate-pulse"
                              : isComing
                              ? "bg-seara-orange text-white shadow-xs"
                              : "bg-gray-900 text-white"
                          }`}
                        >
                          {isLive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />}
                          <span>{batch.label}</span>
                        </span>
                        {batch.date && (
                          <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{batch.date}</span>
                          </span>
                        )}
                      </div>

                      {/* Title & Duration */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-seara-dark mb-2 font-display">
                        {batch.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-seara-orange mb-4">
                        <Clock className="w-4 h-4 shrink-0" />
                        <span>{batch.duration}</span>
                      </div>

                      {/* Pricing Tag if Live */}
                      {batch.pricePromo && (
                        <div className="bg-orange-100/70 border border-orange-200 p-3 rounded-2xl mb-4 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-gray-500 line-through block font-medium">Normal {batch.priceNormal}</span>
                            <span className="text-sm font-black text-seara-orange">Promo {batch.pricePromo}</span>
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-wider bg-seara-orange text-white px-2 py-0.5 rounded-full shadow-2xs">
                            Hemat 53%
                          </span>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        {batch.description}
                      </p>

                      {/* Highlight Box */}
                      <div className="bg-white/80 border border-orange-200/70 p-3.5 rounded-2xl mb-6">
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide block mb-1">
                          Key Highlight
                        </span>
                        <p className="text-xs font-bold text-seara-dark flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-seara-orange shrink-0" />
                          <span>&ldquo;{batch.highlight}&rdquo;</span>
                        </p>
                      </div>

                      {/* Skills Chips */}
                      <div className="mb-8">
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide block mb-2">
                          Skills Covered
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {batch.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs font-semibold px-2.5 py-1 bg-white border border-gray-200 text-gray-700 rounded-lg shadow-2xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action CTA */}
                    <div>
                      {isLive ? (
                        <div className="space-y-2">
                          <a
                            href={CLICKY_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            id={`cta-journey-${batch.id}`}
                            className="w-full bg-gradient-to-r from-orange-500 via-seara-orange to-amber-500 hover:brightness-105 text-white font-bold py-3.5 px-4 rounded-2xl transition-all text-center flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95 text-sm"
                          >
                            <Zap className="w-4 h-4 fill-white" />
                            <span>Daftar Batch 3 Sekarang</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                          <button
                            onClick={() => setSelectedBatch(batch)}
                            id={`btn-view-${batch.id}`}
                            className="w-full bg-white hover:bg-orange-50/50 border border-orange-200 text-seara-dark hover:text-seara-orange font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 text-xs cursor-pointer shadow-2xs"
                          >
                            <span>Lihat Poster & Jadwal Sesi</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : isComing ? (
                        <a
                          href={CLICKY_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          id={`cta-journey-${batch.id}`}
                          className="w-full bg-seara-orange text-white hover:brightness-95 font-bold py-3.5 px-4 rounded-2xl transition-all text-center flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>Join the Waiting List</span>
                        </a>
                      ) : (
                        <button
                          onClick={() => setSelectedBatch(batch)}
                          id={`btn-view-${batch.id}`}
                          className="w-full bg-white hover:bg-gray-50 border border-gray-300 text-seara-dark hover:text-seara-orange font-bold py-3 px-4 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs group"
                        >
                          <span>View {batch.title} Details</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            CURRICULUM SECTION (Four Tools. One Data Analyst Journey)
           ======================================================== */}
        <section className="py-20 px-6 bg-seara-cream">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block bg-orange-100 text-seara-orange font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
                🛠️ INTEGRATED TOOLSET
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-seara-dark tracking-tight font-display mb-4">
                Four Tools. One Data Analyst Journey.
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Rather than learning isolated tools in silos, you will master how each tool connects into a seamless, end-to-end data pipeline.
              </p>
            </div>

            {/* Tool Selection Tabs (Mobile & Desktop) */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10">
              {toolsData.map((tool) => {
                const IconComp = tool.icon;
                const isCurrent = activeTool === tool.id;

                return (
                  <button
                    key={tool.id}
                    onClick={() => setActiveTool(tool.id as "excel" | "powerbi" | "python" | "sql")}
                    id={`tab-tool-${tool.id}`}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
                      isCurrent
                        ? "bg-seara-dark text-white shadow-md scale-105"
                        : "bg-white text-gray-600 hover:text-seara-dark border border-gray-200"
                    }`}
                  >
                    <IconComp className={`w-4 h-4 ${isCurrent ? "text-seara-orange" : "text-gray-400"}`} />
                    <span>{tool.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Tool Detailed Interactive Showcase */}
            {(() => {
              const current = toolsData.find((t) => t.id === activeTool) || toolsData[0];
              const CurrentIcon = current.icon;

              return (
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-lg relative overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Category & Details */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`text-xs font-extrabold px-3 py-1 rounded-full border ${current.accentColor}`}>
                          {current.category}
                        </span>
                        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-lg">
                          {current.badge}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-seara-dark mb-3 font-display flex items-center gap-3">
                          <div className="p-2 bg-orange-50 rounded-xl text-seara-orange">
                            <CurrentIcon className="w-6 h-6" />
                          </div>
                          <span>{current.name}</span>
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {current.description}
                        </p>
                      </div>

                      {/* Topics Breakdown */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                          Curriculum Modules & Topics
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {current.topics.map((topic, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2.5 bg-gray-50 p-3 rounded-xl border border-gray-100"
                            >
                              <div className="w-5 h-5 rounded-full bg-seara-orange/10 text-seara-orange text-[10px] font-black flex items-center justify-center shrink-0">
                                {i + 1}
                              </div>
                              <span className="text-xs font-bold text-gray-800">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Practical Output Box */}
                      <div className="bg-orange-50/70 border border-orange-200/80 p-4 rounded-2xl">
                        <span className="text-[11px] font-bold text-seara-orange uppercase tracking-wide block mb-1">
                          Practical Learning Output
                        </span>
                        <p className="text-sm font-bold text-seara-dark flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-seara-orange shrink-0" />
                          <span>&ldquo;{current.output}&rdquo;</span>
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Key Mastery Points */}
                    <div className="lg:col-span-5 bg-gray-50/90 rounded-2xl p-6 border border-gray-100 space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-seara-orange" />
                        <span>Hands-On Mastery Competencies</span>
                      </h4>

                      <ul className="space-y-3">
                        {current.keyFeatures.map((feat, i) => (
                          <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 leading-snug">
                            <span className="w-1.5 h-1.5 rounded-full bg-seara-orange mt-1.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-gray-200/80 text-xs text-gray-500 flex items-center justify-between">
                        <span>Directly applied in Batch 3</span>
                        <a
                          href={CLICKY_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-seara-orange hover:underline flex items-center gap-1"
                        >
                          <span>Waiting List</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}

            {/* 4 Tool Summary Grid for Mobile Scanning */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {toolsData.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.id}
                    onClick={() => setActiveTool(tool.id as "excel" | "powerbi" | "python" | "sql")}
                    className="bg-white p-5 rounded-2xl border border-gray-200/80 hover:border-seara-orange transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-orange-50 text-seara-orange flex items-center justify-center group-hover:bg-seara-orange group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase">{tool.name}</span>
                    </div>
                    <h4 className="text-sm font-bold text-seara-dark mb-1">{tool.category}</h4>
                    <p className="text-xs text-gray-500 line-clamp-2">{tool.output}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            LEARNING APPROACH (More Than Just Learning Tools)
           ======================================================== */}
        <section className="py-20 px-6 bg-white border-y border-gray-200/80">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-orange-100 text-seara-orange font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
                🔄 4-STEP FRAMEWORK
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-seara-dark tracking-tight font-display mb-4">
                More Than Just Learning Tools
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                A structured problem-solving approach that prepares you for actual data analytics workflows in modern companies.
              </p>
            </div>

            {/* Visual Process Flow Connecting All 4 Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {steps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="bg-seara-cream/70 rounded-3xl p-6 border border-gray-200 relative flex flex-col justify-between hover:border-seara-orange transition-all group"
                  >
                    <div>
                      {/* Step Number & Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-black text-seara-orange font-display">
                          {item.num}
                        </span>
                        <div className="w-10 h-10 rounded-2xl bg-white text-gray-700 flex items-center justify-center shadow-2xs group-hover:bg-seara-orange group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Step Name */}
                      <h3 className="text-xl font-extrabold text-seara-dark mb-1 font-display">
                        {item.step}
                      </h3>

                      {/* Short Action Label */}
                      <p className="text-xs font-bold text-seara-orange mb-3">
                        &ldquo;{item.label}&rdquo;
                      </p>

                      {/* Explanation */}
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Arrow Indicator for Desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white p-1.5 rounded-full border border-gray-200 text-gray-400 shadow-2xs">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            PORTFOLIO SECTION (Learn. Practice. Build.)
           ======================================================== */}
        <section className="py-20 px-6 bg-seara-cream">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-orange-100 text-seara-orange font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
                💼 CAREER-READY ASSETS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-seara-dark tracking-tight font-display mb-4">
                Learn. Practice. Build.
              </h2>
              <p className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                &ldquo;Every learning journey should leave you with something you can show.&rdquo;
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Participants work on practical exercises, business cases, dashboards, scripts, and projects that can be developed into a professional portfolio ready to showcase to hiring managers.
              </p>
            </div>

            {/* 5 Visual Portfolio Representation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((port, idx) => {
                const PortIcon = port.icon;
                const isCapstone = idx === 4;

                return (
                  <motion.div
                    key={port.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`bg-white rounded-3xl p-6 border transition-all flex flex-col justify-between relative ${
                      isCapstone
                        ? "md:col-span-2 lg:col-span-2 border-seara-orange bg-gradient-to-r from-white via-orange-50/40 to-white shadow-md"
                        : "border-gray-200/90 hover:border-orange-300 hover:shadow-md"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-2xl bg-orange-50 text-seara-orange flex items-center justify-center">
                          <PortIcon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">
                          {port.tag}
                        </span>
                      </div>

                      <span className="text-xs font-bold text-seara-orange block mb-1">
                        {port.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-seara-dark mb-2 font-display">
                        {port.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                        {port.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-1 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Recruiter-Tested Standard</span>
                      </span>
                      <span className="font-bold text-seara-dark">Batch Portfolio</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            ALUMNI CAREER SUCCESS (Verified Career Hired)
           ======================================================== */}
        <section className="py-20 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="inline-flex items-center gap-1.5 bg-orange-100 text-seara-orange font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>ALUMNI CAREER SUCCESS • VERIFIED HIRED</span>
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-seara-dark tracking-tight font-display">
                Kisah Sukses Alumni Bootcamp
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Bukti nyata lulusan Bootcamp Data Analyst Seara Data yang berhasil menembus seleksi di perbankan nasional, perusahaan multinasional, dan industri retail terkemuka.
              </p>
            </div>

            {/* Verified Alumni Career Spotlight */}
            <div className="max-w-2xl mx-auto mb-14">
              {alumniSuccess.map((alumni, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl border-2 border-orange-200 p-7 sm:p-8 shadow-lg hover:shadow-xl hover:border-seara-orange transition-all flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    {/* Top company badge & IG link */}
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-gray-100">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${alumni.companyBadge}`}>
                        <Building2 className={`w-3.5 h-3.5 ${alumni.companyIconColor}`} />
                        <span>{alumni.company}</span>
                      </span>
                      <a
                        href={alumni.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-pink-600 bg-pink-50 hover:bg-pink-100 px-3 py-1 rounded-full transition-all border border-pink-200 shrink-0"
                        title="Lihat di Instagram"
                      >
                        <Instagram className="w-3.5 h-3.5" />
                        <span>Instagram</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* Profile row */}
                    <div className="flex items-center gap-4">
                      <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${alumni.colorGradient} text-white font-display font-black text-xl flex items-center justify-center shadow-md shrink-0`}>
                        {alumni.avatarInit}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-base sm:text-lg text-seara-dark">{alumni.nama}</h4>
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        </div>
                        <p className="text-sm font-semibold text-seara-orange">{alumni.role}</p>
                        <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">{alumni.batch}</p>
                      </div>
                    </div>

                    {/* Quote Box */}
                    <div className="bg-orange-50/50 p-5 rounded-2xl border border-orange-100 relative">
                      <Quote className="w-6 h-6 text-orange-200 absolute top-3 right-3 pointer-events-none" />
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic relative z-10">
                        &ldquo;{alumni.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Instagram Post Button */}
                  <a
                    href={alumni.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:opacity-95 text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Lihat Bukti Postingan Resmi di Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Testimonials Header & Grid */}
            <div className="pt-10 border-t border-gray-100">
              <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-seara-orange bg-orange-100/80 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-seara-orange" />
                  <span>ULASAN RESMI ALUMNI BATCH 1</span>
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-seara-dark font-display">
                  Apa Kata Alumni Bootcamp Batch 1?
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Ulasan asli dan feedback peserta Bootcamp Data Analyst Seara Data Batch 1 mengenai materi praktis, bimbingan mentor, dan persiapan karir industri.
                </p>
              </div>

              {/* Instagram Official Carousel Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 bg-gradient-to-r from-orange-50 via-pink-50/50 to-amber-50 rounded-3xl p-5 sm:p-6 border border-pink-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-500 text-white flex items-center justify-center shadow-sm shrink-0">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm sm:text-base text-seara-dark">
                        Postingan Resmi Instagram @seara.data
                      </h4>
                      <span className="text-[10px] font-extrabold bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full border border-pink-200 uppercase">
                        Verified Carousel
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Lihat dokumentasi lengkap slide review & feedback peserta Bootcamp Batch 1 di Instagram.
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/p/DahyLmlic0L/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:opacity-95 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all shrink-0 w-full sm:w-auto justify-center"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Buka di Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Topic / Category Filter Buttons */}
              <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
                <button
                  onClick={() => setActiveTestiFilter("all")}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeTestiFilter === "all"
                      ? "bg-seara-dark text-white shadow-xs"
                      : "bg-white text-gray-600 hover:bg-orange-50 border border-gray-200"
                  }`}
                >
                  Semua Ulasan Batch 1 ({testimonials.length})
                </button>
                <button
                  onClick={() => setActiveTestiFilter("tools")}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeTestiFilter === "tools"
                      ? "bg-seara-orange text-white shadow-xs"
                      : "bg-white text-gray-600 hover:bg-orange-50 border border-gray-200"
                  }`}
                >
                  <span>4 Tools (SQL, Power BI, Python, Excel)</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/10">
                    {testimonials.filter((t) => t.topic === "tools").length}
                  </span>
                </button>
                <button
                  onClick={() => setActiveTestiFilter("analytical")}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeTestiFilter === "analytical"
                      ? "bg-seara-orange text-white shadow-xs"
                      : "bg-white text-gray-600 hover:bg-orange-50 border border-gray-200"
                  }`}
                >
                  <span>Analytical Thinking & Kasus Riil</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/10">
                    {testimonials.filter((t) => t.topic === "analytical").length}
                  </span>
                </button>
                <button
                  onClick={() => setActiveTestiFilter("mentor")}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeTestiFilter === "mentor"
                      ? "bg-seara-orange text-white shadow-xs"
                      : "bg-white text-gray-600 hover:bg-orange-50 border border-gray-200"
                  }`}
                >
                  <span>Bimbingan Mentor</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/10">
                    {testimonials.filter((t) => t.topic === "mentor").length}
                  </span>
                </button>
                <button
                  onClick={() => setActiveTestiFilter("career")}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeTestiFilter === "career"
                      ? "bg-seara-orange text-white shadow-xs"
                      : "bg-white text-gray-600 hover:bg-orange-50 border border-gray-200"
                  }`}
                >
                  <span>Career Switch & Portofolio</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/10">
                    {testimonials.filter((t) => t.topic === "career").length}
                  </span>
                </button>
              </div>

              {/* Testimonials Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials
                  .filter((t) => activeTestiFilter === "all" || t.topic === activeTestiFilter)
                  .map((testi, i) => (
                    <motion.div
                      key={testi.name + i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                      className="bg-white rounded-3xl p-6 border border-gray-200/90 shadow-xs flex flex-col justify-between hover:border-orange-300 hover:shadow-md transition-all relative overflow-hidden"
                    >
                      <div>
                        {/* 10 Stars Rating & Score Badge */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <div className="flex items-center gap-0.5" title={`Rating: ${testi.rating} dari 10 Bintang`}>
                            {[...Array(10)].map((_, idx) => (
                              <Star
                                key={idx}
                                className={`w-3.5 h-3.5 ${
                                  idx < testi.rating
                                    ? "fill-[#FF4A3F] text-[#FF4A3F]"
                                    : "fill-amber-100/70 text-amber-200"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-[11px] font-black text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200 shrink-0">
                            {testi.rating}/10
                          </span>
                        </div>

                        {/* Quote */}
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-5">
                          &ldquo;{testi.quote}&rdquo;
                        </p>
                      </div>

                      {/* Author Meta */}
                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div
                            className={`w-8 h-8 rounded-full bg-gradient-to-br ${testi.colorGradient} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs`}
                          >
                            {testi.avatarInit}
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-xs font-bold text-seara-dark truncate">{testi.name}</h4>
                            <p className="text-[10px] text-gray-500 truncate">{testi.role}</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-100 text-seara-orange shrink-0">
                          {testi.badge}
                        </span>
                      </div>
                    </motion.div>
                  ))}
              </div>

              {/* Link to Testimoni Page */}
              <div className="text-center mt-10">
                <Link
                  to="/testimoni"
                  className="inline-flex items-center gap-2 bg-white hover:bg-orange-50 text-seara-dark border border-orange-200 px-6 py-2.5 rounded-full font-bold text-xs shadow-xs hover:text-seara-orange transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-seara-orange" />
                  <span>Lihat Semua 100+ Testimoni Alumni Seara Data</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            BATCH 3 SECTION (Live Now - Main Showcase Area)
           ======================================================== */}
        <section id="batch3" className="py-24 px-6 bg-gradient-to-b from-stone-900 via-seara-dark to-stone-950 text-white relative overflow-hidden">
          {/* Decorative Backdrops */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-seara-orange/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Eyebrow & Live Status */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-seara-orange px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white border border-white/20 mb-6 shadow-md"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>PENDAFTARAN DIBUKA • BATCH 3 LIVE NOW</span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 font-display leading-[1.1] text-white"
              >
                Bootcamp Data Analyst <span className="text-seara-orange">Batch 3</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
              >
                Program 4 minggu intensif (8 sesi live, 20+ jam) mencakup Excel, Power BI, Python, dan SQL dengan bimbingan langsung praktisi industri, studi kasus nyata, dan portofolio profesional siap kerja.
              </motion.p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-xs">
                <Calendar className="w-5 h-5 text-seara-orange mx-auto mb-1.5" />
                <span className="text-[11px] text-gray-400 block uppercase font-bold tracking-wider">Periode</span>
                <span className="text-sm font-extrabold text-white">28 Okt – 21 Nov 2026</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-xs">
                <Clock className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
                <span className="text-[11px] text-gray-400 block uppercase font-bold tracking-wider">Durasi</span>
                <span className="text-sm font-extrabold text-white">4 Minggu · 8 Sesi (20+ Jam)</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-xs">
                <Layers className="w-5 h-5 text-cyan-400 mx-auto mb-1.5" />
                <span className="text-[11px] text-gray-400 block uppercase font-bold tracking-wider">4 Core Tools</span>
                <span className="text-sm font-extrabold text-white">Excel, Power BI, Python, SQL</span>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-rose-500/20 border border-orange-500/40 rounded-2xl p-4 text-center backdrop-blur-xs">
                <Zap className="w-5 h-5 text-seara-orange mx-auto mb-1.5 fill-seara-orange" />
                <span className="text-[11px] text-orange-200 block uppercase font-bold tracking-wider">Promo Khusus</span>
                <div className="flex items-center justify-center gap-1.5">
                  <span className="text-xs text-gray-400 line-through">699k</span>
                  <span className="text-sm font-black text-white">Rp 329.000</span>
                </div>
              </div>
            </div>

            {/* Mentors Spotlight for Batch 3 */}
            <div className="mb-14 max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-300">
                  MENTOR & PRAKTISI INDUSTRI
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display mt-1">
                  Dibimbing Langsung oleh Profesional
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 hover:border-orange-500/50 rounded-2xl p-5 flex items-center gap-4 transition-all">
                  <img
                    src="/zahrulwafi.jpeg"
                    alt="Zahrul Wafi"
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-orange-400/40 shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-base text-white">Zahrul Wafi</h4>
                    <p className="text-xs font-semibold text-seara-orange">Business Data Analyst</p>
                    <p className="text-xs text-gray-400">PT Bank Danamon Indonesia</p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 hover:border-orange-500/50 rounded-2xl p-5 flex items-center gap-4 transition-all">
                  <img
                    src="/achmadkurniansyah.jpeg"
                    alt="Achmad Kurniansyah"
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-orange-400/40 shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-base text-white">Achmad Kurniansyah</h4>
                    <p className="text-xs font-semibold text-seara-orange">Business Intelligence</p>
                    <p className="text-xs text-gray-400">Dekoruma</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Visual Switcher: Poster vs Jadwal */}
            <div className="bg-stone-900/90 rounded-3xl border border-white/15 p-6 sm:p-10 mb-14 shadow-2xl backdrop-blur-md">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold text-seara-orange uppercase tracking-wider block mb-1">
                    DOKUMEN RESMI BATCH 3
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                    Poster Resmi & Jadwal Pertemuan
                  </h3>
                </div>

                {/* Tab Switcher */}
                <div className="inline-flex bg-black/40 p-1.5 rounded-2xl border border-white/10">
                  <button
                    onClick={() => setBatch3VisualTab("poster")}
                    className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                      batch3VisualTab === "poster"
                        ? "bg-seara-orange text-white shadow-md"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                    <span>Poster Program</span>
                  </button>
                  <button
                    onClick={() => setBatch3VisualTab("jadwal")}
                    className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                      batch3VisualTab === "jadwal"
                        ? "bg-seara-orange text-white shadow-md"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Jadwal Sesi (Schedule)</span>
                  </button>
                </div>
              </div>

              {/* Image Preview & Description Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Image Display */}
                <div className="lg:col-span-6 flex flex-col items-center">
                  <div
                    onClick={() =>
                      setLightboxImage({
                        src:
                          batch3VisualTab === "poster"
                            ? "/bootcamp-data-analyst-batch3.png"
                            : "/bootcamp-data-analyst-batch3-jadwal.png",
                        title:
                          batch3VisualTab === "poster"
                            ? "Poster Resmi Bootcamp Data Analyst Batch 3"
                            : "Jadwal Sesi Bootcamp Data Analyst Batch 3",
                      })
                    }
                    className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-orange-500/40 shadow-xl max-w-sm w-full bg-black/50"
                  >
                    <img
                      src={
                        batch3VisualTab === "poster"
                          ? "/bootcamp-data-analyst-batch3.png"
                          : "/bootcamp-data-analyst-batch3-jadwal.png"
                      }
                      alt={
                        batch3VisualTab === "poster"
                          ? "Poster Bootcamp Data Analyst Batch 3"
                          : "Jadwal Bootcamp Data Analyst Batch 3"
                      }
                      className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <span className="bg-seara-orange text-white font-bold text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Klik untuk Memperbesar</span>
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-3 text-center">
                    Klik gambar untuk melihat resolusi penuh (1080 x 1350)
                  </p>
                </div>

                {/* Right Breakdown / Schedule List */}
                <div className="lg:col-span-6 space-y-4">
                  {batch3VisualTab === "poster" ? (
                    <div className="space-y-4">
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                        <span className="text-xs font-bold text-orange-300 uppercase tracking-wider block mb-2">
                          Yang Akan Kamu Dapatkan di Batch 3:
                        </span>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span><strong>8 Sesi Live Interactive</strong> bersama mentor praktisi industri</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span><strong>Akses Rekaman Kelas & Bahan Belajar</strong> seumur hidup (lifetime access)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span><strong>Praktek Studi Kasus Bisnis Nyata</strong> end-to-end</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span><strong>Bimbingan Portfolio Review</strong> untuk CV dan LinkedIn</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span><strong>Sertifikat Kelulusan Resmi</strong> ber-ID unik terverifikasi di searadata.com</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span><strong>Komunitas Eksklusif Seara Data</strong> untuk info lowongan & diskusi</span>
                          </li>
                        </ul>
                      </div>

                      {/* Pricing CTA Box */}
                      <div className="bg-gradient-to-r from-orange-500/20 via-rose-500/20 to-amber-500/20 border border-orange-500/40 rounded-2xl p-5">
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <div>
                            <span className="text-xs text-gray-400 line-through">Harga Normal Rp 699.000</span>
                            <div className="text-2xl sm:text-3xl font-black text-white">Rp 329.000</div>
                          </div>
                          <span className="bg-gradient-to-r from-rose-600 to-seara-orange text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                            Promo Terbatas
                          </span>
                        </div>
                        <a
                          href={CLICKY_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-seara-orange hover:bg-orange-600 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 text-sm sm:text-base"
                        >
                          <Zap className="w-4 h-4 fill-white" />
                          <span>Daftar Sekarang di clicky.id/searadata</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
                      <span className="text-xs font-bold text-orange-300 uppercase tracking-wider block mb-2">
                        Rincian 8 Pertemuan Live Sesi Batch 3:
                      </span>
                      {[
                        { sesi: "Sesi 1", tgl: "28 OCT", jam: "19.30 – 22.00 WIB", topic: "Excel Basic for Data Analysts & Become a Data Analyst", tool: "Excel" },
                        { sesi: "Sesi 2", tgl: "31 OCT", jam: "09.30 – 12.00 WIB", topic: "Excel Intermediate & Power Query", tool: "Excel" },
                        { sesi: "Sesi 3", tgl: "4 NOV", jam: "19.30 – 22.00 WIB", topic: "Power BI Basic, DAX & Data Calculation", tool: "Power BI" },
                        { sesi: "Sesi 4", tgl: "7 NOV", jam: "09.30 – 12.00 WIB", topic: "Power BI Advanced & Data Visualization", tool: "Power BI" },
                        { sesi: "Sesi 5", tgl: "11 NOV", jam: "19.30 – 22.00 WIB", topic: "Python Basic & Data Cleaning", tool: "Python" },
                        { sesi: "Sesi 6", tgl: "14 NOV", jam: "09.30 – 12.00 WIB", topic: "Python Advanced & Data Transformation", tool: "Python" },
                        { sesi: "Sesi 7", tgl: "18 NOV", jam: "19.30 – 22.00 WIB", topic: "SQL Basic, Query & Filter Data", tool: "SQL" },
                        { sesi: "Sesi 8", tgl: "21 NOV", jam: "09.30 – 12.00 WIB", topic: "SQL Intermediate, Join & Aggregation", tool: "SQL" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="bg-white/5 border border-white/10 hover:border-orange-500/40 p-3 rounded-xl flex items-center justify-between gap-3 text-xs transition-colors"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="w-14 shrink-0 text-center font-black text-seara-orange bg-orange-500/10 border border-orange-500/20 py-1 rounded-lg">
                              {item.tgl}
                            </span>
                            <div className="min-w-0">
                              <p className="font-bold text-white truncate">{item.topic}</p>
                              <p className="text-[10px] text-gray-400">{item.sesi} · {item.jam}</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-gray-300 bg-white/10 px-2 py-0.5 rounded shrink-0">
                            {item.tool}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Section CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a
                href={CLICKY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="batch3-register-cta"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 via-seara-orange to-amber-500 hover:brightness-105 text-white font-black px-8 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2 text-center text-base"
              >
                <Zap className="w-5 h-5 fill-white" />
                <span>Daftar Batch 3 Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/6287811856600?text=Halo%20Admin%20Seara,%20saya%20mau%20tanya%20tentang%20Bootcamp%20Batch%203!"
                target="_blank"
                rel="noopener noreferrer"
                id="batch3-wa-cta"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-full transition-all text-center text-base flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Tanya Admin via WA</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Live Interactive via Zoom</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Mentoring Industri Nyata</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Akses Lifetime Rekaman & Materi</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Portofolio & Sertifikat Resmi</span>
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================
            FINAL CTA SECTION
           ======================================================== */}
        <section className="py-20 px-6 bg-seara-dark text-white text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 font-display">
              Ready to Take Your Next Step in Data?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto">
              Kuasai 4 tools utama, bangun portofolio komprehensif, dan mulai perjalanan karir datamu bersama Seara Data.
            </p>
            <a
              href={CLICKY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="final-bootcamp-cta"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-seara-orange to-amber-500 hover:brightness-105 text-white font-bold px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl active:scale-95 text-base"
            >
              <Zap className="w-5 h-5 fill-white" />
              <span>Daftar Bootcamp Batch 3 (Live Now)</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </div>

      {/* ========================================================
          BATCH DETAIL MODAL (For Batch 1, Batch 2 & Batch 3)
         ======================================================== */}
      <AnimatePresence>
        {selectedBatch && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBatch(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 z-10 my-8 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedBatch(null)}
                className="absolute top-5 right-5 p-2 text-gray-400 hover:text-seara-dark bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-black px-3 py-1 rounded-full uppercase ${
                  selectedBatch.isLive
                    ? "bg-gradient-to-r from-rose-600 to-seara-orange text-white animate-pulse"
                    : "bg-seara-orange text-white"
                }`}>
                  {selectedBatch.label}
                </span>
                {selectedBatch.date && (
                  <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{selectedBatch.date}</span>
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-seara-dark mb-1 font-display">
                Bootcamp Data Analyst {selectedBatch.title}
              </h3>
              <p className="text-xs font-bold text-seara-orange mb-4 flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{selectedBatch.duration}</span>
              </p>

              {/* Pricing Box if available */}
              {selectedBatch.pricePromo && (
                <div className="bg-orange-50 border border-orange-200 p-3 rounded-2xl mb-5 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-gray-500 line-through block">Harga Normal: {selectedBatch.priceNormal}</span>
                    <span className="text-base font-black text-seara-orange">Harga Promo: {selectedBatch.pricePromo}</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-seara-orange text-white px-2.5 py-1 rounded-full">
                    Hemat 53%
                  </span>
                </div>
              )}

              {/* Tab Selector if Batch has scheduleImage */}
              {selectedBatch.scheduleImage && (
                <div className="flex gap-2 mb-5 border-b border-gray-100 pb-3">
                  <button
                    onClick={() => setModalTab("poster")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      modalTab === "poster"
                        ? "bg-seara-orange text-white shadow-xs"
                        : "bg-gray-100 text-gray-600 hover:text-seara-dark"
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Poster Resmi</span>
                  </button>
                  <button
                    onClick={() => setModalTab("jadwal")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      modalTab === "jadwal"
                        ? "bg-seara-orange text-white shadow-xs"
                        : "bg-gray-100 text-gray-600 hover:text-seara-dark"
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Jadwal Sesi</span>
                  </button>
                  <button
                    onClick={() => setModalTab("kurikulum")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      modalTab === "kurikulum"
                        ? "bg-seara-orange text-white shadow-xs"
                        : "bg-gray-100 text-gray-600 hover:text-seara-dark"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Rincian Modul</span>
                  </button>
                </div>
              )}

              {/* Poster Preview */}
              {(!selectedBatch.scheduleImage || modalTab === "poster") && selectedBatch.posterImage && (
                <div
                  onClick={() =>
                    setLightboxImage({
                      src: selectedBatch.posterImage,
                      title: `Poster Bootcamp ${selectedBatch.title}`,
                    })
                  }
                  className="mb-6 rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center cursor-zoom-in relative group max-h-72"
                >
                  <img
                    src={selectedBatch.posterImage}
                    alt={`Poster ${selectedBatch.title}`}
                    className="w-full h-full object-contain max-h-72"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-seara-dark text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                      Perbesar Gambar
                    </span>
                  </div>
                </div>
              )}

              {/* Schedule Image & Table Preview */}
              {selectedBatch.scheduleImage && modalTab === "jadwal" && (
                <div className="space-y-4 mb-6">
                  <div
                    onClick={() =>
                      setLightboxImage({
                        src: selectedBatch.scheduleImage!,
                        title: `Jadwal Sesi Bootcamp ${selectedBatch.title}`,
                      })
                    }
                    className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center cursor-zoom-in relative group max-h-64"
                  >
                    <img
                      src={selectedBatch.scheduleImage}
                      alt={`Jadwal ${selectedBatch.title}`}
                      className="w-full h-full object-contain max-h-64"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/90 text-seara-dark text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                        Perbesar Jadwal
                      </span>
                    </div>
                  </div>

                  {selectedBatch.schedule && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Rincian Pertemuan & Jam WIB:
                      </h4>
                      <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                        {selectedBatch.schedule.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between gap-2 p-2 bg-gray-50 border border-gray-100 rounded-xl text-xs"
                          >
                            <span className="font-bold text-seara-orange shrink-0">{item.date}</span>
                            <span className="text-gray-700 font-medium truncate flex-1">{item.topic}</span>
                            <span className="text-[10px] text-gray-400 shrink-0">{item.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Mentors in Modal */}
              {selectedBatch.mentors && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                    Mentor Pengajar
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedBatch.mentors.map((mentor, i) => (
                      <div key={i} className="flex items-center gap-3 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                        {mentor.photo && (
                          <img
                            src={mentor.photo}
                            alt={mentor.name}
                            className="w-10 h-10 rounded-xl object-cover shrink-0"
                          />
                        )}
                        <div className="min-w-0">
                          <p className="font-bold text-xs text-seara-dark truncate">{mentor.name}</p>
                          <p className="text-[11px] text-gray-500 truncate">{mentor.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {selectedBatch.description}
              </p>

              {/* Curriculum Overview */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Syllabus & Core Modules
                </h4>
                <div className="space-y-2">
                  {selectedBatch.curriculumOverview.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700 bg-gray-50 p-2.5 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-seara-orange shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Outcomes */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Key Milestones & Achievements
                </h4>
                <div className="space-y-2">
                  {selectedBatch.keyOutcomes.map((out, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700 bg-orange-50/50 border border-orange-100 p-2.5 rounded-xl">
                      <Zap className="w-4 h-4 text-seara-orange shrink-0 mt-0.5" />
                      <span className="font-semibold text-gray-800">{out}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                <a
                  href={CLICKY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-orange-500 via-seara-orange to-amber-500 hover:brightness-105 text-white font-bold py-3 px-4 rounded-xl text-center text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-white" />
                  <span>Daftar Batch 3 di Clicky.id</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setSelectedBatch(null)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-5 rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================
          IMAGE LIGHTBOX MODAL (Full Resolution View)
         ======================================================== */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-3xl max-h-[92vh] flex flex-col items-center"
            >
              <div className="w-full flex items-center justify-between text-white mb-3 px-2">
                <span className="text-xs sm:text-sm font-bold truncate">{lightboxImage.title}</span>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer ml-2"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-auto rounded-2xl border border-white/20 bg-stone-900 max-h-[80vh]">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  className="w-auto h-auto max-h-[78vh] object-contain mx-auto"
                />
              </div>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href={CLICKY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-seara-orange hover:bg-orange-600 text-white text-xs font-bold px-5 py-2.5 rounded-full flex items-center gap-1.5 shadow-md"
                >
                  <Zap className="w-3.5 h-3.5 fill-white" />
                  <span>Daftar Batch 3 Sekarang</span>
                </a>
                <a
                  href={lightboxImage.src}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Buka di Tab Baru</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
