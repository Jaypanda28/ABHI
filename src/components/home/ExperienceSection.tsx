"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE_TIMELINE } from "@/data/doctorData";
import { Building2, Calendar, MapPin, Briefcase, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-[#397FA5]">
            Clinical Milestones & Institutional Trajectory
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#34495E] tracking-tight">
            Professional Journey
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            A specialized career shaped by comprehensive super-specialty residency at eastern India's premier child health institute, academic university teaching, and clinical leadership.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Spine Line in Soft Sky Blue */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-[#DCECF7] -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {EXPERIENCE_TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={`${item.role}-${item.institution}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative flex flex-col sm:flex-row items-start"
                >
                  {/* Timeline Node Indicator on Center Line */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-5 z-10">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center border-4 border-white shadow-md ${
                        item.isCurrent
                          ? "bg-[#397FA5] ring-4 ring-[#E8F6F3]"
                          : "bg-[#65B5AA]"
                      }`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Left / Right Card Layout for Desktop */}
                  <div
                    className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                      isEven ? "sm:pr-10 sm:text-right" : "sm:pl-10 sm:ml-auto"
                    }`}
                  >
                    <div
                      className={`p-6 sm:p-7 rounded-2xl bg-white border shadow-[0_4px_16px_rgba(65,105,135,0.05)] hover:shadow-[0_12px_28px_rgba(65,105,135,0.09)] transition-all ${
                        item.isCurrent
                          ? "border-[#397FA5]/40 ring-1 ring-[#397FA5]/15 bg-gradient-to-br from-white to-[#F1F7FC]"
                          : "border-[#E3EBF1] hover:border-[#65B5AA]/40"
                      }`}
                    >
                      {/* Current Role Tag */}
                      {item.isCurrent && (
                        <div
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F6F3] text-[#397FA5] text-[10px] font-bold uppercase tracking-wider mb-3 ${
                            isEven ? "sm:ml-auto" : ""
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#65B5AA] animate-ping" />
                          <span>Present Appointment</span>
                        </div>
                      )}

                      {/* Period Badge */}
                      <div
                        className={`flex items-center gap-2 text-xs font-semibold text-[#8493A0] mb-1.5 ${
                          isEven ? "sm:justify-end" : "justify-start"
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#65B5AA]" />
                        <span>{item.period}</span>
                      </div>

                      {/* Role Title */}
                      <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#34495E]">
                        {item.role}
                      </h3>

                      {/* Institution Name */}
                      <div
                        className={`flex items-center gap-1.5 text-xs font-semibold text-[#397FA5] mt-1 mb-2 ${
                          isEven ? "sm:justify-end" : "justify-start"
                        }`}
                      >
                        <Building2 className="w-3.5 h-3.5 text-[#65B5AA]" />
                        <span>{item.institution}</span>
                      </div>

                      {/* Location */}
                      {item.location && (
                        <div
                          className={`flex items-center gap-1.5 text-[11px] text-[#8493A0] mb-3 ${
                            isEven ? "sm:justify-end" : "justify-start"
                          }`}
                        >
                          <MapPin className="w-3 h-3 text-[#8493A0]" />
                          <span>{item.location}</span>
                        </div>
                      )}

                      {/* Description */}
                      {item.description && (
                        <p className="text-xs text-[#64748B] leading-relaxed pt-2 border-t border-[#E3EBF1]">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
