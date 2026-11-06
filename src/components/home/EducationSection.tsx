"use client";

import React from "react";
import { motion } from "framer-motion";
import { EDUCATION_LIST } from "@/data/doctorData";
import { GraduationCap, Award, Calendar, CheckCircle2 } from "lucide-react";

export default function EducationSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-[#397FA5]">
            Academic Rigor & Super-Specialty Credentials
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#34495E] tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            Formally trained at premier medical centers with accredited super-specialty residency and certified fellowship training.
          </p>
        </div>

        {/* Academic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {EDUCATION_LIST.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E3EBF1] shadow-[0_4px_16px_rgba(65,105,135,0.05)] hover:shadow-[0_14px_30px_rgba(65,105,135,0.09)] hover:border-[#65B5AA]/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Badge and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF3FA] text-[#397FA5] border border-[#DCECF7] flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#397FA5] bg-[#E8F6F3] px-3 py-1 rounded-full border border-[#65B5AA]/30">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Degree & Year */}
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-editorial text-2xl font-bold text-[#34495E]">
                    {item.degree}
                  </h3>
                  {item.year && (
                    <span className="text-xs font-bold text-[#65B5AA]">
                      {item.year}
                    </span>
                  )}
                </div>

                {/* Institution */}
                <p className="text-sm font-semibold text-[#397FA5] mb-4">
                  {item.institution}
                </p>

                {/* Details */}
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E3EBF1] flex items-center gap-2 text-xs font-medium text-[#65B5AA]">
                <CheckCircle2 className="w-4 h-4 text-[#65B5AA]" />
                <span>Verified Super-Specialty Medical Degree</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
