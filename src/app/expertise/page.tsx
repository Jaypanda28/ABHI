import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { CLINICAL_EXPERTISE } from "@/data/doctorData";
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
  Calendar,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Areas of Clinical Expertise | Dr. Abhishek Anand - Pediatric Surgeon",
  description:
    "Explore the 10 areas of clinical expertise of Dr. Abhishek Anand, including pediatric urology, neonatal surgery, pediatric laparoscopy, thoracoscopy, and hypospadias repair."
};

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

export default function ExpertisePage() {
  return (
    <div className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-gradient-to-b from-[#FDFEFE] via-[#F1F7FC] to-[#EAF3FA] space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F6F3] text-[#397FA5] text-xs font-bold uppercase tracking-wider border border-[#65B5AA]/30">
            <Activity className="w-4 h-4 text-[#65B5AA]" />
            <span>Specialized Surgical Care</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#34495E] tracking-tight">
            Areas of Clinical Expertise
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Delivering advanced, minimally invasive and reconstructive pediatric surgical solutions tailored to the delicate anatomy and physiological reserves of newborns, infants, children, and adolescents.
          </p>
        </div>
      </section>

      {/* 10 Expertise Blocks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {CLINICAL_EXPERTISE.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Stethoscope;
            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E3EBF1] shadow-[0_10px_35px_-6px_rgba(65,105,135,0.06)] hover:shadow-[0_16px_45px_-6px_rgba(65,105,135,0.1)] transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#E8F6F3] text-[#65B5AA] border border-[#65B5AA]/25 flex items-center justify-center">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-[#8493A0]">
                        Specialty {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="font-editorial text-2xl font-bold text-[#34495E]">
                      {item.title}
                    </h2>

                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {item.shortDesc}
                    </p>

                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#397FA5] hover:bg-[#286B91] text-white text-xs font-semibold shadow-[0_4px_14px_rgba(57,127,165,0.25)] hover:shadow-[0_6px_20px_rgba(57,127,165,0.35)] transition-all cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-white/90" />
                      <span>Enquire for this Condition</span>
                    </Link>
                  </div>

                  <div className="lg:col-span-8 space-y-5 lg:pl-6 lg:border-l lg:border-[#E3EBF1]">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#34495E] mb-2">
                        Clinical Scope & Surgical Approach
                      </h3>
                      <p className="text-sm text-[#64748B] leading-relaxed">
                        {item.fullDesc}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#34495E] mb-2.5">
                        Conditions Evaluated & Managed
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {item.keyAreas.map((area) => (
                          <div
                            key={area}
                            className="p-3 rounded-xl bg-[#F1F7FC] border border-[#E3EBF1] flex items-start gap-2.5 text-xs text-[#34495E]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#65B5AA] flex-shrink-0 mt-0.5" />
                            <span>{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
