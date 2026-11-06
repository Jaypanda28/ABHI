
import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { HOSPITAL_ASSOCIATIONS } from "@/data/doctorData";
import { Building2, Calendar, MapPin, ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Associated Hospitals & Practice Centers | Dr. Abhishek Anand",
  description:
    "Consult Dr. Abhishek Anand at Padmini Care Hospital and visiting facilities across Bhubaneswar including Care Hospital, Kalinga Hospital, and Utkal Hospital."
};

export default function HospitalsPage() {
  return (
    <div className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#728092] hover:text-[#102C46] transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5F2] text-[#28A6A1] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Hospital Network</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#102C46] tracking-tight">
            Associated Hospitals & Clinical Practice
          </h1>
          <p className="text-base sm:text-lg text-[#728092] leading-relaxed">
            Coordinated outpatient clinics and operative surgical admissions across leading healthcare institutions in Bhubaneswar, Odisha.
          </p>
        </div>

        {/* Hospitals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HOSPITAL_ASSOCIATIONS.map((hospital) => {
            const isCentre = hospital.isCentreOfExcellence;
            const isFlagship = hospital.isFlagship;
            const isPrimary = hospital.type === "Primary Practice";
            return (
              <div
                key={hospital.id}
                className={`rounded-3xl p-6 sm:p-8 border flex flex-col justify-between transition-all ${isCentre
                    ? "bg-gradient-to-br from-[#102C46] via-[#173E5C] to-[#102C46] text-white border-2 border-[#28A6A1] shadow-2xl md:col-span-2 lg:col-span-3"
                    : isFlagship
                      ? "bg-gradient-to-br from-white via-white to-[#F6FAF9] border-[#28A6A1] shadow-xl ring-2 ring-[#28A6A1]/20 md:col-span-2 lg:col-span-3"
                      : isPrimary
                        ? "bg-white border-[#28A6A1]/50 shadow-xl ring-1 ring-[#28A6A1]/20"
                        : "bg-white border-slate-200/80 shadow-card"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${isCentre
                          ? "bg-[#C7A66A]/20 text-[#C7A66A] border border-[#C7A66A]/40"
                          : isFlagship
                            ? "bg-[#102C46] text-[#C7A66A] border border-[#C7A66A]/40"
                            : isPrimary
                              ? "bg-[#28A6A1] text-white"
                              : "bg-slate-100 text-slate-700"
                        }`}
                    >
                      {hospital.badge || hospital.type}
                    </span>
                    <Building2 className={`w-5 h-5 ${isCentre ? "text-[#C7A66A]" : isFlagship || isPrimary ? "text-[#28A6A1]" : "text-slate-400"}`} />
                  </div>

                  <h2 className={`font-editorial text-2xl font-bold mb-1 ${isCentre ? "text-white" : "text-[#102C46]"}`}>
                    {hospital.name}
                  </h2>

                  <p className={`text-xs font-semibold mb-2 ${isCentre ? "text-[#28A6A1]" : "text-[#28A6A1]"}`}>
                    {hospital.role}
                  </p>

                  {hospital.address && (
                    <p className={`text-xs font-medium mb-3 flex items-start gap-1.5 ${isCentre ? "text-slate-200" : "text-[#173E5C]"}`}>
                      <MapPin className="w-3.5 h-3.5 text-[#28A6A1] flex-shrink-0 mt-0.5" />
                      <span>{hospital.address}</span>
                    </p>
                  )}

                  <p className={`text-xs leading-relaxed mb-6 ${isCentre ? "text-slate-300" : "text-[#728092]"}`}>
                    {hospital.description}
                  </p>
                </div>

                <div className={`pt-4 border-t ${isCentre ? "border-white/10" : "border-slate-100"}`}>
                  <Link
                    href={`/appointments?hospital=${encodeURIComponent(hospital.name)}`}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 ${isCentre
                        ? "bg-[#28A6A1] hover:bg-[#1F8480] text-[#102C46] font-bold"
                        : "bg-[#102C46] hover:bg-[#173E5C] text-white"
                      }`}
                  >
                    <Calendar className={`w-4 h-4 ${isCentre ? "text-[#102C46]" : "text-[#28A6A1]"}`} />
                    <span>Book at {hospital.name}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
