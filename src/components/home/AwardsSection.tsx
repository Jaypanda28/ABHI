"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AWARDS_LIST } from "@/data/doctorData";
import {
  Trophy,
  Award,
  Medal,
  Sparkles,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Newspaper,
  Maximize2,
  X,
  Building2,
  Phone,
  MapPin,
  Quote,
  ShieldCheck
} from "lucide-react";

export default function AwardsSection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    caption: string;
  } | null>(null);

  return (
    <section id="awards" className="py-20 sm:py-28 bg-gradient-to-b from-[#F1F7FC] via-[#EAF3FA] to-[#F1F7FC] relative overflow-hidden">
      {/* Subtle Pastel Radial Background */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] ice-radial-glow pointer-events-none translate-x-1/3" />
      <div className="absolute bottom-10 left-0 w-96 h-96 teal-radial-glow pointer-events-none -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DCECF7] shadow-2xs">
            <Trophy className="w-4 h-4 text-[#C7AD7A]" />
            <span className="text-xs font-bold tracking-wider uppercase text-[#397FA5]">
              Awards, Honors & National Press Coverage
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#34495E] tracking-tight">
            Recognized Excellence in Pediatric Surgery
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            Honored with the state-wide <strong className="text-[#34495E]">Times Health Icon Award 2026</strong> by Bennett & Coleman / The Times of India, national conference medals, and featured in state media for cutting-edge neonatal and reconstructive surgical care.
          </p>
        </div>

        {/* 1. MAJOR PRESS & STAGE CEREMONY FEATURE BANNER (LIGHT LUXURY THEME) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 rounded-3xl p-6 sm:p-10 bg-white border-2 border-[#C7AD7A]/35 shadow-[0_12px_40px_rgba(65,105,135,0.08)] relative overflow-hidden"
        >
          {/* Top Gold & Blue Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-[#E3EBF1]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF3FA] text-[#397FA5] text-xs font-bold uppercase tracking-wider border border-[#DCECF7] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C7AD7A]" />
              <span>National Doctors' Day Tribute • The Times of India</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#34495E]">
              <span className="px-3 py-1 rounded-lg bg-[#E8F6F3] text-[#397FA5] border border-[#65B5AA]/30">
                Times Health Icons Odisha 2026 — 8th Edition
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[#F1F7FC] text-[#64748B] border border-[#E3EBF1]">
                Bennett & Coleman Ltd.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Stage Ceremony Photograph with Zoom Action (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div
                onClick={() =>
                  setSelectedImage({
                    src: "/images/dr-anand-award-ceremony.jpg",
                    title: "Dr. Abhishek Anand Receiving Times Health Icon Award 2026",
                    caption:
                      "Presented on stage by dignitaries during the 8th Edition of Times Health Icons Odisha 2026, organized by Bennett & Coleman / The Times of India."
                  })
                }
                className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-[#E3EBF1] bg-slate-50 cursor-pointer group"
              >
                <Image
                  src="/images/dr-anand-award-ceremony.jpg"
                  alt="Dr. Abhishek Anand receiving Times Health Icon Award 2026"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#34495E] flex items-center gap-1.5 shadow-sm border border-[#E3EBF1]">
                  <Trophy className="w-3 h-3 text-[#C7AD7A]" />
                  <span>Official Award Ceremony</span>
                </div>

                {/* Bottom Zoom Hint */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-[#397FA5] flex items-center gap-1 shadow-md group-hover:bg-[#397FA5] group-hover:text-white transition-colors">
                  <Maximize2 className="w-3 h-3 text-[#397FA5] group-hover:text-white" />
                  <span>Click to Expand</span>
                </div>
              </div>

              {/* Newspaper Page Preview Pill */}
              <div
                onClick={() =>
                  setSelectedImage({
                    src: "/images/times-health-icons-newspaper.jpg",
                    title: "The Times of India — National Doctors' Day Feature",
                    caption:
                      "Full-page feature in The Times of India honoring the pillars of healthcare and award-winning doctors across Odisha."
                  })
                }
                className="p-3 rounded-xl bg-[#F1F7FC] border border-[#E3EBF1] hover:border-[#397FA5] hover:bg-white transition-all flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF3FA] text-[#397FA5] flex items-center justify-center flex-shrink-0">
                    <Newspaper className="w-4 h-4 text-[#397FA5]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#34495E] group-hover:text-[#397FA5] transition-colors">
                      The Times of India Newspaper Page
                    </p>
                    <p className="text-[10px] text-[#8493A0]">National Doctors' Day Special Edition</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#397FA5] group-hover:underline">
                  View Full Page →
                </span>
              </div>
            </div>

            {/* Right Column: Editorial & Clinical Breakthrough Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#397FA5]">
                  Bennett & Coleman / The Times of India Honor
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#34495E] leading-tight mt-1">
                  TIMES HEALTH ICON AWARD Odisha 2026
                </h3>
                <p className="text-xs font-semibold text-[#C7AD7A] mt-1">
                  Category: Emerging Excellence in Pediatric Surgery
                </p>
                <p className="text-xs text-[#8493A0] mt-0.5">
                  Presented by Stalwart • Powered by Axis Bank • Driven by Empreo Skoda
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                The Times of India proudly honored <strong className="text-[#34495E]">Dr. Abhishek Anand</strong> among the distinguished pillars of healthcare in Odisha, recognizing his surgical precision, clinical innovations in neonatal and pediatric care, and commitment to ensuring children receive advanced treatment locally.
              </p>

              {/* Clinical Breakthrough Case Highlight from Newspaper */}
              <div className="p-4 rounded-2xl bg-[#F1F7FC] border border-[#E3EBF1] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#34495E]">
                  <CheckCircle2 className="w-4 h-4 text-[#65B5AA]" />
                  <span>Clinical Breakthrough Highlighted in The Times of India:</span>
                </div>
                <div className="text-xs text-[#64748B] space-y-1 pl-6">
                  <p>
                    <strong className="text-[#34495E]">Meckel's Diverticulitis:</strong> Successfully treated a pediatric patient who had suffered recurrent severe abdominal pain for nearly 6 months without definitive diagnosis elsewhere.
                  </p>
                  <p className="text-[#8493A0]">
                    Dr. Anand performed a high-precision <strong>laparoscopy-assisted resection with intestinal anastomosis</strong>; the child recovered smoothly, resumed feeding early, and was discharged in excellent health on postoperative day 5.
                  </p>
                </div>
              </div>

              {/* Quote by Dr. Anand from Times of India Article */}
              <div className="p-4 rounded-2xl bg-[#E8F6F3] border border-[#65B5AA]/30 flex items-start gap-3">
                <Quote className="w-5 h-5 text-[#65B5AA] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-[#34495E] italic leading-relaxed">
                  "Children are not simply small adults. Many paediatric surgical conditions require specialised evaluation, dedicated surgical expertise, and age-appropriate perioperative care. Early diagnosis and timely intervention can significantly improve outcomes while reducing long-term complications."
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() =>
                    setSelectedImage({
                      src: "/images/times-health-icons-newspaper.jpg",
                      title: "Times Health Icons Odisha 2026 — Official Times of India Feature",
                      caption:
                        "Full official newspaper coverage honoring Dr. Abhishek Anand among the pillars of healthcare on National Doctors' Day."
                    })
                  }
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#397FA5] hover:bg-[#286B91] text-white font-semibold text-xs shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <Newspaper className="w-3.5 h-3.5 text-white" />
                  <span>View Official Newspaper Clipping</span>
                </button>

                <button
                  onClick={() =>
                    setSelectedImage({
                      src: "/images/wonderbloom-times-feature.jpg",
                      title: "Wonderbloom Hospital Times of India Feature Article",
                      caption:
                        "Special Times feature on Wonderbloom Superspeciality Hospital: Advancing Pediatric Surgery & Pediatric Urology in Odisha."
                    })
                  }
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#F1F7FC] text-[#34495E] border border-[#E3EBF1] font-semibold text-xs shadow-2xs transition-all cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#397FA5]" />
                  <span>Read Wonderbloom Article</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. WONDERBLOOM CENTRE OF EXCELLENCE FEATURE ARTICLE CARD (LIGHT LUXURY) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 rounded-3xl p-6 sm:p-10 bg-white border border-[#E3EBF1] shadow-[0_8px_30px_rgba(65,105,135,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Building Photo & Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div
              onClick={() =>
                setSelectedImage({
                  src: "/images/wonderbloom-hospital-building.jpg",
                  title: "Wonderbloom Pediatric Surgical Centre of Excellence",
                  caption:
                    "Dedicated centre for advanced pediatric medicine, neonatal care, pediatric surgery, and pediatric urology in Odisha."
                })
              }
              className="relative aspect-16/10 rounded-2xl overflow-hidden shadow-md border border-[#E3EBF1] bg-slate-50 cursor-pointer group"
            >
              <Image
                src="/images/wonderbloom-hospital-building.jpg"
                alt="Wonderbloom Superspeciality Hospital Building"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#34495E] flex items-center gap-1.5 border border-[#E3EBF1]">
                <Building2 className="w-3 h-3 text-[#397FA5]" />
                <span>Centre of Excellence Building</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="font-editorial text-sm font-bold truncate">Wonderbloom Superspeciality Hospital</p>
                <p className="text-[10px] text-slate-200">Shree Vihar, Chandrasekharpur, Bhubaneswar</p>
              </div>
            </div>

            {/* Helpline and Contact Info from Newspaper */}
            <div className="p-3.5 rounded-xl bg-[#F1F7FC] border border-[#E3EBF1] text-xs space-y-1.5">
              <div className="flex items-center gap-2 text-[#397FA5] font-bold">
                <Phone className="w-3.5 h-3.5 text-[#65B5AA]" />
                <span>Hospital Helplines:</span>
              </div>
              <p className="text-[#34495E] font-semibold tracking-wide">
                9124 616 272 / 73 / 74 • 7377 609 946
              </p>
              <div className="flex items-start gap-1.5 text-[11px] text-[#8493A0] pt-1 border-t border-[#E3EBF1]">
                <MapPin className="w-3 h-3 text-[#65B5AA] flex-shrink-0 mt-0.5" />
                <span>457/11713, Nandankanan Road, Shree Vihar, Chandrasekharpur</span>
              </div>
            </div>
          </div>

          {/* Clinical Focus & Department Leadership (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3FA] text-xs font-bold uppercase tracking-wider text-[#397FA5] border border-[#DCECF7]">
              <Sparkles className="w-3.5 h-3.5 text-[#C7AD7A]" />
              <span>Times of India Special Hospital Coverage</span>
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#34495E] leading-tight">
              Advancing Pediatric Surgery & Pediatric Urology in Odisha
            </h3>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Led by <strong className="text-[#34495E]">Dr. Abhishek Anand, Director</strong>, Wonderbloom Superspeciality Hospital provides advanced tertiary care under one roof, eliminating the need for families to travel outside Odisha for complex neonatal and pediatric surgical treatment.
            </p>

            {/* Speciality Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#F1F7FC] border border-[#E3EBF1] space-y-1">
                <p className="text-xs font-bold text-[#397FA5]">Reconstructive Pediatric Urology</p>
                <p className="text-[11px] text-[#64748B]">
                  Hydronephrosis, VUR, posterior urethral valves (PUV), hypospadias, undescended testes & stone disease.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#F1F7FC] border border-[#E3EBF1] space-y-1">
                <p className="text-xs font-bold text-[#65B5AA]">Minimally Invasive & Robotic Ready</p>
                <p className="text-[11px] text-[#64748B]">
                  High-definition pediatric laparoscopy and robotic surgery training to introduce robotic-assisted precision surgery.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#F1F7FC] border border-[#E3EBF1] space-y-1">
                <p className="text-xs font-bold text-[#397FA5]">Advanced Neonatal ICU Support</p>
                <p className="text-[11px] text-[#64748B]">
                  Tertiary NICU & PICU coordinated for congenital intestinal atresia, tracheoesophageal fistula (TEF), and diaphragmatic hernias.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#F1F7FC] border border-[#E3EBF1] space-y-1">
                <p className="text-xs font-bold text-[#65B5AA]">Complex Pediatric Interventions</p>
                <p className="text-[11px] text-[#64748B]">
                  Giant pediatric ovarian tumours, Hirschsprung disease pull-through, and complex pediatric hand trauma reconstructions.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/#hospitals"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#397FA5] hover:text-[#286B91] transition-colors"
              >
                <span>Explore Hospital Details & Consultation Booking</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* 3. AWARDS & ACHIEVEMENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {AWARDS_LIST.map((award, idx) => {
            const isHighlight = award.highlight;
            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                  isHighlight
                    ? "bg-white border-[#C7AD7A]/40 shadow-[0_8px_30px_rgba(65,105,135,0.07)] hover:shadow-xl ring-1 ring-[#C7AD7A]/20"
                    : "bg-white border-[#E3EBF1] shadow-[0_4px_16px_rgba(65,105,135,0.04)] hover:shadow-lg hover:border-[#65B5AA]/40"
                }`}
              >
                <div>
                  {/* Top Badge & Year */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        isHighlight
                          ? "bg-[#EAF3FA] text-[#397FA5] border border-[#DCECF7]"
                          : "bg-[#E8F6F3] text-[#65B5AA] border border-[#65B5AA]/30"
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#C7AD7A]" />
                      <span>{award.badge}</span>
                    </span>

                    <span className="text-xs font-bold text-[#34495E] px-2.5 py-1 rounded-lg bg-[#F1F7FC] border border-[#E3EBF1]">
                      {award.year}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-3">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xs ${
                        isHighlight
                          ? "bg-[#EAF3FA] text-[#397FA5] border border-[#DCECF7]"
                          : "bg-[#E8F6F3] text-[#65B5AA] border border-[#65B5AA]/20"
                      }`}
                    >
                      {idx === 0 ? (
                        <Trophy className="w-6 h-6 text-[#C7AD7A]" />
                      ) : idx === 1 ? (
                        <Medal className="w-6 h-6 text-[#397FA5]" />
                      ) : (
                        <Award className="w-6 h-6 text-[#65B5AA]" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#34495E] leading-tight">
                        {award.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#397FA5] mt-1">
                        {award.organization}
                      </p>
                    </div>
                  </div>

                  {/* Category and Description */}
                  <div className="space-y-2 pt-2 border-t border-[#E3EBF1]">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#8493A0]">
                      Category: <span className="text-[#34495E]">{award.category}</span>
                    </p>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-[#E3EBF1] flex items-center justify-between text-xs font-medium text-[#65B5AA]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#65B5AA]" />
                    <span>Officially Verified Medical Achievement</span>
                  </div>
                  {award.ceremonyImage && (
                    <button
                      onClick={() =>
                        setSelectedImage({
                          src: award.ceremonyImage!,
                          title: award.title,
                          caption: award.description
                        })
                      }
                      className="text-[11px] font-bold text-[#397FA5] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Photo</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4. SCIENTIFIC PUBLICATIONS & ROBOTIC/MINIMAL ACCESS BANNER (LIGHT LUXURY) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-6 sm:p-8 bg-white border border-[#E3EBF1] shadow-[0_8px_30px_rgba(65,105,135,0.06)] grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          {/* Publications Strip (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#397FA5]">
              <BookOpen className="w-4 h-4" />
              <span>Scientific Publications</span>
            </div>
            <h4 className="font-editorial text-xl sm:text-2xl font-bold text-[#34495E]">
              Published 5 Articles in Indexed National & International Journals
            </h4>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Including peer-reviewed work on cloacal reconstruction (JIAPS 2024 Switch Operation), choledochal cyst management, minimally invasive pediatric laparoscopy, and reconstructive urology.
            </p>
          </div>

          {/* Area of Interest: Laparoscopic & Robotic Surgery (6 cols) */}
          <div className="md:col-span-6 md:pl-6 md:border-l md:border-[#E3EBF1] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#65B5AA]">
              <Sparkles className="w-4 h-4" />
              <span>Advanced Clinical Focus</span>
            </div>
            <h4 className="font-editorial text-xl sm:text-2xl font-bold text-[#34495E]">
              Minimal Access Pediatric Surgery (Laparoscopy & Robotic)
            </h4>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              With Dr. Anand having completed formal robotic surgery training, pioneering gentle keyhole techniques and robotic-assisted principles to minimize tissue trauma, optimize cosmesis, and ensure rapid, comfortable recovery for children.
            </p>
            <div className="pt-2">
              <Link
                href="/#publications"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#397FA5] hover:text-[#286B91] transition-colors"
              >
                <span>View Full Academic & Publication Record</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FULL-SCREEN INTERACTIVE NEWSPAPER LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-[#34495E]/30 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-[#E3EBF1]"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#E3EBF1] bg-[#F1F7FC]">
                <div>
                  <h4 className="font-editorial text-lg sm:text-xl font-bold text-[#34495E]">
                    {selectedImage.title}
                  </h4>
                  <p className="text-xs text-[#8493A0] mt-0.5">
                    Official Press Documentation & Feature Archive
                  </p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-xl text-[#8493A0] hover:text-[#34495E] hover:bg-white transition-colors cursor-pointer"
                  aria-label="Close image modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Viewport */}
              <div className="relative flex-1 min-h-[350px] sm:min-h-[500px] bg-[#EAF3FA] overflow-auto flex items-center justify-center p-3">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  width={1200}
                  height={1600}
                  className="max-h-[75vh] w-auto object-contain rounded-xl shadow-lg border border-[#E3EBF1]"
                />
              </div>

              {/* Modal Caption Footer */}
              <div className="p-4 sm:p-5 bg-white border-t border-[#E3EBF1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-[#64748B] max-w-xl leading-relaxed">
                  {selectedImage.caption}
                </p>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedImage.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#397FA5] text-white text-xs font-semibold hover:bg-[#286B91] transition-colors shadow-2xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Full Image</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
