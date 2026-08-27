import { Link } from "react-router-dom";
import { Instagram, Linkedin, MessageSquare, Mail, Phone, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-seara-dark text-white py-16 font-sans w-full relative overflow-hidden">
      {/* Background Accent Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-seara-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-10 w-auto bg-white/10 p-1.5 rounded-xl backdrop-blur-sm">
                <img src="/logo-seara.png" alt="Seara Data Logo" className="h-full w-auto object-contain" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight">
                <span className="text-seara-orange">Seara</span>
                <span className="text-white">Data</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Komunitas belajar data dari 0. Menemani perjalanan datamu agar lebih terarah, aplikatif, dan berdampak nyata.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-orange-200/80 bg-orange-950/40 border border-orange-500/20 px-3 py-2 rounded-xl w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>1,000+ Alumni & Member Aktif</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-seara-orange uppercase tracking-wider font-display">Navigasi Utama</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-seara-orange transition-colors">Beranda</Link>
              </li>
              <li>
                <Link to="/fg-seara" className="hover:text-seara-orange transition-colors font-medium text-orange-200">FG Seara (Fresh Graduate)</Link>
              </li>
              <li>
                <Link to="/program" className="hover:text-seara-orange transition-colors">5 Layanan Program</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-seara-orange transition-colors">About (Tentang Kami)</Link>
              </li>
              <li>
                <Link to="/mentoring" className="hover:text-seara-orange transition-colors">Mentoring Private</Link>
              </li>
              <li>
                <Link to="/komunitas" className="hover:text-seara-orange transition-colors">Komunitas WA</Link>
              </li>
              <li>
                <Link to="/testimoni" className="hover:text-seara-orange transition-colors">Testimoni Alumni</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Tools */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-seara-orange uppercase tracking-wider font-display">Produk & Akses</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfHNIef1-k3DL2PE7V3LJvb2mfB9S9ub-GrYyRAnt5TYmCrxw/viewform" target="_blank" rel="noopener noreferrer" className="hover:text-seara-orange transition-colors text-orange-200 font-medium">
                  Pendaftaran FG Seara (s.id/FGSeara)
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/document/d/1LKaBcIYusO5GcHQlH0cZzWJ0NzcGx9zc08AUug2t51w/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-seara-orange transition-colors">
                  Silabus Kurikulum FG Seara
                </a>
              </li>
              <li>
                <a href="https://clicky.id/searadata" target="_blank" rel="noopener noreferrer" className="hover:text-seara-orange transition-colors">
                  Bootcamp Batch 2
                </a>
              </li>
              <li>
                <a href="https://clicky.id/searadata" target="_blank" rel="noopener noreferrer" className="hover:text-seara-orange transition-colors">
                  Excel Analyst Starter Pack
                </a>
              </li>
              <li>
                <a href="https://akmalfauzan.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-seara-orange transition-colors">
                  Portfolio Showcase Example
                </a>
              </li>
              <li>
                <Link to="/certificate/SD-DA-B1-001" className="hover:text-seara-orange transition-colors">
                  Verifikasi Sertifikat
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-seara-orange uppercase tracking-wider font-display">Kontak & Socials</h4>
            <div className="space-y-2.5 text-sm text-gray-300">
              <a href="mailto:searadata@gmail.com" className="flex items-center gap-2.5 hover:text-seara-orange transition-colors">
                <Mail className="w-4 h-4 text-seara-orange shrink-0" />
                <span>searadata@gmail.com</span>
              </a>
              <a href="https://wa.me/6287811856600" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-seara-orange transition-colors">
                <Phone className="w-4 h-4 text-seara-orange shrink-0" />
                <span>+62 878-1185-6600</span>
              </a>
            </div>

            <div className="pt-2">
              <span className="text-xs font-semibold text-gray-400 block mb-2">Ikuti Media Sosial:</span>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/searadata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-seara-orange hover:border-seara-orange transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/seara-data"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-seara-orange hover:border-seara-orange transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/6287811856600?text=Halo%20Admin%20Rea!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-seara-orange hover:border-seara-orange transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
          <p>© 2026 <span className="text-white font-bold">Seara Data Community</span>. All rights reserved.</p>
          <div className="flex items-center gap-1 text-gray-400">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>oleh praktisi data untuk talenta Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
