"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Sparkles,
  Heart,
  Shield,
  ShieldCheck,
  Compass,
  Trophy,
  ArrowRight,
  Stethoscope,
  Cpu,
  Building2,
  Calendar,
  GraduationCap,
  Award,
  CheckCircle2,
  HeartHandshake,
  Clock,
  Lightbulb,
  BookOpen,
  Megaphone,
  HandHeart
} from "lucide-react";
import {
  DOCTOR_PROFILE,
  DOCTOR_WELCOME_MESSAGE,
  DOCTOR_MOTTO,
  DOCTOR_PHILOSOPHY,
  DOCTOR_PERSONAL_QUOTE,
  DISTINCTIVE_APPROACH_LIST,
  PERSONAL_INTERESTS,
  COMMUNITY_SERVICE_LIST,
  EDUCATION_LIST
} from "@/data/doctorData";
import { useAppointmentModal } from "@/components/AppointmentModalProvider";

export default function CoSectionAbout() {
  const [activeTab, setActiveTab] = useState<"welcome" | "motto" | "pillars" | "community" | "interests" | "qualifications">("welcome");
  const { openModal } = useAppointmentModal();

  const subTabs = [
    { id: "welcome", label: "Welcome Note", icon: Heart },
    { id: "motto", label: "Motto & Philosophy", icon: Compass },
    { id: "pillars", label: "7 Pillars", icon: Sparkles },
    { id: "community", label: "Community Service", icon: HeartHandshake },
    { id: "interests", label: "Personal Interests", icon: Lightbulb },
    { id: "qualifications", label: "Qualifications", icon: GraduationCap }
  ];

  const pillarIconMap: { [key: string]: any } = {
    Stethoscope,
    Cpu,
    HeartHandshake,
    Clock,
    Building2,
    Lightbulb,
    GraduationCap,
    Heart,
    BookOpen,
    Sparkles,
    HandHeart,
    Megaphone
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-[#E3EBF1]">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 teal-radial-glow pointer-events-none -translate-x-1/2 opacity-60" />
      <div className="absolute bottom-10 right-0 w-96 h-96 ice-radial-glow pointer-events-none translate-x-1/3 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Co-Section Master Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FA] border border-[#DCECF7] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#65B5AA] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#397FA5]">
              Co-Section 01 • Medical Identity &amp; Ethos
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#34495E]">
            About Dr. Abhishek Anand
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            A comprehensive overview of Dr. Anand&apos;s welcome to families, guiding medical philosophy, community service commitment, personal interests, and accredited qualifications.
          </p>

          {/* Interactive Sub-Navigation Tabs */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1 rounded-2xl sm:rounded-full bg-[#F1F7FC] border border-[#E3EBF1] shadow-2xs max-w-full overflow-x-auto scrollbar-none">
              {subTabs.map((tab) => {
                const Icon = tab.icon;
                const isCurrent = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`relative flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl sm:rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
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
          {/* TAB 1: WELCOME NOTE TO PARENTS */}
          {activeTab === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Doctor Portrait Card with Official Logo Emblem */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md rounded-3xl bg-[#F8FAFC] p-3.5 sm:p-4 border border-[#E3EBF1] shadow-[0_12px_36px_rgba(65,105,135,0.07)]">
                  <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-gradient-to-b from-[#F1F7FC] to-[#DCECF7]">
                    <Image
                      src={DOCTOR_PROFILE.doctorPhotoJpg}
                      alt="Dr. Abhishek Anand"
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover object-[center_12%]"
                      priority
                    />
                    <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#34495E]/90 via-[#34495E]/50 to-transparent text-white">
                      <p className="font-editorial text-xl font-bold">Dr. Abhishek Anand</p>
                      <p className="text-xs text-[#E8F6F3] font-semibold mt-0.5">
                        Full-Time Consultant • Wonderbloom CoE
                      </p>
                      <p className="text-[10px] text-slate-200 mt-0.5">
                        MBBS | DrNB (Pediatric Surgery) | FMAS
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#64748B]">
                    <div className="flex items-center gap-2">
                      <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[#C7AD7A]/40 shrink-0">
                        <Image src="/images/logo.jpg" alt="Official Logo" width={24} height={24} className="object-cover" />
                      </div>
                      <span className="font-semibold text-[#397FA5]">Times Health Icon 2026</span>
                    </div>
                    <span className="text-[#8493A0]">Bhubaneswar, Odisha</span>
                  </div>
                </div>
              </div>

              {/* Welcoming Letter */}
              <div className="lg:col-span-7 space-y-5">
                <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E3EBF1] shadow-2xs space-y-4 relative">
                  <Quote className="absolute top-5 right-6 w-12 h-12 text-[#65B5AA]/15 pointer-events-none" />

                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F6F3] text-[#397FA5] text-[10px] font-bold uppercase tracking-wider border border-[#65B5AA]/30">
                      Personal Message to Families
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#34495E]">
                      {DOCTOR_WELCOME_MESSAGE.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#65B5AA]">
                      {DOCTOR_WELCOME_MESSAGE.salutation}
                    </p>
                  </div>

                  {DOCTOR_WELCOME_MESSAGE.paragraphs.map((para, i) => (
                    <p key={i} className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                      {para}
                    </p>
                  ))}

                  <div className="p-4 rounded-2xl bg-white border border-[#65B5AA]/30 shadow-2xs">
                    <p className="font-editorial text-base sm:text-lg font-bold text-[#34495E] italic">
                      &ldquo;{DOCTOR_WELCOME_MESSAGE.priorityStatement}&rdquo;
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold text-[#8493A0]">{DOCTOR_WELCOME_MESSAGE.closing}</p>
                      <p className="font-editorial text-lg font-bold text-[#34495E]">
                        {DOCTOR_WELCOME_MESSAGE.doctorName}
                      </p>
                      <p className="text-xs text-[#397FA5] font-semibold">
                        {DOCTOR_WELCOME_MESSAGE.credentials}
                      </p>
                    </div>

                    <button
                      onClick={() => openModal()}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#397FA5] hover:bg-[#286B91] text-white text-xs font-semibold shadow-xs"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Consultation</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: MOTTO & PROFESSIONAL PHILOSOPHY */}
          {activeTab === "motto" && (
            <motion.div
              key="motto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              {/* Motto Ribbon */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#F4F9FD] via-white to-[#EAF3FA] border border-[#DCECF7] text-center space-y-3 shadow-2xs">
                <span className="px-3.5 py-1 rounded-full bg-white border border-[#DCECF7] text-xs font-bold uppercase tracking-wider text-[#397FA5]">
                  Official Doctor Motto: {DOCTOR_MOTTO.trio}
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#34495E]">
                  &ldquo;{DOCTOR_MOTTO.tagline}&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] max-w-xl mx-auto">
                  Every surgical plan and consultation is guided by the triple commitment to heal with precision, protect with gentle recovery, and empower parents.
                </p>
              </div>

              {/* 2-Column Philosophy & Quote Showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
                {/* One Statement Philosophy */}
                <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E3EBF1] shadow-2xs flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#E3EBF1] pb-3">
                      <div className="flex items-center gap-2">
                        <Compass className="w-5 h-5 text-[#65B5AA]" />
                        <h4 className="font-editorial text-lg font-bold text-[#34495E]">
                          Professional Philosophy
                        </h4>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#EAF3FA] text-[#397FA5] text-[10px] font-bold">
                        One Statement
                      </span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DCECF7]">
                      <p className="font-editorial text-base sm:text-lg font-bold text-[#34495E] leading-snug">
                        &ldquo;{DOCTOR_PHILOSOPHY.statement}&rdquo;
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {DOCTOR_PHILOSOPHY.pillars.map((p, idx) => {
                        const icons = [Stethoscope, Heart, Cpu, Building2];
                        const PIcon = icons[idx] || Stethoscope;
                        return (
                          <div key={p.title} className="p-3 rounded-xl bg-white border border-[#E3EBF1] space-y-1">
                            <div className="flex items-center gap-1.5">
                              <PIcon className="w-3.5 h-3.5 text-[#65B5AA]" />
                              <h5 className="text-xs font-bold text-[#34495E]">{p.title}</h5>
                            </div>
                            <p className="text-[11px] text-[#64748B] leading-relaxed">{p.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Personal Quote */}
                <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E3EBF1] shadow-2xs flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#E3EBF1] pb-3">
                      <div className="flex items-center gap-2">
                        <Quote className="w-5 h-5 text-[#397FA5]" />
                        <h4 className="font-editorial text-lg font-bold text-[#34495E]">
                          Personal Quote
                        </h4>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#EAF3FA] text-[#397FA5] text-[10px] font-bold">
                        Ethos
                      </span>
                    </div>

                    <div className="pl-4 border-l-3 border-[#65B5AA] space-y-2">
                      <p className="font-editorial text-base sm:text-lg text-[#34495E] italic leading-relaxed">
                        &ldquo;{DOCTOR_PERSONAL_QUOTE.quote}&rdquo;
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center pt-2">
                      <div className="p-2.5 rounded-xl bg-white border border-[#65B5AA]/30">
                        <p className="text-xs font-bold text-[#397FA5]">HEAL</p>
                        <p className="text-[10px] text-[#64748B]">Surgical Precision</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-[#DCECF7]">
                        <p className="text-xs font-bold text-[#397FA5]">PROTECT</p>
                        <p className="text-[10px] text-[#64748B]">Neonatal Safety</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-[#C7AD7A]/30">
                        <p className="text-xs font-bold text-[#8C6D2C]">EMPOWER</p>
                        <p className="text-[10px] text-[#64748B]">Parent Support</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E3EBF1] flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-[#34495E]">{DOCTOR_PERSONAL_QUOTE.author}</p>
                      <p className="text-[11px] text-[#65B5AA] font-semibold">{DOCTOR_PERSONAL_QUOTE.role}</p>
                    </div>
                    <span className="text-[#8493A0]">Times Health Icon 2026</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: 7 DISTINCTIVE PILLARS */}
          {activeTab === "pillars" && (
            <motion.div
              key="pillars"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {DISTINCTIVE_APPROACH_LIST.map((pillar) => {
                  const Icon = pillarIconMap[pillar.iconName] || Stethoscope;

                  return (
                    <div
                      key={pillar.number}
                      className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-[#E3EBF1] hover:border-[#65B5AA]/50 hover:bg-white hover:shadow-xs transition-all space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-editorial text-xl font-bold text-[#65B5AA]">
                            {pillar.number}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#397FA5] bg-white px-2.5 py-0.5 rounded-full border border-[#DCECF7]">
                            {pillar.category}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#EAF3FA] text-[#397FA5] flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <h4 className="font-editorial text-base font-bold text-[#34495E] leading-snug">
                            {pillar.title}
                          </h4>
                        </div>

                        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* TAB 4: COMMUNITY SERVICE & SOCIAL COMMITMENT (NEW!) */}
          {activeTab === "community" && (
            <motion.div
              key="community"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-3xl bg-gradient-to-r from-[#F4F9FD] via-white to-[#E8F6F3] border border-[#DCECF7] text-center space-y-2 shadow-2xs">
                <span className="px-3 py-1 rounded-full bg-white border border-[#65B5AA]/30 text-[10px] font-bold uppercase tracking-wider text-[#397FA5]">
                  Beyond the Operating Room
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#34495E]">
                  Community Service &amp; Social Commitment
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] max-w-2xl mx-auto">
                  A deep commitment to public child health education, empowering families with guidance on congenital anomalies, and championing early diagnosis.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {COMMUNITY_SERVICE_LIST.map((item, idx) => {
                  const Icon = pillarIconMap[item.iconName] || Heart;

                  return (
                    <div
                      key={item.id}
                      className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E3EBF1] hover:border-[#65B5AA]/50 hover:bg-white hover:shadow-xs transition-all space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-[#E8F6F3] text-[#65B5AA] flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-[#65B5AA]" />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#397FA5] bg-white px-2.5 py-0.5 rounded-full border border-[#DCECF7]">
                            Pillar 0{idx + 1}
                          </span>
                        </div>

                        <div>
                          <h4 className="font-editorial text-lg font-bold text-[#34495E] leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-[11px] font-semibold text-[#65B5AA] mt-0.5">
                            {item.tagline}
                          </p>
                        </div>

                        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#E3EBF1] flex items-center gap-1.5 text-[11px] text-[#397FA5] font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#65B5AA]" />
                        <span>Active Social Outreach</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* TAB 5: PERSONAL INTERESTS & INNOVATION (NEW!) */}
          {activeTab === "interests" && (
            <motion.div
              key="interests"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-3xl bg-gradient-to-r from-[#F4F9FD] via-white to-[#EAF3FA] border border-[#DCECF7] text-center space-y-2 shadow-2xs">
                <span className="px-3 py-1 rounded-full bg-white border border-[#DCECF7] text-[10px] font-bold uppercase tracking-wider text-[#397FA5]">
                  Vision &amp; Lifelong Dedication
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#34495E]">
                  Personal Interests &amp; Healthcare Vision
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] max-w-2xl mx-auto">
                  Exploring global surgical advancements, developing accessible digital healthcare systems, and mentoring the future of medicine.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {PERSONAL_INTERESTS.map((item, idx) => {
                  const Icon = pillarIconMap[item.iconName] || Lightbulb;

                  return (
                    <div
                      key={item.id}
                      className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E3EBF1] hover:border-[#397FA5]/40 hover:bg-white hover:shadow-xs transition-all space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-[#EAF3FA] text-[#397FA5] flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-[#397FA5]" />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#65B5AA] bg-white px-2.5 py-0.5 rounded-full border border-[#DCECF7]">
                            {item.category}
                          </span>
                        </div>

                        <div>
                          <h4 className="font-editorial text-lg font-bold text-[#34495E] leading-snug">
                            {item.title}
                          </h4>
                        </div>

                        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#E3EBF1] flex items-center gap-1.5 text-[11px] text-[#397FA5] font-semibold">
                        <Sparkles className="w-3.5 h-3.5 text-[#C7AD7A]" />
                        <span>Ongoing Professional Focus</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* TAB 6: DEGREES & QUALIFICATIONS */}
          {activeTab === "qualifications" && (
            <motion.div
              key="qualifications"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {EDUCATION_LIST.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] border border-[#E3EBF1] hover:border-[#65B5AA]/40 hover:bg-white hover:shadow-xs transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#EAF3FA] text-[#397FA5] flex items-center justify-center border border-[#DCECF7]">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      {edu.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#397FA5] bg-[#E8F6F3] px-2.5 py-0.5 rounded-full border border-[#65B5AA]/30">
                          {edu.badge}
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="font-editorial text-xl font-bold text-[#34495E]">
                        {edu.degree}
                      </h4>
                      <p className="text-xs font-semibold text-[#397FA5] mt-0.5">
                        {edu.institution}
                      </p>
                      {edu.year && (
                        <p className="text-[11px] text-[#8493A0] mt-0.5">Year: {edu.year}</p>
                      )}
                    </div>

                    <p className="text-xs text-[#64748B] leading-relaxed pt-2 border-t border-[#E3EBF1]">
                      {edu.details}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-[#65B5AA] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Board Certified Credential</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}