"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CLINIC_PRIMARY } from "@/data/doctorData";
import {
  Building2,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Navigation,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useAppointmentModal } from "@/components/AppointmentModalProvider";

export default function NewLifeClinicSection() {
  const { openModal } = useAppointmentModal();

  const servicesAtClinic = [
    "Outpatient Pediatric Surgical Consultations",
    "Pediatric Urology Evaluations (Hernia, Hydrocele, Testes)",
    "Antenatal Anomaly Counselling for Expectant Parents",
    "Pre-operative Planning & Post-operative Wound Checks",
    "Gentle, Child-Friendly Clinical Environment",
    "Direct Evening Consultation Hours (5 PM – 9 PM)"
  ];

  return (
    <section id="clinic" className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden">
      {/* Decorative Subtle Radial Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 teal-radial-glow pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-0 w-80 h-80 ice-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F6F3] border border-[#65B5AA]/30 shadow-2xs">
            <Building2 className="w-4 h-4 text-[#65B5AA]" />
            <span className="text-xs font-bold tracking-wider uppercase text-[#397FA5]">
              Flagship Consultation Practice
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#34495E] tracking-tight">
            New Life Clinic, Bhubaneswar
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            Dr. Abhishek Anand serves as <strong className="text-[#34495E]">Director & COO</strong> and personally conducts daily outpatient appointments, evaluations, and parental consultations.
          </p>
        </div>

        {/* Feature Container: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-gradient-to-br from-[#FDFEFE] via-[#F1F7FC] to-[#EAF3FA] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E3EBF1] shadow-[0_12px_40px_-8px_rgba(65,105,135,0.07)]">
          {/* Left Column: Clinic Image & Highlights (6 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Clinic Photo Card with refined luxury frame */}
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden shadow-md border border-[#E3EBF1] bg-[#F1F7FC] group">
              <Image
                src={CLINIC_PRIMARY.image}
                alt="New Life Clinic Bhubaneswar"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#34495E]/80 via-transparent to-transparent pointer-events-none" />

              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xs text-xs font-bold text-[#34495E] flex items-center gap-2 border border-[#E3EBF1]">
                <span className="w-2 h-2 rounded-full bg-[#65B5AA] animate-pulse" />
                <span>Appointments Available</span>
              </div>

              {/* Overlay Title at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-editorial text-xl font-bold">New Life Clinic</p>
                <p className="text-xs text-[#EAF3FA] flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#65B5AA]" />
                  <span>Soubhagya Nagar, Baramunda, Bhubaneswar</span>
                </p>
              </div>
            </div>

            {/* Quick Logistics Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-2xl bg-white border border-[#E3EBF1] shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#E8F6F3] text-[#65B5AA] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-[#8493A0]">OPD Hours</p>
                  <p className="text-xs font-bold text-[#34495E]">Mon – Sat: 5 PM – 9 PM</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#E3EBF1] shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EAF3FA] text-[#397FA5] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-[#8493A0]">Direct Telephone</p>
                  <a href={`tel:${CLINIC_PRIMARY.phone}`} className="text-xs font-bold text-[#34495E] hover:text-[#397FA5]">
                    {CLINIC_PRIMARY.formattedPhone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Address, Role & Booking Information (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#397FA5] bg-[#EAF3FA] border border-[#DCECF7] px-3 py-1 rounded-md mb-3">
                Director & COO Leadership
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#34495E] leading-tight">
                Personalized Care with Dr. Abhishek Anand
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                As Director & COO, Dr. Anand oversees clinical quality and patient comfort at New Life Clinic, personally providing specialized consultations for pediatric, neonatal, and urological disorders.
              </p>
            </div>

            {/* Verified Address Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E3EBF1] shadow-xs space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#65B5AA] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#34495E] uppercase tracking-wider">
                    Official Clinic Address
                  </p>
                  <p className="text-xs sm:text-sm text-[#34495E] font-medium mt-0.5 leading-relaxed">
                    {CLINIC_PRIMARY.address}
                  </p>
                  <p className="text-xs text-[#8493A0] mt-1">
                    Landmark: <span className="text-[#34495E] font-semibold">{CLINIC_PRIMARY.landmark}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Scope of Clinic Consultations */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#34495E] mb-3">
                Services Provided at New Life Clinic:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {servicesAtClinic.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-[#64748B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#65B5AA] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => openModal(CLINIC_PRIMARY.name)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#397FA5] hover:bg-[#286B91] text-white font-semibold text-xs sm:text-sm shadow-[0_4px_16px_rgba(57,127,165,0.25)] hover:shadow-[0_8px_24px_rgba(57,127,165,0.35)] transition-all cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-white/90 group-hover:scale-110 transition-transform" />
                <span>Book at New Life Clinic</span>
              </button>

              <a
                href={CLINIC_PRIMARY.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-[#F1F7FC] text-[#34495E] hover:text-[#397FA5] border border-[#E3EBF1] font-semibold text-xs sm:text-sm shadow-2xs hover:shadow-xs transition-all"
              >
                <Navigation className="w-4 h-4 text-[#397FA5]" />
                <span>Directions on Maps</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
