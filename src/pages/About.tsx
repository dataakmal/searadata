import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Linkedin, 
  Users, 
  Target, 
  Heart, 
  Sparkles, 
  Briefcase, 
  Code, 
  Database, 
  Globe,
  ArrowRight,
  MessageSquare
} from "lucide-react";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-neutral-50/50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="bg-gradient-to-b from-orange-50/80 via-white to-neutral-50/50 py-20 px-6 text-center border-b border-gray-100 relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-orange-100 text-seara-orange px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tentang Seara Data</span>
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-seara-dark tracking-tight mb-6 font-display leading-[1.15]"
            >
              Komunitas Belajar Data yang Dibuat oleh <span className="text-seara-orange">Praktisi Industri</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Seara Data hadir dari pengalaman nyata di lapangan untuk membimbingmu memahami data—tanpa janji instan, dengan bimbingan jujur & aplikatif.
            </motion.p>
          </div>
        </section>

        {/* 2. Founder Story Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Founder Photo & Quick Specs */}
            <motion.div {...fadeIn} className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-tr from-orange-500 to-amber-400 p-1 group">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-seara-dark relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  <img 
                    src="/akmal-profile.jpg" 
                    alt="Akmal Fauzan - Founder Seara Data" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback avatar if image fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute z-20 bottom-5 left-5 right-5 text-left text-white">
                    <h3 className="text-xl font-bold font-display">Akmal Fauzan</h3>
                    <p className="text-xs text-orange-300 font-medium">Founder & Lead Educator Seara Data</p>
                    <p className="text-[11px] text-gray-300 mt-0.5">Report Management Specialist @ Pancaran Inland Group</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a 
                  href="https://akmalfauzan.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:border-seara-orange rounded-xl text-xs font-semibold text-gray-700 hover:text-seara-orange shadow-sm transition-all"
                >
                  <Globe className="w-3.5 h-3.5 text-seara-orange" />
                  <span>akmalfauzan.vercel.app</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/akmalfauzan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-xl text-xs font-semibold shadow-sm hover:brightness-110 transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Founder Narrative */}
            <motion.div {...fadeIn} className="lg:col-span-7 space-y-6">
              <div className="inline-block bg-orange-100 text-seara-orange px-3.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                Perjalanan Founder
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-seara-dark tracking-tight font-display">
                "Gue Pernah di Posisi Lo—Bingung, Kewalahan, dan Nggak Tau Harus Mulai Dari Mana."
              </h2>

              <p className="text-gray-600 leading-relaxed text-base">
                Akmal adalah seorang <strong>Report Management Specialist</strong> dengan 3+ tahun pengalaman mengelola sistem data & pelaporan di <strong>Pancaran Inland Group</strong>, Jakarta. Selama karirnya, ia menguasai modern data stack mulai dari <strong>Python, SQL, Apache Airflow, Pentaho PDI, PostgreSQL, Power BI, Qlik Sense</strong>, hingga arsitektur <strong>OLAP</strong>.
              </p>

              <div className="bg-orange-50/70 border-l-4 border-seara-orange p-5 rounded-r-2xl space-y-2">
                <p className="text-sm font-medium text-seara-dark italic leading-relaxed">
                  "Gue apply ribuan lowongan, pernah ditolak berulang kali. Gue belajar data sendiri secara otodidak, tapi ngerasain betapa pusingnya kalau nggak ada teman dan mentor yang siap membimbing. Di Seara Data, gue pengin lo nggak mengalami penderitaan yang sama."
                </p>
                <span className="text-xs font-bold text-seara-orange block text-right">— Akmal Fauzan</span>
              </div>

              <p className="text-gray-600 leading-relaxed text-base">
                Selain berkarir di industri, Akmal juga aktif sebagai mentor di <strong>Komunitas Excel Indonesia</strong> dan <strong>TemuDataku</strong>, mendampingi ribuan orang membangun portofolio data pertama mereka hingga diterima kerja.
              </p>

              {/* Achievement Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-2xl font-black text-seara-orange font-display">1,000+</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">Community Members</div>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-2xl font-black text-seara-orange font-display">20+</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">Digital Products</div>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-2xl font-black text-seara-orange font-display">500+</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">Portfolios Built</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. Mentors & Team Section */}
        <section className="py-20 px-6 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
                Instruktur & Mentor
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-seara-dark tracking-tight font-display mt-3">
                Tim Mentor Berpengalaman Dari Industri
              </h2>
              <p className="text-gray-600 text-sm md:text-base mt-2">
                Belajar langsung dari praktisi yang setiap harinya berkutat dengan tantangan data di perusahaan ternama.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Mentor 1: M. Zahrul Wafi */}
              <motion.div 
                {...fadeIn}
                className="bg-neutral-50 rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-bold text-2xl font-display shadow-md">
                      ZW
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-seara-dark font-display">M. Zahrul Wafi</h3>
                      <p className="text-xs font-bold text-seara-orange">Excel & Power BI Mentor</p>
                      <span className="inline-block bg-gray-200/70 text-gray-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-full mt-1">
                        Bank Danamon
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-seara-orange shrink-0" />
                      <span><strong>Role:</strong> Business Data Analyst at Bank Danamon</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-seara-orange shrink-0" />
                      <span><strong>Pengalaman:</strong> 5+ Tahun Financial Analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-seara-orange shrink-0" />
                      <span><strong>Keahlian:</strong> Excel Advanced, Power BI, Dashboard Design</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-200/60 pt-4 italic">
                    "Zahrul memiliki keahlian mendalam di bidang banking analytics. Ia sangat antusias membantu peserta menguasai dashboard interaktif & otomasi Excel yang berdampak langsung."
                  </p>
                </div>
              </motion.div>

              {/* Mentor 2: Achmad Kurniansyah */}
              <motion.div 
                {...fadeIn}
                className="bg-neutral-50 rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-seara-dark text-white flex items-center justify-center font-bold text-2xl font-display shadow-md">
                      AK
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-seara-dark font-display">Achmad Kurniansyah</h3>
                      <p className="text-xs font-bold text-seara-orange">Python & SQL Mentor</p>
                      <span className="inline-block bg-gray-200/70 text-gray-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-full mt-1">
                        Dekoruma
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-seara-orange shrink-0" />
                      <span><strong>Role:</strong> Business Intelligence at Dekoruma</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-seara-orange shrink-0" />
                      <span><strong>Pengalaman:</strong> 4+ Tahun Backend & Data Engineering</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-seara-orange shrink-0" />
                      <span><strong>Keahlian:</strong> Python Automation, Complex SQL, ETL Pipeline</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-200/60 pt-4 italic">
                    "Achmad berpengalaman membangun pipeline data berskala e-commerce. Ia berfokus memberikan cara berpikir logis dan bersih dalam menulis skrip Python & SQL."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. Mission & Values Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
              Misi & Nilai Utama
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-seara-dark tracking-tight font-display mt-3">
              Membimbing Talenta Indonesia Menguasai Data
            </h2>
            <p className="text-gray-600 text-base mt-4 leading-relaxed">
              Kami percaya skill data tidak harus rumit dan teoretis. Misi kami adalah menghadirkan pembelajaran hands-on yang langsung siap pakai di dunia kerja.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div {...fadeIn} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-orange-200 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-seara-orange flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-seara-dark font-display mb-2">AUTHENTIC</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Kami tidak menjual janji manis hasil instan. Belajar data butuh proses, dan kami menemani perjalananmu secara jujur dan transparan.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-orange-200 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-seara-orange flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-seara-dark font-display mb-2">SUPPORTIVE</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Komunitas adalah jantung Seara Data. Di sini tidak ada saingan, melainkan rekan belajar yang saling mendukung dan berbagi kesempatan.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-orange-200 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-seara-orange flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-seara-dark font-display mb-2">PRACTICAL</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Setiap modul, mentoring, dan template produk dirancang berdasarkan studi kasus nyata industri. Semua bersifat hands-on.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-orange-200 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-seara-orange flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-seara-dark font-display mb-2">ACCESSIBLE</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Skill data berkualitasi tidak harus menguras kantong. Kami menyediakan akses terjangkau, materi gratis, hingga resources terlengkap.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 5. Experience & Track Record */}
        <section className="py-20 px-6 bg-seara-dark text-white">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold text-seara-orange uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
                Track Record & Pengalaman
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight font-display mt-3">
                Pengalaman Industri & Portfolio Dampak
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                Fondasi kurikulum Seara Data dibangun dari studi kasus nyata di perusahaan logistik & pertambangan besar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Corporate Experience */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-seara-orange/20 text-seara-orange">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display">Pancaran Inland Group</h3>
                    <p className="text-xs text-gray-400">Report Management Specialist • Business Control Team (3+ Tahun)</p>
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-gray-300 list-disc list-inside leading-relaxed pt-2">
                  <li>Membangun sistem pelaporan otomatis menggunakan Python & Apache Airflow.</li>
                  <li>Merancang arsitektur OLAP untuk 50+ pemangku kepentingan eksekutif.</li>
                  <li>Implementasi ETL Pipeline menggunakan Pentaho PDI & PostgreSQL.</li>
                  <li>Membuat Dashboard Executive di Power BI & Qlik Sense.</li>
                  <li>Memangkas waktu penyusunan laporan rutin dari 2 jam menjadi hanya 5 menit.</li>
                </ul>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {["Python", "SQL", "Apache Airflow", "Pentaho PDI", "PostgreSQL", "Power BI", "Qlik Sense", "OLAP"].map((tag) => (
                    <span key={tag} className="text-[10px] bg-white/10 text-orange-200 px-2 py-0.5 rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 2: Seara Data Community Impact */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-orange-400/20 text-orange-300">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display">Seara Data Initiative</h3>
                    <p className="text-xs text-gray-400">Founder & Lead Educator (2026 - Present)</p>
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-gray-300 list-disc list-inside leading-relaxed pt-2">
                  <li><strong>1,000+ Member Community:</strong> Ekosistem WhatsApp aktif dengan Q&A mingguan.</li>
                  <li><strong>Bootcamp Batch 1 & 2:</strong> Program intensif 8 sesi dengan kelulusan portofolio 100%.</li>
                  <li><strong>20+ Digital Products:</strong> Template Excel, skrip Python, query SQL & dashboard BI.</li>
                  <li><strong>500+ Website Portofolio:</strong> Membantu alumni membangun personal brand Vercel.</li>
                  <li><strong>In-House Corporate Training:</strong> Sosialisasi EDW & Pentaho Cube untuk tim korporasi.</li>
                </ul>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {["Community", "Bootcamp", "1-on-1 Mentoring", "Corporate Training", "Vercel Web", "Digital Assets"].map((tag) => (
                    <span key={tag} className="text-[10px] bg-white/10 text-orange-200 px-2 py-0.5 rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Final Call to Action */}
        <section className="py-20 px-6 text-center bg-gradient-to-tr from-orange-600 via-seara-orange to-amber-500 text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight leading-tight">
              Siap Belajar Dari Orang Yang Sudah Terbukti Di Industri?
            </h2>
            <p className="text-orange-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Mulai perjalanan datamu bersama mentor yang siap menemani setiap langkah—dari nol hingga memiliki portofolio profesional.
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
                <MessageSquare className="w-5 h-5 text-seara-orange" />
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
