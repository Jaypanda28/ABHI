"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Calendar, Heart, Shield, ArrowUp, Building2, Navigation, Trophy } from "lucide-react";
import { DOCTOR_PROFILE, CLINIC_PRIMARY } from "@/data/doctorData";
import { useAppointmentModal } from "./AppointmentModalProvider";

export default function Footer() {
  const { openModal } = useAppointmentModal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#EAF3FA] text-[#64748B] border-t border-[#DCECF7]">
      {/* Top Advisory Bar */}
      <div className="bg-[#F1F7FC] py-3.5 px-4 sm:px-6 lg:px-8 border-b border-[#DCECF7]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748B]">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#65B5AA] flex-shrink-0" />
            <span>
              For acute medical emergencies, please immediately visit the nearest emergency department.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#397FA5] font-bold">MBBS • DrNB (Pediatric Surgery) • FMAS</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Doctor Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#C7AD7A] via-[#397FA5] to-[#65B5AA] shadow-xs shrink-0">
                  <div className="w-full h-full rounded-full bg-[#0E1F38] flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/logo.jpg"
                      alt="Dr. Abhishek Anand Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-editorial text-2xl font-bold tracking-tight text-[#34495E]">
                      Dr. Abhishek Anand
                    </h3>
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-[#DCECF7] text-[#397FA5] text-[10px] font-bold shadow-2xs">
                      <Trophy className="w-3 h-3 text-[#C7AD7A]" />
                      <span>2026 Icon</span>
                    </div>
                  </div>
                  <p className="text-xs uppercase font-bold tracking-wider text-[#397FA5]">
                    MBBS | DrNB (Pediatric Surgery) | FMAS
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#64748B] mt-0.5 font-medium">
                Consultant Pediatric Surgeon &amp; Pediatric Urologist
              </p>
            </div>

            {/* Doctor Motto Banner */}
            <div className="p-3 rounded-2xl bg-[#F1F7FC] border border-[#DCECF7] max-w-sm space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#65B5AA]" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#397FA5]">
                  Heal • Protect • Empower
                </span>
              </div>
              <p className="text-xs text-[#34495E] font-medium italic">
                &ldquo;Healing Little Lives, Shaping a Healthier Tomorrow.&rdquo;
              </p>
            </div>

            {/* Primary Appointment Card */}
            <div className="p-3.5 rounded-2xl bg-white border border-[#E3EBF1] shadow-2xs max-w-sm space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#397FA5] block">
                Primary Current Appointment
              </span>
              <p className="text-xs font-bold text-[#34495E]">Full-Time Consultant</p>
              <p className="text-[11px] text-[#65B5AA] font-medium">
                Wonderbloom Pediatric Surgical Centre of Excellence
              </p>
            </div>

            <p className="text-xs text-[#8493A0] leading-relaxed max-w-sm">
              Director & COO at New Life Clinic, Wonderbloom Hospital & Neovitaz Curae. Times Health Icon Award Odisha 2026 for emerging excellence in pediatric surgery.
            </p>

            <div className="pt-2">
              <button
                onClick={() => openModal()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#397FA5] hover:bg-[#286B91] text-white font-semibold text-xs shadow-[0_4px_14px_rgba(57,127,165,0.25)] hover:shadow-[0_6px_20px_rgba(57,127,165,0.35)] transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book a Consultation</span>
              </button>
            </div>
          </div>

          {/* Column 2: Flagship New Life Clinic (4 cols) */}
          <div className="lg:col-span-4 space-y-4 p-5 rounded-2xl bg-white border border-[#E3EBF1] shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#65B5AA]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#397FA5]">
                  Flagship Practice Location
                </h4>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E8F6F3] text-[#65B5AA] border border-[#65B5AA]/25">
                Director & COO
              </span>
            </div>

            <div>
              <p className="text-base font-bold text-[#34495E] font-editorial">
                New Life Clinic
              </p>
              <p className="text-xs text-[#397FA5] font-semibold mt-0.5">
                Evening Outpatient Clinic • Baramunda, Bhubaneswar
              </p>
            </div>

            <p className="text-xs text-[#64748B] leading-relaxed">
              {CLINIC_PRIMARY.address}
            </p>

            <p className="text-[11px] text-[#8493A0]">
              Landmark: Behind Mia By Tanishq, Soubhagya Nagar / Baramunda
            </p>

            <div className="p-2.5 rounded-xl bg-[#F1F7FC] border border-[#DCECF7] text-xs text-[#34495E] font-medium">
              OPD Timings: Mon – Sat: 5:00 PM – 9:00 PM
            </div>

            <div className="pt-1 flex items-center gap-3">
              <button
                onClick={() => openModal("New Life Clinic")}
                className="text-xs font-semibold text-[#397FA5] hover:text-[#286B91] underline cursor-pointer"
              >
                Book at Clinic →
              </button>
              <span className="text-[#8493A0]">•</span>
              <a
                href={CLINIC_PRIMARY.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#64748B] hover:text-[#397FA5] inline-flex items-center gap-1"
              >
                <Navigation className="w-3 h-3 text-[#65B5AA]" />
                <span>Maps Direction</span>
              </a>
            </div>
          </div>

          {/* Column 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#34495E]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#397FA5] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#397FA5] transition-colors">
                  About Dr. Anand
                </Link>
              </li>
              <li>
                <Link href="/#approach" className="hover:text-[#397FA5] transition-colors">
                  Distinctive Approach
                </Link>
              </li>
              <li>
                <Link href="/#awards" className="hover:text-[#397FA5] transition-colors">
                  Awards & Honors
                </Link>
              </li>
              <li>
                <Link href="/#clinic" className="hover:text-[#397FA5] transition-colors">
                  New Life Clinic
                </Link>
              </li>
              <li>
                <Link href="/#expertise" className="hover:text-[#397FA5] transition-colors">
                  Clinical Expertise
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-[#397FA5] transition-colors">
                  Professional Journey
                </Link>
              </li>
              <li>
                <Link href="/#publications" className="hover:text-[#397FA5] transition-colors">
                  Academic Research
                </Link>
              </li>
              <li>
                <Link href="/#memberships" className="hover:text-[#397FA5] transition-colors">
                  Memberships
                </Link>
              </li>
              <li>
                <Link href="/#hospitals" className="hover:text-[#397FA5] transition-colors">
                  Hospital Associations
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#397FA5] transition-colors">
                  Contact & Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Desk Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#34495E]">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={`tel:${DOCTOR_PROFILE.phone}`}
                className="flex items-center gap-2 hover:text-[#397FA5] transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-white border border-[#DCECF7] flex items-center justify-center text-[#397FA5] shadow-2xs">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold text-[#34495E]">{DOCTOR_PROFILE.formattedPhone}</span>
              </a>

              <a
                href={DOCTOR_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#397FA5] transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-white border border-[#DCECF7] flex items-center justify-center shadow-2xs p-1">
                  <Image
                    src="/images/whatsapp-logo.png"
                    alt="WhatsApp"
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain rounded-xs"
                  />
                </div>
                <span className="font-semibold text-[#34495E]">WhatsApp Desk</span>
              </a>

              <a
                href={`mailto:${DOCTOR_PROFILE.email}`}
                className="flex items-center gap-2 hover:text-[#397FA5] transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-white border border-[#DCECF7] flex items-center justify-center text-[#397FA5] shadow-2xs">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate text-[#34495E]">{DOCTOR_PROFILE.email}</span>
              </a>

              <div className="pt-2 text-[11px] text-[#8493A0]">
                <p>Location: Bhubaneswar, Odisha, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Privacy & Back to Top */}
        <div className="mt-12 pt-8 border-t border-[#DCECF7] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8493A0]">
          <p>© 2026 Dr. Abhishek Anand. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#397FA5] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#DCECF7]">•</span>
            <Link href="/medical-disclaimer" className="hover:text-[#397FA5] transition-colors">
              Medical Disclaimer
            </Link>
            <span className="text-[#DCECF7]">•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#64748B] hover:text-[#397FA5] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
