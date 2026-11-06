"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  AWARDS_LIST,
  LEADERSHIP_ROLES,
  EXPERIENCE_TIMELINE,
  PRIMARY_APPOINTMENT,
  CLINIC_PRIMARY
} from "@/data/doctorData";
import {
  Trophy,
  Award,
  Medal,
  Sparkles,
  Building2,
  Calendar,
  Clock,
  CheckCircle2,
  Maximize2,
  X,
  ArrowRight,
  ShieldCheck,
  Briefcase
} from "lucide-react";
import { useAppointmentModal } from "@/components/AppointmentModalProvider";

export default function CoSectionAchievements() {
  const [activeTab, setActiveTab] = useState<"awards" | "leadership" | "timeline">("awards");
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; caption: string } | null>(null);
  const { openModal } = useAppointmentModal();

  const subTabs = [
    { id: "awards", label: "Awards & Press Coverage", icon: Trophy },
    { id: "leadership", label: "Executive Leadership", icon: Building2 },
    { id: "timeline", label: "Career Journey Timeline", icon: Clock }
  ];

  return (
    <section id="achievements" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-[#E3EBF1]">
      {/* Anchor targets */}
      <div id="awards" className="relative -top-24 pointer-events-none" />
      <div id="experience" className="relative -top-24 pointer-events-none" />
      <div id="leadership" className="relative -top-24 pointer-events-none" />

      {/* Decorative Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 ice-radial-glow pointer-events-none translate-x-1/3 opacity-60" />
      <div className="absolute bottom-10 left-0 w-96 h-96 teal-radial-glow pointer-events-none -translate-x-1/2 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Co-Section Master Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FA] border border-[#DCECF7] shadow-2xs">
            <Trophy className="w-4 h-4 text-[#C7AD7A]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#397FA5]">
              Co-Section 03 • Honors, Leadership &amp; Career
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#34495E]">
            Recognized Excellence &amp; Leadership
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Explore Dr. Anand&apos;s state-wide honors including the Times Health Icon Award 2026, healthcare directorships, and 12+ years of surgical milestones.
          </p>

          {/* Interactive Sub-Nav Pills */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1 rounded-2xl sm:rounded-full bg-[#F1F7FC] border border-[#E3EBF1] shadow-2xs max-w-full overflow-x-auto scrollbar-none">
              {subTabs.map((tab) => {
                const Icon = tab.icon;
                const isCurrent = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`relative flex items-center gap-1.5 px-3.5 sm:px-5 py-2 rounded-xl sm:rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isCurrent
                        ? "bg-[#397FA5] text-white shadow-xs"
                        : "text-[#64748B] hover:text-[#34495E]"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isCurrent ? "text-white" : "text-[#65B5AA]"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {/* TAB 1: AWARDS & PRESS */}
          {activeTab === "awards" && (
            <motion.div
              key="awards"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              {/* Times Health Icon Feature Banner */}
              <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#FDFEFE] via-[#F4F9FD] to-[#EAF3FA] border border-[#DCECF7] shadow-[0_12px_36px_rgba(65,105,135,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Press Images */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={() =>
                      setSelectedImage({
                        src: "/images/dr-anand-award-ceremony.jpg",
                        title: "Times Health Icon Odisha 2026",
                        caption: "Dr. Abhishek Anand receiving the Times Health Icon Award on National Doctors' Day."
                      })
                    }
                    className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xs border border-[#E3EBF1] bg-white cursor-pointer group"
                  >
                    <Image
                      src="/images/dr-anand-award-ceremony.jpg"
                      alt="Times Health Icon Award Ceremony"
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#34495E]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <Maximize2 className="w-5 h-5 drop-shadow-md" />
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-xs px-2 py-1 rounded-md text-[10px] font-bold text-[#34495E] truncate">
                      Stage Ceremony
                    </div>
                  </div>

                  <div
                    onClick={() =>
                      setSelectedImage({
                        src: "/images/times-health-icons-newspaper.jpg",
                        title: "The Times of India National Doctors' Day Feature",
                        caption: "Newspaper tribute recognizing Dr. Anand among the distinguished leaders of healthcare."
                      })
                    }
                    className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xs border border-[#E3EBF1] bg-white cursor-pointer group"
                  >
                    <Image
                      src="/images/times-health-icons-newspaper.jpg"
                      alt="Times Health Icons Newspaper"
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#34495E]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <Maximize2 className="w-5 h-5 drop-shadow-md" />
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-xs px-2 py-1 rounded-md text-[10px] font-bold text-[#34495E] truncate">
                      Press Feature
                    </div>
                  </div>
                </div>

                {/* Right: Times Health Icon Narrative */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="space-y-1">
                    <span className="px-3 py-1 rounded-full bg-[#EAF3FA] text-[#397FA5] text-[10px] font-bold uppercase tracking-wider border border-[#DCECF7]">
                      Major State Honor • 2026
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#34495E]">
                      TIMES HEALTH ICON AWARD Odisha 2026
                    </h3>
                    <p className="text-xs font-semibold text-[#65B5AA]">
                      The Times of India / Bennett &amp; Coleman • Emerging Excellence in Pediatric Surgery
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Honored statewide on National Doctors&apos; Day for exemplary contributions to pediatric surgery, complex neonatal interventions, and advancing pediatric urology in Odisha.
                  </p>

                  <div className="p-3.5 rounded-2xl bg-white border border-[#DCECF7] space-y-1 text-xs text-[#34495E]">
                    <p className="font-bold">&ldquo;Children are not simply small adults.&rdquo;</p>
                    <p className="text-[11px] text-[#64748B] italic">
                      Specialized evaluation, dedicated surgical expertise, and age-appropriate perioperative care can significantly improve outcomes.
                    </p>
                  </div>
                </div>
              </div>

              {/* All Awards Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {AWARDS_LIST.map((award) => (
                  <div
                    key={award.id}
                    className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E3EBF1] hover:border-[#65B5AA]/40 hover:bg-white hover:shadow-xs transition-all space-y-2 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#65B5AA]">{award.year}</span>
                        <span className="text-[10px] font-bold uppercase text-[#397FA5] bg-white px-2 py-0.5 rounded-md border border-[#DCECF7]">
                          {award.badge}
                        </span>
                      </div>
                      <h4 className="font-editorial text-base font-bold text-[#34495E] leading-snug">
                        {award.title}
                      </h4>
                      <p className="text-[11px] text-[#397FA5] font-semibold">{award.organization}</p>
                      <p className="text-xs text-[#64748B] leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 2: EXECUTIVE LEADERSHIP */}
          {activeTab === "leadership" && (
            <motion.div
              key="leadership"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Card 1: Wonderbloom CoE */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] border border-[#E3EBF1] hover:border-[#65B5AA]/40 hover:bg-white hover:shadow-xs transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#397FA5] bg-[#EAF3FA] px-2.5 py-0.5 rounded-full border border-[#DCECF7]">
                      Primary Clinical Role
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  </div>
                  <div>
                    <h4 className="font-editorial text-xl font-bold text-[#34495E]">
                      Full-Time Consultant
                    </h4>
                    <p className="text-xs font-semibold text-[#397FA5] mt-0.5">
                      Wonderbloom Pediatric Surgical Centre of Excellence
                    </p>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed pt-2 border-t border-[#E3EBF1]">
                    Primary full-time clinical practice leading pediatric surgery, reconstructive urology, neonatal surgeries, and minimally invasive procedures.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#65B5AA]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Primary Super-Specialty Hub</span>
                </div>
              </div>

              {/* Card 2: New Life Clinic */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] border border-[#E3EBF1] hover:border-[#65B5AA]/40 hover:bg-white hover:shadow-xs transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#397FA5] bg-[#EAF3FA] px-2.5 py-0.5 rounded-full border border-[#DCECF7]">
                      Executive &amp; OPD
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  </div>
                  <div>
                    <h4 className="font-editorial text-xl font-bold text-[#34495E]">
                      Director &amp; COO
                    </h4>
                    <p className="text-xs font-semibold text-[#397FA5] mt-0.5">
                      New Life Clinic, Bhubaneswar
                    </p>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed pt-2 border-t border-[#E3EBF1]">
                    Conducts daily outpatient clinics (5:00 PM – 9:00 PM) at Plot no-1117/3632, Baramunda for surgical consultations and post-operative reviews.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#65B5AA]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Flagship Outpatient Clinic</span>
                </div>
              </div>

              {/* Card 3: Neovitaz & Wonderbloom Hospital */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] border border-[#E3EBF1] hover:border-[#65B5AA]/40 hover:bg-white hover:shadow-xs transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#397FA5] bg-[#EAF3FA] px-2.5 py-0.5 rounded-full border border-[#DCECF7]">
                      Governance &amp; Operations
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  </div>
                  <div>
                    <h4 className="font-editorial text-xl font-bold text-[#34495E]">
                      Director &amp; COO
                    </h4>
                    <p className="text-xs font-semibold text-[#397FA5] mt-0.5">
                      Neovitaz Curae &amp; Wonderbloom Hospital
                    </p>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed pt-2 border-t border-[#E3EBF1]">
                    Healthcare executive stewardship building integrated mother &amp; child superspeciality systems, digital clinics, and operational excellence.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#65B5AA]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Healthcare Ecosystem Leadership</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: CAREER TIMELINE */}
          {activeTab === "timeline" && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="max-w-4xl mx-auto space-y-4"
            >
              {EXPERIENCE_TIMELINE.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-[#E3EBF1] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white hover:shadow-xs transition-all"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#EAF3FA] text-[#397FA5] text-[10px] font-bold border border-[#DCECF7]">
                        {item.period}
                      </span>
                      {item.isCurrent && (
                        <span className="px-2 py-0.5 rounded-full bg-[#E8F6F3] text-[#65B5AA] text-[10px] font-bold">
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className="font-editorial text-base sm:text-lg font-bold text-[#34495E]">
                      {item.role}
                    </h4>
                    <p className="text-xs text-[#397FA5] font-semibold">{item.institution}</p>
                    {item.description && (
                      <p className="text-xs text-[#64748B] leading-relaxed">{item.description}</p>
                    )}
                  </div>

                  {item.location && (
                    <span className="text-xs font-semibold text-[#8493A0] shrink-0">
                      {item.location}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal for Full Image Zoom Preview */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 bg-[#34495E]/60 backdrop-blur-sm -z-10"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl p-4 sm:p-6 max-w-3xl w-full border border-[#E3EBF1] shadow-2xl space-y-3 relative"
              >
                <div className="flex items-center justify-between border-b border-[#E3EBF1] pb-2">
                  <h4 className="font-editorial text-base font-bold text-[#34495E]">
                    {selectedImage.title}
                  </h4>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-1 rounded-full text-[#8493A0] hover:text-[#34495E]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs text-[#64748B] italic">{selectedImage.caption}</p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
