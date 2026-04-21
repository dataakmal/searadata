import { motion } from "motion/react";
import { 
  Wand2, 
  Cpu, 
  BarChart3, 
  Instagram, 
  Linkedin, 
  Youtube, 
  MessageSquare,
  ChevronRight,
  Users,
  BookOpen,
  MonitorPlay,
  Briefcase,
  FileCode,
  MessagesSquare,
  ExternalLink,
  Heart
} from "lucide-react";

export default function App() {
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

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Recreated Logo in SVG to perfectly match the hand-drawn drawing provided */}
            <div className="w-[140px] h-14 flex items-center justify-start overflow-visible -ml-4">
              <svg viewBox="0 0 400 350" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Map Trapezoid - Hand-drawn style with slightly irregular lines */}
                <path 
                  d="M125 115 L275 110 L295 190 L105 195 Z" 
                  fill="none" 
                  stroke="#F16F53" 
                  strokeWidth="8" 
                  strokeLinecap="round"
                  strokeLinejoin="round" 
                />
                
                {/* Dashed Line from sketch */}
                <path 
                  d="M150 210 Q200 250 240 160" 
                  fill="none" 
                  stroke="#F16F53" 
                  strokeWidth="3" 
                  strokeDasharray="6 8" 
                  opacity="0.8" 
                />
                
                {/* Pin Head - Slightly tilted as in drawing */}
                <g transform="rotate(-5, 200, 70)">
                  <path d="M200 35 Q175 35 175 65 Q175 115 200 140 Q225 115 225 65 Q225 35 200 35 Z" fill="#F16F53" />
                  <circle cx="200" cy="65" r="10" fill="#f8f6f0" />
                </g>
                
                {/* SEARA Text - Stylized to match drawing's personality */}
                <text 
                  x="200" 
                  y="285" 
                  fontSize="110" 
                  fontWeight="900" 
                  textAnchor="middle" 
                  fill="#F16F53" 
                  style={{ 
                    fontFamily: '"Comic Sans MS", "Marker Felt", sans-serif', 
                    letterSpacing: '-2px'
                  }}
                >
                  SEARA
                </text>
                
                {/* DATA Text - Small and spaced out under SEARA */}
                <text 
                  x="200" 
                  y="325" 
                  fontSize="32" 
                  fontWeight="800" 
                  textAnchor="middle" 
                  fill="#F16F53" 
                  letterSpacing="18"
                  style={{ fontFamily: 'monospace' }}
                >
                  DATA
                </text>
              </svg>
            </div>
            <h1 className="text-2xl font-bold flex items-center gap-1 cursor-default">
              <span className="text-seara-orange">Seara</span>
              <span className="text-seara-dark">Data</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#program" className="hover:text-seara-orange transition-colors">Program</a>
            <a href="#komunitas" className="hover:text-seara-orange transition-colors">Komunitas</a>
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

      <main>
        {/* Current Campaign / Mini Course Alert */}
        <section className="bg-seara-dark py-2 px-6 overflow-hidden relative">
          <motion.div 
            className="whitespace-nowrap flex gap-12 text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] items-center"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                <span>🔥 Mini Course: Data Engineer 24-26 Apr</span>
                <span>✨ [FREE] Mini Class Data Engineer</span>
                <span>🚀 Career Accelerator Program Open Now</span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Hero Section */}
        <header className="py-24 px-6 text-center overflow-hidden">
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
              Mulai perjalanan datamu hari ini
            </motion.span>
            
            <motion.h2 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-extrabold mb-10 leading-[1.1] text-seara-dark tracking-tight font-display"
            >
              Seara, Data yang Bikin <br />
              <span className="text-seara-orange">Bisnismu Searah</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg text-[#5a5a5a] mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Seara Data hadir untuk membimbingmu memahami data—dari belajar, mentoring, hingga tools digital siap pakai. Mulai perjalanan datamu hari ini.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-4"
            >
              <a 
                href="https://clicky.id/searadata/dataengineer" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-seara-orange text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_10px_15px_-3px_rgba(241,111,83,0.2)] hover:brightness-95 hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                Daftar Mini Course <ChevronRight className="w-5 h-5" />
              </a>
              <a 
                href="https://chat.whatsapp.com/IEtToynaCUP2GAwelBolQc" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-seara-orange text-seara-orange px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-all flex items-center gap-2"
              >
                Join Komunitas <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </header>

        {/* Stats Section */}
        <section id="komunitas" className="px-6 mb-12">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="bg-white/50 border-y border-orange-200/50 py-10 flex flex-col md:flex-row justify-around items-center rounded-[32px] gap-8 md:gap-0"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="text-center flex-1">
                <div className="text-4xl md:text-5xl font-black text-seara-orange mb-1">1,000+</div>
                <div className="text-gray-500/60 font-bold uppercase text-[10px] tracking-widest">Alumni & Member</div>
              </motion.div>
              
              <div className="hidden md:block w-px h-10 bg-orange-200/50"></div>

              <motion.div variants={fadeIn} className="text-center flex-1">
                <div className="text-4xl md:text-5xl font-black text-seara-orange mb-1">16+</div>
                <div className="text-gray-500/60 font-bold uppercase text-[10px] tracking-widest">Sesi Pertemuan</div>
              </motion.div>

              <div className="hidden md:block w-px h-10 bg-orange-200/50"></div>

              <motion.div variants={fadeIn} className="text-center flex-1">
                <div className="text-4xl md:text-5xl font-black text-seara-orange mb-1">20+</div>
                <div className="text-gray-500/60 font-bold uppercase text-[10px] tracking-widest">Digital Products</div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <a 
                href="https://chat.whatsapp.com/IEtToynaCUP2GAwelBolQc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-seara-orange font-bold hover:underline"
              >
                Join Komunitas WhatsApp <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Programs Section (Kegiatan Kami) */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
              <div>
                <h3 className="text-3xl md:text-5xl font-bold font-display">Program Terdekat</h3>
                <p className="text-gray-500 mt-2">Jangan lewatkan kesempatan belajar langsung dari expert industri.</p>
              </div>
              <div className="w-20 h-1.5 bg-seara-orange rounded-full hidden md:block"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Event 1: Mini Course */}
              <motion.div 
                className="group bg-white rounded-[32px] border border-orange-100 overflow-hidden shadow-sm hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[4/5] overflow-hidden bg-orange-50 relative">
                  <img 
                    src="/poster-course.png" 
                    alt="Poster Mini Course Data Engineer 24-26 April" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://picsum.photos/seed/seara-course/800/1000';
                    }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-seara-orange text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
                       🚀 Premium Course
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-sm text-gray-400 font-bold mb-2">24 - 26 April 2026</div>
                  <h4 className="text-2xl font-bold text-seara-dark mb-4 leading-tight">
                    Mini Course: 3 Days to be Data Engineer
                  </h4>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    Explore API, ETL, Python & Database bareng Mario Caesar (Senior Data Engineer). Dapatkan sertifikat, ready-to-use script, dan real case study.
                  </p>
                  <a 
                    href="https://clicky.id/searadata/dataengineer" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-seara-orange text-white py-4 rounded-2xl font-bold hover:brightness-95 transition-all shadow-md active:scale-95 gap-2"
                  >
                    Daftar Sekarang <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>

              {/* Event 2: Free Class */}
              <motion.div 
                className="group bg-white rounded-[32px] border border-orange-100 overflow-hidden shadow-sm hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="aspect-[4/5] overflow-hidden bg-green-50 relative">
                  <img 
                    src="/poster-free.png" 
                    alt="Poster Free Mini Class Data Engineer 22 April" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://picsum.photos/seed/seara-free/800/1000';
                    }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-green-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
                       ✨ FREE ACCESS
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-sm text-gray-400 font-bold mb-2">22 April 2026 | 20:00 - 21:00 WIB</div>
                  <h4 className="text-2xl font-bold text-seara-dark mb-4 leading-tight">
                    Mini Class: Career Framework for New Starters
                  </h4>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    Belajar data dari 0! Pahami framework berkarier sebagai Data Engineer di industri finansial bersama Senior DE dari Singapore Fintech.
                  </p>
                  <a 
                    href="https://forms.gle/5vbinpepZzvzF7rKA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-white border-2 border-seara-orange text-seara-orange py-4 rounded-2xl font-bold hover:bg-orange-50 transition-all shadow-sm active:scale-95 gap-2"
                  >
                    Amankan Kursi <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="program" className="py-24 px-6 max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-seara-dark">Layanan & Program</h3>
            <div className="w-20 h-1.5 bg-seara-orange mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <MonitorPlay className="w-6 h-6" />,
                title: "Corporate Training Data",
                desc: "Program pelatihan data komprehensif yang dirancang khusus untuk kebutuhan korporasi. Membantu tim Anda menguasai pengolahan dan visualisasi data untuk pengambilan keputusan strategis."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Mentoring 1-on-1",
                desc: "Sesi bimbingan personal yang berfokus pada pengembangan karier dan portofolio. Kami membantu Anda memetakan jalur karier data yang tepat dan membangun personal brand yang kompetitif."
              },
              {
                icon: <MessagesSquare className="w-6 h-6" />,
                title: "Konsultasi Data",
                desc: "Pendampingan profesional untuk penyelesaian proyek data bisnis maupun akademis. Kami memberikan solusi teknis yang akurat dan aplikatif untuk setiap tantangan data Anda."
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Mini Course",
                desc: "Akselerasi skill spesifik melalui 6 modul intensif selama 3 hari. Dirancang untuk memberikan pemahaman mendalam secara sistematis dan praktis dalam waktu singkat."
              },
              {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Career Accelerator",
                desc: "Program persiapan karier terintegrasi, mulai dari optimalisasi CV, penyusunan portofolio berbasis proyek nyata, hingga simulasi interview teknis tingkat lanjut."
              },
              {
                icon: <FileCode className="w-6 h-6" />,
                title: "Produk Digital",
                desc: "Kumpulan aset referensi belajar data mandiri, termasuk roadmap kurikulum, dataset eksklusif, dan template portofolio standar industri untuk hasil profesional."
              }
            ].map((program, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-[32px] border border-transparent hover:border-seara-orange/50 transition-all duration-300 group shadow-sm hover:shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-12 h-12 bg-seara-cream rounded-xl flex items-center justify-center text-seara-orange mb-6 group-hover:scale-110 transition-transform">
                  {program.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-seara-dark">{program.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {program.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Dynamic Insights from LinkedIn */}
        <section className="py-24 px-6 bg-[#f8f6f0]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <h3 className="text-3xl md:text-5xl font-bold mb-4 font-display">Tingkatkan Skill Datamu</h3>
                <p className="text-[#5a5a5a] text-lg">Intip insight terbaru dan tips karier eksklusif dari kami di LinkedIn.</p>
              </div>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/seara-data" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-orange-100 hover:text-seara-orange transition-colors shadow-sm font-bold text-sm">
                  <Linkedin className="w-5 h-5 text-[#0077b5]" /> Ikuti di LinkedIn
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Career Path", title: "Data Engineer for New Starters: Skillset Wajib di 2026", link: "https://www.linkedin.com/company/seara-data" },
                { label: "Business", title: "How to Win The Boardroom: Menjual Data ke C-Level", link: "https://www.linkedin.com/company/seara-data" },
                { label: "Programming", title: "Python for Automation: Cara Cerdas Kerja Lebih Efisien", link: "https://www.linkedin.com/company/seara-data" },
                { label: "Mindset", title: "Speak Business, Think Data: Bridging the Gap", link: "https://www.linkedin.com/company/seara-data" }
              ].map((insight, idx) => (
                <motion.a 
                  key={idx}
                  href={insight.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-2xl border border-transparent hover:border-seara-orange/20 transition-all group flex flex-col justify-between min-h-[200px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-black text-seara-orange mb-3 block">{insight.label}</span>
                    <h5 className="font-bold text-seara-dark group-hover:text-seara-orange transition-colors leading-snug text-lg">
                      {insight.title}
                    </h5>
                  </div>
                  <div className="mt-4 flex items-center text-[10px] text-gray-400 font-bold group-hover:translate-x-2 transition-transform">
                    LIHAT POSTINGAN <ChevronRight className="w-3 h-3 ml-1" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-5xl font-bold font-display mb-4">Apa Kata Mereka</h3>
              <p className="text-gray-500 max-w-2xl mx-auto">Lebih dari sekadar belajar, kami membangun komunitas yang saling mendukung.</p>
              <div className="w-20 h-1.5 bg-seara-orange mx-auto rounded-full mt-6"></div>
            </div>

            <div className="relative group">
              <div className="flex overflow-hidden relative">
                {/* Gradient Fades for smoother edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                
                <motion.div 
                  className="flex gap-6 px-4 py-8"
                  initial={{ x: 0 }}
                  animate={{ x: "-50%" }}
                  transition={{ 
                    duration: 60, 
                    repeat: Infinity, 
                    ease: "linear",
                  }}
                  style={{ width: "max-content" }}
                >
                  {[
                    {
                      name: "Muhammad Afnan Yusuf Dhiaulhaq",
                      role: "Peserta Mini Course",
                      image: "https://picsum.photos/seed/afnan/100/100",
                      quote: "Mantap bang 👍."
                    },
                    {
                      name: "Stevanus Gunawan",
                      role: "Peserta Mini Course",
                      image: "https://picsum.photos/seed/stevanus/100/100",
                      quote: "Penjelasannya mudah di mengerti, tidak terlalu cepat juga jadi bagi yang awam seperti saya pun jadi bisa mengikuti sampai akhir. Saya tunggu course-course yang lainnya ya mas."
                    },
                    {
                      name: "Widayatullah Ra'yan Gunung Jati",
                      role: "Peserta Mini Course",
                      image: "https://picsum.photos/seed/rayan/100/100",
                      quote: "Menambah wawasan untuk saya yang ingin terjun ke dunia data."
                    },
                    {
                      name: "Irfan Maulana",
                      role: "Peserta Mini Course",
                      image: "https://picsum.photos/seed/irfan/100/100",
                      quote: "Materi sangat helpful terutama Airflow-nya untuk otomatisasi data."
                    },
                    {
                      name: "Thoriq Fauzul Azhim",
                      role: "Peserta Mini Course",
                      image: "https://picsum.photos/seed/thoriq/100/100",
                      quote: "Di Mini Course Seara satisfying banget sih, diajarinnya step by step meskipun harapan saya bisa diajari fundamentally dari sisi pemograman, tapi sudah sangat straightforward. Use case nya jelas, penjelasannya tidak bertele tele, pokoknya jelas lah, best 9/10."
                    },
                    {
                      name: "Melvia Eriva Ikhsan",
                      role: "Peserta Mini Course",
                      image: "https://picsum.photos/seed/melvia/100/100",
                      quote: "Materi disampaikan dengan bahasa yang sederhana sehingga konsep yang tadinya terlihat rumit jadi jauh lebih mudah dipahami. Mentornya sangat suportif dan lingkungan belajarnya sangat interaktif."
                    },
                    {
                      name: "Dania Amelia Ansyori",
                      role: "Peserta Mini Course",
                      image: "https://picsum.photos/seed/dania/100/100",
                      quote: "Mini course nya seru, insightful, dan ramah pemula. Saya merasa kami dibimbing banget, dan ga dibedain sama sekali dari yang masih awam banget. Materi dan kebutuhan untuk course juga udah disiapin rapih, untuk harga under 100k sangat worth."
                    }
                  ].concat([
                    {
                      name: "Muhammad Afnan Yusuf Dhiaulhaq",
                      role: "Peserta Mini Course",
                      image: "https://picsum.photos/seed/afnan/100/100",
                      quote: "Mantap bang 👍."
                    },
                    {
                      name: "Stevanus Gunawan",
                      role: "Peserta Mini Course",
                      image: "https://picsum.photos/seed/stevanus/100/100",
                      quote: "Penjelasannya mudah di mengerti, tidak terlalu cepat juga jadi bagi yang awam seperti saya pun jadi bisa mengikuti sampai akhir. Saya tunggu course-course yang lainnya ya mas."
                    },
                    {
                      name: "Widayatullah Ra'yan Gunung Jati",
                      role: "Peserta Mini Course",
                      image: "https://picsum.photos/seed/rayan/100/100",
                      quote: "Menambah wawasan untuk saya yang ingin terjun ke dunia data."
                    },
                    {
                      name: "Irfan Maulana",
                      role: "Peserta Mini Course",
                      image: "https://picsum.photos/seed/irfan/100/100",
                      quote: "Materi sangat helpful terutama Airflow-nya untuk otomatisasi data."
                    },
                    {
                      name: "Thoriq Fauzul Azhim",
                      role: "Peserta Mini Course",
                      image: "https://picsum.photos/seed/thoriq/100/100",
                      quote: "Di Mini Course Seara satisfying banget sih, diajarinnya step by step meskipun harapan saya bisa diajari fundamentally dari sisi pemograman, tapi sudah sangat straightforward. Use case nya jelas, penjelasannya tidak bertele tele, pokoknya jelas lah, best 9/10."
                    },
                    {
                      name: "Melvia Eriva Ikhsan",
                      role: "Peserta Mini Course",
                      image: "https://picsum.photos/seed/melvia/100/100",
                      quote: "Materi disampaikan dengan bahasa yang sederhana sehingga konsep yang tadinya terlihat rumit jadi jauh lebih mudah dipahami. Mentornya sangat suportif dan lingkungan belajarnya sangat interaktif."
                    },
                    {
                      name: "Dania Amelia Ansyori",
                      role: "Peserta Mini Course",
                      image: "https://picsum.photos/seed/dania/100/100",
                      quote: "Mini course nya seru, insightful, dan ramah pemula. Saya merasa kami dibimbing banget, dan ga dibedain sama sekali dari yang masih awam banget. Materi dan kebutuhan untuk course juga udah disiapin rapih, untuk harga under 100k sangat worth."
                    }
                  ]).map((testi, idx) => (
                    <div 
                      key={idx} 
                      className="min-w-[320px] md:min-w-[450px] bg-white p-8 rounded-[32px] border border-orange-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div className="mb-6">
                        <div className="flex gap-1 text-seara-orange mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Heart key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <p className="text-seara-dark font-medium leading-relaxed text-lg italic">
                          "{testi.quote}"
                        </p>
                      </div>
                      <div className="flex items-center gap-4 border-t border-orange-50 pt-6">
                        <img 
                          src={testi.image} 
                          alt={testi.name} 
                          className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all border-2 border-orange-100 shadow-inner"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <div className="font-bold text-seara-dark">{testi.name}</div>
                          <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">{testi.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto rounded-[32px] overflow-hidden relative">
            <div className="absolute inset-0 bg-seara-orange opacity-5"></div>
            <div className="relative bg-white/40 backdrop-blur-sm border border-orange-100/50 p-12 md:p-20 text-center rounded-[32px]">
              <h3 className="text-3xl md:text-5xl font-bold mb-8 font-display">Jangan Jalan Sendirian Lagi</h3>
              <p className="text-lg text-[#5a5a5a] mb-10 max-w-2xl mx-auto">
                Gue pernah ada di posisi lo—bingung, kewalahan, dan nggak tau harus mulai dari mana. Di Seara Data, lo bakal dapet bimbingan nyata.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://wa.me/6281779052788?text=Halo%20Seara%20Data,%20saya%20ingin%20konsultasi%20mengenai%20project%20data%20saya"
                  className="inline-block bg-seara-orange text-white px-12 py-5 rounded-2xl font-bold text-xl hover:brightness-110 transition-all shadow-xl active:scale-95"
                >
                  Konsultasi Sekarang
                </a>
                <a 
                  href="https://saweria.co/akmalfauuzan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-seara-dark border border-gray-200 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all shadow-sm active:scale-95"
                >
                  Dukung Kami <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-seara-dark text-white py-12 font-sans">
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
