import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { DOCTOR_PROFILE, HOSPITAL_ASSOCIATIONS } from "@/data/doctorData";
import EnquiryForm from "@/components/EnquiryForm";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Shield,
  Building2,
  Calendar,
  ArrowLeft,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Appointments | Dr. Abhishek Anand - Pediatric Surgeon",
  description:
    "Contact Dr. Abhishek Anand, Consultant Pediatric Surgeon & Pediatric Urologist in Bhubaneswar. Direct consultation phone: +91 97776 18555, Email: Pandeyabhi13@live.com."
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-gradient-to-b from-[#FDFEFE] via-[#F1F7FC] to-[#EAF3FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#8493A0] hover:text-[#397FA5] transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F6F3] text-[#397FA5] text-xs font-bold uppercase tracking-wider border border-[#65B5AA]/30">
            <Phone className="w-4 h-4 text-[#65B5AA]" />
            <span>Professional Communication</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#34495E] tracking-tight">
            Contact & Consultation Desk
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Direct coordination for pediatric surgical appointments, second surgical opinions, and procedural inquiries across Bhubaneswar.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E3EBF1] shadow-[0_12px_40px_-8px_rgba(65,105,135,0.07)] space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F6F3] border border-[#65B5AA]/30 text-[#397FA5] text-[10px] font-bold uppercase tracking-wider">
                  Direct Professional Desk
                </span>
                <h2 className="font-editorial text-2xl font-bold text-[#34495E] mt-2">
                  Dr. Abhishek Anand
                </h2>
                <p className="text-xs text-[#8493A0]">
                  MBBS | DrNB (Pediatric Surgery) | FMAS
                </p>
                <p className="text-xs text-[#397FA5] font-semibold mt-0.5">
                  Consultant Pediatric Surgeon & Pediatric Urologist
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={`tel:${DOCTOR_PROFILE.phone}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#F1F7FC] hover:bg-[#EAF3FA] border border-[#DCECF7] transition-all group shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#397FA5] border border-[#DCECF7] flex items-center justify-center flex-shrink-0 shadow-2xs">
                      <Phone className="w-5 h-5 text-[#397FA5]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[#8493A0]">Phone Consultation</p>
                      <p className="text-sm font-bold text-[#34495E]">{DOCTOR_PROFILE.formattedPhone}</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#397FA5] font-semibold group-hover:translate-x-1 transition-transform">Call →</span>
                </a>

                <a
                  href={DOCTOR_PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#E8F6F3] hover:bg-[#D7EFE9] border border-[#65B5AA]/30 transition-all group shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#65B5AA] border border-[#65B5AA]/30 flex items-center justify-center flex-shrink-0 shadow-2xs">
                      <MessageSquare className="w-5 h-5 text-[#65B5AA]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[#65B5AA]">WhatsApp Desk</p>
                      <p className="text-sm font-bold text-[#34495E]">{DOCTOR_PROFILE.formattedPhone}</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#65B5AA] font-semibold group-hover:translate-x-1 transition-transform">Message →</span>
                </a>

                <a
                  href={`mailto:${DOCTOR_PROFILE.email}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#F1F7FC] hover:bg-[#EAF3FA] border border-[#DCECF7] transition-all group shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#397FA5] border border-[#DCECF7] flex items-center justify-center flex-shrink-0 shadow-2xs">
                      <Mail className="w-5 h-5 text-[#397FA5]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[#8493A0]">Direct Email</p>
                      <p className="text-xs font-semibold text-[#34495E]">{DOCTOR_PROFILE.email}</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#397FA5] font-semibold group-hover:translate-x-1 transition-transform">Send →</span>
                </a>
              </div>

              {/* Hospital Affiliations */}
              <div className="pt-4 border-t border-[#E3EBF1] space-y-2">
                <p className="text-xs font-bold uppercase text-[#397FA5]">
                  Associated Hospital Locations
                </p>
                <div className="space-y-1.5 text-xs text-[#64748B]">
                  {HOSPITAL_ASSOCIATIONS.map((h) => (
                    <div key={h.id} className="flex items-center justify-between py-1 border-b border-[#E3EBF1]/60">
                      <span className="font-semibold text-[#34495E]">{h.name}</span>
                      <span className="text-[11px] text-[#8493A0]">{h.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="p-5 rounded-2xl bg-[#FFF9F0] border border-[#C7AD7A]/35 flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#C7AD7A] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-[#64748B] leading-relaxed">
                <strong className="text-[#34495E] font-bold block mb-0.5">
                  Emergency Medical Notice
                </strong>
                For urgent pediatric emergencies, please proceed directly to your nearest hospital emergency department. This contact portal is intended for non-emergency outpatient consultation planning.
              </div>
            </div>
          </div>

          {/* Right: Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E3EBF1] shadow-[0_12px_40px_-8px_rgba(65,105,135,0.07)]">
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F6F3] text-[#397FA5] text-xs font-bold uppercase tracking-wider border border-[#65B5AA]/30">
                  Consultation Request Form
                </span>
                <h2 className="font-editorial text-2xl font-bold text-[#34495E] mt-2">
                  Send a Consultation Enquiry
                </h2>
                <p className="text-xs text-[#64748B] mt-1">
                  Please provide patient details below. Our clinical coordination desk will contact you to confirm a convenient slot.
                </p>
              </div>

              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
