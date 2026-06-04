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
    expertise: ["Excel", "Power BI"],
    suggestedTopics: [
      "Dasar Formulas & Pivot Table Excel",
      "Membangun Interactive Power BI Dashboard",
      "Struktur Formula DAX Lanjutan",
      "Data Cleaning & Querying dengan Power Query"
    ],
    avatar: "https://picsum.photos/seed/wafi/150/150"
  },
  {
    id: "akmal-fauzan",
    name: "Akmal Fauzan",
    expertise: ["Python", "Career in Data (Data Analyst / Data Science guidance)"],
    suggestedTopics: [
      "Persiapan Karir & Tips Lolos Interview Data Analyst",
      "Data Analysis & Feature Engineering dengan Python",
      "Bedah Portfolio & Review CV High-Impact",
      "Navigasi Menjadi Data Analyst & Data Scientist dari Nol"
    ],
    avatar: "https://picsum.photos/seed/akmal/150/150"
  }
];

export const PRICING_TARIFFE: Record<number, number> = {
  30: 75000,
  60: 125000,
  90: 150000
};

export const BANK_INFO = {
  bankName: "BCA",
  accountNumber: "8610679227",
  accountName: "Akmal Fauzan"
};
