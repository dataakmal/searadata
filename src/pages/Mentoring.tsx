import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  ChevronRight, 
  ChevronLeft,
  Calendar, 
  Clock, 
  BookOpen, 
  Smile, 
  Phone, 
  Target, 
  CreditCard, 
  CheckCircle, 
  Sparkles, 
  AlertCircle,
  TrendingUp,
  FileText,
  Bookmark,
  ExternalLink,
  ChevronUp
} from "lucide-react";
import { 
  MENTORS, 
  PRICING_TARIFFE, 
  BANK_INFO, 
  BookingStatus, 
  Booking, 
  Mentor 
} from "../types";

export default function Mentoring() {
  // Session / Storage Hook
  const [bookings, setBookings] = useState<Booking[]>(() => {
    const saved = localStorage.getItem("seara_data_bookings");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("seara_data_bookings", JSON.stringify(bookings));
  }, [bookings]);

  // UI tabs: 'book' or 'list'
  const [activeTab, setActiveTab] = useState<"book" | "list">("book");
  
  // Selection States
  const [step, setStep] = useState<number>(1);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [topic, setTopic] = useState<string>("");
  const [predefinedTopic, setPredefinedTopic] = useState<string>("");
  const [customTopicSelected, setCustomTopicSelected] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(60); // Default 60 minutes
  const [bookingDate, setBookingDate] = useState<string>("");
  
  // Personal Data States
  const [fullName, setFullName] = useState<string>("");
  const [contactInfo, setContactInfo] = useState<string>("");
  const [learningGoal, setLearningGoal] = useState<string>("");

  // Payment proof simulation
  const [selectedBookingForPayment, setSelectedBookingForPayment] = useState<Booking | null>(null);
  const [paymentProofName, setPaymentProofName] = useState<string>("");
  const [isUploadingProof, setIsUploadingProof] = useState<boolean>(false);

  // Helper values
  const price = PRICING_TARIFFE[duration] || 0;

  // Next 14-days list helper
  const getSelectableDates = () => {
    const list = [];
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"];
    
    for (let i = 0; i <= 14; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const dayName = days[d.getDay()];
      const dateNum = d.getDate();
      const monthName = months[d.getMonth()];
      const year = d.getFullYear();
      const formatted = d.toISOString().split("T")[0]; // YYYY-MM-DD
      list.push({
        formatted,
        label: `${dayName}, ${dateNum} ${monthName} ${year}`,
        isToday: i === 0,
      });
    }
    return list;
  };

  const selectableDates = getSelectableDates();

  // Validate current step
  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedMentor !== null;
      case 2:
        return (customTopicSelected ? topic.trim().length > 0 : predefinedTopic.trim().length > 0);
      case 3:
        return [30, 60, 90].includes(duration);
      case 4:
        return true; // Auto pricing step
      case 5:
        // Ensure date exists and is in the 14 days list
        return bookingDate !== "" && selectableDates.some(d => d.formatted === bookingDate);
      case 6:
        return fullName.trim().length > 2 && contactInfo.trim().length > 4 && learningGoal.trim().length > 10;
      case 7:
        return true; // Booking summary before confirmation
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceed()) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  const handleConfirmBooking = () => {
    if (!selectedMentor) return;
    
    const finalTopic = customTopicSelected ? topic : predefinedTopic;
    const newBooking: Booking = {
      id: "SR-" + Math.floor(100000 + Math.random() * 900000),
      mentorId: selectedMentor.id,
      mentorName: selectedMentor.name,
      topic: finalTopic,
      duration,
      price,
      date: bookingDate,
      fullName,
      contactInfo,
      learningGoal,
      status: BookingStatus.Pending,
      createdAt: new Date().toISOString(),
    };

    setBookings(prev => [newBooking, ...prev]);
    setSelectedBookingForPayment(newBooking);
    setStep(8); // Move to payment instruction step
  };

  const handleUploadProof = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBookingForPayment || !paymentProofName) return;

    setIsUploadingProof(true);

    setTimeout(() => {
      setBookings(prev => prev.map(b => {
        if (b.id === selectedBookingForPayment.id) {
          return {
            ...b,
            status: BookingStatus.WaitingPaymentConfirmation,
            proofUploaded: true
          };
        }
        return b;
      }));
      
      // Update local state copy
      setSelectedBookingForPayment(prev => {
        if (!prev) return null;
        return {
          ...prev,
          status: BookingStatus.WaitingPaymentConfirmation,
          proofUploaded: true
        };
      });
      setIsUploadingProof(false);
    }, 1200);
  };

  // Simulation controls to allow testing the system status
  const handleSimulateStatus = (bookingId: string, nextStatus: BookingStatus) => {
    setBookings(prev => prev.map(b => {
      if (b.id === bookingId) {
        return { ...b, status: nextStatus };
      }
      return b;
    }));
    if (selectedBookingForPayment && selectedBookingForPayment.id === bookingId) {
      setSelectedBookingForPayment(prev => prev ? { ...prev, status: nextStatus } : null);
    }
  };

  // Reset booking form
  const handleResetForm = () => {
    setStep(1);
    setSelectedMentor(null);
    setTopic("");
    setPredefinedTopic("");
    setCustomTopicSelected(false);
    setDuration(60);
    setBookingDate("");
    setFullName("");
    setContactInfo("");
    setLearningGoal("");
    setSelectedBookingForPayment(null);
    setPaymentProofName("");
  };

  return (
    <div className="min-h-screen bg-seara-cream text-seara-dark font-sans">
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-12 w-auto flex items-center">
              <img 
                src="/logo-seara.png" 
                alt="Logo Seara Data" 
                className="h-full w-auto object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold flex items-center gap-1 cursor-default">
              <span className="text-seara-orange">Seara</span>
              <span className="text-seara-dark">Data</span>
            </h1>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link to="/program" className="hover:text-seara-orange transition-colors">Program</Link>
            <Link to="/komunitas" className="hover:text-seara-orange transition-colors">Komunitas</Link>
            <Link to="/mentoring" className="text-seara-orange font-bold">Mentoring</Link>
            <Link to="/testimoni" className="hover:text-seara-orange transition-colors">Testimoni</Link>
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

      <div className="max-w-4xl mx-auto py-12 px-6">
        
        {/* Header Breadcrumbs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-seara-orange hover:underline mb-2">
              <ChevronLeft className="w-4 h-4" /> Kembali ke Beranda
            </Link>
            <h2 className="text-3xl font-black tracking-tight font-display text-seara-dark">
              Seara Mentoring Console
            </h2>
            <p className="text-sm text-gray-500 font-medium">Sistem Pemesanan Sesi Belajar Eksklusif 1-on-1</p>
          </div>

          <div className="flex bg-white/60 p-1.5 rounded-2xl border border-orange-100 gap-2">
            <button
              onClick={() => { setActiveTab("book"); handleResetForm(); }}
              className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === "book" ? "bg-seara-orange text-white shadow-sm" : "text-gray-500 hover:text-seara-dark"}`}
            >
              Pesan Mentoring
            </button>
            <button
              onClick={() => setActiveTab("list")}
              className={`px-5 py-2 rounded-xl text-sm font-bold transition-all relative ${activeTab === "list" ? "bg-seara-orange text-white shadow-sm" : "text-gray-500 hover:text-seara-dark"}`}
            >
              Lihat Pemesanan ({bookings.length})
              {bookings.some(b => b.status === BookingStatus.Pending) && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full animate-pulse" />
              )}
            </button>
          </div>
        </div>

        {/* Tab content */}
        {activeTab === "book" ? (
          <div className="bg-white rounded-[32px] border border-orange-100/60 shadow-xl overflow-hidden">
            
            {/* Header Steps Progress Bar */}
            {step <= 7 && (
              <div className="border-b border-orange-50 bg-orange-50/20 px-8 py-5">
                <div className="flex items-center justify-between text-xs font-bold text-gray-400 mb-3">
                  <span>LANGKAH {step} DARI 7</span>
                  <span className="text-seara-orange">
                    {Math.round((step / 7) * 100)}% SELESAI
                  </span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-seara-orange h-full transition-all duration-300"
                    style={{ width: `${(step / 7) * 100}%` }}
                  />
                </div>
              </div>
            )}

            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                
                {/* STEP 1: SELECT MENTOR */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold font-display text-seara-dark flex items-center gap-2">
                        <Users className="text-seara-orange w-6 h-6 shrink-0" /> Pilih Mentor Terbaikmu
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Mentor kami memiliki keahlian khusus dan pengalaman kerja riil di bidang industri data.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                      {MENTORS.map((m) => {
                        const isSelected = selectedMentor?.id === m.id;
                        return (
                          <div
                            key={m.id}
                            onClick={() => {
                              setSelectedMentor(m);
                              setPredefinedTopic("");
                              setTopic("");
                            }}
                            className={`p-6 rounded-3xl border-2 cursor-pointer transition-all flex flex-col justify-between ${isSelected ? "border-seara-orange bg-orange-50/10 shadow-md" : "border-gray-200/60 hover:border-orange-200 bg-white"}`}
                          >
                            <div>
                              <div className="flex items-center gap-4 mb-4">
                                <img 
                                  src={m.avatar} 
                                  alt={m.name} 
                                  className="w-16 h-16 rounded-2xl object-cover border-2 border-orange-100 shadow-sm"
                                  onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/seed/${m.id}/150/150`;
                                  }}
                                  referrerPolicy="no-referrer"
                                />
                                <div>
                                  <h4 className="font-bold text-lg text-seara-dark">{m.name}</h4>
                                  <span className="text-xs font-black uppercase text-seara-orange tracking-wider bg-orange-100 px-2.5 py-1 rounded-md">
                                    DATA EXPERT
                                  </span>
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                <span className="text-xs uppercase font-extrabold text-gray-400 tracking-wider">Spesialisasi Keahlian:</span>
                                <div className="flex flex-wrap gap-1.5">
                                  {m.expertise.map((exp, key) => (
                                    <span key={key} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">
                                      {exp}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <button className={`w-full mt-6 py-2.5 rounded-xl text-sm font-bold transition-all ${isSelected ? "bg-seara-orange text-white" : "bg-gray-100 text-gray-600 hover:bg-orange-50"}`}>
                              {isSelected ? "Mentor Terpilih" : "Pilih Mentor"}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: SELECT TOPIC BASED ON EXPERTISE */}
                {step === 2 && selectedMentor && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold font-display text-seara-dark flex items-center gap-2">
                        <BookOpen className="text-seara-orange w-6 h-6 shrink-0" /> Tentukan Topik Pembahasan
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Pilih topik diskusi berdasar keahlian <strong className="text-seara-dark">{selectedMentor.name}</strong>, atau tulis sendiri kebutuhan belajarmu.
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <span className="text-xs uppercase font-extrabold text-gray-400 tracking-wider block">Kategori Topik Rekomendasi:</span>
                      
                      <div className="grid grid-cols-1 gap-3">
                        {selectedMentor.suggestedTopics.map((top, key) => {
                          const isPicked = predefinedTopic === top && !customTopicSelected;
                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() => {
                                setPredefinedTopic(top);
                                setTopic("");
                                setCustomTopicSelected(false);
                              }}
                              className={`p-4 rounded-2xl border text-left text-sm font-bold transition-all flex items-center justify-between ${isPicked ? "border-seara-orange bg-orange-50/10 text-seara-dark shadow-sm" : "border-gray-200 text-gray-600 hover:border-orange-200 hover:bg-orange-50/10"}`}
                            >
                              <span>{top}</span>
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-4 ${isPicked ? "border-seara-orange bg-seara-orange text-white" : "border-gray-300"}`}>
                                {isPicked && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                              </div>
                            </button>
                          );
                        })}

                        {/* Custom custom text input toggle button */}
                        <button
                          type="button"
                          onClick={() => {
                            setCustomTopicSelected(true);
                            setPredefinedTopic("");
                          }}
                          className={`p-4 rounded-2xl border text-left text-sm font-bold transition-all flex items-center justify-between ${customTopicSelected ? "border-seara-orange bg-orange-50/10 text-seara-dark shadow-sm" : "border-gray-200 text-gray-600 hover:border-orange-200 hover:bg-orange-50/10"}`}
                        >
                          <span>Tulis Topik Kustom / Pilihan Sendiri</span>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-4 ${customTopicSelected ? "border-seara-orange bg-seara-orange text-white" : "border-gray-300"}`}>
                            {customTopicSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </button>
                      </div>

                      {customTopicSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="pt-2"
                        >
                          <label className="text-xs uppercase font-extrabold text-gray-400 tracking-wider block mb-2">Tulis Topik atau Kendala yang Sedang Dihadapi:</label>
                          <textarea
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="Deskripsikan dengan detail topik data yang kamu butuhkan (misal: 'Optimasi query Postgres untuk dbt model' atau 'Review cv Data Scientist Magang'...)"
                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-sm focus:outline-none focus:border-seara-orange text-seara-dark font-medium h-28"
                          />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: SESSION DURATION */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold font-display text-seara-dark flex items-center gap-2">
                        <Clock className="text-seara-orange w-6 h-6 shrink-0" /> Atur Durasi Mentoring
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Pilih paket durasi yang paling cocok untuk mendiskusikan topik belajarmu secara mendalam.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                      {[
                        { time: 30, desc: "Efektif untuk tanya jawab singkat, konsultasi portfolio super cepat, atau review progress 1 topik ringkas." },
                        { time: 60, desc: "Sesi standar yang paling ideal. Pembahasan mendalam, review code / dashboard, dan setup action plan terarah." },
                        { time: 90, desc: "Sesi ekstra intensif. Sangat direkomendasikan untuk bimbingan CV lengkap + portfolio + mockup interview teknis sekaligus." }
                      ].map((item) => {
                        const isSelected = duration === item.time;
                        return (
                          <div
                            key={item.time}
                            onClick={() => setDuration(item.time)}
                            className={`p-6 rounded-3xl border-2 cursor-pointer transition-all flex flex-col justify-between ${isSelected ? "border-seara-orange bg-orange-50/10 shadow-md" : "border-gray-200 hover:border-orange-200 bg-white"}`}
                          >
                            <div className="space-y-3">
                              <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-md font-bold block w-fit">
                                REKOMENDASI SENSIONAL
                              </span>
                              
                              <h4 className="text-2xl font-black text-seara-dark">{item.time} Menit</h4>
                              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                                {item.desc}
                              </p>
                            </div>

                            <div className="pt-6 border-t border-gray-100/60 mt-6 flex justify-between items-center">
                              <span className="text-xs uppercase font-extrabold text-gray-400">TARIF NET</span>
                              <span className="font-extrabold text-seara-dark text-lg leading-none">
                                Rp {PRICING_TARIFFE[item.time].toLocaleString("id-ID")}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: PRICE CALCULATION PRESENTATION */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold font-display text-seara-dark flex items-center gap-2">
                        <TrendingUp className="text-seara-orange w-6 h-6 shrink-0" /> Kalkulasi Harga Transparan
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Sistem Seara menghitung biaya mentoring kamu secara instan dan tanpa biaya administrasi tambahan.
                      </p>
                    </div>

                    <div className="bg-orange-50/30 border border-orange-100/50 rounded-3xl p-8 space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-gray-500">Mentor Terpilih</span>
                        <span className="font-bold text-seara-dark">{selectedMentor?.name}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-gray-500">Durasi Sesi</span>
                        <span className="font-bold text-seara-dark">{duration} Menit</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-gray-500">Biaya Sesi per Sesi</span>
                        <span className="font-bold text-seara-dark">Rp {price.toLocaleString("id-ID")}</span>
                      </div>
                      <div className="border-t border-orange-100 pt-6 flex justify-between items-center">
                        <span className="text-base font-black text-seara-dark">Total Biaya Kursus</span>
                        <span className="text-3xl font-black text-seara-orange">
                          Rp {price.toLocaleString("id-ID")}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-2xl flex gap-3 text-xs text-gray-500 font-medium">
                      <Sparkles className="w-5 h-5 text-seara-orange shrink-0" />
                      <span>Sesi mentoring akan dilaksanakan secara live via Google Meet secara interaktif, termasuk review screen-share dan Q&A santai langsung.</span>
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: BOOKING DATE RULES */}
                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold font-display text-seara-dark flex items-center gap-2">
                        <Calendar className="text-seara-orange w-6 h-6 shrink-0" /> Jadwalkan Pertemuan
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Pilih salah satu tanggal yang tersedia. Kuota booking hanya dapat dilakukan maksimal 14 hari ke depan (dari tanggal hari ini).
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                      {selectableDates.map((d) => {
                        const isPicked = bookingDate === d.formatted;
                        return (
                          <button
                            key={d.formatted}
                            type="button"
                            onClick={() => setBookingDate(d.formatted)}
                            className={`p-4 rounded-2xl border text-center font-bold text-sm transition-all flex flex-col gap-1 items-center justify-center relative ${isPicked ? "border-seara-orange bg-orange-50/10 text-seara-dark shadow-sm" : "border-gray-200 text-gray-500 hover:border-orange-200 hover:bg-orange-50/5 bg-white"}`}
                          >
                            <span>{d.label}</span>
                            {d.isToday && (
                              <span className="absolute top-1.5 right-1.5 text-[8px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded uppercase font-black tracking-wider">
                                Hari Ini
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {bookingDate && (
                      <div className="p-4 bg-green-50 border border-green-100 text-green-700 text-xs rounded-2xl font-bold flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" /> Tanggal terpilih valid dan masuk ke rentang pemesanan (+14 hari maksimal).
                      </div>
                    )}
                  </motion.div>
                )}

                {/* STEP 6: PERSONAL DATA */}
                {step === 6 && (
                  <motion.div
                    key="step6"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold font-display text-seara-dark flex items-center gap-2">
                        <Smile className="text-seara-orange w-6 h-6 shrink-0" /> Isi Formulir Data Diri
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Informasi ini akan mempermudah mentor menyiapkan materi belajar yang tepat untukmu.
                      </p>
                    </div>

                    <div className="space-y-5 pt-2 font-medium">
                      <div className="space-y-2">
                        <label className="text-xs uppercase font-extrabold text-gray-400 tracking-wider">Nama Lengkap Anda</label>
                        <div className="relative">
                          <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Tulis nama lengkap kamu..."
                            className="w-full bg-gray-50 border border-gray-200 focus:border-seara-orange focus:outline-none p-4 rounded-2xl text-sm text-seara-dark font-medium"
                          />
                        </div>
                        {fullName && fullName.trim().length <= 2 && (
                          <span className="text-[10px] text-red-500 font-bold block">Nama minimal kudu 3 karakter.</span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase font-extrabold text-gray-400 tracking-wider">Nomor WhatsApp atau Email Kontak</label>
                        <div className="relative">
                          <input
                            type="text"
                            value={contactInfo}
                            onChange={(e) => setContactInfo(e.target.value)}
                            placeholder="Contoh: 0812XXXXXXXX atau nama@email.com"
                            className="w-full bg-gray-50 border border-gray-200 focus:border-seara-orange focus:outline-none p-4 rounded-2xl text-sm text-seara-dark font-medium"
                          />
                        </div>
                        {contactInfo && contactInfo.trim().length <= 4 && (
                          <span className="text-[10px] text-red-500 font-bold block">Nomor kontak tidak valid.</span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase font-extrabold text-gray-400 tracking-wider">Apa Goal / Goals Belajarmu?</label>
                        <textarea
                          value={learningGoal}
                          onChange={(e) => setLearningGoal(e.target.value)}
                          placeholder="Ceritakan dengan singkat tantangan belajarmu atau tujuan karir yang ingin lo capai (misal: 'Saya ingin tahu cara setting ETL simple untuk dipresentasikan saat interview DE minggu depan')"
                          className="w-full bg-gray-50 border border-gray-200 focus:border-seara-orange focus:outline-none p-4 rounded-2xl text-sm text-seara-dark font-medium h-24"
                        />
                        {learningGoal && learningGoal.trim().length <= 10 && (
                          <span className="text-[10px] text-red-500 font-bold block">Goal belajar disukai lebih detail (minimal 10 karakter).</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 7: SUMMARY & CONFIRMATION */}
                {step === 7 && (
                  <motion.div
                    key="step7"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold font-display text-seara-dark flex items-center gap-2">
                        <FileText className="text-seara-orange w-6 h-6 shrink-0" /> Ringkasan Pendaftaran
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Periksa kembali data pendaftaran kamu secara detail sebelum menyelesaikan pengajuan.
                      </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200/50 rounded-3xl p-8 space-y-5">
                      <div className="flex border-b border-gray-200 pb-4 justify-between items-center">
                        <div>
                          <span className="text-xs uppercase font-extrabold text-gray-400 block mb-0.5">MENTOR EXPERT</span>
                          <span className="font-bold text-seara-dark text-lg">{selectedMentor?.name}</span>
                        </div>
                        <span className="text-xs font-black uppercase text-seara-orange tracking-wider bg-orange-100 px-2.5 py-1 rounded-md">
                          BELAJAR 1-ON-1
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        <div>
                          <span className="text-xs uppercase font-extrabold text-gray-400 block mb-0.5">TOPIK MATERI</span>
                          <span className="font-bold text-seara-dark text-sm">{customTopicSelected ? topic : predefinedTopic}</span>
                        </div>
                        <div>
                          <span className="text-xs uppercase font-extrabold text-gray-400 block mb-0.5">DURASI SESI</span>
                          <span className="font-bold text-seara-dark text-sm">{duration} Menit</span>
                        </div>
                        <div>
                          <span className="text-xs uppercase font-extrabold text-gray-400 block mb-0.5">TANGGAL TEMU</span>
                          <span className="font-bold text-seara-dark text-sm flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-seara-orange" />
                            {selectableDates.find(d => d.formatted === bookingDate)?.label || bookingDate}
                          </span>
                        </div>
                        <div>
                          <span className="text-xs uppercase font-extrabold text-gray-400 block mb-0.5">DATA PENDAFTAR</span>
                          <span className="font-bold text-seara-dark text-sm block">{fullName}</span>
                          <span className="text-xs text-gray-400 block">{contactInfo}</span>
                        </div>
                      </div>

                      <div className="border-t border-gray-200/60 pt-5 mt-4">
                        <span className="text-xs uppercase font-extrabold text-gray-400 block mb-0.5">GOAL PEMELAJARAN</span>
                        <p className="text-xs text-gray-500 font-medium leading-relaxed italic">
                          "{learningGoal}"
                        </p>
                      </div>

                      <div className="border-t border-orange-100 bg-orange-50/20 p-5 rounded-2xl flex justify-between items-center mt-6">
                        <span className="text-sm font-black text-seara-dark">BIAYA REKOMENDASI</span>
                        <span className="text-2xl font-black text-seara-orange">
                          Rp {price.toLocaleString("id-ID")}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 8: PAYMENT SCREEN (SUCCESS GENERATE BOOKING) */}
                {step === 8 && selectedBookingForPayment && (
                  <motion.div
                    key="step8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-8"
                  >
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black font-display text-seara-dark">
                        Pemesanan Berhasil Terdaftar!
                      </h3>
                      <p className="text-sm text-gray-500 max-w-xl mx-auto font-medium">
                        ID Pemesanan Kamu adalah <strong className="text-seara-dark font-mono bg-gray-50 px-2 py-0.5 rounded border border-gray-100">{selectedBookingForPayment.id}</strong>. Silakan selesaikan pembayaran manual di bawah agar sesi dikonfirmasi mentor.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                      
                      {/* Bank Details */}
                      <div className="bg-orange-50/30 border border-orange-100/60 rounded-3xl p-6 md:p-8 space-y-6">
                        <h4 className="font-bold text-base text-seara-dark tracking-tight flex items-center gap-2">
                          <CreditCard className="text-seara-orange w-5 h-5" /> Instruksi Pembayaran Transfer
                        </h4>
                        
                        <div className="space-y-4">
                          <div>
                            <span className="text-[10px] uppercase font-extrabold text-gray-400">BANK TRANSFER</span>
                            <div className="text-xl font-black text-seara-dark">{BANK_INFO.bankName}</div>
                          </div>
                          <div>
                            <span className="text-[10px] uppercase font-extrabold text-gray-400">NOMOR REKENING</span>
                            <div className="text-2xl font-mono font-black text-seara-orange tracking-wider">
                              {BANK_INFO.accountNumber}
                            </div>
                          </div>
                          <div>
                            <span className="text-[10px] uppercase font-extrabold text-gray-400">NAMA REKENING</span>
                            <div className="text-base font-bold text-seara-dark">{BANK_INFO.accountName}</div>
                          </div>
                          <div className="border-t border-orange-200/40 pt-4">
                            <span className="text-[10px] uppercase font-extrabold text-gray-400">JUMLAH TRANSFER</span>
                            <div className="text-2xl font-black text-seara-dark">
                              Rp {selectedBookingForPayment.price.toLocaleString("id-ID")}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Proof of Payment Upload */}
                      <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 space-y-5">
                        <h4 className="font-bold text-base text-seara-dark tracking-tight">
                          Upload Bukti Pembayaran
                        </h4>

                        {selectedBookingForPayment.status === BookingStatus.Pending ? (
                          <form onSubmit={handleUploadProof} className="space-y-4 font-medium">
                            <div className="space-y-1.5">
                              <label className="text-xs text-gray-400 uppercase font-extrabold">Nama File / Bukti Bukti</label>
                              <input
                                type="text"
                                value={paymentProofName}
                                onChange={(e) => setPaymentProofName(e.target.value)}
                                placeholder="Contoh: struk-bca-susi.jpg atau Susi Susanti"
                                required
                                className="w-full bg-gray-50 border border-gray-200 focus:border-seara-orange focus:outline-none p-3.5 rounded-xl text-sm"
                              />
                            </div>

                            <button
                              type="submit"
                              disabled={isUploadingProof}
                              className="w-full bg-seara-orange text-white py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-md hover:brightness-105 active:scale-95 disabled:opacity-60 transition-all flex items-center justify-center gap-2"
                            >
                              {isUploadingProof ? "Mengupload Bukti..." : "Kirim Konfirmasi Pembayaran"}
                            </button>
                          </form>
                        ) : (
                          <div className="space-y-4">
                            <div className="p-4 bg-green-50 text-green-700 text-xs rounded-2xl font-bold space-y-1">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" /> Bukti Pembayaran Berhasil Diupload
                              </div>
                              <p className="text-[11px] font-medium text-green-600/90 mt-1">
                                Status: Waiting Payment Confirmation. Admin Seara akan melakukan review transfer masuk ke BCA Akmal Fauzan dalam waktu dekat.
                              </p>
                            </div>

                            {/* Status Simulator tools to help user inspect flow */}
                            <div className="border border-green-100 p-4 rounded-2xl bg-green-50/20 space-y-3">
                              <div className="text-[10px] font-black uppercase tracking-wider text-green-600">Simulasi Console Admin (Penguji Admin)</div>
                              <div className="flex flex-wrap gap-2">
                                <button
                                  onClick={() => handleSimulateStatus(selectedBookingForPayment.id, BookingStatus.Paid)}
                                  className="text-[11px] bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg font-bold"
                                >
                                  Simulasi Set Lunas (Paid)
                                </button>
                                <button
                                  onClick={() => handleSimulateStatus(selectedBookingForPayment.id, BookingStatus.Confirmed)}
                                  className="text-[11px] bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg font-bold"
                                >
                                  Simulasi Konfirmasi Sesi (Confirmed)
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="text-[11px] text-gray-400 font-medium leading-normal bg-gray-50 p-4 rounded-2xl">
                          💡 Pertanyaan kritis? Ingin fast-track? Hubungi admin searadata dengan menyerahkan id <strong className="text-seara-dark font-mono font-bold">{selectedBookingForPayment.id}</strong> di <a href="https://wa.me/6281779052788" target="_blank" rel="noopener" className="text-seara-orange font-bold hover:underline">WhatsApp (+62-817-7905-2788)</a>.
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-center">
                      <button
                        onClick={() => {
                          setActiveTab("list");
                        }}
                        className="bg-seara-dark text-white px-8 py-3.5 rounded-2xl font-bold hover:brightness-110 active:scale-95 transition-all text-sm shadow inline-flex items-center gap-2"
                      >
                        Lihat Daftar Sesi Saya <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Step Navigation Controls Footer */}
              {step <= 7 && (
                <div className="border-t border-gray-100 pt-8 mt-12 flex justify-between items-center">
                  <button
                    onClick={handleBack}
                    disabled={step === 1}
                    className="flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-seara-dark disabled:opacity-40 transition-all font-medium py-2.5 px-4 rounded-xl hover:bg-gray-50"
                  >
                    <ChevronLeft className="w-4 h-4" /> Kembali
                  </button>

                  {step < 7 ? (
                    <button
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className="flex items-center gap-1 bg-seara-orange disabled:opacity-50 text-white py-3.5 px-8 rounded-2xl font-bold text-sm tracking-wide shadow-[0_4px_12px_rgba(241,111,83,0.15)] hover:brightness-105 active:scale-95 transition-all"
                    >
                      Lanjutkan <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleConfirmBooking}
                      disabled={!canProceed()}
                      className="flex items-center gap-1 bg-seara-orange disabled:opacity-50 text-white py-4 px-10 rounded-2xl font-extrabold text-sm tracking-wide shadow-xl shadow-orange-500/20 hover:brightness-110 active:scale-95 transition-all"
                    >
                      Konfirmasi & Daftarkan Sesi <ChevronRight className="w-5 h-5 animate-pulse" />
                    </button>
                  )}
                </div>
              )}

            </div>
          </div>
        ) : (
          
          /* BOOKING LIST TAB (MY BOOKINGS VIEW) */
          <div className="space-y-6">
            <div className="bg-white rounded-[32px] border border-orange-100/60 shadow-xl p-8 md:p-12">
              <h3 className="text-2xl font-bold font-display text-seara-dark mb-2 flex items-center gap-2">
                <Bookmark className="text-seara-orange w-6 h-6" /> Sesi Mentoring Terdaftar ({bookings.length})
              </h3>
              <p className="text-sm text-gray-500 mb-8 font-medium">
                Daftar lengkap sesi mentoring privat yang kamu jadwalkan di Seara Data Mentoring Console.
              </p>

              {bookings.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 bg-orange-50 text-seara-orange rounded-full flex items-center justify-center mx-auto">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-seara-dark">Belum ada pendaftaran sesi</h4>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto font-medium">
                      Kamu belum pernah mendaftarkan sesi mentoring 1-on-1. Silakan ganti tab untuk memesan jadwal pertamamu.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab("book")}
                    className="bg-seara-orange text-white px-6 py-2.5 rounded-xl font-bold text-xs hover:brightness-95 transition-all"
                  >
                    Pesan Jadwal Sesi Sekarang
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {bookings.map((booking) => {
                    const isPending = booking.status === BookingStatus.Pending;
                    const isWaiting = booking.status === BookingStatus.WaitingPaymentConfirmation;
                    const isPaid = booking.status === BookingStatus.Paid;
                    const isConfirmed = booking.status === BookingStatus.Confirmed;

                    return (
                      <div
                        key={booking.id}
                        className="border border-orange-100 bg-white hover:shadow-md transition-all rounded-3xl p-6 relative overflow-hidden"
                      >
                        {/* Header card info */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4 mb-4">
                          <div className="flex items-center gap-3">
                            <span className="font-mono bg-gray-50 border border-gray-100 text-xs font-bold text-gray-500 rounded px-2.5 py-1">
                              ID: {booking.id}
                            </span>
                            <span className="text-xs font-bold text-gray-400">
                              Dibuat pada {new Date(booking.createdAt).toLocaleDateString("id-ID")}
                            </span>
                          </div>

                          {/* Status pill badge with correct status system */}
                          <div className="flex flex-wrap gap-2">
                            {isPending && (
                              <span className="text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded bg-yellow-100 text-yellow-700">
                                Pending (Belum Bayar)
                              </span>
                            )}
                            {isWaiting && (
                              <span className="text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded bg-blue-100 text-blue-700">
                                Waiting Confirmation
                              </span>
                            )}
                            {isPaid && (
                              <span className="text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded bg-green-100 text-green-700">
                                Paid (Pembayaran Lunas)
                              </span>
                            )}
                            {isConfirmed && (
                              <span className="text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded bg-teal-100 text-teal-800 flex items-center gap-1">
                                <CheckCircle className="w-3.5 h-3.5 shrink-0" /> Confirmed (Sesi Siap)
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Booking detail layout */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-medium">
                          <div>
                            <span className="text-[10px] text-gray-400 uppercase font-extrabold tracking-wider block mb-0.5">MENTOR / DURASI</span>
                            <div className="font-bold text-seara-dark text-base">{booking.mentorName}</div>
                            <div className="text-xs text-gray-400 mt-1">{booking.duration} Menit (Rp {booking.price.toLocaleString("id-ID")})</div>
                          </div>
                          <div>
                            <span className="text-[10px] text-gray-400 uppercase font-extrabold tracking-wider block mb-0.5">TOPIK DISCUSSION</span>
                            <div className="text-sm font-bold text-seara-dark leading-snug">{booking.topic}</div>
                          </div>
                          <div>
                            <span className="text-[10px] text-gray-400 uppercase font-extrabold tracking-wider block mb-0.5">JADWAL SESI</span>
                            <div className="text-sm font-bold text-seara-dark flex items-center gap-1.5 mt-0.5">
                              <Calendar className="w-4 h-4 text-seara-orange shrink-0" />
                              {selectableDates.find(d => d.formatted === booking.date)?.label || booking.date}
                            </div>
                          </div>
                        </div>

                        {/* Student metadata info */}
                        <div className="mt-4 pt-4 border-t border-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div>
                            <span className="text-[10px] text-gray-400 uppercase font-extrabold tracking-wider block mb-0.5">SISWA</span>
                            <div className="text-xs font-bold text-seara-dark bg-orange-50/20 py-1.5 px-3 rounded-lg border border-orange-100/30 w-fit">
                              {booking.fullName} — <span className="font-medium text-gray-500">{booking.contactInfo}</span>
                            </div>
                          </div>

                          <div className="flex gap-2 w-full md:w-auto mt-2 md:mt-0">
                            {isPending && (
                              <button
                                onClick={() => {
                                  setSelectedBookingForPayment(booking);
                                  setStep(8);
                                  setActiveTab("book");
                                }}
                                className="bg-seara-orange text-white px-5 py-2 rounded-xl text-xs font-bold hover:brightness-105 active:scale-95 transition-all shadow-sm w-full md:w-auto"
                              >
                                Selesaikan Pembayaran
                              </button>
                            )}

                            {isWaiting && (
                              <div className="flex gap-2 w-full md:w-auto">
                                <button
                                  onClick={() => handleSimulateStatus(booking.id, BookingStatus.Confirmed)}
                                  className="bg-teal-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-teal-700 active:scale-95 transition-all text-center w-full md:w-auto"
                                >
                                  Simulasikan Mentor Setuju (Confirm)
                                </button>
                              </div>
                            )}

                            {isConfirmed && (
                              <a
                                href="https://meet.google.com/mock-meet-seara"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-seara-dark hover:bg-black text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5 justify-center w-full md:w-auto"
                              >
                                Gabung Google Meet <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
