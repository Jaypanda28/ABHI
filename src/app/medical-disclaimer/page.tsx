import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { DOCTOR_PROFILE } from "@/data/doctorData";
import { AlertTriangle, ShieldAlert, ArrowLeft, Phone, Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Disclaimer | Dr. Abhishek Anand - Pediatric Surgeon",
  description:
    "Official medical disclaimer regarding informational content, clinical consultations, and emergency procedures for Dr. Abhishek Anand's practice."
};

export default function MedicalDisclaimerPage() {
  return (
    <div className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-gradient-to-b from-[#FDFEFE] via-[#F1F7FC] to-[#EAF3FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#8493A0] hover:text-[#397FA5] transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9F0] text-[#C7AD7A] border border-[#C7AD7A]/40 text-xs font-semibold uppercase tracking-wider mb-3">
            <AlertTriangle className="w-3.5 h-3.5 text-[#C7AD7A]" />
            <span>Clinical Notice</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#34495E] tracking-tight">
            Medical Disclaimer
          </h1>
          <p className="text-xs text-[#64748B] mt-1">
            Essential guidelines for parents and families visiting this website
          </p>
        </div>

        {/* Emergency Notice Callout */}
        <div className="p-6 rounded-3xl bg-[#FFF9F0] border border-[#C7AD7A]/40 text-[#64748B] space-y-3">
          <div className="flex items-center gap-2 text-[#34495E] font-bold">
            <ShieldAlert className="w-5 h-5 text-[#C7AD7A] shrink-0" />
            <h2 className="text-base sm:text-lg">Critical Emergency Disclaimer</h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            If your child has an acute, severe medical or surgical emergency—such as acute testicular torsion, acute severe abdominal trauma, bilious vomiting with abdominal distension, irreducible hernia with screaming/pain, acute respiratory distress, or severe hemorrhage—<strong>do not rely on this website or wait for an email/form response</strong>. Take your child immediately to the nearest hospital emergency room.
          </p>
        </div>

        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E3EBF1] shadow-[0_12px_40px_-8px_rgba(65,105,135,0.07)] space-y-6 text-sm text-[#64748B] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-editorial text-lg font-bold text-[#34495E]">
              1. Educational and Informational Nature Only
            </h2>
            <p>
              The materials presented on this website are provided solely for general educational, academic, and informational purposes. No material on this website is intended to serve as a substitute for professional in-person medical evaluation, diagnosis, or surgical recommendation.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#E3EBF1]">
            <h2 className="font-editorial text-lg font-bold text-[#34495E]">
              2. No Doctor-Patient Relationship Established via Web Forms
            </h2>
            <p>
              Submitting an enquiry via website forms, email, or telephone messages does not constitute or establish a formal doctor-patient relationship. A formal medical relationship is established only during an in-person or officially documented clinical consultation.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#E3EBF1]">
            <h2 className="font-editorial text-lg font-bold text-[#34495E]">
              3. Individualized Nature of Pediatric Surgery
            </h2>
            <p>
              Every pediatric surgical condition is anatomically unique. Surgical indications, timing of operation, procedure selection, anesthesia protocols, and post-operative recovery timelines depend strictly on the individual child's age, weight, developmental reserves, and clinical assessment.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
