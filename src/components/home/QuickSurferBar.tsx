"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Sparkles,
  Stethoscope,
  Trophy,
  BookOpen,
  Calendar,
  Compass,
  ArrowRight
} from "lucide-react";

interface QuickSurferBarProps {
  onOpenSearch: () => void;
}

export default function QuickSurferBar({ onOpenSearch }: QuickSurferBarProps) {
  const [activeTab, setActiveTab] = useState<string>("about");

  const coSections = [
    { id: "about", label: "About & Ethos", icon: Compass, href: "#about", desc: "Welcome, Motto & 7 Pillars" },
    { id: "clinical-care", label: "Clinical Care & Clinics", icon: Stethoscope, href: "#clinical-care", desc: "Specialties & New Life Clinic" },
    { id: "achievements", label: "Awards & Leadership", icon: Trophy, href: "#achievements", desc: "Times Icon 2026 & Milestones" },
    { id: "academics", label: "Academics & Research", icon: BookOpen, href: "#academics", desc: "Qualifications & Trainees" },
    { id: "contact", label: "Contact & Booking", icon: Calendar, href: "#contact", desc: "Appointments & Timings" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const ids = ["contact", "academics", "achievements", "clinical-care", "about"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 200) {
            setActiveTab(id);
            return;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveTab(id);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="sticky top-[60px] sm:top-[68px] z-30 bg-white/95 backdrop-blur-md border-y border-[#E3EBF1] shadow-[0_4px_16px_rgba(65,105,135,0.04)] py-2 sm:py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Quick Surfer Label & Search Button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenSearch}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#EAF3FA] hover:bg-[#DCECF7] text-[#397FA5] text-xs font-bold border border-[#DCECF7] shadow-2xs hover:scale-105 transition-all cursor-pointer group whitespace-nowrap"
              title="Search procedures, timings, and locations"
            >
              <Search className="w-3.5 h-3.5 text-[#397FA5] group-hover:rotate-12 transition-transform" />
              <span>Quick Search</span>
              <span className="hidden sm:inline-block px-1.5 py-0.2 rounded-md bg-white text-[#397FA5] text-[10px] font-mono border border-[#DCECF7]">
                ⌘K
              </span>
            </button>
          </div>

          {/* Co-Section Tabs (Scrollable on mobile) */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-none py-1 px-1 -mx-1">
            {coSections.map((sec) => {
              const Icon = sec.icon;
              const isActive = activeTab === sec.id;

              return (
                <a
                  key={sec.id}
                  href={sec.href}
                  onClick={(e) => scrollToSection(e, sec.href, sec.id)}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-[#397FA5] text-white shadow-xs"
                      : "bg-[#F8FAFC] hover:bg-[#F1F7FC] text-[#64748B] hover:text-[#34495E] border border-[#E3EBF1]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#65B5AA]"}`} />
                  <span>{sec.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
