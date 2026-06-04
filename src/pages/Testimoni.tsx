import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Star, 
  Instagram, 
  Linkedin, 
  MessageSquare, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  Award,
  Users
} from "lucide-react";

interface TestimoniItem {
  nama: string;
  pesan: string;
  rating: number;
  program: string;
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
      pesan: "Penjelasannya mudah dimengerti, tidak terlalu cepat juga jadi bagi yang awam seperti saya pun jadi bisa mengikuti sampai akhir. Saya tunggu course-course yang lainnya ya mas.",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Melvia Eriva Ikhsan",
      pesan: "Materi disampaikan dengan bahasa yang sederhana sehingga konsep yang tadinya terlihat rumit jadi jauh lebih mudah dipahami. Mentornya sangat suportif dan lingkungan belajarnya sangat interaktif.",
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
      pesan: "Sangat insightful sekali karena materinya menarik dan penyampaiannya detail banget",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Hildanniar Fauzi",
      pesan: "Sangat membantu memahami python automation untuk pemula",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Dania Amelia Ansyori",
      pesan: "Mini course nya seru, insightful, dan ramah pemula. Saya merasa kami dibimbing banget, dan ga dibedain sama sekali dari yang masih awam banget. Materi dan kebutuhan untuk course juga udah disiapin rapih, untuk harga under 100k sangat worth.",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Thoriq Fauzul Azhim",
      pesan: "Di Mini Course Seara satisfying banget sih, diajarinnya step by step. Use case nya jelas, penjelasannya tidak bertele tele, pokoknya jelas lah, best 9/10.",
      rating: 9,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Nanda Oktaviana",
      pesan: "Materi dijelaskan dengan sangat baik dan sebagai pemula yang benar-benar awam kelasnya dapat diikuti dengan baik.",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Muh. Son Aghni",
      pesan: "Materi & praktiknya keren. Diajari step by step oleh mentor yang sangat sabar, telaten, & efektif dalam menyampaikan ilmu & praktik tools nya.",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Hanif Razin Rahmatullah",
      pesan: "Seneng banget bisa ikut mini course ini, jadi tambah pengalaman. Jadi tahu apa aja yang dikerjain sama Data Engineer.",
      rating: 10,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Kusuma Pratiwi",
      pesan: "Trainer benar-benar menjelaskan secara rinci dan telaten, sabar dalam menjelaskan kepada peserta. Semoga kedepannya makin banyak program course data di Seara Data.",
      rating: 8,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Priska Rio Saputro",
      pesan: "Materi on point, cocok untuk pemula",
      rating: 8,
      program: "Mini Course Python For Automation"
    },
    {
      nama: "Muhammad Fahrul Islam",
      pesan: "Sangat memuaskan",
      rating: 8,
      program: "Mini Course Python For Automation"
    },

    // KATEGORI 2: Mini Class Data Engineer
    {
      nama: "Cyril Saulnier Mikanen Gultom",
      pesan: "Cukup mudah untuk diikuti, dan recommended untuk orang yang baru mau terjun menjadi data engineer",
      rating: 8,
      program: "Mini Class Data Engineer"
    },
    {
      nama: "Azmi Muhammad Nafis",
      pesan: "Sangat insightful dan juga dibimbing dari 0 banget, pemula friendly banget sukses terus Seara Data",
      rating: 9,
      program: "Mini Class Data Engineer"
    },
    {
      nama: "Dinda Raraswati",
      pesan: "Dapat insight baru terkait data engineering terkait API dan data pipeline (hands on dan teori). Kak Mario juga ngajarinnya cukup perlahan supaya semua orang paham.",
      rating: 9,
      program: "Mini Class Data Engineer"
    },
    {
      nama: "Melvia Eriva Ikhsan",
      pesan: "Materi berkelas dengan banyak Aha! Moment. Penjelasan yang sistematis sukses memberikan kejelasan pada konsep yang kompleks.",
      rating: 10,
      program: "Mini Class Data Engineer"
    },
    {
      nama: "Nadia Adyutarahma Putri",
      pesan: "Delivery-nya best jadi paham sama fundamental data engineer. Sesi Q&A-nya juga seru, semua pertanyaan dijawab dengan clear dan to the point.",
      rating: 8,
      program: "Mini Class Data Engineer"
    },
    {
      nama: "Antonius Oktavian Tanianto",
      pesan: "Pembahasannya menarik dan mentornya sangat sabar menjelaskan.",
      rating: 10,
      program: "Mini Class Data Engineer"
    },
    {
      nama: "Muhammad Afnan Yusuf Dhiaulhaq",
      pesan: "Penjelasan dan penyampaian materi dari mas Mario mudah dipahami dan cukup lengkap, sangat membantu untuk orang yang tertarik bekerja di bidang data khususnya role data engineer.",
      rating: 10,
      program: "Mini Class Data Engineer"
    },
    {
      nama: "Risky Nirmala Dewi",
      pesan: "Materinya seru. Aman untuk orang yang baru belajar DE dan tools yang digunakan tidak rumit.",
      rating: 9,
      program: "Mini Class Data Engineer"
    },
    {
      nama: "Muh. Son Aghni",
      pesan: "Serunya bisa belajar fundamental Data Engineering dari yang sudah punya jam terbang tinggi. Speakernya sangat detail & terstruktur dalam penjelasannya serta mudah dipahami bagi pemula.",
      rating: 9,
      program: "Mini Class Data Engineer"
    },
    {
      nama: "Rifaldi Dwi Priana",
      pesan: "Menurut saya secara materi maupun pemateri sudah sangat bagus",
      rating: 10,
      program: "Mini Class Data Engineer"
    },
    {
      nama: "Aulia Firdatunnisa",
      pesan: "Mudah diikuti, mudah dipahami bagi yang awam mengenai data engineer",
      rating: 8,
      program: "Mini Class Data Engineer"
    },
    {
      nama: "Bima Syahrul T",
      pesan: "Seru & insightful",
      rating: 10,
      program: "Mini Class Data Engineer"
    },
    {
      nama: "Muhammad Sidqy Dhiaulhaq",
      pesan: "Seru banget! Banyak insight dari mas Mario. Suka banget insight API nya",
      rating: 8,
      program: "Mini Class Data Engineer"
    },
    {
      nama: "Moh. Harwin Prayoga",
      pesan: "Sudah cukup bagus, materi sangat membantu untuk yang tertarik di bidang data engineering.",
      rating: 9,
      program: "Mini Class Data Engineer"
    }
  ];

  const categories = [
    "Semua",
    "Mini Course Python For Automation",
    "Mini Class Data Engineer"
  ];

  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  // Filtered reviews
  const filteredReviews = dataTestimoni.filter(item => 
    activeCategory === "Semua" ? true : item.program === activeCategory
  );

  // Statistics calculation
  const totalReviews = dataTestimoni.length;
  
  const averageRating = (
    dataTestimoni.reduce((sum, item) => sum + item.rating, 0) / totalReviews
  ).toFixed(1);

  const perfectScores = dataTestimoni.filter(item => item.rating === 10).length;

  const getInitials = (name: string) => {
    const words = name.trim().split(" ");
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return words[0] ? words[0][0].toUpperCase() : "S";
  };

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
              <Link to="/program" className="hover:text-seara-orange transition-colors">Program</Link>
              <Link to="/komunitas" className="hover:text-seara-orange transition-colors">Komunitas</Link>
              <Link to="/mentoring" className="hover:text-seara-orange transition-colors">Mentoring</Link>
              <Link to="/testimoni" className="text-seara-orange font-bold">Testimoni</Link>
              <a 
                href="https://wa.me/6281779052788?text=Halo%20Seara%20Data,%20saya%20ingin%20bertanya%20mengenai%20testimoni%20alumni%20atau%20program%20di%20Seara%20Data.%20Terima%20kasih!" 
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
            className="max-w-4xl mx-auto space-y-6"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.span 
              variants={fadeIn}
              className="inline-block bg-orange-100 text-seara-orange px-4 py-1.5 rounded-full text-xs font-black tracking-wide uppercase"
            >
              📣 SUARA MEREKA
            </motion.span>
            
            <motion.h2 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] text-seara-dark tracking-tight font-display"
            >
              Apa Kata Alumni <br />
              <span className="text-seara-orange">Seara Data</span>
            </motion.h2>

            <motion.p 
              variants={fadeIn}
              className="text-lg text-[#5a5a5a] max-w-2xl mx-auto leading-relaxed"
            >
              Lebih dari 1.000 alumni telah belajar bersama kami. Ini adalah cerita nyata perjuangan dan pencapaian mereka.
            </motion.p>

            {/* Statistics Cards */}
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8"
            >
              <div className="bg-white rounded-[24px] border border-orange-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-seara-dark flex items-center justify-center gap-2">
                  <Users className="w-6 h-6 text-seara-orange" />
                  {totalReviews}
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase mt-2">Total Testimoni</div>
              </div>

              <div className="bg-white rounded-[24px] border border-orange-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-seara-dark flex items-center justify-center gap-2">
                  <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                  {averageRating}/10
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase mt-2">Rata-rata Rating</div>
              </div>

              <div className="bg-white rounded-[24px] border border-orange-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-seara-dark flex items-center justify-center gap-2">
                  <Award className="w-6 h-6 text-rose-500" />
                  {perfectScores}
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase mt-2">Rating 10/10</div>
              </div>
            </motion.div>
          </motion.div>
        </header>

        {/* Filter Navigation Tab */}
        <section className="px-6 mb-12">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all active:scale-95 border cursor-pointer ${
                  activeCategory === cat 
                    ? "bg-seara-orange text-white border-seara-orange shadow-md shadow-orange-500/10"
                    : "bg-white border-orange-100 text-[#5a5a5a] hover:bg-orange-50/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Testimonials Grid Container */}
        <section className="py-12 px-6 bg-white rounded-t-[48px] border-t border-orange-100/50">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  className="bg-white rounded-[32px] border border-orange-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    {/* Top rating and badge row */}
                    <div className="flex justify-between items-start gap-4">
                      {/* Bintang */}
                      <div className="flex items-center gap-1.5 bg-amber-50/50 px-3 py-1.5 rounded-full border border-amber-100">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                        <span className="text-xs font-extrabold text-amber-700">{reviewer.rating}/10</span>
                      </div>

                      {/* Small badge */}
                      <span className={`text-[10px] uppercase font-black tracking-wider px-2.5 py-1.5 rounded-xl border ${
                        reviewer.program.includes("Python") 
                          ? "bg-orange-50/60 border-orange-100 text-seara-orange"
                          : "bg-sky-50/60 border-sky-100 text-sky-700"
                      }`}>
                        {reviewer.program.includes("Python") ? "Python Course" : "Data Engineer"}
                      </span>
                    </div>

                    {/* Testimonial Statement */}
                    <p className="text-gray-600 text-sm italic leading-relaxed pt-2">
                      &ldquo;{reviewer.pesan}&rdquo;
                    </p>
                  </div>

                  {/* Profile info row */}
                  <div className="flex items-center gap-4 pt-4 border-t border-orange-50/40">
                    <div className="w-10 h-10 rounded-full bg-orange-100 text-seara-orange flex items-center justify-center font-extrabold text-xs shrink-0 shadow-sm border border-orange-50">
                      {getInitials(reviewer.nama)}
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-seara-dark line-clamp-1">
                        {reviewer.nama}
                      </h4>
                      <p className="text-[10px] text-gray-400 font-semibold uppercase mt-0.5 tracking-wider">
                        Alumni Program
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredReviews.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-400 font-bold">Belum ada testimoni untuk kategori ini.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-seara-cream/30 border-t border-orange-100/50">
          <div className="max-w-4xl mx-auto bg-white rounded-[32px] border border-orange-100 p-12 md:p-16 text-center space-y-6 shadow-xl hover:scale-[1.01] transition-transform duration-300">
            <h3 className="text-3xl md:text-4xl font-extrabold font-display text-seara-dark">
              Ingin Jadi Bagian dari Cerita Ini?
            </h3>
            <p className="text-[#5a5a5a] max-w-2xl mx-auto leading-relaxed">
              Bergabunglah dengan ratusan alumni yang sudah merasakan manfaat belajar di Seara Data. Kuasai industri data sekarang.
            </p>
            <div className="pt-4">
              <Link 
                to="/program"
                className="inline-flex bg-seara-orange text-white px-10 py-4 rounded-2xl font-bold hover:brightness-105 active:scale-95 transition-all text-lg shadow-lg shadow-orange-500/10"
              >
                Lihat Program <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-seara-dark text-white py-12 font-sans w-full">
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
