import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ACADEMIC_CONTRIBUTIONS } from "@/data/doctorData";
import { BookOpen, GraduationCap, FileText, Presentation, ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Contributions & Publications | Dr. Abhishek Anand",
  description:
    "Review research publications, international journal papers, and national conference presentations by Dr. Abhishek Anand, Consultant Pediatric Surgeon."
};

export default function PublicationsPage() {
  return (
    <div className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-gradient-to-b from-[#FDFEFE] via-[#F1F7FC] to-[#EAF3FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#8493A0] hover:text-[#397FA5] transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F6F3] text-[#397FA5] text-xs font-bold uppercase tracking-wider border border-[#65B5AA]/30">
            <BookOpen className="w-4 h-4 text-[#65B5AA]" />
            <span>Scholarly Work</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#34495E] tracking-tight">
            Academic Excellence & Research Contributions
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            International peer-reviewed publications, 4 years of postgraduate surgical teaching experience, and scientific presentations at premier national forums.
          </p>
        </div>

        {/* Teaching Banner (Light Luxury) */}
        <div className="max-w-4xl p-6 sm:p-8 rounded-3xl bg-white border border-[#E3EBF1] shadow-[0_12px_35px_-8px_rgba(65,105,135,0.07)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#EAF3FA] text-[#397FA5] border border-[#DCECF7] flex items-center justify-center flex-shrink-0 shadow-2xs">
              <GraduationCap className="w-8 h-8 text-[#397FA5]" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#397FA5]">
                Postgraduate Surgical Faculty
              </p>
              <h2 className="font-editorial text-2xl font-bold text-[#34495E]">
                4 Years of Postgraduate Teaching Experience
              </h2>
              <p className="text-xs text-[#64748B] mt-1 max-w-lg">
                Mentoring MS and surgical trainees in clinical rounds, bedside decision-making, and surgical procedures.
              </p>
            </div>
          </div>
          <span className="px-4 py-2 rounded-full bg-[#E8F6F3] text-xs font-semibold text-[#65B5AA] border border-[#65B5AA]/30 whitespace-nowrap">
            Verified Faculty Service
          </span>
        </div>

        {/* Publication Cards */}
        <div className="max-w-4xl space-y-6">
          {ACADEMIC_CONTRIBUTIONS.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-8 rounded-3xl border transition-all space-y-4 bg-white ${
                item.isMajorContribution
                  ? "border-[#397FA5]/30 shadow-[0_12px_35px_-6px_rgba(65,105,135,0.08)] ring-1 ring-[#397FA5]/15"
                  : "border-[#E3EBF1] shadow-[0_4px_20px_rgba(65,105,135,0.05)] hover:shadow-[0_8px_30px_rgba(65,105,135,0.09)]"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                  item.isMajorContribution
                    ? "bg-[#EAF3FA] text-[#397FA5] border-[#DCECF7]"
                    : "bg-[#F1F7FC] text-[#64748B] border-[#E3EBF1]"
                }`}>
                  {item.isMajorContribution ? "Featured Major Research Publication" : item.type}
                </span>
                {item.period ? (
                  <span className="text-xs font-bold text-[#397FA5] bg-[#E8F6F3] border border-[#65B5AA]/25 px-2.5 py-1 rounded-md">
                    {item.period}
                  </span>
                ) : (
                  <span className="text-xs font-semibold text-[#8493A0]">
                    {item.topic}
                  </span>
                )}
              </div>

              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#34495E]">
                "{item.title}"
              </h3>

              {item.isMajorContribution && (
                <div className="space-y-2 p-4 rounded-2xl bg-[#F1F7FC] border border-[#E3EBF1]">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-bold text-[#397FA5]">{item.journal}</span>
                    <span className="text-[#8493A0]">•</span>
                    <span className="text-[#34495E] font-semibold">Volume {item.volume}, Issue {item.issue}</span>
                  </div>
                  <div className="text-xs text-[#64748B]">
                    <span className="font-bold text-[#34495E]">Authors: </span>
                    <span>{item.authors}</span>
                  </div>
                </div>
              )}

              {!item.isMajorContribution && (
                <div className="flex items-center gap-2 text-xs font-semibold text-[#397FA5]">
                  {item.type === "International Journal" ? (
                    <FileText className="w-4 h-4 text-[#65B5AA]" />
                  ) : (
                    <Presentation className="w-4 h-4 text-[#65B5AA]" />
                  )}
                  <span>{item.forum}</span>
                </div>
              )}

              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
