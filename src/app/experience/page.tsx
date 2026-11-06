import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { EXPERIENCE_TIMELINE } from "@/data/doctorData";
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Journey & Clinical Experience | Dr. Abhishek Anand",
  description:
    "Explore the clinical career timeline of Dr. Abhishek Anand, Full-Time Consultant at Wonderbloom Pediatric Surgical Centre of Excellence and Director & COO at New Life Clinic."
};

export default function ExperiencePage() {
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
            <Briefcase className="w-4 h-4 text-[#65B5AA]" />
            <span>Career Milestones</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#34495E] tracking-tight">
            Professional Journey
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            A comprehensive record of super-specialty residency, academic university faculty appointments, and hospital leadership.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="max-w-4xl space-y-6">
          {EXPERIENCE_TIMELINE.map((item) => (
            <div
              key={`${item.role}-${item.institution}`}
              className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                item.isCurrent
                  ? "bg-white border-[#397FA5]/40 shadow-[0_12px_35px_-6px_rgba(65,105,135,0.08)] ring-1 ring-[#397FA5]/20"
                  : "bg-white border-[#E3EBF1] shadow-[0_4px_20px_rgba(65,105,135,0.05)]"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#397FA5] flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#65B5AA]" />
                  <span>{item.period}</span>
                </span>
                {item.isCurrent && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3FA] text-[#397FA5] border border-[#DCECF7] text-[10px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#65B5AA] animate-pulse" />
                    <span>Current Primary Appointment</span>
                  </span>
                )}
              </div>

              <h2 className="font-editorial text-2xl font-bold text-[#34495E]">
                {item.role}
              </h2>

              <div className="flex items-center gap-2 text-sm font-semibold text-[#397FA5] mt-1 mb-2">
                <Building2 className="w-4 h-4 text-[#65B5AA]" />
                <span>{item.institution}</span>
                {item.location && <span className="text-[#8493A0] font-normal">• {item.location}</span>}
              </div>

              {item.description && (
                <p className="text-sm text-[#64748B] leading-relaxed pt-3 border-t border-[#E3EBF1]">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
