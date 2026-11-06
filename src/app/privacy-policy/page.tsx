import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { DOCTOR_PROFILE } from "@/data/doctorData";
import { ShieldCheck, Lock, ArrowLeft, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Dr. Abhishek Anand - Pediatric Surgeon",
  description: "Privacy policy for the official professional medical website of Dr. Abhishek Anand, Consultant Pediatric Surgeon & Pediatric Urologist."
};

export default function PrivacyPolicyPage() {
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F6F3] text-[#397FA5] text-xs font-semibold uppercase tracking-wider border border-[#65B5AA]/30 mb-3">
            <Lock className="w-3.5 h-3.5 text-[#65B5AA]" />
            <span>Data Protection & Confidentiality</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#34495E] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#64748B] mt-1">
            Last updated: October 2026 • Dr. Abhishek Anand Professional Practice
          </p>
        </div>

        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E3EBF1] shadow-[0_12px_40px_-8px_rgba(65,105,135,0.07)] space-y-8 text-sm text-[#64748B] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-editorial text-xl font-bold text-[#34495E]">
              1. Purpose of This Website
            </h2>
            <p>
              This website serves exclusively as the professional medical portfolio and appointment enquiry platform for <strong>Dr. Abhishek Anand</strong>, MBBS | DrNB (Pediatric Surgery) | FMAS, Consultant Pediatric Surgeon and Pediatric Urologist.
            </p>
            <p>
              It is designed to provide authoritative clinical information regarding pediatric surgical conditions and facilitate initial consultation scheduling at associated hospital facilities. This website does NOT function as a public Electronic Medical Record (EMR) or hospital management database.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#E3EBF1]">
            <h2 className="font-editorial text-xl font-bold text-[#34495E]">
              2. Information Collected via Appointment Enquiries
            </h2>
            <p>
              When parents or guardians submit an enquiry to schedule a clinical consultation, we collect only the information necessary for scheduling coordination:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#64748B]">
              <li>Parent or guardian full name</li>
              <li>Child&apos;s name (optional)</li>
              <li>Contact telephone number and optional email address</li>
              <li>Preferred hospital location and preferred consultation date</li>
              <li>Brief description of the reason for consultation</li>
            </ul>
            <p>
              We request that parents do not submit sensitive diagnostic reports, genomic files, or emergency messages through web contact forms.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#E3EBF1]">
            <h2 className="font-editorial text-xl font-bold text-[#34495E]">
              3. Confidentiality and Information Usage
            </h2>
            <p>
              Any contact information submitted is treated with strict medical confidentiality. It is utilized solely by Dr. Abhishek Anand and his clinical coordination desk to follow up, answer logistical questions, and confirm appointment slots at your chosen hospital. We never sell, rent, lease, or share personal information with third-party advertising or commercial entities.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#E3EBF1]">
            <h2 className="font-editorial text-xl font-bold text-[#34495E]">
              4. Cookies and Analytical Privacy
            </h2>
            <p>
              This website uses only essential session mechanics necessary for site routing, form security, and responsive layout performance. No third-party behavioral trackers or ad profiling pixels are implemented.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#E3EBF1]">
            <h2 className="font-editorial text-xl font-bold text-[#34495E]">
              5. Contact for Privacy Inquiries
            </h2>
            <p>
              For any questions regarding personal data or to request deletion of previously submitted contact information, please reach out directly:
            </p>
            <div className="p-5 rounded-2xl bg-[#F1F7FC] border border-[#E3EBF1] text-xs space-y-2">
              <p className="font-bold text-[#34495E] text-sm">{DOCTOR_PROFILE.name}</p>
              <p className="text-[#64748B]">{DOCTOR_PROFILE.specialty}</p>
              <p className="flex items-center gap-2 text-[#34495E]">
                <Phone className="w-3.5 h-3.5 text-[#397FA5]" />
                <span>Telephone: {DOCTOR_PROFILE.formattedPhone}</span>
              </p>
              <p className="flex items-center gap-2 text-[#34495E]">
                <Mail className="w-3.5 h-3.5 text-[#397FA5]" />
                <span>Email: {DOCTOR_PROFILE.email}</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
