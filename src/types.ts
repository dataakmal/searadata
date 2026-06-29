export enum BookingStatus {
  Pending = "Pending",
  WaitingPaymentConfirmation = "Waiting Payment Confirmation",
  Paid = "Paid",
  Confirmed = "Confirmed"
}

export interface Mentor {
  id: string;
  name: string;
  expertise: string[];
  suggestedTopics: string[];
  avatar: string;
}

export interface Booking {
  id: string;
  mentorId: string;
  mentorName: string;
  topic: string;
  duration: number; // 30 | 60 | 90
  price: number;
  date: string; // YYYY-MM-DD
  fullName: string;
  contactInfo: string; // WhatsApp or Email
  learningGoal: string;
  status: BookingStatus;
  createdAt: string;
  proofUploaded?: boolean;
}

export const MENTORS: Mentor[] = [
  {
    id: "zahrul-wafi",
    name: "Zahrul Wafi",
    expertise: ["Microsoft Excel", "Power BI", "Datastudio", "Tableau"],
    suggestedTopics: [
      "Analisis Data & Pembuatan Formula Kompleks Excel",
      "Membangun Interactive Power BI Dashboard",
      "Visualisasi Laporan Interaktif dengan Looker Studio / Datastudio",
      "Membangun Interactive Business Dashboard di Tableau"
    ],
    avatar: "/zahrulwafi.jpeg"
  },
  {
    id: "akmal-fauzan",
    name: "Akmal Fauzan",
    expertise: ["Python", "SQL", "Airflow", "Career in Data", "CV & Portfolio"],
    suggestedTopics: [
      "Analisis Data Serta Otomatisasi Script dengan Python",
      "Eksplorasi Query Kompleks & Optimasi Database dengan SQL",
      "Orchestration Data Pipeline & Otomatisasi Alur Kerja via Apache Airflow",
      "Persiapan Karir Lolos Kerja Bidang Data",
      "Review CV & Portfolio"
    ],
    avatar: "/akmalfauzan.jpeg"
  },
  {
    id: "achmad-kurniansyah",
    name: "Achmad Kurniansyah",
    expertise: ["Excel", "Python", "SQL", "Tableau"],
    suggestedTopics: [
      "Analisis Data & Pembuatan Formula Kompleks Excel",
      "Analisis Data Serta Otomatisasi Script dengan Python",
      "Eksplorasi Query Kompleks & Optimasi Database dengan SQL",
      "Membangun Interactive Business Dashboard di Tableau"
    ],
    avatar: "/achmadkurniansyah.jpeg"
  }
];

export const PRICING_TARIFFE: Record<number, number> = {
  30: 99000,
  60: 159000,
  90: 179000
};

export const BANK_INFO = {
  bankName: "BCA",
  accountNumber: "8610679227",
  accountName: "Akmal Fauzan"
};
