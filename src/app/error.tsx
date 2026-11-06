"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-6 pt-32 bg-[#F8FAFC]">
      <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 shadow-2xs">
        <AlertCircle className="w-7 h-7" />
      </div>
      <div className="space-y-2 max-w-md">
        <h1 className="font-editorial text-3xl font-bold text-[#102C46]">
          Something went wrong
        </h1>
        <p className="text-sm text-[#728092] leading-relaxed">
          An unexpected error occurred while loading this page. Please try again or return to the homepage.
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 pt-2 text-xs">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#102C46] hover:bg-[#173E5C] text-white font-semibold transition-all shadow-xs cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#28A6A1]" />
          <span>Try Again</span>
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-200 bg-white text-[#102C46] font-semibold hover:bg-slate-50 transition-all shadow-2xs"
        >
          <Home className="w-3.5 h-3.5 text-[#28A6A1]" />
          <span>Homepage</span>
        </Link>
      </div>
    </div>
  );
}
