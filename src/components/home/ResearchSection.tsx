"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ACADEMIC_CONTRIBUTIONS, PublicationItem } from "@/data/doctorData";
import {
  BookOpen,
  FileText,
  Presentation,
  Award,
  GraduationCap,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  X,
  FileCheck
} from "lucide-react";

export default function ResearchSection() {
  const [selectedPub, setSelectedPub] = useState<PublicationItem | null>(null);

  const majorPub = ACADEMIC_CONTRIBUTIONS.find((p) => p.isMajorContribution);
  const otherPubs = ACADEMIC_CONTRIBUTIONS.filter((p) => !p.isMajorContribution);

  return (
    <section id="publications" className="py-20 sm:py-28 bg-[#F1F7FC] relative overflow-hidden">
      {/* Subtle Pastel Radial Glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 ice-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E3EBF1] shadow-2xs">
            <BookOpen className="w-4 h-4 text-[#397FA5]" />
            <span className="text-xs font-bold tracking-wider uppercase text-[#397FA5]">
              Academic Contributions & Scientific Research
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#34495E] tracking-tight">
            Academic Excellence & Research
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            Four years of postgraduate teaching experience, landmark publications in the Journal of Indian Association of Pediatric Surgeons, and presentations at IAPSCON, PESICON, and national urology conferences.
          </p>
        </div>

        {/* Teaching Experience Banner in Light Luxury Theme */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#E3EBF1] shadow-[0_8px_30px_rgba(65,105,135,0.06)] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#EAF3FA] border border-[#DCECF7] flex items-center justify-center text-[#397FA5] flex-shrink-0">
              <GraduationCap className="w-7 h-7 text-[#397FA5]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#397FA5]">
                Postgraduate Surgical Faculty
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#34495E] mt-0.5">
                4 Years of Postgraduate Teaching Experience
              </h3>
              <p className="text-xs text-[#64748B] mt-1 max-w-xl leading-relaxed">
                Dedicated training and clinical mentoring of postgraduate surgical trainees in surgical decision-making, rounds, and operative procedures.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <span className="px-4 py-2 rounded-xl bg-[#E8F6F3] text-xs font-semibold border border-[#65B5AA]/30 text-[#397FA5]">
              Clinical Mentorship
            </span>
          </div>
        </motion.div>

        {/* MAJOR RESEARCH PUBLICATION: FEATURE CARD (JIAPS 2024) */}
        {majorPub && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 rounded-3xl p-6 sm:p-10 bg-white border-2 border-[#397FA5]/25 shadow-[0_12px_36px_rgba(65,105,135,0.07)] relative overflow-hidden"
          >
            {/* Top Accent Ribbon */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E3EBF1]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F6F3] text-[#397FA5] text-xs font-bold uppercase tracking-wider border border-[#65B5AA]/30 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#65B5AA]" />
                <span>Featured Landmark Research</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#34495E]">
                <span className="px-2.5 py-1 rounded-lg bg-[#EAF3FA] text-[#397FA5]">
                  Vol. {majorPub.volume}, Issue {majorPub.issue}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#F1F7FC] text-[#64748B] border border-[#E3EBF1]">
                  {majorPub.period}
                </span>
              </div>
            </div>

            {/* Publication Title & Journal */}
            <div className="space-y-4 mb-6">
              <div className="space-y-1.5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#397FA5]">
                  {majorPub.journal}
                </p>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#34495E] leading-tight">
                  "{majorPub.title}"
                </h3>
              </div>

              {/* Authors line in smaller, elegant typography */}
              <div className="p-3.5 rounded-xl bg-[#F1F7FC] border border-[#E3EBF1]">
                <p className="text-[11px] uppercase tracking-wider font-bold text-[#8493A0]">
                  Contributing Authors:
                </p>
                <p className="text-xs sm:text-sm font-semibold text-[#34495E] mt-0.5">
                  {majorPub.authors}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {majorPub.summary}
              </p>
            </div>

            {/* Bottom Bar: Button & Verification Status */}
            <div className="pt-4 border-t border-[#E3EBF1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#65B5AA] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#65B5AA]" />
                <span>Verified Scientific Contribution (Cloacal Defect Reconstructive Approach)</span>
              </div>

              <button
                onClick={() => setSelectedPub(majorPub)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#397FA5] hover:bg-[#286B91] text-white text-xs font-semibold shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <FileText className="w-3.5 h-3.5 text-white/90 group-hover:scale-110 transition-transform" />
                <span>View Publication</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* Other Academic Papers & Conference Presentations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {otherPubs.map((item, idx) => {
            const isJournal = item.type === "International Journal";
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E3EBF1] hover:border-[#65B5AA]/40 shadow-[0_4px_16px_rgba(65,105,135,0.04)] hover:shadow-[0_12px_28px_rgba(65,105,135,0.08)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        isJournal
                          ? "bg-[#EAF3FA] text-[#397FA5] border border-[#DCECF7]"
                          : "bg-[#F1F7FC] text-[#64748B] border border-[#E3EBF1]"
                      }`}
                    >
                      {item.type}
                    </span>
                    <span className="text-xs font-semibold text-[#8493A0]">
                      {item.topic}
                    </span>
                  </div>

                  <h4 className="font-editorial text-lg sm:text-xl font-bold text-[#34495E] mb-3 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs font-semibold text-[#397FA5] mb-2 flex items-center gap-1.5">
                    {isJournal ? (
                      <FileText className="w-3.5 h-3.5 text-[#65B5AA]" />
                    ) : (
                      <Presentation className="w-3.5 h-3.5 text-[#65B5AA]" />
                    )}
                    <span>{item.forum}</span>
                  </p>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#E3EBF1] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#8493A0]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#65B5AA]" />
                    <span>Peer-Reviewed / Conference Record</span>
                  </div>

                  <button
                    onClick={() => setSelectedPub(item)}
                    className="text-xs font-bold text-[#397FA5] hover:text-[#286B91] underline cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Publication Citation Modal */}
      <AnimatePresence>
        {selectedPub && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#34495E]/30 backdrop-blur-xs"
              onClick={() => setSelectedPub(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#E3EBF1] overflow-hidden z-10 p-6 sm:p-8 space-y-5"
            >
              <div className="flex items-start justify-between pb-4 border-b border-[#E3EBF1]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#397FA5]">
                    Verified Academic Publication
                  </span>
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#34495E] mt-1">
                    Publication Record
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPub(null)}
                  className="p-1.5 rounded-xl text-[#8493A0] hover:text-[#34495E] hover:bg-[#F1F7FC] transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title & Journal */}
              <div className="space-y-2">
                <h4 className="font-editorial text-lg font-bold text-[#34495E]">
                  "{selectedPub.title}"
                </h4>
                {selectedPub.journal && (
                  <p className="text-xs font-semibold text-[#397FA5]">
                    {selectedPub.journal}
                    {selectedPub.volume && ` • Vol. ${selectedPub.volume}, Issue ${selectedPub.issue || ""}`}
                    {selectedPub.period && ` • ${selectedPub.period}`}
                  </p>
                )}
                {!selectedPub.journal && (
                  <p className="text-xs font-semibold text-[#397FA5]">{selectedPub.forum}</p>
                )}
              </div>

              {/* Authors */}
              {selectedPub.authors && (
                <div className="p-3.5 rounded-xl bg-[#F1F7FC] border border-[#E3EBF1] space-y-1">
                  <p className="text-[10px] font-bold uppercase text-[#8493A0]">Authors:</p>
                  <p className="text-xs font-medium text-[#34495E]">{selectedPub.authors}</p>
                </div>
              )}

              {/* Summary */}
              <p className="text-xs text-[#64748B] leading-relaxed">
                {selectedPub.summary}
              </p>

              {/* Verification & Close */}
              <div className="pt-4 border-t border-[#E3EBF1] flex items-center justify-between">
                <span className="text-xs text-[#65B5AA] flex items-center gap-1.5 font-medium">
                  <FileCheck className="w-4 h-4" />
                  <span>Verified Medical Record</span>
                </span>
                <button
                  onClick={() => setSelectedPub(null)}
                  className="px-5 py-2 rounded-xl bg-[#F1F7FC] hover:bg-[#EAF3FA] text-[#34495E] text-xs font-semibold transition-colors cursor-pointer border border-[#E3EBF1]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
