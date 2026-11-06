"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CLINICAL_EXPERTISE,
  CLINIC_PRIMARY,
  HOSPITAL_ASSOCIATIONS,
  ExpertiseItem
} from "@/data/doctorData";
import {
  Activity,
  Baby,
  Eye,
  Wind,
  Sparkles,
  ShieldAlert,
  Layers,
  Compass,
  HeartHandshake,
  Stethoscope,
  Building2,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Navigation,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  X
} from "lucide-react";
import { useAppointmentModal } from "@/components/AppointmentModalProvider";

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Baby,
  Eye,
  Wind,
  Sparkles,
  ShieldAlert,
  Layers,
  Compass,
  HeartHandshake,
  Stethoscope
};

export default function CoSectionClinicalCare() {
  const [activeTab, setActiveTab] = useState<"specialties" | "clinic" | "hospitals">("specialties");
  const [selectedExpertise, setSelectedExpertise] = useState<ExpertiseItem | null>(null);
  const { openModal } = useAppointmentModal();

  const subTabs = [
    { id: "specialties", label: "Clinical Specialties", icon: Stethoscope },
    { id: "clinic", label: "Flagship New Life Clinic", icon: Building2 },
    { id: "hospitals", label: "Hospital Network & CoE", icon: Building2 }
  ];

  const servicesAtClinic = [
    "Outpatient Pediatric Surgical Consultations",
    "Pediatric Urology Evaluations (Hernia, Hydrocele, Testes)",
    "Antenatal Anomaly Counselling for Expectant Parents",
    "Pre-operative Planning & Post-operative Wound Checks",
    "Gentle, Child-Friendly Clinical Environment",
    "Direct Evening Consultation Hours (5 PM – 9 PM)"
  ];

  return (
    <section id="clinical-care" className="py-16 sm:py-24 bg-[#F8FAFC] relative overflow-hidden border-b border-[#E3EBF1]">
      {/* Target anchors so existing links jump cleanly */}
      <div id="expertise" className="relative -top-24 pointer-events-none" />
      <div id="new-life-clinic" className="relative -top-24 pointer-events-none" />
      <div id="clinic" className="relative -top-24 pointer-events-none" />
      <div id="hospitals" className="relative -top-24 pointer-events-none" />

      {/* Decorative Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 teal-radial-glow pointer-events-none -translate-x-1/2 opacity-50" />
      <div className="absolute bottom-10 right-0 w-96 h-96 ice-radial-glow pointer-events-none translate-x-1/3 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Co-Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F6F3] border border-[#65B5AA]/30 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#65B5AA] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#397FA5]">
              Co-Section 02 • Clinical Care &amp; Practice Locations
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#34495E]">
            Specialized Surgical Care &amp; Clinics
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Explore Dr. Anand&apos;s super-specialty surgical areas, daily outpatient consultations at New Life Clinic, and surgical care across premier partner hospitals.
          </p>

          {/* Interactive Sub-Nav Pills */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1 rounded-2xl sm:rounded-full bg-white border border-[#E3EBF1] shadow-2xs max-w-full overflow-x-auto scrollbar-none">
              {subTabs.map((tab) => {
                const Icon = tab.icon;
                const isCurrent = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`relative flex items-center gap-1.5 px-3.5 sm:px-5 py-2 rounded-xl sm:rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isCurrent
                        ? "bg-[#397FA5] text-white shadow-xs"
                        : "text-[#64748B] hover:text-[#34495E]"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isCurrent ? "text-white" : "text-[#65B5AA]"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Views */}
        <AnimatePresence mode="wait">
          {/* TAB 1: CLINICAL SPECIALTIES */}
          {activeTab === "specialties" && (
            <motion.div
              key="specialties"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CLINICAL_EXPERTISE.map((item) => {
                  const Icon = iconMap[item.icon] || Stethoscope;

                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E3EBF1] shadow-[0_4px_16px_rgba(65,105,135,0.04)] hover:shadow-[0_12px_32px_rgba(65,105,135,0.08)] hover:border-[#65B5AA]/40 transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-2xl bg-[#EAF3FA] text-[#397FA5] group-hover:bg-[#E8F6F3] group-hover:text-[#65B5AA] flex items-center justify-center transition-colors">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#397FA5] bg-[#F1F7FC] px-2.5 py-1 rounded-full border border-[#DCECF7]">
                            Super-Specialty
                          </span>
                        </div>

                        <div>
                          <h3 className="font-editorial text-xl font-bold text-[#34495E] group-hover:text-[#397FA5] transition-colors leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                            {item.shortDesc}
                          </p>
                        </div>

                        {/* Key Condition Badges */}
                        <div className="pt-2 border-t border-[#E3EBF1] flex flex-wrap gap-1.5">
                          {item.keyAreas.slice(0, 3).map((area) => (
                            <span
                              key={area}
                              className="text-[10px] font-semibold text-[#64748B] bg-[#F8FAFC] px-2 py-0.5 rounded-md border border-[#E3EBF1]"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-[#E3EBF1] flex items-center justify-between">
                        <button
                          onClick={() => setSelectedExpertise(item)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#397FA5] group-hover:text-[#286B91] cursor-pointer"
                        >
                          <span>Explore Conditions</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                          onClick={() => openModal()}
                          className="p-1.5 rounded-lg text-[#8493A0] hover:text-[#397FA5] hover:bg-[#F1F7FC] transition-colors"
                          title="Book consultation for this specialty"
                        >
                          <Calendar className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* TAB 2: FLAGSHIP NEW LIFE CLINIC */}
          {activeTab === "clinic" && (
            <motion.div
              key="clinic"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 border border-[#E3EBF1] shadow-[0_12px_36px_rgba(65,105,135,0.06)]"
            >
              {/* Left: Clinic Photo */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative aspect-16/10 rounded-2xl overflow-hidden shadow-sm border border-[#E3EBF1] bg-[#F1F7FC] group">
                  <Image
                    src={CLINIC_PRIMARY.image}
                    alt={CLINIC_PRIMARY.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-xs text-xs font-bold text-[#34495E] flex items-center gap-1.5 border border-[#E3EBF1]">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span>Daily OPD Active</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E3EBF1] space-y-2">
                  <p className="text-xs font-bold text-[#34495E]">Personal Clinical Care:</p>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {CLINIC_PRIMARY.notes}
                  </p>
                </div>
              </div>

              {/* Right: Clinic Details & Timings */}
              <div className="lg:col-span-6 space-y-5">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F6F3] text-[#397FA5] text-[10px] font-bold uppercase tracking-wider border border-[#65B5AA]/30">
                    Flagship Practice • Director &amp; COO
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#34495E]">
                    {CLINIC_PRIMARY.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#397FA5]">
                    {CLINIC_PRIMARY.role}
                  </p>
                </div>

                {/* Address & Timings Pills */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F1F7FC] border border-[#E3EBF1]">
                    <MapPin className="w-4 h-4 text-[#397FA5] shrink-0 mt-0.5" />
                    <div className="text-xs space-y-0.5">
                      <p className="font-bold text-[#34495E]">Clinic Address:</p>
                      <p className="text-[#64748B] leading-relaxed">{CLINIC_PRIMARY.address}</p>
                      <p className="text-[11px] text-[#397FA5] font-semibold">Landmark: {CLINIC_PRIMARY.landmark}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#E8F6F3] border border-[#65B5AA]/30">
                    <Clock className="w-4 h-4 text-[#65B5AA] shrink-0" />
                    <div className="text-xs">
                      <p className="font-bold text-[#34495E]">Consultation Timings:</p>
                      <p className="text-[#64748B] font-semibold">{CLINIC_PRIMARY.timings}</p>
                    </div>
                  </div>
                </div>

                {/* Services Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {servicesAtClinic.map((srv) => (
                    <div key={srv} className="flex items-center gap-2 text-xs text-[#64748B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#65B5AA] shrink-0" />
                      <span className="truncate">{srv}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => openModal()}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#397FA5] hover:bg-[#286B91] text-white text-xs sm:text-sm font-semibold shadow-xs"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book at New Life Clinic</span>
                  </button>

                  <a
                    href={CLINIC_PRIMARY.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#F1F7FC] text-[#34495E] hover:text-[#397FA5] border border-[#E3EBF1] text-xs font-semibold shadow-2xs"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#65B5AA]" />
                    <span>Google Maps Directions</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: HOSPITAL ASSOCIATIONS & COE */}
          {activeTab === "hospitals" && (
            <motion.div
              key="hospitals"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {HOSPITAL_ASSOCIATIONS.map((hosp) => (
                  <div
                    key={hosp.id}
                    className={`rounded-3xl p-6 sm:p-7 border transition-all flex flex-col justify-between ${
                      hosp.isCentreOfExcellence
                        ? "bg-white border-2 border-[#397FA5]/40 shadow-sm md:col-span-2 lg:col-span-3"
                        : "bg-white border-[#E3EBF1] shadow-2xs hover:shadow-xs"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#397FA5] bg-[#EAF3FA] px-2.5 py-0.5 rounded-full border border-[#DCECF7]">
                          {hosp.type}
                        </span>
                        {hosp.badge && (
                          <span className="text-[10px] font-bold text-[#65B5AA] bg-[#E8F6F3] px-2.5 py-0.5 rounded-full border border-[#65B5AA]/30">
                            {hosp.badge}
                          </span>
                        )}
                      </div>

                      <div>
                        <h4 className="font-editorial text-xl font-bold text-[#34495E]">
                          {hosp.name}
                        </h4>
                        <p className="text-xs font-semibold text-[#397FA5] mt-0.5">
                          {hosp.role}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                        {hosp.description}
                      </p>

                      {hosp.address && (
                        <div className="flex items-start gap-2 text-xs text-[#8493A0] pt-2 border-t border-[#E3EBF1]">
                          <MapPin className="w-3.5 h-3.5 text-[#397FA5] shrink-0 mt-0.5" />
                          <span>{hosp.address}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#E3EBF1] flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#397FA5]">Admissions &amp; Surgeries Coordinated</span>
                      <button
                        onClick={() => openModal()}
                        className="p-1.5 rounded-lg text-[#397FA5] hover:bg-[#EAF3FA] transition-colors"
                        title="Book Consultation"
                      >
                        <Calendar className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal for Detailed Specialty Condition Explorer */}
        <AnimatePresence>
          {selectedExpertise && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedExpertise(null)}
                className="fixed inset-0 bg-[#34495E]/40 backdrop-blur-sm -z-10"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#E3EBF1] shadow-xl space-y-4 relative"
              >
                <div className="flex items-center justify-between border-b border-[#E3EBF1] pb-3">
                  <h3 className="font-editorial text-xl font-bold text-[#34495E]">
                    {selectedExpertise.title}
                  </h3>
                  <button
                    onClick={() => setSelectedExpertise(null)}
                    className="p-1 rounded-full text-[#8493A0] hover:text-[#34495E] hover:bg-[#F1F7FC]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {selectedExpertise.fullDesc}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold text-[#34495E]">Common Key Conditions Treated:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedExpertise.keyAreas.map((area) => (
                      <div key={area} className="flex items-center gap-2 text-xs text-[#64748B]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#65B5AA] shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E3EBF1] flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedExpertise(null);
                      openModal();
                    }}
                    className="w-full py-3 rounded-full bg-[#397FA5] hover:bg-[#286B91] text-white text-xs font-semibold shadow-xs text-center"
                  >
                    Book Consultation for {selectedExpertise.title}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
