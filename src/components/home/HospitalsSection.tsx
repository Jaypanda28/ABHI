"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HOSPITAL_ASSOCIATIONS } from "@/data/doctorData";
import { Building2, Calendar, MapPin, CheckCircle2, ChevronRight, Phone, Sparkles, Hospital } from "lucide-react";
import { useAppointmentModal } from "@/components/AppointmentModalProvider";

export default function HospitalsSection() {
  const { openModal } = useAppointmentModal();

  return (
    <section id="hospitals" className="py-20 sm:py-28 bg-[#F1F7F5] relative overflow-hidden">
      {/* Decorative Subtle Radial Background */}
      <div className="absolute top-1/3 left-0 w-96 h-96 teal-radial-glow pointer-events-none -translate-x-1/3" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] ice-radial-glow pointer-events-none translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F6F3] border border-[#65B5AA]/30 shadow-2xs">
            <Building2 className="w-4 h-4 text-[#65B5AA]" />
            <span className="text-xs font-bold tracking-wider uppercase text-[#397FA5]">
              Consultation Centers & Partner Operating Facilities
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#34495E] tracking-tight">
            Associated Hospitals & Clinical Practice
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            Leading tertiary surgical care at Wonderbloom Centre of Excellence, flagship consultations at New Life Clinic, and coordinated surgical admissions across Bhubaneswar.
          </p>
        </div>

        {/* Hospital Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HOSPITAL_ASSOCIATIONS.map((hospital, idx) => {
            const isCentre = hospital.isCentreOfExcellence;
            const isFlagship = hospital.isFlagship;
            const isPrimary = hospital.type === "Primary Practice";

            // SPECIAL 1: CENTRE OF EXCELLENCE WIDE BANNER (LIGHT LUXURY)
            if (isCentre) {
              return (
                <motion.div
                  key={hospital.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="md:col-span-2 lg:col-span-3 rounded-3xl p-6 sm:p-8 lg:p-10 bg-white border-2 border-[#397FA5]/25 shadow-[0_16px_45px_-8px_rgba(65,105,135,0.08)] relative overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left: Building Photo (5 cols) */}
                    <div className="lg:col-span-5 relative aspect-16/10 rounded-2xl overflow-hidden shadow-md border border-[#E3EBF1] bg-[#F1F7FC] group">
                      <Image
                        src={hospital.image || "/images/wonderbloom-hospital-building.jpg"}
                        alt={hospital.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 500px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#34495E]/75 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#34495E] flex items-center gap-1.5 border border-[#E3EBF1]">
                        <Hospital className="w-3.5 h-3.5 text-[#65B5AA]" />
                        <span>Centre of Excellence Building</span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <p className="font-editorial text-sm font-bold truncate">Wonderbloom Superspeciality Hospital</p>
                        <p className="text-[10px] text-[#EAF3FA]">Chandrasekharpur, Bhubaneswar</p>
                      </div>
                    </div>

                    {/* Right: Hospital Details (7 cols) */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF3FA] border border-[#DCECF7] text-[#397FA5] text-[10px] font-bold uppercase tracking-wider">
                          <Sparkles className="w-3 h-3 text-[#C7AD7A]" />
                          <span>{hospital.badge}</span>
                        </span>
                        <span className="text-xs font-semibold text-[#65B5AA] bg-[#E8F6F3] px-3 py-1 rounded-full border border-[#65B5AA]/25">
                          Featured in The Times of India
                        </span>
                      </div>

                      <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#34495E] leading-tight">
                        {hospital.name}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-[#397FA5]">
                        {hospital.role}
                      </p>

                      {hospital.address && (
                        <p className="text-xs font-medium text-[#64748B] flex items-start gap-1.5">
                          <MapPin className="w-4 h-4 text-[#65B5AA] flex-shrink-0 mt-0.5" />
                          <span>{hospital.address}</span>
                        </p>
                      )}

                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                        {hospital.description}
                      </p>

                      <div className="p-4 rounded-2xl bg-[#F1F7FC] border border-[#E3EBF1] flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-xs">
                          <Phone className="w-4 h-4 text-[#397FA5]" />
                          <span className="text-[#34495E] font-bold">Helpline:</span>
                          <span className="text-[#397FA5] font-semibold">9124 616 272 / 73 / 74 • 7377 609 946</span>
                        </div>

                        <button
                          onClick={() => openModal(hospital.name)}
                          className="px-5 py-2.5 rounded-xl bg-[#397FA5] hover:bg-[#286B91] text-white font-semibold text-xs shadow-[0_4px_14px_rgba(57,127,165,0.25)] hover:shadow-[0_6px_20px_rgba(57,127,165,0.35)] transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <Calendar className="w-3.5 h-3.5 text-white/90" />
                          <span>Book at Wonderbloom</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            // SPECIAL 2: FLAGSHIP NEW LIFE CLINIC (LIGHT LUXURY)
            if (isFlagship) {
              return (
                <motion.div
                  key={hospital.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="md:col-span-2 lg:col-span-3 rounded-3xl p-6 sm:p-8 bg-white border-2 border-[#65B5AA]/30 shadow-[0_12px_35px_-8px_rgba(65,105,135,0.06)] ring-1 ring-[#65B5AA]/15"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-4 relative aspect-16/10 rounded-2xl overflow-hidden shadow-md border border-[#E3EBF1] bg-[#F1F7FC] group">
                      <Image
                        src={hospital.image || "/images/new-life-clinic.jpg"}
                        alt={hospital.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#34495E] border border-[#E3EBF1]">
                        <span>Director & COO Desk</span>
                      </div>
                    </div>

                    <div className="lg:col-span-8 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EAF3FA] text-[#397FA5] border border-[#DCECF7]">
                          {hospital.badge}
                        </span>
                        <span className="text-xs font-bold text-[#65B5AA] flex items-center gap-1.5 bg-[#E8F6F3] px-3 py-1 rounded-full border border-[#65B5AA]/20">
                          <span className="w-2 h-2 rounded-full bg-[#65B5AA] animate-pulse" />
                          <span>Evening OPD: Mon–Sat 5 PM – 9 PM</span>
                        </span>
                      </div>

                      <h3 className="font-editorial text-2xl font-bold text-[#34495E]">
                        {hospital.name}
                      </h3>

                      <p className="text-xs font-semibold text-[#397FA5]">
                        {hospital.role}
                      </p>

                      {hospital.address && (
                        <p className="text-xs font-medium text-[#64748B] flex items-start gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#65B5AA] flex-shrink-0 mt-0.5" />
                          <span>{hospital.address}</span>
                        </p>
                      )}

                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {hospital.description}
                      </p>

                      <div className="pt-2 flex items-center gap-3">
                        <button
                          onClick={() => openModal(hospital.name)}
                          className="px-5 py-2.5 rounded-xl bg-[#397FA5] hover:bg-[#286B91] text-white text-xs font-semibold shadow-[0_4px_14px_rgba(57,127,165,0.25)] hover:shadow-[0_6px_20px_rgba(57,127,165,0.35)] transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <Calendar className="w-3.5 h-3.5 text-white/90" />
                          <span>Book OPD at New Life Clinic</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            // STANDARD CARDS (VISITING CONSULTANTS & PRIMARY PRACTICE)
            return (
              <motion.div
                key={hospital.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`rounded-3xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(65,105,135,0.06)] hover:shadow-[0_8px_30px_rgba(65,105,135,0.1)] bg-white ${
                  isPrimary
                    ? "border-[#397FA5]/30 ring-1 ring-[#397FA5]/15"
                    : "border-[#E3EBF1] hover:border-[#397FA5]/30"
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        isPrimary
                          ? "bg-[#EAF3FA] text-[#397FA5] border border-[#DCECF7]"
                          : "bg-[#F1F7FC] text-[#64748B] border border-[#E3EBF1]"
                      }`}
                    >
                      {hospital.type}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#EAF3FA] text-[#397FA5] flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-[#397FA5]" />
                    </div>
                  </div>

                  {/* Hospital Name */}
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#34495E] mb-1">
                    {hospital.name}
                  </h3>

                  {/* Doctor Role */}
                  <p className="text-xs font-semibold text-[#397FA5] mb-2">
                    {hospital.role}
                  </p>

                  {/* Address if present */}
                  {hospital.address && (
                    <p className="text-xs font-medium text-[#64748B] mb-3 flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#65B5AA] flex-shrink-0 mt-0.5" />
                      <span>{hospital.address}</span>
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {hospital.description}
                  </p>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4 border-t border-[#E3EBF1]">
                  <button
                    onClick={() => openModal(hospital.name)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#F1F7FC] hover:bg-[#397FA5] text-[#34495E] hover:text-white border border-[#E3EBF1] hover:border-[#397FA5] text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#397FA5] group-hover:text-white" />
                    <span>Book at {hospital.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note on Scheduling */}
        <div className="mt-12 text-center text-xs text-[#8493A0] max-w-2xl mx-auto">
          <p>
            *Please select your preferred hospital when submitting an enquiry. Outpatient slots and elective surgical admissions are coordinated according to hospital operating schedules and family convenience.
          </p>
        </div>
      </div>
    </section>
  );
}
