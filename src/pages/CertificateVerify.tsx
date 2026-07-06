import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { 
  CheckCircle2, 
  ExternalLink, 
  Clock, 
  BookOpen, 
  User, 
  Award, 
  Calendar, 
  FileText,
  Search,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Share2
} from "lucide-react";
import certificatesData from "../data/certificates.json";

interface Certificate {
  certificateId: string;
  name: string;
  program: string;
  completionDate: string;
  duration: string;
  technologies: string[];
  founder: string;
  pdfUrl: string;
}

export default function CertificateVerify() {
  const { certificateId } = useParams<{ certificateId: string }>();
  const [searchId, setSearchId] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  // Cast JSON data to record type
  const certificates = certificatesData as Record<string, Certificate>;
  const activeCertId = certificateId ? certificateId.trim().toUpperCase() : "";
  const cert = certificates[activeCertId];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchId.trim()) {
      window.location.href = `/certificate/${searchId.trim().toUpperCase()}`;
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-[#fcfbfa] flex flex-col">
      {/* Dynamic page does not show up in global menu, but we keep the header for look and feel */}
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-12 md:py-16">
        <div className="w-full max-w-4xl mx-auto">
          {cert ? (
            <motion.div 
              initial="initial" 
              animate="animate" 
              variants={fadeInUp}
              className="bg-white rounded-[32px] border border-orange-100 shadow-2xl shadow-orange-500/5 overflow-hidden"
              id="certificate-verified-card"
            >
              {/* Header Badge & Verification Banner */}
              <div className="bg-emerald-50 border-b border-emerald-100 px-6 py-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/10">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-emerald-700 text-xs font-black uppercase tracking-wider bg-emerald-100/75 px-3 py-1 rounded-full">
                      Seara Credential Verified
                    </span>
                    <h2 className="text-xl font-bold text-gray-800 mt-0.5">Sertifikat Terverifikasi</h2>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleShare}
                    className="flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-seara-orange bg-white border border-gray-100 shadow-sm hover:shadow px-4 py-2 rounded-xl transition-all"
                  >
                    <Share2 className="w-4 h-4" />
                    {isCopied ? "Disalin!" : "Bagikan Tautan"}
                  </button>
                  <span className="text-[11px] font-mono font-bold text-gray-400 bg-gray-50 border border-gray-100/50 px-3 py-2 rounded-xl">
                    ID: {cert.certificateId}
                  </span>
                </div>
              </div>

              {/* Main Content Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                
                {/* Left Visual Summary Side */}
                <div className="md:col-span-5 bg-gradient-to-b from-orange-50/50 to-white border-r border-orange-50/70 p-8 md:p-10 flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    {/* Seara Stamp Brand */}
                    <div className="flex items-center gap-2 opacity-80">
                      <img src="/logo-seara.png" alt="Seara Data" className="h-7 w-auto" />
                      <span className="font-bold text-sm tracking-tight"><span className="text-seara-orange">Seara</span>Data</span>
                    </div>

                    <div className="pt-4">
                      <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-seara-orange mb-4 shadow-inner">
                        <Award className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-bold text-seara-orange uppercase tracking-wider">Penerima Penghargaan</span>
                      <h3 className="text-2xl font-extrabold text-seara-dark mt-1 tracking-tight leading-snug">
                        {cert.name}
                      </h3>
                      <p className="text-gray-500 text-sm mt-2">
                        Telah berhasil menyelesaikan semua kurikulum, tugas praktek, dan final project dari program Seara Data.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-orange-100/60">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-100/40 flex items-center justify-center text-seara-orange">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Otoritas Validasi</div>
                        <div className="text-sm font-extrabold text-seara-dark">{cert.founder}</div>
                        <div className="text-[10px] text-gray-500">Founder, Seara Data</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Specification Metadata Side */}
                <div className="md:col-span-7 p-8 md:p-10 space-y-8">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Spesifikasi Program</h4>
                    <h3 className="text-2xl font-extrabold text-seara-dark mt-1">
                      {cert.program}
                    </h3>
                  </div>

                  {/* Metadata Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Calendar className="text-seara-orange w-5 h-5 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Tanggal Selesai</div>
                        <div className="text-sm font-bold text-gray-700">{cert.completionDate}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="text-seara-orange w-5 h-5 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Durasi Belajar</div>
                        <div className="text-sm font-bold text-gray-700">{cert.duration}</div>
                      </div>
                    </div>
                  </div>

                  {/* Skills / Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-seara-orange" />
                      Teknologi & Kompetensi Terverifikasi
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-orange-50 text-seara-orange border border-orange-100 text-xs font-bold px-3 py-1.5 rounded-xl"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Primary CTA action to official file */}
                  <div className="pt-6 border-t border-gray-100">
                    <a 
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full justify-center items-center gap-2.5 bg-seara-orange hover:bg-seara-orange/95 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-orange-500/15 transition-all text-center hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <FileText className="w-5 h-5" />
                      Lihat / Download Sertifikat Asli
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <p className="text-center text-[11px] text-gray-400 mt-3 font-medium">
                      Tautan resmi dokumen di atas disimpan secara aman di Google Drive Seara Data.
                    </p>
                  </div>

                </div>

              </div>
            </motion.div>
          ) : (
            /* Not Found Screen */
            <motion.div 
              initial="initial" 
              animate="animate" 
              variants={fadeInUp}
              className="bg-white rounded-[32px] border border-orange-100 shadow-xl p-8 md:p-12 text-center max-w-2xl mx-auto"
              id="certificate-not-found-card"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 mx-auto mb-6">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-extrabold text-seara-dark tracking-tight">Sertifikat Tidak Ditemukan</h2>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                ID Sertifikat <span className="font-mono font-bold text-seara-orange bg-orange-50 px-2 py-0.5 rounded">"{certificateId}"</span> tidak terdaftar dalam sistem resmi Seara Data. Mohon periksa kembali kesesuaian penulisan karakter ID sertifikat Anda.
              </p>

              {/* In-page interactive search box */}
              <form onSubmit={handleSearch} className="mt-8 max-w-md mx-auto">
                <div className="relative">
                  <input 
                    type="text" 
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    placeholder="Masukkan ID Sertifikat (Contoh: SD-DA-B1-001)"
                    className="w-full bg-gray-50 border border-gray-200 focus:border-seara-orange focus:ring-2 focus:ring-orange-500/10 rounded-2xl py-4 pl-12 pr-4 text-sm font-semibold outline-none transition-all placeholder:text-gray-400 text-gray-700"
                    required
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
                <button 
                  type="submit"
                  className="w-full mt-3 bg-seara-dark hover:bg-seara-dark/95 text-white py-3.5 rounded-2xl font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                >
                  Verifikasi Sertifikat <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-100 text-xs text-gray-500 space-y-2">
                <p>Butuh bantuan lebih lanjut atau melakukan verifikasi manual?</p>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 font-semibold">
                  <a href="https://wa.me/6287811856600" target="_blank" rel="noopener noreferrer" className="text-seara-orange hover:underline">
                    Hubungi Admin Seara Data (WhatsApp)
                  </a>
                  <span className="text-gray-300">•</span>
                  <a href="mailto:contact@searadata.com" className="text-seara-orange hover:underline">
                    Email Support
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Branded simple credentials footer */}
      <footer className="py-8 bg-white border-t border-orange-50 text-center text-xs text-gray-400 font-medium">
        <p>© {new Date().getFullYear()} Seara Data. Seluruh hak cipta dilindungi undang-undang.</p>
        <p className="mt-1">Sistem Verifikasi Sertifikat & Validasi Kredensial Independen.</p>
      </footer>
    </div>
  );
}
