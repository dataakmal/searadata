import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  Star, 
  ArrowRight,
  Award,
  Users,
  Instagram,
  ExternalLink,
  Building2,
  CheckCircle2,
  Quote,
  Search,
  Sparkles,
  GraduationCap,
  MessageSquare,
  TrendingUp,
  Check,
  Filter
} from "lucide-react";

interface TestimoniItem {
  nama: string;
  pesan: string;
  rating: number;
  program: string;
  highlight?: string;
}

export default function Testimoni() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const dataTestimoni: TestimoniItem[] = [
    // KATEGORI: Bootcamp Data Analyst
    {
      nama: "Yasril Jahja",
      pesan: "Bimbingan intensif dan kurikulum praktis 4 tools (Excel, Power BI, Python, SQL) di Bootcamp Batch 1 Seara Data sangat membantu saya membangun pondasi analisa data bisnis dan portofolio nyata yang kuat hingga lolos sebagai ODP Data Analytics di BNI.",
      rating: 10,
      program: "Bootcamp Data Analyst",
      highlight: "Diterima Kerja sebagai ODP Data Analytics di PT Bank Negara Indonesia (Persero) Tbk (BNI)"
    },
    {
      nama: "Fajar Nugraha",
      pesan: "Kurikulum Bootcamp sangat terarah dan relevan dengan kebutuhan industri. Belajar SQL kompleks dan visualisasi dashboard Power BI dari data riil membuat saya percaya diri saat apply kerja.",
      rating: 10,
      program: "Bootcamp Data Analyst"
    },
    {
      nama: "Rizky Ramadhan",
      pesan: "Mentor sangat responsif membimbing dari nol coding sampai bisa bikin project end-to-end. Penjelasan konsep data cleaning & eksplorasi sangat detail.",
      rating: 10,
      program: "Bootcamp Data Analyst"
    },
    {
      nama: "Siti Rahmawati",
      pesan: "Studi kasusnya nyata dan bukan sekadar teori. Sangat puas dengan feedback personal mentor terhadap tugas mingguan dan final capstone project.",
      rating: 9,
      program: "Bootcamp Data Analyst"
    },
    {
      nama: "Kevin Pratama",
      pesan: "Sangat terbantu dengan sesi review portofolio dan resume. Mentor memberikan arahan konkret bagaimana menyusun bullet point impact yang dicari recruiter.",
      rating: 10,
      program: "Bootcamp Data Analyst"
    },

    // KATEGORI: FG Seara (Fresh Graduate Mentorship)
    {
      nama: "Bryant",
      pesan: "Bimbingan terstruktur dan materi praktis di FG Seara sangat membantu dalam memperkuat pemahaman fundamental data, penataan portofolio yang stand-out, hingga optimasi CV dan persiapan interview saat proses seleksi di Samsung Electronics Indonesia.",
      rating: 10,
      program: "FG Seara",
      highlight: "Diterima Kerja di PT Samsung Electronics Indonesia"
    },
    {
      nama: "Athalia Dwiyansari Qomar",
      pesan: "Program dan bimbingan di FG Seara memberi pemahaman langsung mengenai cara menganalisis data bisnis dan menyajikan dashboard yang actionable. Portofolio proyek nyata yang dibuat menjadi modal berharga saat melamar hingga diterima di Aerostreet.",
      rating: 10,
      program: "FG Seara",
      highlight: "Diterima Kerja di Aerostreet"
    },
    {
      nama: "Anisa Putri Lestari",
      pesan: "Sebagai fresh graduate yang bukan dari jurusan IT/Statistika, FG Seara adalah jalan pintas terbaik untuk paham workflow data analyst secara praktis dan terstruktur.",
      rating: 10,
      program: "FG Seara"
    },
    {
      nama: "Dimas Anggoro",
      pesan: "Bimbingan karir dan pembedahan CV ATS sangat membuka mata. Dalam 1 bulan setelah mempraktikkan saran mentor, panggilan interview saya meningkat drastis.",
      rating: 10,
      program: "FG Seara"
    },
    {
      nama: "Nabila Zahra",
      pesan: "Komunitas belajar yang sangat suportif! Diskusi kasus riil dan tips interview teknis dari mentor beneran ngebantu banget saat proses rekrutmen.",
      rating: 9,
      program: "FG Seara"
    },

    // KATEGORI: Mentoring Private 1-on-1
    {
      nama: "Bagus Setiawan",
      pesan: "Sesi 1-on-1 bareng mentor Mas Akmal sangat memuaskan. CV saya dibedah tuntas dan simulasi mock interview teknis SQL beneran mirip sama tes user aslinya.",
      rating: 10,
      program: "Mentoring 1-on-1"
    },
    {
      nama: "Clara Devina",
      pesan: "Konsultasi portfolio website data bareng Mas Zahrul sangat mencerahkan. Beliau ngasih feedback detil soal UI/UX dashboard dan pemilihan metrik bisnis.",
      rating: 10,
      program: "Mentoring 1-on-1"
    },
    {
      nama: "Taufik Hidayat",
      pesan: "Mentoring machine learning & query optimization bareng Mas Achmad langsung to the point menyelesaikan blocker skripsi dan project kantor.",
      rating: 10,
      program: "Mentoring 1-on-1"
    },

    // KATEGORI 1: Mini Course Python For Automation
    {
      nama: "Widayatullah Ra'yan Gunung Jati",
      pesan: "Menambah wawasan untuk saya yang ingin terjun ke dunia data",
      rating: 9,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Irfan Maulana",
      pesan: "Materi sangat helpful terutama Airflow-nya untuk otomatisasi data",
      rating: 7,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Stevanus Gunawan",
      pesan: "Penjelasannya mudah dimengerti dan ramah untuk pemula",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Melvia Eriva Ikhsan",
      pesan: "Materi disampaikan dengan bahasa sederhana sehingga konsep yang rumit jadi lebih mudah dipahami",
      rating: 9,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Imam Zakiyuddin",
      pesan: "Sangat bermanfaat dan menambah pengalaman baru untuk pengembangan diri di bidang data",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Reza Maulana",
      pesan: "Sangat insightful karena materinya menarik dan penyampaiannya sangat detail",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Marcelle",
      pesan: "Sangat Menarik dan Memberikan pemahaman baru",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Hildanniar Fauzi",
      pesan: "Sangat membantu memahami Python Automation untuk pemula",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Adhyatnika Nugraha",
      pesan: "Materi menarik, hanya saja fokus pada Airtable terasa sedikit kurang",
      rating: 9,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Dania Amelia Ansyori",
      pesan: "Mini course seru, insightful, ramah pemula, dan sangat worth it",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Thoriq Fauzul Azhim",
      pesan: "Penjelasan step by step, use case jelas, dan sangat straightforward",
      rating: 9,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Priska Rio Saputro",
      pesan: "Materi on point dan cocok untuk pemula",
      rating: 8,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Stevanus Gunawan",
      pesan: "Materi sangat mudah dipahami dan diajarkan dari nol sampai bisa",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Muhammad Rhesa Dhiyaulhaq",
      pesan: "Ilmunya sangat berdaging bagi yang berkonsentrasi di bidang data analyst",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Fatwa Rafiudin",
      pesan: "Menambah ilmu baru",
      rating: 8,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Muhammad Afnan Yusuf Dhiaulhaq",
      pesan: "Mantap bang",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "DIMAS ARIE PRASOJO",
      pesan: "Mohon maaf tidak maksimal belajarnya karena adik masuk rumah sakit",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Muhammad Fahrul Islam",
      pesan: "Sangat memuaskan",
      rating: 8,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Kusuma Pratiwi",
      pesan: "Trainer menjelaskan dengan rinci, telaten, dan sabar kepada peserta",
      rating: 8,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Khoirunnisa Mawarni Javinda",
      pesan: "Seru banget dan sangat detail",
      rating: 8,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Muhammad Reza Barus",
      pesan: "Materi dan pengajarnya jelas",
      rating: 8,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "NANDA OKTAVIANA",
      pesan: "Materi dijelaskan dengan sangat baik dan mudah diikuti oleh pemula",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Muh. Son Aghni",
      pesan: "Materi dan praktiknya keren, diajarkan step by step oleh mentor yang sabar",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Ave Lisa Sihombing",
      pesan: "Tutor sangat sabar, materi bermanfaat, dan berkesan",
      rating: 9,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Hanif Razin Rahmatullah",
      pesan: "Menambah pengalaman menggunakan Python and memahami pekerjaan Data Engineer",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Amantha Meissy Liando",
      pesan: "Baik, materi yang diberikan lengkap",
      rating: 8,
      program: "Mini Course Python For Automation"
    },

    // KATEGORI 2: Mini Course Data Engineer
    {
      nama: "Cyril Saulnier Mikanen Gultom",
      pesan: "Cukup mudah diikuti dan sangat direkomendasikan untuk yang baru ingin terjun menjadi Data Engineer",
      rating: 8,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Azmi Muhammad Nafis",
      pesan: "Sangat insightful, dibimbing dari nol, dan sangat ramah untuk pemula",
      rating: 9,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Mikhael Oktavianus Dulas",
      pesan: "Mantap",
      rating: 10,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Dinda Raraswati",
      pesan: "Mendapat insight baru terkait API dan data pipeline dengan penjelasan yang mudah dipahami",
      rating: 9,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Akbar Sergio",
      pesan: "Mantap, meskipun tidak sempat mengikuti karena salah memahami jadwal",
      rating: 10,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Melvia Eriva Ikhsan",
      pesan: "Materi berkelas dengan banyak aha moment and penjelasan yang sistematis",
      rating: 10,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Moh. Harwin Prayoga",
      pesan: "Sudah cukup bagus, hanya bagian coding terasa sedikit cepat untuk pemula",
      rating: 9,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Nadia Adyutarahma Putri",
      pesan: "Fundamental Data Engineer dijelaskan dengan sangat baik dan sesi Q&A sangat membantu",
      rating: 8,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Syahrul Munir",
      pesan: "Keren, semoga ada kelas lanjutan dari beginner ke intermediate",
      rating: 8,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Aulia Firdatunnisa",
      pesan: "Mudah diikuti dan mudah dipahami bagi yang masih awam tentang Data Engineer",
      rating: 8,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Dimas Ayika",
      pesan: "Sangat baik",
      rating: 8,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Antonius Oktavian Tanianto",
      pesan: "Pembahasannya menarik dan mentornya sangat sabar menjelaskan",
      rating: 10,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Rintaldi Ghazian Hindami",
      pesan: "Sering-sering mengadakan kegiatan seperti ini lagi",
      rating: 8,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Muhammad Afnan Yusuf Dhiaulhaq",
      pesan: "Penyampaian materi mudah dipahami dan sangat membantu memahami profesi Data Engineer",
      rating: 10,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Sugih Pratama Nugraha",
      pesan: "Keren",
      rating: 10,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Muhammad Sidqy Dhiaulhaq",
      pesan: "Seru banget dan banyak insight terutama mengenai API",
      rating: 8,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Muchammad Muqorrobin",
      pesan: "Course yang seru dan menambah wawasan mengenai Data Engineer",
      rating: 9,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Rifaldi Dwi Priana",
      pesan: "Materi maupun pemateri sudah sangat baik",
      rating: 10,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Ahmez",
      pesan: "Menarik",
      rating: 7,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Aulia Nur Joviandi",
      pesan: "Flow materi sangat baik dan mudah diikuti",
      rating: 9,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Risky Nirmala Dewi",
      pesan: "Materinya seru dan cocok untuk pemula yang baru belajar Data Engineering",
      rating: 9,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Muh. Son Aghni",
      pesan: "Belajar fundamental Data Engineering dengan penjelasan yang detail, terstruktur, dan mudah dipahami",
      rating: 9,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Muhammad Fahrul Islam",
      pesan: "Memberikan insight yang baik",
      rating: 8,
      program: "Mini Course Data Engineer"
    },
    {
      nama: "Bima Syahrul T",
      pesan: "Seru dan insightful",
      rating: 10,
      program: "Mini Course Data Engineer"
    }
  ];

  const categories = [
    "Semua",
    "Bootcamp Data Analyst",
    "FG Seara",
    "Mentoring 1-on-1",
    "Mini Course Python For Automation",
    "Mini Course Data Engineer"
  ];

  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [minRating, setMinRating] = useState<number>(0);

  // Filtered reviews using useMemo
  const filteredReviews = useMemo(() => {
    return dataTestimoni.filter(item => {
      const matchCategory = activeCategory === "Semua" ? true : item.program === activeCategory;
      const matchSearch = searchQuery.trim() === "" 
        ? true 
        : item.nama.toLowerCase().includes(searchQuery.toLowerCase()) || 
          item.pesan.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.program.toLowerCase().includes(searchQuery.toLowerCase());
      const matchRating = minRating === 0 ? true : item.rating >= minRating;
      return matchCategory && matchSearch && matchRating;
    });
  }, [dataTestimoni, activeCategory, searchQuery, minRating]);

  // Statistics calculation
  const totalReviews = dataTestimoni.length;
  
  const averageRating = useMemo(() => {
    return (dataTestimoni.reduce((sum, item) => sum + item.rating, 0) / totalReviews).toFixed(1);
  }, [dataTestimoni, totalReviews]);

  const perfectScores = useMemo(() => {
    return dataTestimoni.filter(item => item.rating === 10).length;
  }, [dataTestimoni]);

  const getInitials = (name: string) => {
    const words = name.trim().split(" ");
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return words[0] ? words[0][0].toUpperCase() : "S";
  };

  const getBadgeStyle = (program: string) => {
    if (program.includes("Bootcamp")) {
      return "bg-orange-50 text-seara-orange border-orange-200";
    }
    if (program.includes("FG Seara")) {
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    }
    if (program.includes("Mentoring")) {
      return "bg-purple-50 text-purple-700 border-purple-200";
    }
    if (program.includes("Python")) {
      return "bg-rose-50 text-rose-700 border-rose-200";
    }
    return "bg-sky-50 text-sky-700 border-sky-200";
  };

  return (
    <div className="min-h-screen bg-seara-cream text-seara-dark font-sans flex flex-col justify-between">
      <div>
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <header className="pt-16 pb-12 px-6 text-center">
          <motion.div 
            className="max-w-4xl mx-auto space-y-6"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.span 
              variants={fadeIn}
              className="inline-flex items-center gap-1.5 bg-orange-100 text-seara-orange px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Alumni Wall & Career Success</span>
            </motion.span>
            
            <motion.h1 
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.15] text-seara-dark tracking-tight font-display"
            >
              Testimoni & Kisah Sukses <br />
              <span className="text-seara-orange">Alumni Seara Data</span>
            </motion.h1>

            <motion.p 
              variants={fadeIn}
              className="text-base sm:text-lg text-[#5a5a5a] max-w-2xl mx-auto leading-relaxed"
            >
              Dengarkan langsung cerita nyata dari 1.000+ pembelajar yang mentransformasi pemahaman data, portofolio nyata, hingga menembus karir impian mereka.
            </motion.p>

            {/* Statistics Cards */}
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4"
            >
              <div className="bg-white rounded-2xl border border-orange-100 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl sm:text-3xl font-black text-seara-dark flex items-center justify-center gap-1.5">
                  <Users className="w-5 h-5 text-seara-orange" />
                  <span>{totalReviews}+</span>
                </div>
                <div className="text-[11px] font-bold text-gray-400 uppercase mt-1">Ulasan Terdata</div>
              </div>

              <div className="bg-white rounded-2xl border border-orange-100 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl sm:text-3xl font-black text-seara-dark flex items-center justify-center gap-1.5">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span>{averageRating}/10</span>
                </div>
                <div className="text-[11px] font-bold text-gray-400 uppercase mt-1">Kepuasan Materi</div>
              </div>

              <div className="bg-white rounded-2xl border border-orange-100 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl sm:text-3xl font-black text-seara-dark flex items-center justify-center gap-1.5">
                  <Award className="w-5 h-5 text-rose-500" />
                  <span>{perfectScores}</span>
                </div>
                <div className="text-[11px] font-bold text-gray-400 uppercase mt-1">Rating 10/10</div>
              </div>

              <div className="bg-white rounded-2xl border border-orange-100 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl sm:text-3xl font-black text-seara-dark flex items-center justify-center gap-1.5">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <span>100%</span>
                </div>
                <div className="text-[11px] font-bold text-gray-400 uppercase mt-1">Praktik Nyata</div>
              </div>
            </motion.div>

            {/* Quick Links to Standalone Pages */}
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-semibold text-gray-600"
            >
              <span>Jelajahi Program:</span>
              <Link to="/bootcamp" className="inline-flex items-center gap-1 bg-white hover:bg-orange-50 border border-orange-200 px-3 py-1 rounded-full text-seara-orange transition-colors">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Bootcamp Data Analyst</span>
              </Link>
              <Link to="/fg-seara" className="inline-flex items-center gap-1 bg-white hover:bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-emerald-700 transition-colors">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FG Seara</span>
              </Link>
              <Link to="/mentoring" className="inline-flex items-center gap-1 bg-white hover:bg-purple-50 border border-purple-200 px-3 py-1 rounded-full text-purple-700 transition-colors">
                <Users className="w-3.5 h-3.5" />
                <span>Mentoring 1-on-1</span>
              </Link>
            </motion.div>
          </motion.div>
        </header>

        {/* FEATURED: INSTAGRAM ALUMNI SUCCESS STORIES */}
        <section className="px-6 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 space-y-2">
              <span className="inline-flex items-center gap-1.5 bg-orange-100 text-seara-orange px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Kisah Sukses Alumni • Verified Career Hired</span>
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-seara-dark">
                Alumni yang Telah Diterima Kerja
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
                Bukti nyata alumni Seara Data yang menembus perusahaan multinasional & brand terkemuka di Indonesia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Card 1: Yasril Jahja - BNI */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[32px] border-2 border-orange-100 shadow-lg p-7 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden hover:border-seara-orange/50 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3 pb-3 border-b border-gray-100">
                    <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-800 border border-teal-200 px-3 py-1 rounded-full text-xs font-bold">
                      <Building2 className="w-3.5 h-3.5 text-teal-600" /> BNI
                    </span>
                    <a
                      href="https://www.instagram.com/p/DbxE-fsCbEY/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-600 bg-pink-50 hover:bg-pink-100 px-2.5 py-1 rounded-full transition-all border border-pink-200"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Instagram</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-700 text-white font-display font-black text-lg flex items-center justify-center shadow-sm">
                      Y
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-base text-seara-dark">Yasril Jahja</h4>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>
                      <p className="text-xs text-gray-500">ODP Data Analytics di PT Bank Negara Indonesia (Persero) Tbk</p>
                      <span className="inline-block mt-1 text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 uppercase tracking-wider">
                        Alumni Bootcamp Batch 1
                      </span>
                    </div>
                  </div>

                  <div className="bg-orange-50/40 p-4 rounded-2xl border border-orange-100/60 relative">
                    <Quote className="w-6 h-6 text-orange-200 absolute top-2 right-2 pointer-events-none" />
                    <p className="text-xs text-gray-700 leading-relaxed italic relative z-10">
                      "Bimbingan intensif dan kurikulum praktis 4 tools (Excel, Power BI, Python, SQL) di Bootcamp Batch 1 Seara Data sangat membantu saya membangun pondasi analisa data bisnis dan portofolio nyata yang kuat hingga lolos sebagai ODP Data Analytics di BNI."
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/p/DbxE-fsCbEY/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:opacity-95 text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Lihat Postingan Resmi di Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Card 2: Bryant - Samsung Electronics Indonesia */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-[32px] border-2 border-orange-100 shadow-lg p-7 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden hover:border-seara-orange/50 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3 pb-3 border-b border-gray-100">
                    <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold">
                      <Building2 className="w-3.5 h-3.5 text-blue-600" /> Samsung
                    </span>
                    <a
                      href="https://www.instagram.com/p/DcFVLNyCQZM/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-600 bg-pink-50 hover:bg-pink-100 px-2.5 py-1 rounded-full transition-all border border-pink-200"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Instagram</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-display font-black text-lg flex items-center justify-center shadow-sm">
                      B
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-base text-seara-dark">Bryant</h4>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>
                      <p className="text-xs text-gray-500">Diterima Kerja di PT Samsung Electronics Indonesia</p>
                      <span className="inline-block mt-1 text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 uppercase tracking-wider">
                        Alumni FG Seara
                      </span>
                    </div>
                  </div>

                  <div className="bg-orange-50/40 p-4 rounded-2xl border border-orange-100/60 relative">
                    <Quote className="w-6 h-6 text-orange-200 absolute top-2 right-2 pointer-events-none" />
                    <p className="text-xs text-gray-700 leading-relaxed italic relative z-10">
                      "Bimbingan terstruktur dan materi praktis di Seara Data sangat membantu dalam memperkuat pemahaman fundamental data, penataan portofolio yang stand-out, hingga optimasi CV dan persiapan interview saat proses seleksi di Samsung Electronics Indonesia."
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/p/DcFVLNyCQZM/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:opacity-95 text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Lihat Postingan Resmi di Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Card 3: Athalia Dwiyansari Qomar - Aerostreet */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-[32px] border-2 border-orange-100 shadow-lg p-7 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden hover:border-seara-orange/50 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3 pb-3 border-b border-gray-100">
                    <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold">
                      <Building2 className="w-3.5 h-3.5 text-emerald-600" /> Aerostreet
                    </span>
                    <a
                      href="https://www.instagram.com/p/DcM9RZ6Cfwt/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-600 bg-pink-50 hover:bg-pink-100 px-2.5 py-1 rounded-full transition-all border border-pink-200"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Instagram</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white font-display font-black text-lg flex items-center justify-center shadow-sm">
                      A
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-base text-seara-dark">Athalia Dwiyansari Qomar</h4>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>
                      <p className="text-xs text-gray-500">Diterima Kerja di Aerostreet</p>
                      <span className="inline-block mt-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 uppercase tracking-wider">
                        Alumni FG Seara
                      </span>
                    </div>
                  </div>

                  <div className="bg-orange-50/40 p-4 rounded-2xl border border-orange-100/60 relative">
                    <Quote className="w-6 h-6 text-orange-200 absolute top-2 right-2 pointer-events-none" />
                    <p className="text-xs text-gray-700 leading-relaxed italic relative z-10">
                      "Program dan bimbingan di Seara Data memberi pemahaman langsung mengenai cara menganalisis data bisnis dan menyajikan dashboard yang actionable. Portofolio proyek nyata yang dibuat menjadi modal berharga saat melamar hingga diterima di Aerostreet."
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/p/DcM9RZ6Cfwt/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:opacity-95 text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Lihat Postingan Resmi di Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Filter & Search Section */}
        <section className="px-6 mb-10">
          <div className="max-w-6xl mx-auto space-y-5">
            {/* Search and Score Bar */}
            <div className="bg-white rounded-2xl border border-orange-100 p-4 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search input */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari nama alumni atau kata kunci..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-orange-50/40 border border-orange-100 rounded-xl focus:outline-none focus:border-seara-orange focus:bg-white transition-all text-seara-dark"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-seara-orange"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Rating score filter buttons */}
              <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                <span className="text-xs font-bold text-gray-400 whitespace-nowrap">Filter Skor:</span>
                <button
                  onClick={() => setMinRating(0)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    minRating === 0
                      ? "bg-seara-dark text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Semua
                </button>
                <button
                  onClick={() => setMinRating(10)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                    minRating === 10
                      ? "bg-amber-500 text-white shadow-sm"
                      : "bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100"
                  }`}
                >
                  <Star className="w-3 h-3 fill-current" />
                  <span>10/10 Sempurna</span>
                </button>
                <button
                  onClick={() => setMinRating(9)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    minRating === 9
                      ? "bg-seara-orange text-white shadow-sm"
                      : "bg-orange-50 text-seara-orange border border-orange-200 hover:bg-orange-100"
                  }`}
                >
                  <span>9+ Sangat Puas</span>
                </button>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat, idx) => {
                const count = cat === "Semua" 
                  ? dataTestimoni.length 
                  : dataTestimoni.filter(i => i.program === cat).length;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all active:scale-95 border cursor-pointer flex items-center gap-1.5 ${
                      activeCategory === cat 
                        ? "bg-seara-orange text-white border-seara-orange shadow-md shadow-orange-500/10"
                        : "bg-white border-orange-100 text-[#5a5a5a] hover:bg-orange-50/50"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      activeCategory === cat ? "bg-white/20 text-white" : "bg-orange-100 text-seara-orange"
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Grid Container */}
        <section className="py-12 px-6 bg-white rounded-t-[48px] border-t border-orange-100/50 shadow-inner">
          <div className="max-w-6xl mx-auto">
            {/* Header info */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
              <div className="text-xs sm:text-sm font-semibold text-gray-500">
                Menampilkan <span className="font-bold text-seara-dark">{filteredReviews.length}</span> ulasan alumni
                {activeCategory !== "Semua" && <span> untuk <span className="text-seara-orange font-bold">{activeCategory}</span></span>}
              </div>
              {(activeCategory !== "Semua" || searchQuery || minRating !== 0) && (
                <button
                  onClick={() => {
                    setActiveCategory("Semua");
                    setSearchQuery("");
                    setMinRating(0);
                  }}
                  className="text-xs font-bold text-seara-orange hover:underline"
                >
                  Reset Semua Filter
                </button>
              )}
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              layout
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              {filteredReviews.map((reviewer, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  layout
                  className="bg-white rounded-[28px] border border-orange-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    {/* Top rating and badge row */}
                    <div className="flex justify-between items-start gap-2">
                      {/* Bintang */}
                      <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                        <span className="text-xs font-black text-amber-800">{reviewer.rating}/10</span>
                      </div>

                      {/* Program badge */}
                      <span className={`text-[10px] uppercase font-black tracking-wider px-2.5 py-1 rounded-lg border ${getBadgeStyle(reviewer.program)}`}>
                        {reviewer.program}
                      </span>
                    </div>

                    {/* Optional Highlight if hired */}
                    {reviewer.highlight && (
                      <div className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>{reviewer.highlight}</span>
                      </div>
                    )}

                    {/* Testimonial Statement */}
                    <p className="text-gray-600 text-xs sm:text-sm italic leading-relaxed pt-1">
                      &ldquo;{reviewer.pesan}&rdquo;
                    </p>
                  </div>

                  {/* Profile info row */}
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-white flex items-center justify-center font-extrabold text-xs shrink-0 shadow-sm">
                      {getInitials(reviewer.nama)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <h4 className="text-xs sm:text-sm font-extrabold text-seara-dark truncate">
                          {reviewer.nama}
                        </h4>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      </div>
                      <p className="text-[10px] text-gray-400 font-semibold uppercase mt-0.5 tracking-wider">
                        Verified Learner
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredReviews.length === 0 && (
              <div className="text-center py-20 bg-orange-50/30 rounded-3xl border border-dashed border-orange-200 p-8">
                <p className="text-gray-500 font-bold text-sm">Tidak ada testimoni yang cocok dengan filter atau kata kunci "{searchQuery}".</p>
                <button
                  onClick={() => {
                    setActiveCategory("Semua");
                    setSearchQuery("");
                    setMinRating(0);
                  }}
                  className="mt-3 bg-seara-orange text-white text-xs font-bold px-4 py-2 rounded-xl hover:brightness-105 transition-all"
                >
                  Tampilkan Semua Ulasan
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Share Story Banner */}
        <section className="py-12 px-6 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border-t border-orange-100">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 bg-white p-8 rounded-3xl border border-orange-200 shadow-sm">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-[11px] font-extrabold text-seara-orange uppercase tracking-wider">Alumni Corner</span>
              <h4 className="text-xl font-bold font-display text-seara-dark">
                Punya Cerita Belajar di Seara Data?
              </h4>
              <p className="text-xs text-gray-500 max-w-md">
                Ceritakan pengalamanmu saat mengikuti bootcamp, mini course, atau mentoring untuk menginspirasi talenta data lainnya!
              </p>
            </div>
            <a
              href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea,%20saya%20alumni%20Seara%20Data%20dan%20ingin%20berbagi%20testimoni!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-seara-dark hover:bg-black text-white px-6 py-3 rounded-2xl font-bold text-xs flex items-center gap-2 whitespace-nowrap shadow-sm hover:scale-105 transition-all shrink-0"
            >
              <MessageSquare className="w-4 h-4 text-seara-orange" />
              <span>Kirim Testimoni via WhatsApp</span>
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-seara-cream/40 border-t border-orange-100/50">
          <div className="max-w-4xl mx-auto bg-white rounded-[32px] border border-orange-100 p-10 md:p-14 text-center space-y-6 shadow-xl hover:scale-[1.01] transition-transform duration-300">
            <span className="inline-block bg-orange-100 text-seara-orange px-4 py-1.5 rounded-full text-xs font-black tracking-wide uppercase">
              MULAI SEKARANG
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold font-display text-seara-dark">
              Ingin Menjadi Bagian dari Kisah Sukses Berikutnya?
            </h3>
            <p className="text-[#5a5a5a] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Bergabunglah dengan ribuan alumni yang telah meningkatkan keterampilan data, portofolio, dan karir mereka bersama Seara Data.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Link 
                to="/bootcamp"
                className="inline-flex items-center gap-2 bg-seara-orange text-white px-8 py-3.5 rounded-2xl font-bold hover:brightness-105 active:scale-95 transition-all text-sm shadow-md shadow-orange-500/10"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Daftar Bootcamp</span>
              </Link>
              <Link 
                to="/fg-seara"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-emerald-700 active:scale-95 transition-all text-sm shadow-md shadow-emerald-500/10"
              >
                <Sparkles className="w-4 h-4" />
                <span>Program FG Seara</span>
              </Link>
              <Link 
                to="/program"
                className="inline-flex items-center gap-2 bg-white text-seara-dark border border-gray-200 px-8 py-3.5 rounded-2xl font-bold hover:bg-gray-50 active:scale-95 transition-all text-sm"
              >
                <span>Lihat 5 Layanan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
