import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  DOCTOR_PROFILE,
  EDUCATION_LIST,
  HIGHLIGHT_STATS,
  DOCTOR_WELCOME_MESSAGE,
  COMMUNITY_SERVICE_LIST,
  PERSONAL_INTERESTS
} from "@/data/doctorData";
import DistinctiveApproachSection from "@/components/home/DistinctiveApproachSection";
import DoctorMottoQuoteSection from "@/components/home/DoctorMottoQuoteSection";
import {
  GraduationCap,
  Award,
  ShieldCheck,
  Building2,
  Phone,
  CheckCircle2,
  Heart,
  Stethoscope,
  Calendar,
  ArrowRight,
  Sparkles,
  Trophy,
  Quote
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr. Abhishek Anand | Pediatric Surgeon & Pediatric Urologist",
  description:
    "Learn about Dr. Abhishek Anand, Consultant Pediatric Surgeon & Pediatric Urologist with super-specialty DrNB training from the Institute of Child Health, Kolkata and FMAS."
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-gradient-to-b from-[#FDFEFE] via-[#F1F7FC] to-[#EAF3FA] space-y-16 sm:space-y-24">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F6F3] text-[#397FA5] text-xs font-bold uppercase tracking-wider border border-[#65B5AA]/30">
              <Stethoscope className="w-4 h-4 text-[#65B5AA]" />
              <span>Consultant Pediatric Surgeon & Pediatric Urologist</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EAF3FA] border border-[#DCECF7] text-[#34495E] text-xs font-bold shadow-2xs">
              <Trophy className="w-3.5 h-3.5 text-[#C7AD7A]" />
              <span>Times Health Icon 2026</span>
            </div>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#34495E] tracking-tight">
            About Dr. Abhishek Anand
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            MBBS | DrNB (Pediatric Surgery) | FMAS. Dedicated to specialized surgical excellence and compassionate clinical outcomes for children, newborns, and their families.
          </p>
        </div>
      </section>

      {/* Main Profile & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-[0_16px_45px_-8px_rgba(65,105,135,0.09)] border border-[#E3EBF1] bg-white p-3">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#F1F7FC] via-[#EAF3FA] to-[#DCECF7]">
                <Image
                  src={DOCTOR_PROFILE.doctorPhotoJpg}
                  alt="Dr. Abhishek Anand"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-[center_12%]"
                />
              </div>
            </div>

            {/* Credential Strip Below Portrait */}
            <div className="mt-6 p-5 rounded-3xl bg-white border border-[#E3EBF1] shadow-[0_4px_20px_rgba(65,105,135,0.06)] space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAF3FA] text-[#397FA5] flex items-center justify-center border border-[#DCECF7]">
                  <Building2 className="w-5 h-5 text-[#397FA5]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#34495E]">Full-Time Consultant</p>
                  <p className="text-[11px] text-[#65B5AA] font-semibold">Wonderbloom Pediatric Surgical Centre of Excellence</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-[#E3EBF1]">
                <div className="w-10 h-10 rounded-xl bg-[#E8F6F3] text-[#65B5AA] flex items-center justify-center border border-[#65B5AA]/25">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#34495E]">Super-Specialty Board Certified</p>
                  <p className="text-[11px] text-[#64748B]">DrNB Pediatric Surgery • NBE Accredited</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-[#E3EBF1]">
                <div className="w-10 h-10 rounded-xl bg-[#EAF3FA] text-[#397FA5] flex items-center justify-center border border-[#DCECF7]">
                  <Sparkles className="w-5 h-5 text-[#C7AD7A]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#34495E]">Minimal Access Surgery Fellow</p>
                  <p className="text-[11px] text-[#64748B]">FMAS Fellowship</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor's Welcome Message & Narrative Biography */}
          <div className="lg:col-span-7 space-y-8">
            {/* Doctor's Welcoming Letter to Parents */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E3EBF1] shadow-[0_12px_40px_-8px_rgba(65,105,135,0.07)] space-y-4 text-base text-[#64748B] leading-relaxed relative">
              <Quote className="absolute top-5 right-6 w-12 h-12 text-[#65B5AA]/15 pointer-events-none" />

              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F6F3] text-[#397FA5] text-[10px] font-bold uppercase tracking-wider border border-[#65B5AA]/30">
                  Doctor's Welcome Note
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#34495E] pt-1">
                  {DOCTOR_WELCOME_MESSAGE.title}
                </h2>
                <p className="text-xs font-semibold text-[#65B5AA]">
                  {DOCTOR_WELCOME_MESSAGE.salutation}
                </p>
              </div>

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
              <div className="p-4 rounded-2xl bg-[#F1F7FC] border border-[#65B5AA]/30 shadow-2xs">
                <p className="font-editorial text-base sm:text-lg font-bold text-[#34495E] italic">
                  "{DOCTOR_WELCOME_MESSAGE.priorityStatement}"
                </p>
              </div>

              {/* Formal Sign-off */}
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

            {/* Clinical Highlights Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#E3EBF1] shadow-2xs">
                <p className="text-xs font-bold uppercase text-[#34495E] mb-1">
                  Neonatal Precision
                </p>
                <p className="text-xs text-[#64748B]">
                  Antenatal anomaly counselling and critical neonatal surgical interventions coordinated with tertiary NICUs.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E3EBF1] shadow-2xs">
                <p className="text-xs font-bold uppercase text-[#34495E] mb-1">
                  Reconstructive Urology
                </p>
                <p className="text-xs text-[#64748B]">
                  Specialized repair for hypospadias, hydronephrosis (PUJO), reflux, and congenital bladder anomalies.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E3EBF1] shadow-2xs">
                <p className="text-xs font-bold uppercase text-[#34495E] mb-1">
                  Pediatric Laparoscopy
                </p>
                <p className="text-xs text-[#64748B]">
                  Keyhole abdominal and thoracoscopic techniques engineered specifically for infants and adolescents.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E3EBF1] shadow-2xs">
                <p className="text-xs font-bold uppercase text-[#34495E] mb-1">
                  Postgraduate Teaching
                </p>
                <p className="text-xs text-[#64748B]">
                  Four years of dedicated teaching and mentorship for postgraduate surgical trainees.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#397FA5] hover:bg-[#286B91] text-white font-semibold text-sm shadow-[0_4px_16px_rgba(57,127,165,0.25)] hover:shadow-[0_8px_24px_rgba(57,127,165,0.35)] transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white/90" />
                <span>Book a Consultation</span>
              </Link>
              <Link
                href="/#expertise"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F1F7FC] text-[#34495E] hover:text-[#397FA5] border border-[#E3EBF1] font-semibold text-sm shadow-2xs hover:shadow-xs transition-all cursor-pointer"
              >
                <span>View Clinical Expertise</span>
                <ArrowRight className="w-4 h-4 text-[#397FA5]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E3EBF1] shadow-[0_12px_40px_-8px_rgba(65,105,135,0.07)] space-y-8">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#397FA5] bg-[#EAF3FA] px-3 py-1 rounded-full border border-[#DCECF7]">
              Verified Academic Credentials
            </span>
            <h2 className="font-editorial text-3xl font-bold text-[#34495E] mt-3">
              Education & Degrees
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION_LIST.map((edu) => (
              <div
                key={edu.degree}
                className="p-6 rounded-2xl bg-[#F1F7FC] border border-[#E3EBF1] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#65B5AA] uppercase tracking-wider">
                    {edu.badge}
                  </span>
                  {edu.year && <span className="text-xs font-bold text-[#8493A0]">{edu.year}</span>}
                </div>
                <h3 className="font-editorial text-xl font-bold text-[#34495E]">{edu.degree}</h3>
                <p className="text-xs font-semibold text-[#397FA5]">{edu.institution}</p>
                <p className="text-xs text-[#64748B] leading-relaxed pt-2 border-t border-[#E3EBF1]">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motto, Philosophy & Personal Quote Showcase */}
      <DoctorMottoQuoteSection />

      {/* Distinctive Approach 7 Pillars */}
      <DistinctiveApproachSection />

      {/* Community Service & Social Commitment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E3EBF1] shadow-[0_12px_40px_-8px_rgba(65,105,135,0.07)] space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-[#65B5AA] bg-[#E8F6F3] px-3 py-1 rounded-full border border-[#65B5AA]/30">
              Social Responsibility
            </span>
            <h2 className="font-editorial text-3xl font-bold text-[#34495E]">
              Community Service &amp; Social Commitment
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Promoting public child health awareness, early diagnosis, and supporting accessible pediatric surgical care for underserved families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMUNITY_SERVICE_LIST.map((item, idx) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E3EBF1] hover:bg-white hover:border-[#65B5AA]/40 transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#397FA5] uppercase tracking-wider bg-white px-2 py-0.5 rounded-md border border-[#DCECF7]">
                      Commitment 0{idx + 1}
                    </span>
                    <Heart className="w-4 h-4 text-[#65B5AA]" />
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-[#34495E] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <p className="text-[11px] font-semibold text-[#65B5AA] pt-2 border-t border-[#E3EBF1]">
                  {item.tagline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests & Healthcare Innovation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#F4F9FD] via-white to-[#EAF3FA] rounded-3xl p-8 sm:p-12 border border-[#DCECF7] shadow-[0_12px_40px_-8px_rgba(65,105,135,0.07)] space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-[#397FA5] bg-white px-3 py-1 rounded-full border border-[#DCECF7]">
              Continuous Learning &amp; Vision
            </span>
            <h2 className="font-editorial text-3xl font-bold text-[#34495E]">
              Personal Interests &amp; Healthcare Innovation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Advancing surgical mastery, healthcare entrepreneurship, and shaping modern pediatric medical institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERSONAL_INTERESTS.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-white border border-[#E3EBF1] hover:border-[#397FA5]/40 transition-all space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#65B5AA] uppercase tracking-wider bg-[#F1F7FC] px-2 py-0.5 rounded-md border border-[#DCECF7]">
                      {item.category}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-[#C7AD7A]" />
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-[#34495E] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E3EBF1] flex items-center gap-1.5 text-[11px] text-[#397FA5] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#65B5AA]" />
                  <span>Ongoing Dedication</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
