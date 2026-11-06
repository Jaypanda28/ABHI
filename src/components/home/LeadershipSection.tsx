"use client";

import React from "react";
import { motion } from "framer-motion";
import { LEADERSHIP_ROLES } from "@/data/doctorData";
import { Building, ShieldCheck, Sparkles, CheckCircle2, Hospital } from "lucide-react";
import { useAppointmentModal } from "@/components/AppointmentModalProvider";

export default function LeadershipSection() {
  const { openModal } = useAppointmentModal();

  return (
    <section className="py-20 sm:py-28 bg-[#F1F7F5] relative overflow-hidden">
      {/* Soft Pastel Radial Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 aqua-radial-glow pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-[#397FA5]">
            Executive Governance & Clinical Oversight
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#34495E] tracking-tight">
            Leadership & Current Appointments
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            Integrating administrative stewardship with bedside pediatric surgical care across specialized health institutions in Bhubaneswar.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Column 1: Primary Practice & Executive Leadership */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Primary Clinical Designation Card */}
            <div>
              <div className="flex items-center gap-2 pb-2 border-b border-[#E3EBF1] mb-4">
                <ShieldCheck className="w-5 h-5 text-[#65B5AA]" />
                <h3 className="font-editorial text-xl font-bold text-[#34495E]">
                  Current Clinical Practice
                </h3>
              </div>

              {LEADERSHIP_ROLES.primaryClinical.map((item) => (
                <div
                  key={item.organization}
                  className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-[#65B5AA]/40 shadow-[0_12px_36px_rgba(65,105,135,0.07)] space-y-3 relative overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F6F3] border border-[#65B5AA]/30 text-[#397FA5] text-[10px] font-bold uppercase tracking-wider mb-2">
                        <Sparkles className="w-3 h-3 text-[#65B5AA]" />
                        <span>{item.badge || "Primary Current Designation"}</span>
                      </div>
                      <h4 className="font-editorial text-2xl font-bold text-[#34495E] leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-sm font-semibold text-[#397FA5] mt-1">
                        {item.organization}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF3FA] border border-[#DCECF7] flex items-center justify-center text-[#397FA5] flex-shrink-0 shadow-2xs">
                      <Hospital className="w-6 h-6 text-[#397FA5]" />
                    </div>
                  </div>
                  {item.description && (
                    <p className="text-xs text-[#64748B] leading-relaxed pt-2 border-t border-[#E3EBF1]">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Executive Leadership Section */}
            <div className="pt-2">
              <div className="flex items-center gap-2 pb-2 border-b border-[#E3EBF1] mb-4">
                <Building className="w-5 h-5 text-[#65B5AA]" />
                <h3 className="font-editorial text-xl font-bold text-[#34495E]">
                  Executive Leadership Appointments
                </h3>
              </div>

              <div className="space-y-3.5">
                {LEADERSHIP_ROLES.executive.map((item) => (
                  <div
                    key={item.organization}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E3EBF1] shadow-[0_4px_16px_rgba(65,105,135,0.04)] hover:border-[#65B5AA]/40 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#397FA5] bg-[#EAF3FA] px-2.5 py-1 rounded-md mb-2 border border-[#DCECF7]">
                          {item.title}
                        </span>
                        <h4 className="font-editorial text-lg font-bold text-[#34495E]">
                          {item.organization}
                        </h4>
                        {item.address && (
                          <p className="text-xs font-medium text-[#65B5AA] mt-1">
                            {item.address}
                          </p>
                        )}
                        {item.description && (
                          <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-[#E8F6F3] text-[#65B5AA] flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 2: Visiting Consultant Hospital Network */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 pb-2 border-b border-[#E3EBF1]">
              <Hospital className="w-5 h-5 text-[#65B5AA]" />
              <h3 className="font-editorial text-xl font-bold text-[#34495E]">
                Visiting Consultant Network
              </h3>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E3EBF1] shadow-[0_6px_24px_rgba(65,105,135,0.06)] space-y-4">
              <p className="text-xs text-[#64748B] leading-relaxed">
                Dr. Abhishek Anand extends specialized pediatric surgical consultations and elective operative care across leading tertiary hospitals in Bhubaneswar:
              </p>

              <div className="space-y-3 pt-2">
                {LEADERSHIP_ROLES.visiting.map((hospital) => (
                  <div
                    key={hospital}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#F1F7FC] border border-[#E3EBF1] hover:border-[#65B5AA]/50 hover:bg-white transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#E8F6F3] text-[#65B5AA] flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#65B5AA]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#34495E]">{hospital}</p>
                        <p className="text-[11px] text-[#8493A0]">Visiting Consultant, Pediatric Surgery</p>
                      </div>
                    </div>

                    <button
                      onClick={() => openModal(hospital)}
                      className="text-xs font-semibold text-[#397FA5] hover:text-[#286B91] px-3 py-1.5 rounded-lg hover:bg-white transition-colors cursor-pointer"
                    >
                      Book Here
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#E3EBF1] text-xs text-[#8493A0]">
                <p>
                  *Consultations at visiting hospitals are coordinated strictly by appointment through our clinical desk.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
