"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DOCTOR_PROFILE, DOCTOR_WELCOME_MESSAGE } from "@/data/doctorData";
import { CheckCircle2, Award, Calendar, ArrowRight, ShieldCheck, Sparkles, Building2, Heart, Quote } from "lucide-react";
import { useAppointmentModal } from "@/components/AppointmentModalProvider";

export default function AboutSection() {
  const { openModal } = useAppointmentModal();

  const careerPoints = [
    {
      title: "Primary Appointment",
      desc: "Full-Time Consultant at Wonderbloom Pediatric Surgical Centre of Excellence."
    },
    {
      title: "Times Health Icon 2026",
      desc: "Honored with Times Health Icon Award Odisha 2026 for Emerging Excellence in Pediatric Surgery."
    },
    {
      title: "Executive Leadership",
      desc: "Director & COO at Wonderbloom Mother & Child Superspeciality Hospital, Neovitaz Curae Pvt. Ltd., and New Life Clinic."
    },
    {
      title: "Academic & Research Record",
      desc: "4+ years of postgraduate surgical teaching & landmark Switch Operation research in JIAPS (2024)."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden">
      {/* Decorative Subtle Radial Background Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 teal-radial-glow pointer-events-none -translate-x-1/3" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 ice-radial-glow pointer-events-none translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Professional Portrait & Credentials (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative lg:sticky lg:top-28 space-y-6"
          >
            <div className="relative mx-auto max-w-md">
              {/* Background Pastel Accent Ring */}
              <div className="absolute -inset-4 rounded-3xl bg-[#EAF3FA] border border-[#DCECF7] -rotate-2 -z-10" />

              <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(65,105,135,0.08)] border border-[#E3EBF1] bg-white">
                <Image
                  src={DOCTOR_PROFILE.doctorPhotoJpg}
                  alt="Dr. Abhishek Anand - Consultant Pediatric Surgeon"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-[center_12%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-editorial text-xl font-bold">Dr. Abhishek Anand</p>
                  <p className="text-xs text-[#E8F6F3] font-semibold tracking-wide">
                    Full-Time Consultant • Wonderbloom CoE
                  </p>
                  <p className="text-[11px] text-slate-200 mt-1">
                    MBBS | DrNB (Pediatric Surgery) | FMAS
                  </p>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -top-3 -right-3 bg-white rounded-2xl p-3 shadow-[0_8px_24px_rgba(65,105,135,0.1)] border border-[#E3EBF1] flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#E8F6F3] text-[#65B5AA] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#65B5AA]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#8493A0] font-bold">Credential</p>
                  <p className="text-xs font-bold text-[#34495E]">DrNB Pediatric Surgery</p>
                </div>
              </div>
            </div>

            {/* Quick Practice Note Under Photo */}
            <div className="p-4 rounded-2xl bg-[#F1F7FC] border border-[#E3EBF1] space-y-2 text-xs text-[#64748B]">
              <div className="flex items-center gap-2 text-[#34495E] font-bold">
                <Heart className="w-4 h-4 text-[#65B5AA]" />
                <span>Compassionate Pediatric Care</span>
              </div>
              <p className="leading-relaxed">
                Dedicated surgical consultation, second opinions, and specialized neonatal interventions designed with gentle empathy for parents and children.
              </p>
            </div>
          </motion.div>

          {/* Right: Personal Welcome Message & Philosophy (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow & Welcome Badge */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F6F3] border border-[#65B5AA]/30 shadow-2xs">
                <Quote className="w-3.5 h-3.5 text-[#65B5AA]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#397FA5]">
                  Doctor's Welcome Note • Personal Message to Parents
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#34495E] tracking-tight leading-tight">
                {DOCTOR_WELCOME_MESSAGE.title}
              </h2>
              <p className="text-sm font-semibold text-[#65B5AA]">
                {DOCTOR_WELCOME_MESSAGE.salutation}
              </p>
            </div>

            {/* Doctor's Welcoming Letter Content */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FDFEFE] via-[#F1F7FC] to-[#EAF3FA] border border-[#E3EBF1] shadow-[0_8px_30px_rgba(65,105,135,0.06)] space-y-4 text-base text-[#64748B] leading-relaxed relative">
              <Quote className="absolute top-4 right-5 w-10 h-10 text-[#65B5AA]/15 pointer-events-none" />

              <p>
                I am <strong className="text-[#34495E]">Dr. Abhishek Anand</strong>, Consultant Pediatric Surgeon and Pediatric Urologist, dedicated to providing comprehensive, compassionate, and advanced surgical care for newborns, infants, and children.
              </p>

              <p>
                My areas of expertise include pediatric and neonatal surgery, pediatric urological conditions, congenital anomalies, minimally invasive and advanced laparoscopic surgery.
              </p>

              <p>
                I strongly believe that every child deserves the best possible care, delivered with compassion, precision, and a personal touch. I understand the concerns and anxieties of parents, and I strive to ensure that every family feels informed, supported, and confident throughout their child’s treatment journey.
              </p>

              <p>
                Whether you are seeking medical guidance, a second opinion, or specialized surgical care for your child, I am here to help.
              </p>

              {/* Priority Statement Callout */}
              <div className="p-4 rounded-2xl bg-white border border-[#65B5AA]/30 shadow-2xs">
                <p className="font-editorial text-base sm:text-lg font-bold text-[#34495E] italic">
                  "{DOCTOR_WELCOME_MESSAGE.priorityStatement}"
                </p>
              </div>

              {/* Doctor's Warm Regards Signature */}
              <div className="pt-2">
                <p className="text-xs font-semibold text-[#8493A0]">
                  {DOCTOR_WELCOME_MESSAGE.closing}
                </p>
                <p className="font-editorial text-lg font-bold text-[#34495E] mt-0.5">
                  {DOCTOR_WELCOME_MESSAGE.doctorName}
                </p>
                <p className="text-xs text-[#397FA5] font-semibold">
                  {DOCTOR_WELCOME_MESSAGE.credentials}
                </p>
              </div>
            </div>

            {/* Career Highlights Grid in Light Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {careerPoints.map((point) => (
                <div
                  key={point.title}
                  className="p-4 rounded-2xl bg-white border border-[#E3EBF1] shadow-2xs hover:border-[#65B5AA]/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#65B5AA] mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-xs font-bold text-[#34495E] uppercase tracking-wider">
                        {point.title}
                      </h3>
                      <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => openModal()}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#397FA5] hover:bg-[#286B91] text-white font-semibold text-sm shadow-[0_4px_16px_rgba(57,127,165,0.25)] transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book a Consultation</span>
              </button>

              <Link
                href="#approach"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F1F7FC] text-[#34495E] hover:text-[#397FA5] border border-[#E3EBF1] font-semibold text-sm shadow-2xs transition-all"
              >
                <span>My Distinctive Approach</span>
                <ArrowRight className="w-4 h-4 text-[#397FA5]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
