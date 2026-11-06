"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, ShieldCheck, Award, Sparkles, CheckCircle2, Trophy, MapPin, Stethoscope } from "lucide-react";
import { DOCTOR_PROFILE } from "@/data/doctorData";
import { useAppointmentModal } from "@/components/AppointmentModalProvider";

export default function HeroSection() {
  const { openModal } = useAppointmentModal();

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#FDFEFE] via-[#F1F7FC] to-[#EAF3FA]">
      {/* Subtle Circular Pastel Glows */}
      <div className="absolute top-1/4 left-0 w-[420px] h-[420px] rounded-full teal-radial-glow pointer-events-none -translate-x-1/3 -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] rounded-full ice-radial-glow pointer-events-none translate-x-1/3" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full aqua-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Professional Identity & Introduction (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 sm:space-y-7 text-left"
          >
            {/* Eyebrow & Times Health Icon Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F6F3] border border-[#65B5AA]/30 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#65B5AA] animate-pulse" />
                <span className="text-xs font-bold tracking-wider uppercase text-[#397FA5]">
                  Pediatric Surgery • Pediatric Urology
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EAF3FA] border border-[#DCECF7] text-[#34495E] text-xs font-bold shadow-2xs">
                <Trophy className="w-3.5 h-3.5 text-[#C7AD7A]" />
                <span>Times Health Icon 2026</span>
              </div>
            </div>

            {/* Doctor Credentials & Primary Current Practice Card */}
            <div className="space-y-2.5">
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-[#8493A0]">
                  Doctor Profile & Credentials
                </p>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#34495E] tracking-tight">
                  Dr. Abhishek Anand
                </h2>
                <p className="text-xs font-semibold text-[#397FA5] mt-0.5">
                  MBBS | DrNB (Pediatric Surgery) | FMAS
                </p>
              </div>

              {/* Full-Time Consultant Card */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E3EBF1] shadow-[0_4px_20px_rgba(65,105,135,0.05)] flex items-center justify-between gap-4 max-w-xl">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#65B5AA]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#397FA5]">
                      Primary Professional Designation
                    </span>
                  </div>
                  <h3 className="font-editorial text-base sm:text-lg font-bold text-[#34495E] leading-tight">
                    Full-Time Consultant
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Wonderbloom Pediatric Surgical Centre of Excellence
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#EAF3FA] border border-[#DCECF7] flex items-center justify-center text-[#397FA5] flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#397FA5]" />
                </div>
              </div>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-3">
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#DCECF7] shadow-2xs">
                <span className="text-xs font-bold text-[#397FA5] tracking-wide">
                  Heal. Protect. Empower.
                </span>
                <span className="text-xs text-[#8493A0]">•</span>
                <span className="text-xs font-medium text-[#64748B] italic">
                  Healing Little Lives, Shaping a Healthier Tomorrow.
                </span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#34495E] leading-[1.14]">
                Specialized Surgical Care.{" "}
                <span className="block text-[#397FA5] font-normal italic">
                  A Brighter Tomorrow for Every Child.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl font-normal">
              Dedicated to advanced pediatric surgical care, pediatric urology, neonatal surgery, and minimally invasive procedures with compassion and clinical expertise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => openModal()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#397FA5] hover:bg-[#286B91] text-white font-semibold text-sm sm:text-base shadow-[0_4px_16px_rgba(57,127,165,0.25)] hover:shadow-[0_8px_24px_rgba(57,127,165,0.35)] transition-all cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-white/90 group-hover:scale-110 transition-transform" />
                <span>Book an Appointment</span>
              </button>

              <Link
                href="#expertise"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F1F7FC] text-[#34495E] hover:text-[#397FA5] border border-[#E3EBF1] font-semibold text-sm sm:text-base shadow-2xs hover:shadow-xs transition-all cursor-pointer group"
              >
                <span>Explore Expertise</span>
                <ArrowRight className="w-4 h-4 text-[#397FA5] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Below CTA Subtle Pillars */}
            <div className="pt-4 border-t border-[#E3EBF1]">
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#E3EBF1] text-xs font-semibold text-[#34495E] shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#65B5AA]" />
                  <span>Advanced Pediatric Surgical Care</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#E3EBF1] text-xs font-semibold text-[#34495E] shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#65B5AA]" />
                  <span>Minimally Invasive Surgery</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#E3EBF1] text-xs font-semibold text-[#34495E] shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#65B5AA]" />
                  <span>Neonatal Surgical Expertise</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Original Doctor Portrait (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center pt-2 sm:pt-4 pb-4"
          >
            {/* Soft Circular Pastel Halo */}
            <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-tr from-[#E8F6F3] via-[#EAF3FA] to-[#F1F7F5] blur-2xl -z-10" />

            {/* Main Portrait Frame Card */}
            <div className="relative w-full max-w-[420px] rounded-3xl bg-white p-3.5 sm:p-4 shadow-[0_16px_45px_-8px_rgba(65,105,135,0.09)] border border-[#E3EBF1]">
              {/* Header Strip inside frame */}
              <div className="flex items-center justify-between px-2 pb-3 mb-1 border-b border-[#E3EBF1]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#65B5AA]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#34495E]">
                    Consultant Pediatric Surgeon
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3FA] text-[#397FA5] text-[11px] font-semibold border border-[#DCECF7]">
                  <Sparkles className="w-3 h-3 text-[#C7AD7A]" />
                  <span>FMAS Fellowship</span>
                </div>
              </div>

              {/* Photo Viewport: Calibrated to fit Dr. Anand's natural portrait with breathing room & zero obstructive overlays */}
              <div className="relative aspect-3/4 w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#F1F7FC] via-[#EAF3FA] to-[#DCECF7] shadow-inner">
                <Image
                  src={DOCTOR_PROFILE.doctorPhotoJpg}
                  alt="Dr. Abhishek Anand - Consultant Pediatric Surgeon & Pediatric Urologist"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                  className="object-cover object-[center_12%] hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Integrated Plaque at Base */}
              <div className="pt-3.5 px-2 pb-1 space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-editorial text-xl font-bold text-[#34495E]">
                      Dr. Abhishek Anand
                    </h3>
                    <p className="text-xs font-semibold text-[#397FA5] mt-0.5">
                      MBBS | DrNB (Pediatric Surgery) | FMAS
                    </p>
                    <div className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#F1F7FC] border border-[#DCECF7] text-[#34495E] text-[10px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#65B5AA]" />
                      <span>Full-Time Consultant • Wonderbloom CoE</span>
                    </div>
                  </div>
                  <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-[#C7AD7A] via-[#397FA5] to-[#65B5AA] shadow-xs shrink-0">
                    <div className="w-full h-full rounded-full bg-[#0E1F38] flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/logo.jpg"
                        alt="Official Website Logo"
                        width={44}
                        height={44}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#8493A0] pt-2 border-t border-[#E3EBF1]">
                  <span>Institute of Child Health, Kolkata</span>
                  <span className="text-[#C7AD7A] font-bold">Times Icon 2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
