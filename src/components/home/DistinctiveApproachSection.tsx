"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DISTINCTIVE_APPROACH_LIST } from "@/data/doctorData";
import {
  Stethoscope,
  Cpu,
  HeartHandshake,
  Clock,
  Building2,
  Lightbulb,
  GraduationCap,
  Sparkles,
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { useAppointmentModal } from "@/components/AppointmentModalProvider";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Cpu,
  HeartHandshake,
  Clock,
  Building2,
  Lightbulb,
  GraduationCap
};

export default function DistinctiveApproachSection() {
  const { openModal } = useAppointmentModal();

  return (
    <section id="approach" className="py-20 sm:py-28 bg-gradient-to-b from-[#FFFFFF] via-[#F1F7FC] to-[#EAF3FA] relative overflow-hidden">
      {/* Decorative Subtle Radial Background Glows */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] teal-radial-glow pointer-events-none -translate-x-1/3" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] ice-radial-glow pointer-events-none translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F6F3] border border-[#65B5AA]/30 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#65B5AA]" />
            <span className="text-xs font-bold tracking-wider uppercase text-[#397FA5]">
              Distinctive Clinical Philosophy & Values
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#34495E] tracking-tight leading-tight">
            What Makes My Professional Approach Distinctive
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Combining surgical precision, minimally invasive techniques, compassionate family support, and forward-thinking healthcare innovation to ensure the best outcomes for every child.
          </p>
        </div>

        {/* 7 Distinctive Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {DISTINCTIVE_APPROACH_LIST.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.iconName] || Stethoscope;
            const isFeatured = idx === 0 || idx === 6;

            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className={`group rounded-3xl p-6 sm:p-8 bg-white border border-[#E3EBF1] shadow-[0_4px_20px_rgba(65,105,135,0.06)] hover:shadow-[0_12px_35px_rgba(65,105,135,0.12)] hover:border-[#397FA5]/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  idx === 6 ? "md:col-span-2 lg:col-span-3" : ""
                }`}
              >
                {/* Subtle Top Accent Highlight on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#397FA5] via-[#65B5AA] to-[#C7AD7A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  {/* Card Header: Number Badge & Category */}
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-2xl font-bold text-[#397FA5]/80 group-hover:text-[#397FA5] transition-colors">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E8F6F3] text-[#397FA5] border border-[#65B5AA]/25">
                      {pillar.category}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-2xl bg-[#F1F7FC] border border-[#DCECF7] group-hover:bg-[#EAF3FA] group-hover:border-[#397FA5]/30 text-[#397FA5] flex items-center justify-center transition-colors shadow-2xs">
                    <IconComponent className="w-6 h-6 text-[#397FA5] group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Pillar Title */}
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#34495E] leading-snug group-hover:text-[#397FA5] transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Pillar Description */}
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Trust Micro-Indicator */}
                <div className="pt-5 mt-4 border-t border-[#E3EBF1] flex items-center justify-between text-xs text-[#8493A0]">
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#65B5AA]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#65B5AA]" />
                    <span>Clinical Standard</span>
                  </span>
                  <span className="text-[11px] font-medium text-[#397FA5] opacity-0 group-hover:opacity-100 transition-opacity">
                    Dr. Abhishek Anand
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Bar: Connecting Philosophy to Care */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-white border border-[#E3EBF1] shadow-[0_8px_30px_rgba(65,105,135,0.06)] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#397FA5]">
              <ShieldCheck className="w-4 h-4 text-[#65B5AA]" />
              <span>Compassion • Precision • Innovation</span>
            </div>
            <h4 className="font-editorial text-xl sm:text-2xl font-bold text-[#34495E]">
              Seeking a Second Opinion or Dedicated Pediatric Surgical Guidance?
            </h4>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-2xl">
              Every child's condition is evaluated with rigorous surgical standards, gentle bedside reassurance, and a clear treatment roadmap.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#397FA5] hover:bg-[#286B91] text-white font-semibold text-xs sm:text-sm shadow-[0_4px_14px_rgba(57,127,165,0.25)] hover:shadow-[0_6px_20px_rgba(57,127,165,0.35)] transition-all cursor-pointer group"
            >
              <Calendar className="w-4 h-4 text-white/90 group-hover:scale-110 transition-transform" />
              <span>Book a Consultation</span>
            </button>

            <Link
              href="#expertise"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#F1F7FC] hover:bg-[#EAF3FA] text-[#34495E] hover:text-[#397FA5] border border-[#E3EBF1] font-semibold text-xs sm:text-sm transition-all"
            >
              <span>Explore Expertise</span>
              <ArrowRight className="w-4 h-4 text-[#397FA5]" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

