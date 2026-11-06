"use client";

import React, { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import QuickSurferBar from "@/components/home/QuickSurferBar";
import CoSectionAbout from "@/components/home/CoSectionAbout";
import CoSectionClinicalCare from "@/components/home/CoSectionClinicalCare";
import CoSectionAchievements from "@/components/home/CoSectionAchievements";
import CoSectionAcademics from "@/components/home/CoSectionAcademics";
import ContactSection from "@/components/home/ContactSection";
import QuickSearchModal from "@/components/QuickSearchModal";

export default function HomePage() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section: Doctor Profile, Credentials & Guiding Motto Ribbon */}
      <HeroSection />

      {/* 2. Trust Counters & Highlights */}
      <HighlightsSection />

      {/* 3. Sticky Quick-Surfing & Instant Search Bar */}
      <QuickSurferBar onOpenSearch={() => setSearchOpen(true)} />

      {/* 4. CO-SECTION 01: Profile, Welcome Message, Motto, Philosophy, 7 Pillars & Degrees */}
      <CoSectionAbout />

      {/* 5. CO-SECTION 02: Clinical Specialties, Flagship New Life Clinic & Hospital Network */}
      <CoSectionClinicalCare />

      {/* 6. CO-SECTION 03: Honors (Times Health Icon), Leadership Governance & Career Timeline */}
      <CoSectionAchievements />

      {/* 7. CO-SECTION 04: Academics, Research Publications, Trainee Mentorship & Memberships */}
      <CoSectionAcademics />

      {/* 8. CO-SECTION 05: Consultation Booking, OPD Timings, Location & Helpline */}
      <ContactSection />

      {/* Instant Quick Search & Finder Modal */}
      <QuickSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}