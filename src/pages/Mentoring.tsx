import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
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

console.log("Apps Script URL:", (import.meta as any).env.VITE_APPS_SCRIPT_URL)

export default function Mentoring() {
  // Session / Storage Hook
  const [bookings, setBookings] = useState<Booking[]>(() => {
    const saved = localStorage.getItem("seara_data_bookings");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("seara_data_bookings", JSON.stringify(bookings));
  }, [bookings]);

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
  const [additionalNotes, setAdditionalNotes] = useState<string>("");

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

  const getDynamicTopics = (mentor: Mentor | null) => {
    if (!mentor) return [];
    
    return mentor.expertise.map(exp => {
      const lower = exp.toLowerCase().trim();
      if (lower === "excel" || lower === "microsoft excel") {
        return "Analisis Data & Pembuatan Formula Kompleks Excel";
      }
      if (lower === "python") {
        return "Analisis Data Serta Otomatisasi Script dengan Python";
      }
      if (lower === "sql") {
        return "Eksplorasi Query Kompleks & Optimasi Database dengan SQL";
      }
      if (lower === "tableau") {
        return "Membangun Interactive Business Dashboard di Tableau";
      }
      if (lower === "power bi") {
        return "Membangun Interactive Power BI Dashboard";
      }
      if (lower === "datastudio" || lower === "looker studio") {
        return "Visualisasi Laporan Interaktif dengan Looker Studio / Datastudio";
      }
      if (lower === "airflow" || lower === "apache airflow") {
        return "Orchestration Data Pipeline & Otomatisasi Alur Kerja via Apache Airflow";
      }
      if (lower === "career in data") {
        return "Persiapan Karir, Review CV & Portfolio Lolos Kerja Bidang Data";
      }
      return `Mentoring Terkait dengan ${exp}`;
    });
  };

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

  const sendToGoogleSheets = (booking: Booking) => {
    const url = (import.meta as any).env.VITE_APPS_SCRIPT_URL;
    if (!url) {
      console.warn("VITE_APPS_SCRIPT_URL is not defined in environment variables");
      return;
    }
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    }).catch(err => {
      console.warn("Failed to send booking to Google Sheets:", err);
    });
  };

  const updateStatusInSheets = (bookingId: string, status: string) => {
    const url = (import.meta as any).env.VITE_APPS_SCRIPT_URL;
    if (!url) {
      console.warn("VITE_APPS_SCRIPT_URL is not defined in environment variables");
      return;
    }
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: bookingId,
        status,
        _action: "updateStatus"
      }),
    }).catch(err => {
      console.warn("Failed to update status in Google Sheets:", err);
    });
  };

  const handleWhatsAppRedirect = (booking: Booking, notes: string = "") => {
    const formattedPrice = booking.price.toLocaleString("id-ID");
    const dateLabel = selectableDates.find(d => d.formatted === booking.date)?.label || booking.date;
    
    let text = `Halo Admin Rea, saya telah melakukan pendaftaran mentoring berikut:\n\n` +
               `ID Booking: ${booking.id}\n` +
               `Nama Lengkap: ${booking.fullName}\n` +
               `Kontak: ${booking.contactInfo}\n` +
               `Mentor: ${booking.mentorName}\n` +
               `Topik: ${booking.topic}\n` +
               `Durasi: ${booking.duration} Menit\n` +
               `Total Biaya: Rp ${formattedPrice}\n` +
               `Tanggal Sesi: ${dateLabel}\n` +
               `Goal Belajar: ${booking.learningGoal}`;
               
    if (notes.trim()) {
      text += `\n\n📝 *Catatan Tambahan:* ${notes.trim()}`;
    }
    
    text += `\n\nMohon konfirmasi pendaftaran dan instruksi selanjutnya. Terima kasih!`;
    
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/6287811856600?text=${encodedText}`;
    window.open(waUrl, "_blank");
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
    sendToGoogleSheets(newBooking);  // tanpa await
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
      updateStatusInSheets(selectedBookingForPayment.id, "Waiting Payment Confirmation");
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
    setAdditionalNotes("");
  };

  return (
    <div className="min-h-screen bg-seara-cream text-seara-dark font-sans">
      <Navbar />

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

        </div>

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
                        {getDynamicTopics(selectedMentor).map((top, key) => {
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

                      {/* WhatsApp Admin Contact Column */}
                      <div className="space-y-6">
                        {/* WhatsApp Direct Redirection Card */}
                        <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 space-y-5 shadow-sm">
                          <div className="space-y-1">
                            <h4 className="font-bold text-base text-seara-dark tracking-tight flex items-center gap-1.5">
                              Tanya admin Rea!
                            </h4>
                            <p className="text-xs text-gray-400 font-medium font-sans">
                              Chat admin untuk informasi lebih lanjut dan fast-response konfirmasi
                            </p>
                          </div>

                          {/* Navigation Steps Indicator */}
                          <div className="flex items-center justify-between px-3 py-1 border-b border-gray-100 pb-3">
                            <div className="flex items-center gap-1">
                              <span className="p-1 rounded-full bg-green-50 text-green-600">
                                <Users className="w-4 h-4 shrink-0" />
                              </span>
                              <CheckCircle className="w-3.5 h-3.5 fill-green-500 text-white shrink-0" />
                            </div>
                            <div className="h-px bg-gray-100 flex-1 mx-2" />
                            <div className="flex items-center gap-1">
                              <span className="p-1 rounded-full bg-green-50 text-green-600">
                                <Calendar className="w-4 h-4 shrink-0" />
                              </span>
                              <CheckCircle className="w-3.5 h-3.5 fill-green-500 text-white shrink-0" />
                            </div>
                            <div className="h-px bg-gray-100 flex-1 mx-2" />
                            <div className="flex items-center gap-1">
                              <span className="p-1 rounded-full bg-[#0e3129]/5 text-[#0e3129]">
                                <Phone className="w-4 h-4 shrink-0" />
                              </span>
                              <CheckCircle className="w-3.5 h-3.5 fill-[#0e3129] text-white shrink-0" />
                            </div>
                          </div>

                          {/* Admin Selector */}
                          <div className="space-y-2">
                            <span className="text-xs uppercase font-extrabold text-gray-400 tracking-wider block">Pilih Admin *</span>
                            <div className="flex items-center justify-between p-4 bg-[#0e3129]/5 border border-[#0e3129]/10 rounded-2xl">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#0e3129]/15 text-[#0e3129] flex items-center justify-center font-bold font-sans tracking-wide shrink-0">
                                  AR
                                </div>
                                <div>
                                  <div className="font-extrabold text-sm text-seara-dark">Admin Rea</div>
                                  <div className="text-[11px] font-semibold text-gray-400">+62 878-1185-6600</div>
                                </div>
                              </div>
                              <div className="w-5 h-5 rounded-full bg-[#0e3129] text-white flex items-center justify-center">
                                <CheckCircle className="w-3.5 h-3.5" />
                              </div>
                            </div>
                          </div>

                          {/* Catatan Tambahan (Opsional) */}
                          <div className="space-y-2">
                            <span className="text-xs uppercase font-extrabold text-gray-400 tracking-wider block">Catatan Tambahan (Opsional)</span>
                            <textarea
                              value={additionalNotes}
                              onChange={(e) => setAdditionalNotes(e.target.value)}
                              placeholder="Permintaan khusus, pertanyaan, atau informasi tambahan lainnya..."
                              className="w-full h-24 bg-gray-50 border border-gray-200 focus:border-[#0e3129] focus:ring-0 focus:outline-none p-3.5 rounded-2xl text-xs text-seara-dark resize-none font-medium placeholder-gray-400/90"
                            />
                          </div>

                          {/* Redirect button */}
                          <button
                            type="button"
                            onClick={() => handleWhatsAppRedirect(selectedBookingForPayment, additionalNotes)}
                            className="w-full bg-[#0e3129] hover:bg-[#134237] text-white py-4 rounded-2xl font-black text-sm tracking-wide shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                          >
                            <Phone className="w-4 h-4" /> Kirim ke WhatsApp
                          </button>
                        </div>
                      </div>
                    </div>


                    {/* Centered conclusion spacer or spacing */}
                    <div className="pt-4" />
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

      </div>
    </div>
  );
}
