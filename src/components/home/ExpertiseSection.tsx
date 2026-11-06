"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CLINICAL_EXPERTISE, ExpertiseItem } from "@/data/doctorData";
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
  ArrowRight,
  ChevronRight,
  Calendar,
  CheckCircle2,
  X
} from "lucide-react";
import { useAppointmentModal } from "@/components/AppointmentModalProvider";

// Icon mapping helper
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

export default function ExpertiseSection() {
  const [selectedExpertise, setSelectedExpertise] = useState<ExpertiseItem | null>(null);
  const { openModal } = useAppointmentModal();

  return (
    <section id="expertise" className="py-20 sm:py-28 bg-[#EAF3FA] relative overflow-hidden">
      {/* Subtle Pastel Radial Background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 aqua-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-[#397FA5]">
            Specialized Pediatric Surgical Practice
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#34495E] tracking-tight">
            Areas of Clinical Expertise
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            Delivering precision pediatric surgical and reconstructive solutions adapted to the delicate physiology of infants, children, and adolescents.
          </p>
        </div>

        {/* 10 Clinical Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CLINICAL_EXPERTISE.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Stethoscope;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-[#E3EBF1] shadow-[0_4px_20px_rgba(65,105,135,0.05)] hover:shadow-[0_16px_36px_rgba(65,105,135,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#E8F6F3] group-hover:bg-[#397FA5] text-[#65B5AA] group-hover:text-white border border-[#65B5AA]/20 flex items-center justify-center shadow-2xs transition-colors">
                      <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] font-bold text-[#8493A0] group-hover:text-[#397FA5] transition-colors">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-editorial text-xl font-bold text-[#34495E] mb-2.5 group-hover:text-[#397FA5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {item.shortDesc}
                  </p>

                  {/* Key Condition Bullets */}
                  <div className="space-y-1.5 pt-2 border-t border-[#E3EBF1]">
                    {item.keyAreas.slice(0, 3).map((area) => (
                      <div key={area} className="flex items-center gap-2 text-[11px] text-[#34495E]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#65B5AA] flex-shrink-0" />
                        <span className="truncate">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-6 mt-4 border-t border-[#E3EBF1] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedExpertise(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#34495E] group-hover:text-[#397FA5] transition-colors cursor-pointer"
                  >
                    <span>Read Clinical Details</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#65B5AA] group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => openModal()}
                    className="text-[11px] font-semibold text-[#8493A0] hover:text-[#397FA5] transition-colors cursor-pointer"
                  >
                    Enquire
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal for In-Depth Expertise Info */}
      <AnimatePresence>
        {selectedExpertise && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExpertise(null)}
            className="fixed inset-0 z-50 bg-[#34495E]/30 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E3EBF1] space-y-6"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#397FA5]">
                    Clinical Specialty Brief
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-[#34495E] mt-1">
                    {selectedExpertise.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedExpertise(null)}
                  className="p-2 rounded-xl text-[#8493A0] hover:text-[#34495E] hover:bg-[#F1F7FC] transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Comprehensive Description */}
              <p className="text-sm text-[#64748B] leading-relaxed">
                {selectedExpertise.fullDesc}
              </p>

              {/* Conditions Treated */}
              <div className="space-y-3 pt-2 border-t border-[#E3EBF1]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#34495E]">
                  Conditions & Surgical Procedures Managed:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedExpertise.keyAreas.map((area) => (
                    <div key={area} className="flex items-start gap-2 text-xs text-[#34495E] bg-[#F1F7FC] p-2.5 rounded-xl border border-[#E3EBF1]">
                      <CheckCircle2 className="w-4 h-4 text-[#65B5AA] flex-shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer CTAs */}
              <div className="pt-4 border-t border-[#E3EBF1] flex flex-wrap items-center justify-between gap-4">
                <p className="text-[11px] text-[#8493A0]">
                  Available for evaluations at Wonderbloom CoE & New Life Clinic
                </p>
                <button
                  onClick={() => {
                    setSelectedExpertise(null);
                    openModal();
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#397FA5] hover:bg-[#286B91] text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
