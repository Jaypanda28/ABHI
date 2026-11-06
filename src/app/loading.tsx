import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 space-y-4 pt-32 bg-[#F8FAFC]">
      <div className="w-10 h-10 border-3 border-[#28A6A1]/20 border-t-[#28A6A1] rounded-full animate-spin" />
      <p className="text-xs font-semibold uppercase tracking-wider text-[#728092]">
        Loading Dr. Abhishek Anand Website...
      </p>
    </div>
  );
}
