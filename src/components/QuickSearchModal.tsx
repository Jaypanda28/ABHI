"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  ArrowRight,
  Stethoscope,
  Building2,
  Trophy,
  BookOpen,
  Calendar,
  Sparkles,
  Phone,
  Clock,
  MapPin
} from "lucide-react";
import { useAppointmentModal } from "./AppointmentModalProvider";

interface SearchResult {
  id: string;
  title: string;
  category: "Specialty" | "Clinic & Hospital" | "Award & Leadership" | "Academic & Research" | "Contact & Booking";
  description: string;
  href: string;
  icon: any;
  badge?: string;
  actionText?: string;
}

const SEARCH_DATABASE: SearchResult[] = [
  // Specialties
  {
    id: "pediatric-surgery",
    title: "General Pediatric & Neonatal Surgery",
    category: "Specialty",
    description: "Emergency and elective surgery for newborns, infants, and children including congenital anomalies.",
    href: "/#clinical-care",
    icon: Stethoscope,
    badge: "Core Specialty"
  },
  {
    id: "pediatric-urology",
    title: "Pediatric Urology & Reconstructive Surgery",
    category: "Specialty",
    description: "Hypospadias repair, hydronephrosis (PUJO), vesicoureteral reflux (VUR), undescended testis, PUV.",
    href: "/#clinical-care",
    icon: Stethoscope,
    badge: "Super-Specialty"
  },
  {
    id: "laparoscopy-robotic",
    title: "Minimally Invasive Laparoscopy & Robotic Surgery",
    category: "Specialty",
    description: "Keyhole laparoscopic and robotic-assisted surgeries for quicker recovery, minimal trauma, and tiny scars.",
    href: "/#clinical-care",
    icon: Sparkles,
    badge: "FMAS Fellow"
  },
  {
    id: "neonatal-surgery",
    title: "Critical Neonatal Surgery & Antenatal Counselling",
    category: "Specialty",
    description: "Advanced surgical care for neonates, antenatal congenital anomaly guidance, and NICU-integrated care.",
    href: "/#clinical-care",
    icon: Stethoscope,
    badge: "Specialized"
  },

  // Practice Locations & Clinics
  {
    id: "new-life-clinic",
    title: "New Life Clinic – Soubhagya Nagar, Baramunda",
    category: "Clinic & Hospital",
    description: "Plot no-1117/3632, behind Mia By Tanishq, Baramunda, Bhubaneswar. Daily OPD: Mon-Sat 5:00 PM – 9:00 PM.",
    href: "/#clinical-care",
    icon: Building2,
    badge: "Director & COO Practice"
  },
  {
    id: "wonderbloom-hospital",
    title: "Wonderbloom Pediatric Surgical Centre of Excellence",
    category: "Clinic & Hospital",
    description: "Primary practice location as Full-Time Consultant. Advanced pediatric surgery, PICU & NICU facilities.",
    href: "/#clinical-care",
    icon: Building2,
    badge: "Full-Time Consultant"
  },
  {
    id: "hospital-network",
    title: "Visiting Consultant Hospitals (Manipal, Sparsh, Kalinga)",
    category: "Clinic & Hospital",
    description: "Consultant access across premier tertiary healthcare institutions in Bhubaneswar and Odisha.",
    href: "/#clinical-care",
    icon: Building2,
    badge: "Network"
  },

  // Awards & Leadership
  {
    id: "times-health-icon",
    title: "TIMES HEALTH ICON AWARD Odisha 2026",
    category: "Award & Leadership",
    description: "Awarded by The Times of India on National Doctors' Day for emerging excellence in pediatric surgery.",
    href: "/#achievements",
    icon: Trophy,
    badge: "Prestigious Honor"
  },
  {
    id: "tejasvi-medal",
    title: "Tejasvi Medal at UVACON 2025",
    category: "Award & Leadership",
    description: "Awarded for outstanding presentation and surgical excellence in Pediatric Urology.",
    href: "/#achievements",
    icon: Trophy,
    badge: "State Medal"
  },
  {
    id: "leadership-roles",
    title: "Director & COO – Neovitaz Curae & Wonderbloom Hospital",
    category: "Award & Leadership",
    description: "Executive healthcare leadership, building integrated pediatric systems and advanced clinical care models.",
    href: "/#achievements",
    icon: Building2,
    badge: "Executive Leadership"
  },
  {
    id: "career-timeline",
    title: "Professional Journey & Career Milestones",
    category: "Award & Leadership",
    description: "12+ years of surgical career, from MBBS to DrNB Pediatric Surgery and Full-Time Consultant.",
    href: "/#achievements",
    icon: Clock,
    badge: "12+ Years Experience"
  },

  // Academic & Research
  {
    id: "qualifications-drnb",
    title: "Degrees: MBBS | DrNB (Pediatric Surgery) | FMAS",
    category: "Academic & Research",
    description: "Institute of Child Health Kolkata, NBE Board Certified Pediatric Surgeon, Fellowship in Minimal Access Surgery.",
    href: "/#academics",
    icon: BookOpen,
    badge: "Board Certified"
  },
  {
    id: "research-publications",
    title: "5+ Journal Publications & Conference Contributions",
    category: "Academic & Research",
    description: "Published research in Journal of Indian Association of Pediatric Surgeons, PSAWB, and IAPSCON.",
    href: "/#academics",
    icon: BookOpen,
    badge: "Verified Research"
  },
  {
    id: "trainee-teaching",
    title: "Postgraduate Teaching & Mentorship (4 Years)",
    category: "Academic & Research",
    description: "Training and mentoring the next generation of pediatric surgical postgraduates and surgical fellows.",
    href: "/#academics",
    icon: BookOpen,
    badge: "Academic Mentorship"
  },
  {
    id: "memberships-iaps",
    title: "Professional Memberships (IAPS, ASI, AMASI, PESI, IMA)",
    category: "Academic & Research",
    description: "Active member of Indian Association of Pediatric Surgeons, Association of Surgeons of India, and PESI.",
    href: "/#academics",
    icon: BookOpen,
    badge: "Professional Member"
  },

  // Community & Personal Interests
  {
    id: "community-service",
    title: "Community Service & Social Commitment",
    category: "Academic & Research",
    description: "Child health awareness, early diagnosis, healthcare accessibility, and parent counseling programs.",
    href: "/#about",
    icon: Stethoscope,
    badge: "Social Outreach"
  },
  {
    id: "personal-interests",
    title: "Personal Interests: Surgical Excellence & Healthcare Innovation",
    category: "Academic & Research",
    description: "Advancing surgical mastery, digital healthcare solutions, medical education, and institution building.",
    href: "/#about",
    icon: Sparkles,
    badge: "Healthcare Vision"
  },

  // Contact & Appointments
  {
    id: "book-appointment",
    title: "Book a Clinic or Video Consultation",
    category: "Contact & Booking",
    description: "Schedule an outpatient visit at New Life Clinic or Wonderbloom Centre of Excellence.",
    href: "/#contact",
    icon: Calendar,
    badge: "OPD Booking"
  },
  {
    id: "phone-desk",
    title: "Helpline & Direct Phone Desk: +91 97776 18555",
    category: "Contact & Booking",
    description: "Direct assistance for patient queries, clinic timings, and second opinions.",
    href: "tel:+919777618555",
    icon: Phone,
    badge: "Direct Call"
  }
];

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickSearchModal({ isOpen, onClose }: QuickSearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { openModal: openAppointmentModal } = useAppointmentModal();

  const categories = ["All", "Specialty", "Clinic & Hospital", "Award & Leadership", "Academic & Research", "Contact & Booking"];

  // Keyboard shortcut listener (Escape to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Filtered Results
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SEARCH_DATABASE.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.badge && item.badge.toLowerCase().includes(q))
      );
    });
  }, [query, selectedCategory]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#34495E]/40 backdrop-blur-sm -z-10"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(65,105,135,0.25)] border border-[#E3EBF1] overflow-hidden"
          >
            {/* Search Input Bar */}
            <div className="p-4 sm:p-5 border-b border-[#E3EBF1] flex items-center gap-3 bg-[#FDFEFE]">
              <Search className="w-5 h-5 text-[#397FA5] shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search procedures, clinics, timings, awards, qualifications..."
                autoFocus
                className="w-full text-sm sm:text-base text-[#34495E] placeholder-[#8493A0] bg-transparent outline-hidden font-medium"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 rounded-full text-[#8493A0] hover:text-[#34495E] hover:bg-[#F1F7FC] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold text-[#64748B] hover:text-[#34495E] bg-[#F1F7FC] border border-[#E3EBF1]"
              >
                ESC
              </button>
            </div>

            {/* Category Pill Filters */}
            <div className="px-4 py-2.5 bg-[#F8FAFC] border-b border-[#E3EBF1] flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? "bg-[#397FA5] text-white shadow-2xs"
                      : "bg-white text-[#64748B] hover:text-[#34495E] border border-[#E3EBF1]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results List */}
            <div className="max-h-[60vh] overflow-y-auto p-3 sm:p-4 space-y-2">
              {results.length === 0 ? (
                <div className="py-12 text-center space-y-2">
                  <p className="text-sm font-semibold text-[#34495E]">No results found for &ldquo;{query}&rdquo;</p>
                  <p className="text-xs text-[#8493A0]">Try searching for &ldquo;urology&rdquo;, &ldquo;New Life Clinic&rdquo;, &ldquo;timings&rdquo;, or &ldquo;laparoscopy&rdquo;.</p>
                </div>
              ) : (
                results.map((item) => {
                  const Icon = item.icon;
                  const isBooking = item.id === "book-appointment";

                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        onClose();
                        if (isBooking) {
                          openAppointmentModal();
                        }
                      }}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-start justify-between gap-3 p-3.5 rounded-2xl hover:bg-[#F1F7FC] border border-transparent hover:border-[#DCECF7] transition-all cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-xl bg-[#EAF3FA] group-hover:bg-white text-[#397FA5] flex items-center justify-center shrink-0 border border-[#DCECF7] shadow-2xs transition-colors">
                            <Icon className="w-4 h-4 text-[#397FA5]" />
                          </div>
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="text-xs sm:text-sm font-bold text-[#34495E] group-hover:text-[#397FA5] transition-colors">
                                {item.title}
                              </h4>
                              {item.badge && (
                                <span className="px-2 py-0.5 rounded-md bg-[#E8F6F3] text-[#65B5AA] text-[10px] font-bold border border-[#65B5AA]/20">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-[#64748B] line-clamp-1 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <div className="shrink-0 flex items-center pt-1 text-[#8493A0] group-hover:text-[#397FA5] transition-colors">
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </Link>
                    </div>
                  );
                })
              )}
            </div>

            {/* Quick Footer Assistance */}
            <div className="p-3 sm:p-4 bg-[#F8FAFC] border-t border-[#E3EBF1] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#8493A0]">
              <span>Quick Surfer • Instant Medical Navigation</span>
              <div className="flex items-center gap-3">
                <a href="tel:+919777618555" className="text-[#397FA5] font-semibold hover:underline">
                  Call: +91 97776 18555
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
