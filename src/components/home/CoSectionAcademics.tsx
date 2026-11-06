"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ACADEMIC_CONTRIBUTIONS,
  TEACHING_EXPERIENCE,
  PROFESSIONAL_MEMBERSHIPS,
  PublicationItem
} from "@/data/doctorData";
import {
  BookOpen,
  GraduationCap,
  Award,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Users,
  Calendar,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function CoSectionAcademics() {
  const [activeTab, setActiveTab] = useState<"publications" | "teaching" | "memberships">("publications");

  const subTabs = [
    { id: "publications", label: "Research Publications", icon: BookOpen },
    { id: "teaching", label: "Trainee Mentorship", icon: GraduationCap },
    { id: "memberships", label: "Professional Memberships", icon: ShieldCheck }
  ];

  const majorPub = ACADEMIC_CONTRIBUTIONS.find((p) => p.isMajorContribution);
  const otherPubs = ACADEMIC_CONTRIBUTIONS.filter((p) => !p.isMajorContribution);

  return (
    <section id="academics" className="py-16 sm:py-24 bg-[#F8FAFC] relative overflow-hidden border-b border-[#E3EBF1]">
      {/* Anchor targets */}
      <div id="publications" className="relative -top-24 pointer-events-none" />
      <div id="research" className="relative -top-24 pointer-events-none" />
      <div id="memberships" className="relative -top-24 pointer-events-none" />

      {/* Decorative Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 teal-radial-glow pointer-events-none -translate-x-1/2 opacity-50" />
      <div className="absolute bottom-10 right-0 w-96 h-96 ice-radial-glow pointer-events-none translate-x-1/3 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Co-Section Master Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FA] border border-[#DCECF7] shadow-2xs">
            <BookOpen className="w-4 h-4 text-[#397FA5]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#397FA5]">
              Co-Section 04 • Academics, Research &amp; Mentorship
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#34495E]">
            Academic Rigor &amp; Surgical Trainees
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Review Dr. Anand&apos;s peer-reviewed pediatric surgery research, 4 years of postgraduate trainee mentorship, and formal affiliations with surgical bodies.
          </p>

          {/* Interactive Sub-Nav Pills */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1 rounded-2xl sm:rounded-full bg-white border border-[#E3EBF1] shadow-2xs max-w-full overflow-x-auto scrollbar-none">
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
          {/* TAB 1: RESEARCH PUBLICATIONS */}
          {activeTab === "publications" && (
            <motion.div
              key="publications"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Landmark Major Contribution Card */}
              {majorPub && (
                <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#65B5AA]/30 shadow-[0_8px_30px_rgba(65,105,135,0.06)] space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#65B5AA] bg-[#E8F6F3] px-3 py-1 rounded-full border border-[#65B5AA]/30">
                      Landmark Journal Publication
                    </span>
                    <span className="text-xs font-semibold text-[#8493A0]">
                      {majorPub.journal} • {majorPub.period}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#34495E]">
                    {majorPub.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {majorPub.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#397FA5] font-semibold border-t border-[#E3EBF1]">
                    <span>Topic: {majorPub.topic}</span>
                    <span>•</span>
                    <span>Authors: {majorPub.authors}</span>
                  </div>
                </div>
              )}

              {/* Other Publications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherPubs.map((pub) => (
                  <div
                    key={pub.id}
                    className="p-6 rounded-3xl bg-white border border-[#E3EBF1] shadow-2xs hover:shadow-xs transition-all space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase text-[#397FA5] bg-[#EAF3FA] px-2.5 py-0.5 rounded-full border border-[#DCECF7]">
                          {pub.type}
                        </span>
                        {pub.period && (
                          <span className="text-xs font-semibold text-[#8493A0]">{pub.period}</span>
                        )}
                      </div>

                      <h4 className="font-editorial text-lg font-bold text-[#34495E]">
                        {pub.title}
                      </h4>

                      <p className="text-xs text-[#397FA5] font-semibold">
                        {pub.journal || pub.conferenceName}
                      </p>

                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {pub.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E3EBF1] flex items-center justify-between text-[11px] text-[#8493A0]">
                      <span>{pub.topic}</span>
                      <span className="text-[#65B5AA] font-bold">Peer Reviewed</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 2: TRAINEE MENTORSHIP & TEACHING */}
          {activeTab === "teaching" && (
            <motion.div
              key="teaching"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E3EBF1] shadow-2xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF3FA] text-[#397FA5] flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-2xl font-bold text-[#34495E]">
                      {TEACHING_EXPERIENCE.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#397FA5]">
                      {TEACHING_EXPERIENCE.duration} • {TEACHING_EXPERIENCE.audience}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {TEACHING_EXPERIENCE.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {TEACHING_EXPERIENCE.highlights.map((h: string, i: number) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E3EBF1] text-xs text-[#64748B]">
                      <CheckCircle2 className="w-4 h-4 text-[#65B5AA] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: PROFESSIONAL MEMBERSHIPS */}
          {activeTab === "memberships" && (
            <motion.div
              key="memberships"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {PROFESSIONAL_MEMBERSHIPS.map((mem) => (
                <div
                  key={mem.id}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E3EBF1] shadow-2xs hover:shadow-xs transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#EAF3FA] text-[#397FA5] flex items-center justify-center">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#397FA5] bg-[#E8F6F3] px-2.5 py-0.5 rounded-full border border-[#65B5AA]/30">
                        {mem.verificationStatus}
                      </span>
                    </div>

                    <h4 className="font-editorial text-2xl font-bold text-[#34495E]">
                      {mem.abbreviation}
                    </h4>
                    <p className="text-xs font-semibold text-[#65B5AA] uppercase tracking-wider">
                      {mem.organizationCategory}
                    </p>

                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {mem.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-[#397FA5] font-semibold pt-3 border-t border-[#E3EBF1]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#65B5AA]" />
                    <span>Verified Association</span>
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