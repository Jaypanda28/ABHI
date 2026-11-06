"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Quote,
  Sparkles,
  Heart,
  Shield,
  Activity,
  Compass,
  Trophy,
  ArrowRight,
  Stethoscope,
  Cpu,
  Building2,
  Calendar
} from "lucide-react";
import {
  DOCTOR_MOTTO,
  DOCTOR_PHILOSOPHY,
  DOCTOR_PERSONAL_QUOTE,
  DOCTOR_PROFILE
} from "@/data/doctorData";
import { useAppointmentModal } from "@/components/AppointmentModalProvider";

export default function DoctorMottoQuoteSection() {
  const { openModal } = useAppointmentModal();

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#FDFEFE] via-[#F4F9FD] to-[#EAF3FA] border-t border-[#E3EBF1]/80">
      {/* Decorative Radial Pastel Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full teal-radial-glow pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="absolute bottom-10 right-10 w-[420px] h-[420px] rounded-full ice-radial-glow pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Doctor Motto */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#DCECF7] shadow-2xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#65B5AA] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#397FA5]">
              Doctor&apos;s Motto & Guiding Ethos
            </span>
            <span className="text-xs text-[#8493A0]">•</span>
            <span className="text-xs font-semibold text-[#65B5AA]">
              {DOCTOR_MOTTO.trio}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#34495E] leading-tight"
          >
            &ldquo;{DOCTOR_MOTTO.tagline}&rdquo;
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base sm:text-lg text-[#64748B] font-normal leading-relaxed"
          >
            A clear personal commitment to medical excellence, compassionate family care, and shaping a healthier, brighter future for every newborn and child.
          </motion.p>
        </div>

        {/* 2-Column Luxury Showcase: One Statement Philosophy & Personal Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Professional Philosophy in One Statement (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between rounded-3xl bg-white p-7 sm:p-9 border border-[#E3EBF1] shadow-[0_12px_36px_rgba(65,105,135,0.06)] hover:shadow-[0_16px_45px_rgba(65,105,135,0.1)] transition-all"
          >
            <div className="space-y-6">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-[#E3EBF1] pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#E8F6F3] text-[#65B5AA] flex items-center justify-center shadow-2xs">
                    <Compass className="w-5 h-5 text-[#65B5AA]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#397FA5] block">
                      Core Principle
                    </span>
                    <h3 className="font-editorial text-lg font-bold text-[#34495E]">
                      Professional Philosophy
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-[#EAF3FA] border border-[#DCECF7] text-[11px] font-bold text-[#397FA5]">
                  One Statement
                </span>
              </div>

              {/* The One Statement Hero Callout */}
              <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#F4F9FD] to-[#EAF3FA] border border-[#DCECF7]">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#C7AD7A] flex-shrink-0 mt-0.5" />
                  <p className="font-editorial text-lg sm:text-xl font-bold text-[#34495E] leading-snug">
                    &ldquo;{DOCTOR_PHILOSOPHY.statement}&rdquo;
                  </p>
                </div>
              </div>

              {/* 4 Pillars of the Philosophy */}
              <div className="space-y-3 pt-2">
                <p className="text-xs uppercase font-bold tracking-wider text-[#8493A0]">
                  Four Foundations of Care
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DOCTOR_PHILOSOPHY.pillars.map((pillar, idx) => {
                    const icons = [Stethoscope, Heart, Cpu, Building2];
                    const IconComponent = icons[idx] || Stethoscope;
                    return (
                      <div
                        key={pillar.title}
                        className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E3EBF1] hover:border-[#65B5AA]/50 hover:bg-white transition-all space-y-1"
                      >
                        <div className="flex items-center gap-2">
                          <IconComponent className="w-4 h-4 text-[#65B5AA]" />
                          <h4 className="text-xs font-bold text-[#34495E]">
                            {pillar.title}
                          </h4>
                        </div>
                        <p className="text-[11px] text-[#64748B] leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Signature Link */}
            <div className="pt-6 mt-6 border-t border-[#E3EBF1] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#65B5AA]" />
                <span className="text-xs font-medium text-[#64748B]">
                  Applied across every surgery & consultation
                </span>
              </div>
              <Link
                href="#expertise"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#397FA5] hover:text-[#286B91]"
              >
                <span>Clinical Approach</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Personal Quote Editorial Vignette (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between rounded-3xl bg-white p-7 sm:p-9 border border-[#E3EBF1] shadow-[0_12px_36px_rgba(65,105,135,0.06)] hover:shadow-[0_16px_45px_rgba(65,105,135,0.1)] transition-all relative overflow-hidden"
          >
            {/* Background Decorative Quote Mark */}
            <Quote className="absolute top-6 right-6 w-24 h-24 text-[#65B5AA]/10 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-[#E3EBF1] pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#EAF3FA] text-[#397FA5] flex items-center justify-center shadow-2xs">
                    <Quote className="w-5 h-5 text-[#397FA5]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#397FA5] block">
                      From the Heart
                    </span>
                    <h3 className="font-editorial text-lg font-bold text-[#34495E]">
                      Personal Quote
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3FA] border border-[#DCECF7] text-[10px] font-bold text-[#397FA5]">
                  <Trophy className="w-3 h-3 text-[#C7AD7A]" />
                  <span>Times Icon 2026</span>
                </div>
              </div>

              {/* The Personal Quote Body */}
              <div className="relative pl-5 border-l-3 border-[#65B5AA] space-y-3">
                <p className="font-editorial text-lg sm:text-xl lg:text-2xl text-[#34495E] leading-relaxed italic font-normal">
                  &ldquo;{DOCTOR_PERSONAL_QUOTE.quote}&rdquo;
                </p>
              </div>

              {/* Motto Trio Highlight Pills */}
              <div className="pt-2">
                <p className="text-xs uppercase font-bold tracking-wider text-[#8493A0] mb-2.5">
                  The Triple Standard of Care
                </p>
                <div className="grid grid-cols-3 gap-2.5 text-center">
                  <div className="p-3 rounded-xl bg-[#E8F6F3] border border-[#65B5AA]/30">
                    <p className="text-xs font-bold text-[#397FA5] uppercase tracking-wider">
                      Heal
                    </p>
                    <p className="text-[10px] text-[#64748B] mt-0.5">
                      Surgical Precision
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#EAF3FA] border border-[#DCECF7]">
                    <p className="text-xs font-bold text-[#397FA5] uppercase tracking-wider">
                      Protect
                    </p>
                    <p className="text-[10px] text-[#64748B] mt-0.5">
                      Neonatal Safety
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F7F4EB] border border-[#C7AD7A]/30">
                    <p className="text-xs font-bold text-[#8C6D2C] uppercase tracking-wider">
                      Empower
                    </p>
                    <p className="text-[10px] text-[#64748B] mt-0.5">
                      Parent Confidence
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Identity Block at Bottom */}
            <div className="pt-6 mt-6 border-t border-[#E3EBF1] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#397FA5] via-[#65B5AA] to-[#C7AD7A] p-0.5 shadow-sm flex-shrink-0">
                  <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center overflow-hidden relative">
                    <Image
                      src={DOCTOR_PROFILE.doctorPhotoJpg}
                      alt={DOCTOR_PERSONAL_QUOTE.author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover object-[center_12%]"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-editorial text-base sm:text-lg font-bold text-[#34495E] leading-tight">
                    {DOCTOR_PERSONAL_QUOTE.author}
                  </h4>
                  <p className="text-xs font-semibold text-[#397FA5]">
                    {DOCTOR_PERSONAL_QUOTE.credentials}
                  </p>
                  <p className="text-[11px] text-[#64748B]">
                    Full-Time Consultant • Wonderbloom CoE
                  </p>
                </div>
              </div>

              <button
                onClick={() => openModal()}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#397FA5] hover:bg-[#286B91] text-white text-xs font-semibold shadow-xs transition-colors flex-shrink-0"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Consult</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
