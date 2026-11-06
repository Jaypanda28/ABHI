"use client";

import React, { useEffect } from "react";
import { X, Calendar, MapPin, Phone, Shield } from "lucide-react";
import EnquiryForm from "./EnquiryForm";
import { DOCTOR_PROFILE } from "@/data/doctorData";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultHospital?: string;
}

export default function AppointmentModal({ isOpen, onClose, defaultHospital }: AppointmentModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Light Backdrop */}
      <div
        className="fixed inset-0 bg-[#34495E]/30 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(65,105,135,0.2)] border border-[#E3EBF1] overflow-hidden z-10 my-8 animate-scale-up">
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#FDFEFE] via-[#F1F7FC] to-[#EAF3FA] px-6 py-5 flex items-center justify-between border-b border-[#E3EBF1]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8F6F3] border border-[#65B5AA]/30 flex items-center justify-center text-[#65B5AA]">
              <Calendar className="w-5 h-5 text-[#65B5AA]" />
            </div>
            <div>
              <h2 id="modal-title" className="text-lg font-bold text-[#34495E] font-editorial tracking-wide">
                Book a Specialist Consultation
              </h2>
              <p className="text-xs text-[#64748B]">
                Dr. Abhishek Anand • Full-Time Consultant Pediatric Surgeon
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#8493A0] hover:text-[#34495E] hover:bg-white transition-colors cursor-pointer border border-transparent hover:border-[#E3EBF1]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[calc(85vh-80px)] overflow-y-auto">
          <div className="mb-6 p-4 rounded-2xl bg-[#F1F7FC] border border-[#DCECF7] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#34495E]">
              <MapPin className="w-4 h-4 text-[#65B5AA]" />
              <span>Available at Wonderbloom CoE, New Life Clinic & Partner Hospitals</span>
            </div>
            <a
              href="tel:+919777618555"
              className="inline-flex items-center gap-1.5 font-bold text-[#397FA5] hover:text-[#286B91]"
            >
              <Phone className="w-3.5 h-3.5 text-[#397FA5]" />
              <span>Desk: +91 97776 18555</span>
            </a>
          </div>

          <EnquiryForm defaultHospital={defaultHospital} onSuccess={onClose} compact />
        </div>
      </div>
    </div>
  );
}
