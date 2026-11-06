"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, Phone } from "lucide-react";
import { useAppointmentModal } from "./AppointmentModalProvider";
import { DOCTOR_PROFILE } from "@/data/doctorData";

export default function FloatingAppointmentButton() {
  const { openModal } = useAppointmentModal();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside aria-label="Quick contact tools" className="fixed bottom-6 right-5 sm:right-6 z-30 flex flex-col items-end gap-2.5">
      {/* Official WhatsApp Floating Button */}
      <a
        href={DOCTOR_PROFILE.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white hover:bg-[#E8F6F3] text-[#34495E] text-xs font-semibold shadow-[0_6px_20px_rgba(65,105,135,0.18)] hover:shadow-xl transition-all group border border-[#65B5AA]/40 hover:scale-105"
        aria-label="Chat with Dr. Abhishek Anand's clinical coordination on WhatsApp"
      >
        <Image
          src="/images/whatsapp-logo.png"
          alt="WhatsApp Logo"
          width={22}
          height={22}
          className="w-5 h-5 rounded-md object-contain shrink-0"
        />
        <span className="hidden sm:inline font-bold text-[#34495E] text-xs">WhatsApp Enquiry</span>
      </a>

      {/* Book Appointment Floating Button */}
      <button
        onClick={() => openModal()}
        className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#397FA5] hover:bg-[#286B91] text-white text-xs sm:text-sm font-semibold shadow-[0_8px_25px_rgba(57,127,165,0.35)] border border-white/40 transition-all cursor-pointer group hover:scale-105"
        aria-label="Open appointment booking dialog"
      >
        <Calendar className="w-4 h-4 text-white/90 group-hover:scale-110 transition-transform shrink-0" />
        <span>Book Appointment</span>
      </button>
    </aside>
  );
}
