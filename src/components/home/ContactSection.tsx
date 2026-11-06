"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, MapPin, Shield, Calendar, Clock, CheckCircle2 } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import { DOCTOR_PROFILE } from "@/data/doctorData";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#EAF3FA] relative overflow-hidden">
      {/* Decorative Pastel Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 teal-radial-glow pointer-events-none -translate-y-1/2" />
      <div className="absolute top-10 right-10 w-96 h-96 ice-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F6F3] border border-[#65B5AA]/30 shadow-2xs">
            <Calendar className="w-4 h-4 text-[#65B5AA]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#397FA5]">
              Direct Desk & Hospital Scheduling
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#34495E] tracking-tight">
            Connect for Professional Consultation
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            Reach out directly for clinical evaluations, surgical second opinions, and procedure scheduling across associated hospitals in Bhubaneswar.
          </p>
        </div>

        {/* Contact Layout: Split Left (Contact Cards) & Right (Enquiry Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Action Buttons & Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E3EBF1] shadow-[0_12px_40px_-8px_rgba(65,105,135,0.07)] space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F6F3] border border-[#65B5AA]/30 text-[#397FA5] text-[10px] font-bold uppercase tracking-wider">
                  Direct Contact Desk
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#34495E] mt-2">
                  Dr. Abhishek Anand
                </h3>
                <p className="text-xs font-semibold text-[#397FA5] mt-0.5">
                  Consultant Pediatric Surgeon & Pediatric Urologist
                </p>
              </div>

              {/* Action Buttons: Call, WhatsApp, Email */}
              <div className="space-y-3 pt-2">
                {/* Click-to-Call */}
                <a
                  href={`tel:${DOCTOR_PROFILE.phone}`}
                  className="w-full p-4 rounded-2xl bg-[#F1F7FC] hover:bg-[#EAF3FA] border border-[#DCECF7] transition-all flex items-center justify-between group shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF3FA] text-[#397FA5] border border-[#DCECF7] flex items-center justify-center flex-shrink-0 shadow-2xs">
                      <Phone className="w-5 h-5 text-[#397FA5]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[#8493A0]">Click to Call</p>
                      <p className="text-sm font-bold text-[#34495E] tracking-wide">{DOCTOR_PROFILE.formattedPhone}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#397FA5] group-hover:translate-x-1 transition-transform">
                    Call Now →
                  </span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href={DOCTOR_PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 rounded-2xl bg-[#E8F6F3] hover:bg-[#D7EFE9] border border-[#65B5AA]/30 transition-all flex items-center justify-between group shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#65B5AA]/30 flex items-center justify-center flex-shrink-0 shadow-2xs p-1.5">
                      <Image
                        src="/images/whatsapp-logo.png"
                        alt="WhatsApp Logo"
                        width={26}
                        height={26}
                        className="w-full h-full object-contain rounded-md"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[#65B5AA]">WhatsApp Consultation Desk</p>
                      <p className="text-sm font-bold text-[#34495E]">{DOCTOR_PROFILE.formattedPhone}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#65B5AA] group-hover:translate-x-1 transition-transform">
                    Message →
                  </span>
                </a>

                {/* Email Button */}
                <a
                  href={`mailto:${DOCTOR_PROFILE.email}`}
                  className="w-full p-4 rounded-2xl bg-[#F1F7FC] hover:bg-[#EAF3FA] border border-[#DCECF7] transition-all flex items-center justify-between group shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#397FA5] border border-[#DCECF7] flex items-center justify-center flex-shrink-0 shadow-2xs">
                      <Mail className="w-5 h-5 text-[#397FA5]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[#8493A0]">Direct Email</p>
                      <p className="text-sm font-bold text-[#34495E]">{DOCTOR_PROFILE.email}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#397FA5] group-hover:translate-x-1 transition-transform">
                    Send Email →
                  </span>
                </a>
              </div>

              {/* Consultation Locations Strip */}
              <div className="pt-4 border-t border-[#E3EBF1] text-xs text-[#64748B] space-y-3">
                {/* Primary Appointment */}
                <div className="p-3.5 rounded-2xl bg-[#F1F7FC] border border-[#DCECF7] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#397FA5]">
                    <span className="w-2 h-2 rounded-full bg-[#65B5AA] animate-pulse" />
                    <span>Primary Appointment: Wonderbloom CoE</span>
                  </div>
                  <p className="text-xs font-semibold text-[#34495E]">
                    Full-Time Consultant – Pediatric Surgical & Urological Care
                  </p>
                </div>

                {/* Flagship Clinic */}
                <div className="p-3.5 rounded-2xl bg-[#F1F7FC] border border-[#DCECF7] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#397FA5]">
                    <MapPin className="w-3.5 h-3.5 text-[#65B5AA]" />
                    <span>Flagship Clinic: New Life Clinic (Director & COO)</span>
                  </div>
                  <p className="text-[11px] text-[#64748B]">
                    Plot no-1117/3632, behind Mia By Tanishq, Soubhagya Nagar, Baramunda, Bhubaneswar, Odisha 751030
                  </p>
                  <p className="text-[10px] text-[#8493A0]">
                    Evening OPD: Monday to Saturday • 5:00 PM – 9:00 PM
                  </p>
                </div>

                <div className="flex items-start gap-2.5 text-[11px]">
                  <MapPin className="w-4 h-4 text-[#65B5AA] flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-[#34495E]">Partner Hospitals:</strong> Padmini Care Hospital, Care Hospital, Kalinga Hospital, Ankura Hospital, Utkal Hospital, Sadguru Hospital.
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Notice Card */}
            <div className="p-5 rounded-2xl bg-[#FFF9F0] border border-[#C7AD7A]/35 flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#C7AD7A] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-[#64748B] leading-relaxed">
                <strong className="text-[#34495E] font-bold block mb-0.5">
                  Emergency Medical Notice
                </strong>
                For acute emergencies (such as sudden respiratory distress, severe acute abdomen, irreducible hernia, or trauma), please proceed to your nearest 24/7 pediatric emergency room.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Appointment Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E3EBF1] shadow-[0_12px_40px_-8px_rgba(65,105,135,0.07)]">
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F6F3] text-[#397FA5] text-xs font-bold uppercase tracking-wider border border-[#65B5AA]/30">
                  Appointment Scheduling
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#34495E] mt-2">
                  Request an Appointment
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">
                  Fill in the details below. Our clinical coordination desk will contact you promptly to confirm your consultation slot at your preferred hospital or clinic.
                </p>
              </div>

              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
