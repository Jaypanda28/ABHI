import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Phone, Calendar } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-6 pt-32 bg-[#F8FAFC]">
      <div className="w-16 h-16 rounded-2xl bg-[#E8F5F2] flex items-center justify-center text-[#28A6A1] font-bold text-xl font-editorial shadow-xs">
        404
      </div>
      <div className="space-y-2 max-w-md">
        <h1 className="font-editorial text-3xl font-bold text-[#102C46]">
          Page Not Found
        </h1>
        <p className="text-sm text-[#728092] leading-relaxed">
          The requested page could not be located. You can return to the homepage or connect directly with Dr. Abhishek Anand's practice.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#102C46] hover:bg-[#173E5C] text-white font-semibold transition-all shadow-xs"
        >
          <Home className="w-3.5 h-3.5 text-[#28A6A1]" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/appointments"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-200 bg-white text-[#102C46] font-semibold hover:bg-slate-50 transition-all shadow-2xs"
        >
          <Calendar className="w-3.5 h-3.5 text-[#28A6A1]" />
          <span>Book Consultation</span>
        </Link>
        <a
          href="tel:+919777618555"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-200 bg-white text-[#102C46] font-semibold hover:bg-slate-50 transition-all shadow-2xs"
        >
          <Phone className="w-3.5 h-3.5 text-[#28A6A1]" />
          <span>+91 97776 18555</span>
        </a>
      </div>
    </div>
  );
}
