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
  MessageSquare
} from "lucide-react";

// Types
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
  sessionsCount?: string;
  hoursCount?: string;
  curriculumOverview: string[];
  keyOutcomes: string[];
  isComingSoon?: boolean;
}

export default function Bootcamp() {
  const [selectedBatch, setSelectedBatch] = useState<BatchDetail | null>(null);
  const [activeTool, setActiveTool] = useState<"excel" | "powerbi" | "python" | "sql">("excel");

  const CLICKY_LINK = "https://clicky.id/searadata";

  const batches: BatchDetail[] = [
    {
      id: "batch-1",
      batchNumber: "Batch 1",
      label: "THE BEGINNING",
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
      label: "BATCH 2",
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
      label: "COMING SOON",
      title: "Batch 3",
      duration: "4 Weeks Intensive · 8 Sessions · 20+ Hours",
      date: "Coming Soon 2026",
      description:
        "Batch 3 memiliki kurikulum dan struktur yang sama dengan Batch 2: program 4 minggu intensif (8 sesi, 20+ jam) mencakup Excel, Power BI, Python, dan SQL dengan hands-on business cases serta pembuatan portofolio data.",
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
      isComingSoon: true,
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

  const testimonials = [
    {
      quote:
        "Bootcamp ini benar-benar membantu saya mengembalikan semangat untuk berkarir sebagai data analyst. Dari materi yang jelas, mentor yang sabar dan detail, hingga informasi yang terstruktur.",
      name: "Fadia Rahmawati",
      role: "Bootcamp Data Analyst Batch 1",
      badge: "Alumni Batch 1",
    },
    {
      quote:
        "Materi Excel, Power BI, Python, dan SQL disampaikan dengan jelas, disertai hands-on project yang relevan dan bisa dijadikan portfolio.",
      name: "Arif Vernando",
      role: "Bootcamp Data Analyst",
      badge: "Alumni Batch 2",
    },
    {
      quote:
        "Sebagai fresh graduate yang masih bingung menentukan arah karier, bootcamp ini membantu saya belajar secara terarah tanpa merasa overwhelmed.",
      name: "Participant",
      role: "Bootcamp Data Analyst",
      badge: "Fresh Graduate Learner",
    },
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
            HERO SECTION
           ======================================================== */}
        <header className="relative pt-12 pb-20 md:pt-20 md:pb-28 px-6 overflow-hidden">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[350px] bg-gradient-to-tr from-seara-orange/15 to-amber-200/20 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/90 border border-orange-200/80 px-4 py-1.5 rounded-full shadow-xs mb-8 backdrop-blur-xs"
            >
              <span className="flex h-2 w-2 rounded-full bg-seara-orange animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-seara-orange">
                Seara Data · Intensive Career Program
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-seara-dark tracking-tight leading-[1.08] mb-6 font-display"
            >
              Bootcamp <br className="hidden sm:inline" />
              <span className="text-seara-orange underline decoration-orange-200 decoration-wavy decoration-2 underline-offset-8">
                Data Analyst
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 tracking-tight mb-6"
            >
              From Learning Data to Building Real-World Skills.
            </motion.h2>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              An intensive learning experience designed to help you build practical Data Analyst skills through Excel, Power BI, Python, SQL, hands-on practice, and portfolio projects.
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
            >
              <button
                onClick={() => scrollToSection("journey")}
                id="hero-explore-journey-btn"
                className="w-full sm:w-auto bg-seara-dark text-white hover:bg-black font-bold px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Our Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={CLICKY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-coming-soon-btn"
                className="w-full sm:w-auto bg-seara-orange text-white hover:brightness-95 font-bold px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 text-center"
              >
                <Sparkles className="w-4 h-4" />
                <span>Coming Soon — Batch 3</span>
              </a>
            </motion.div>

            {/* Hero Visual Mockup: Clean Data Analytics Interactive Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-14 max-w-4xl mx-auto bg-white rounded-3xl p-5 md:p-8 border border-gray-200/80 shadow-xl shadow-gray-200/40 relative text-left"
            >
              {/* Mockup Window Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-semibold text-gray-400">
                    seara-data-analytics-workspace.sql
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-seara-orange bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60">
                  <Zap className="w-3.5 h-3.5" />
                  <span>4 Core Tools Integrated</span>
                </div>
              </div>

              {/* 4 Tool Mini Preview Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="bg-gray-50 hover:bg-orange-50/50 p-3 rounded-2xl border border-gray-100 transition-colors">
                  <div className="flex items-center gap-2 text-emerald-600 mb-1">
                    <FileSpreadsheet className="w-4 h-4" />
                    <span className="text-xs font-bold">01. Excel</span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium truncate">Data Cleaning & Power Query</p>
                </div>

                <div className="bg-gray-50 hover:bg-orange-50/50 p-3 rounded-2xl border border-gray-100 transition-colors">
                  <div className="flex items-center gap-2 text-amber-600 mb-1">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-xs font-bold">02. Power BI</span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium truncate">DAX & KPI Dashboards</p>
                </div>

                <div className="bg-gray-50 hover:bg-orange-50/50 p-3 rounded-2xl border border-gray-100 transition-colors">
                  <div className="flex items-center gap-2 text-blue-600 mb-1">
                    <Code2 className="w-4 h-4" />
                    <span className="text-xs font-bold">03. Python</span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium truncate">Pandas Wrangling & EDA</p>
                </div>

                <div className="bg-gray-50 hover:bg-orange-50/50 p-3 rounded-2xl border border-gray-100 transition-colors">
                  <div className="flex items-center gap-2 text-violet-600 mb-1">
                    <Database className="w-4 h-4" />
                    <span className="text-xs font-bold">04. SQL</span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium truncate">JOIN, Group By & Subqueries</p>
                </div>
              </div>

              {/* Code / Visual Pipeline Snippet */}
              <div className="bg-seara-dark rounded-2xl p-5 text-gray-200 font-mono text-xs md:text-sm overflow-x-auto shadow-inner">
                <div className="flex items-center justify-between text-gray-400 text-xs mb-3 border-b border-gray-700 pb-2">
                  <span className="text-orange-400 font-semibold">-- Real-World Query & Business Metric Output</span>
                  <span className="text-[10px] bg-gray-800 px-2 py-0.5 rounded text-gray-300">Live Execution</span>
                </div>
                <p className="text-purple-300 font-medium">
                  WITH <span className="text-white">CohortAnalysis</span> AS (
                </p>
                <p className="pl-4 text-gray-300">
                  <span className="text-cyan-400">SELECT</span> user_id, <span className="text-yellow-300">COUNT</span>(order_id) <span className="text-cyan-400">AS</span> total_orders, <span className="text-yellow-300">SUM</span>(revenue) <span className="text-cyan-400">AS</span> lifetime_val
                </p>
                <p className="pl-4 text-gray-300">
                  <span className="text-cyan-400">FROM</span> transactions <span className="text-cyan-400">WHERE</span> status = <span className="text-emerald-400">&apos;COMPLETED&apos;</span> <span className="text-cyan-400">GROUP BY</span> user_id
                </p>
                <p className="text-purple-300 font-medium">)</p>
                <p className="text-cyan-400">SELECT</p>
                <p className="pl-4 text-emerald-300">AVG(lifetime_val) AS avg_clv, COUNT(user_id) AS active_retained_users</p>
                <p className="text-cyan-400">FROM <span className="text-white">CohortAnalysis</span>;</p>
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
                Two batches. Hundreds of hours of learning. One continuous mission — helping learners take a more structured step into the world of data.
              </p>
            </div>

            {/* Horizontal Interactive Journey Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {batches.map((batch, index) => {
                const isComing = batch.isComingSoon;

                return (
                  <motion.div
                    key={batch.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className={`rounded-3xl p-7 flex flex-col justify-between transition-all relative ${
                      isComing
                        ? "bg-gradient-to-b from-orange-500/10 via-white to-orange-50 border-2 border-seara-orange shadow-lg shadow-orange-500/10"
                        : "bg-seara-cream/60 border border-gray-200 hover:border-orange-300 hover:shadow-md"
                    }`}
                  >
                    {/* Top Label & Batch Number */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span
                          className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider ${
                            isComing
                              ? "bg-seara-orange text-white shadow-xs"
                              : "bg-gray-900 text-white"
                          }`}
                        >
                          {batch.label}
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
                      {isComing ? (
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
            TESTIMONIALS (What Our Participants Say)
           ======================================================== */}
        <section className="py-20 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-orange-100 text-seara-orange font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
                ⭐ ALUMNI FEEDBACK
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-seara-dark tracking-tight font-display mb-4">
                What Our Participants Say
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Hear directly from previous batch participants who transformed their skills and built practical confidence.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testi, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="bg-seara-cream/60 rounded-3xl p-7 border border-gray-200/90 flex flex-col justify-between hover:border-orange-300 transition-all"
                >
                  <div>
                    {/* 5 Stars Rating */}
                    <div className="flex items-center gap-1 text-amber-400 mb-5">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic mb-6">
                      &ldquo;{testi.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author Meta */}
                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-seara-dark">{testi.name}</h4>
                      <p className="text-xs text-gray-500">{testi.role}</p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-100 text-seara-orange">
                      {testi.badge}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            BATCH 3 SECTION (Strongest CTA Area)
           ======================================================== */}
        <section id="batch3" className="py-24 px-6 bg-gradient-to-b from-orange-500 via-seara-orange to-[#e44d2d] text-white relative overflow-hidden">
          {/* Decorative Backdrops */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white border border-white/30 mb-8"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMING SOON</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-display leading-[1.1]"
            >
              Your Data Analyst Journey Starts Next.
            </motion.h2>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base sm:text-xl text-orange-50/95 max-w-2xl mx-auto leading-relaxed mb-10 space-y-4"
            >
              <p className="font-bold text-white text-lg sm:text-2xl">
                Batch 3 is coming soon.
              </p>
              <p className="text-sm sm:text-base opacity-90">
                Continue the journey with a more structured learning experience designed to help you build the skills, projects, and confidence needed to take your next step in data.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
            >
              <a
                href={CLICKY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="batch3-waiting-list-cta"
                className="w-full sm:w-auto bg-white text-seara-dark hover:bg-orange-50 font-black px-8 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2 text-center text-base"
              >
                <span>Join the Waiting List</span>
                <ArrowRight className="w-4 h-4 text-seara-orange" />
              </a>

              <a
                href="https://www.instagram.com/searadata"
                target="_blank"
                rel="noopener noreferrer"
                id="batch3-follow-cta"
                className="w-full sm:w-auto bg-black/20 hover:bg-black/30 border border-white/40 text-white font-bold px-8 py-4 rounded-full transition-all text-center text-base flex items-center justify-center gap-2"
              >
                <span>Follow Seara Data</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>
            </motion.div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 text-xs text-orange-100 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Priority Early Bird Notification</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Direct Access to Mentors</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Free Learning Resources</span>
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
              Learn the tools. Build the skills. Create the portfolio. Start your data career.
            </p>
            <a
              href={CLICKY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="final-bootcamp-cta"
              className="inline-flex items-center gap-2 bg-seara-orange text-white hover:brightness-95 font-bold px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl active:scale-95 text-base"
            >
              <Sparkles className="w-5 h-5" />
              <span>Coming Soon — Batch 3</span>
            </a>
          </div>
        </section>
      </div>

      {/* ========================================================
          BATCH DETAIL MODAL (For Batch 1 & Batch 2 Details)
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
                <span className="text-xs font-black px-3 py-1 rounded-full uppercase bg-seara-orange text-white">
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
              <p className="text-xs font-bold text-seara-orange mb-6 flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{selectedBatch.duration}</span>
              </p>

              {/* Poster Preview if available */}
              {selectedBatch.posterImage && (
                <div className="mb-6 rounded-2xl overflow-hidden border border-gray-200 max-h-64 bg-gray-50 flex items-center justify-center">
                  <img
                    src={selectedBatch.posterImage}
                    alt={`Poster ${selectedBatch.title}`}
                    className="w-full h-full object-cover"
                  />
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
                  className="flex-1 bg-seara-orange text-white hover:brightness-95 font-bold py-3 px-4 rounded-xl text-center text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Join Next Batch (Batch 3)</span>
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

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
