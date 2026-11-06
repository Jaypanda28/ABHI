"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROFESSIONAL_MEMBERSHIPS } from "@/data/doctorData";
import { Award, ShieldCheck, FileCheck, FileText, CheckCircle2 } from "lucide-react";

export default function MembershipsSection() {
  return (
    <section id="memberships" className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FA] border border-[#DCECF7] shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#397FA5]" />
            <span className="text-xs font-bold tracking-wider uppercase text-[#397FA5]">
              Professional Affiliations
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#34495E] tracking-tight">
            Professional Memberships & Associations
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            Active professional affiliations and continuing medical collaboration across premier surgical and pediatric surgical associations.
          </p>
        </div>

        {/* Three Visually Balanced Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {PROFESSIONAL_MEMBERSHIPS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3EBF1] shadow-[0_4px_20px_rgba(65,105,135,0.05)] hover:shadow-[0_16px_36px_rgba(65,105,135,0.09)] hover:border-[#65B5AA]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF3FA] text-[#397FA5] group-hover:bg-[#397FA5] group-hover:text-white flex items-center justify-center transition-colors shadow-2xs border border-[#DCECF7]">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#397FA5] bg-[#E8F6F3] px-3 py-1 rounded-full border border-[#65B5AA]/30">
                    {item.verificationStatus}
                  </span>
                </div>

                {/* Organization Abbreviation Title */}
                <h3 className="font-editorial text-3xl font-bold text-[#34495E] mb-2 tracking-tight group-hover:text-[#397FA5] transition-colors">
                  {item.abbreviation}
                </h3>

                <p className="text-xs font-semibold text-[#65B5AA] uppercase tracking-wider mb-4">
                  {item.organizationCategory}
                </p>

                {/* Description */}
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Document Availability Indicator (Pending Upload / On File) */}
              <div className="pt-6 mt-6 border-t border-[#E3EBF1] space-y-2">
                <div className="flex items-center gap-2 text-[11px] text-[#8493A0] font-medium">
                  <FileText className="w-3.5 h-3.5 text-[#397FA5]" />
                  <span>Certificate Registry Architecture</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F1F7FC] border border-[#E3EBF1] text-[10px] text-[#64748B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C7AD7A]" />
                  <span>{item.documentStatus}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note on Architecture & Documents */}
        <div className="mt-12 text-center text-xs text-[#8493A0] max-w-2xl mx-auto">
          <p>
            *Supporting membership certificates and official documentation records will be linked as digital verifications upon document submission.
          </p>
        </div>
      </div>
    </section>
  );
}
