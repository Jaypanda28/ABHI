"use client";

import React from "react";
import { motion } from "framer-motion";
import { HIGHLIGHT_STATS } from "@/data/doctorData";
import { GraduationCap, Award, BookOpen, Stethoscope } from "lucide-react";

const statIcons = [Stethoscope, Award, GraduationCap, BookOpen];

export default function HighlightsSection() {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_12px_36px_-4px_rgba(65,105,135,0.08)] border border-[#E3EBF1] p-6 sm:p-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E3EBF1]">
          {HIGHLIGHT_STATS.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`${idx > 0 ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-8" : ""} flex flex-col justify-between`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EAF3FA] text-[#397FA5] flex items-center justify-center mb-3.5 border border-[#DCECF7]">
                    <Icon className="w-5 h-5 text-[#397FA5]" />
                  </div>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="font-editorial text-2xl sm:text-3xl font-bold text-[#34495E]">
                      {stat.value}
                    </span>
                    {stat.suffix && (
                      <span className="text-sm font-semibold text-[#65B5AA]">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-[#34495E] mb-1 tracking-tight">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {stat.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
