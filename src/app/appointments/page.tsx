import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { DOCTOR_PROFILE, HOSPITAL_ASSOCIATIONS } from "@/data/doctorData";
import EnquiryForm from "@/components/EnquiryForm";
import { Calendar, Phone, Mail, MapPin, Shield, CheckCircle2, MessageSquare, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Consultation | Dr. Abhishek Anand - Pediatric Surgeon",
  description:
    "Schedule a specialist pediatric surgical or urological consultation with Dr. Abhishek Anand across associated hospitals in Bhubaneswar."
};

export default function AppointmentsPage() {
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
            <Calendar className="w-4 h-4 text-[#65B5AA]" />
            <span>Consultation Scheduling</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#34495E] tracking-tight">
            Book an Appointment
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Schedule an in-person pediatric surgical consultation with Dr. Abhishek Anand at your preferred hospital facility in Bhubaneswar.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Associated Hospitals & Direct Assistance (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E3EBF1] shadow-[0_12px_40px_-8px_rgba(65,105,135,0.07)] space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F6F3] border border-[#65B5AA]/30 text-[#397FA5] text-[10px] font-bold uppercase tracking-wider">
                  Direct Assistance Desk
                </span>
                <h2 className="font-editorial text-2xl font-bold text-[#34495E] mt-2">
                  Need Help Scheduling?
                </h2>
                <p className="text-xs text-[#64748B] mt-1">
                  Call or WhatsApp our clinical coordination desk directly.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:${DOCTOR_PROFILE.phone}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#F1F7FC] hover:bg-[#EAF3FA] border border-[#DCECF7] transition-all group shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#397FA5] border border-[#DCECF7] flex items-center justify-center flex-shrink-0 shadow-2xs">
                      <Phone className="w-5 h-5 text-[#397FA5]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[#8493A0]">Call Desk</p>
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
                      <p className="text-[10px] uppercase font-bold text-[#65B5AA]">WhatsApp</p>
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
                      <p className="text-[10px] uppercase font-bold text-[#8493A0]">Email</p>
                      <p className="text-xs font-semibold text-[#34495E]">{DOCTOR_PROFILE.email}</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#397FA5] font-semibold group-hover:translate-x-1 transition-transform">Send →</span>
                </a>
              </div>

              {/* Hospital List Strip */}
              <div className="pt-4 border-t border-[#E3EBF1] space-y-2">
                <p className="text-xs font-bold uppercase text-[#397FA5]">
                  Associated Hospital Locations
                </p>
                <div className="space-y-1.5 text-xs text-[#64748B]">
                  {HOSPITAL_ASSOCIATIONS.map((h) => (
                    <div key={h.id} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#65B5AA]" />
                      <span>{h.name}</span>
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
                For acute emergencies, please proceed immediately to your nearest hospital emergency department. Online enquiry submissions do not confirm immediate admission or emergency triage.
              </div>
            </div>
          </div>

          {/* Right: Appointment Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E3EBF1] shadow-[0_12px_40px_-8px_rgba(65,105,135,0.07)]">
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F6F3] text-[#397FA5] text-xs font-bold uppercase tracking-wider border border-[#65B5AA]/30">
                  Online Appointment Request
                </span>
                <h2 className="font-editorial text-2xl font-bold text-[#34495E] mt-2">
                  Patient Consultation Request
                </h2>
                <p className="text-xs text-[#64748B] mt-1">
                  Please fill out the details below. Our clinical coordinator will follow up to finalize the date, time slot, and chosen hospital.
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
