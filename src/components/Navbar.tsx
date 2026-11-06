"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Calendar,
  ArrowRight,
  Trophy,
  Search
} from "lucide-react";
import { useAppointmentModal } from "./AppointmentModalProvider";
import { DOCTOR_PROFILE } from "@/data/doctorData";
import QuickSearchModal from "./QuickSearchModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState<string>("home");
  const [searchOpen, setSearchOpen] = useState(false);

  const pathname = usePathname();
  const { openModal } = useAppointmentModal();

  // Accurate active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sectionMap: { [key: string]: string } = {
        contact: "contact",
        hospitals: "hospitals",
        memberships: "memberships",
        research: "research",
        publications: "research",
        academics: "research",
        experience: "experience",
        achievements: "experience",
        awards: "experience",
        expertise: "expertise",
        "clinical-care": "expertise",
        about: "about"
      };

      const keys = Object.keys(sectionMap);
      for (const key of keys) {
        const el = document.getElementById(key);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 180) {
            setActiveNav(sectionMap[key]);
            return;
          }
        }
      }
      if (window.scrollY < 250) {
        setActiveNav("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut Ctrl+K / Cmd+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll on mobile drawer
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // The 8 Primary Navigation Items
  const navItems = [
    { name: "Home", href: "/", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Expertise", href: "/#expertise", id: "expertise" },
    { name: "Experience", href: "/#experience", id: "experience" },
    { name: "Research", href: "/#publications", id: "research" },
    { name: "Memberships", href: "/#memberships", id: "memberships" },
    { name: "Hospitals", href: "/#hospitals", id: "hospitals" },
    { name: "Contact", href: "/#contact", id: "contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-2px_rgba(65,105,135,0.07)] border-b border-[#E3EBF1] py-2 sm:py-2.5"
            : "bg-white/90 backdrop-blur-sm py-2.5 sm:py-3.5 border-b border-[#E3EBF1]/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 xl:gap-6">
            {/* 1. Left: Doctor Official Brand Identity with Website Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 sm:gap-3 focus:outline-hidden shrink-0 whitespace-nowrap"
              aria-label="Dr. Abhishek Anand Home"
            >
              {/* Official Website Brand Logo Emblem */}
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0.5 bg-gradient-to-tr from-[#C7AD7A] via-[#397FA5] to-[#65B5AA] shadow-xs shrink-0 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-[#0E1F38] flex items-center justify-center overflow-hidden relative">
                  <Image
                    src="/images/logo.jpg"
                    alt="Dr. Abhishek Anand Official Logo"
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Active Live Status Indicator Beacon */}
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] border-2 border-white shadow-2xs" />
              </div>

              {/* Doctor Name & Designation (Calibrated typography that never overflows) */}
              <div className="flex flex-col shrink-0">
                <div className="flex items-center gap-2">
                  <span className="font-editorial text-base sm:text-lg xl:text-xl font-bold text-[#34495E] tracking-normal group-hover:text-[#397FA5] transition-colors leading-tight whitespace-nowrap">
                    Dr. Abhishek Anand
                  </span>

                  {/* Times Health Icon Badge (Displayed on wide screens without pushing nav) */}
                  <div className="hidden 2xl:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EAF3FA] text-[#397FA5] text-[10px] font-bold border border-[#DCECF7] shadow-2xs group-hover:border-[#65B5AA] transition-colors whitespace-nowrap">
                    <Trophy className="w-3 h-3 text-[#C7AD7A]" />
                    <span>Times Health Icon 2026</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 mt-0.5 whitespace-nowrap">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#397FA5]">
                    Full-Time Consultant
                  </span>
                  <span className="text-[10px] text-[#8493A0]">•</span>
                  <span className="text-[10px] sm:text-[11px] font-medium text-[#64748B]">
                    Pediatric Surgeon &amp; Urologist
                  </span>
                </div>
              </div>
            </Link>

            {/* 2. Middle: Desktop Navigation Bar (Dynamically Centered via Flex-1, ZERO Overlap Guarantee) */}
            <nav
              className="hidden lg:flex items-center justify-center flex-1 mx-2 xl:mx-4"
              aria-label="Main navigation"
              onMouseLeave={() => setHoveredNav(null)}
            >
              <div className="flex items-center gap-0.5 xl:gap-1 2xl:gap-1.5">
                {navItems.map((item) => {
                  const isCurrent = activeNav === item.id;
                  const isHovered = hoveredNav === item.id;

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onMouseEnter={() => setHoveredNav(item.id)}
                      onClick={() => setActiveNav(item.id)}
                      className={`relative px-2.5 xl:px-3 py-1.5 text-xs xl:text-[13px] font-semibold transition-colors cursor-pointer rounded-full whitespace-nowrap ${
                        isCurrent
                          ? "text-[#397FA5] font-bold"
                          : "text-[#64748B] hover:text-[#34495E]"
                      }`}
                    >
                      {/* Hover Pill Background */}
                      {isHovered && (
                        <motion.div
                          layoutId="navbar-hover-capsule"
                          transition={{ type: "spring", stiffness: 450, damping: 32 }}
                          className="absolute inset-0 rounded-full bg-[#EAF3FA] border border-[#DCECF7]/80 -z-10"
                        />
                      )}

                      <span>{item.name}</span>

                      {/* Active Animated Teal Underline Bar */}
                      {isCurrent && (
                        <motion.div
                          layoutId="navbar-active-underline"
                          transition={{ type: "spring", stiffness: 420, damping: 30 }}
                          className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-[#65B5AA] rounded-full shadow-[0_1px_4px_rgba(101,181,170,0.5)]"
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* 3. Right: Balanced Quick Search Trigger & Clean Visual Alignment */}
            <div className="hidden lg:flex items-center justify-end shrink-0">
              <button
                onClick={() => setSearchOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F1F7FC] hover:bg-[#EAF3FA] text-[#64748B] hover:text-[#397FA5] text-xs font-semibold border border-[#E3EBF1] shadow-2xs hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
                title="Search conditions, clinics, timings (Ctrl+K)"
                aria-label="Quick Search"
              >
                <Search className="w-3.5 h-3.5 text-[#397FA5]" />
                <span className="text-[11px]">Search</span>
                <span className="px-1.5 py-0.2 rounded-md bg-white text-[#8493A0] text-[9px] font-mono border border-[#E3EBF1]">
                  ⌘K
                </span>
              </button>
            </div>

            {/* 4. Mobile / Tablet Action Bar */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
              {/* Quick Search Button on Mobile */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-xl bg-[#F1F7FC] hover:bg-[#EAF3FA] text-[#397FA5] border border-[#E3EBF1] shadow-2xs"
                title="Quick Search"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Official WhatsApp Quick Button on Mobile */}
              <a
                href={DOCTOR_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-xl bg-[#E8F6F3] hover:bg-[#D7EFE9] border border-[#65B5AA]/30 flex items-center justify-center transition-all shadow-2xs hover:scale-105"
                title="Chat on WhatsApp"
                aria-label="Direct WhatsApp Consultation"
              >
                <Image
                  src="/images/whatsapp-logo.png"
                  alt="WhatsApp"
                  width={22}
                  height={22}
                  className="w-5 h-5 rounded-md object-contain"
                />
              </a>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#34495E] hover:bg-[#EAF3FA] transition-colors cursor-pointer border border-[#E3EBF1]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#34495E]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#34495E]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Full-Screen Light Luxury Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-[#FDFEFE] text-[#34495E] flex flex-col justify-between p-5 sm:p-7 lg:hidden overflow-y-auto"
          >
            {/* Top Bar inside menu with Website Logo */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E3EBF1]">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-[#C7AD7A] via-[#397FA5] to-[#65B5AA] shadow-sm shrink-0">
                  <div className="w-full h-full rounded-full bg-[#0E1F38] flex items-center justify-center overflow-hidden relative">
                    <Image
                      src="/images/logo.jpg"
                      alt="Dr. Abhishek Anand Official Logo"
                      width={44}
                      height={44}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] border-2 border-white" />
                </div>

                <div>
                  <p className="font-editorial text-lg font-bold text-[#34495E] leading-tight">
                    Dr. Abhishek Anand
                  </p>
                  <p className="text-[10px] font-semibold text-[#397FA5] mt-0.5">
                    Consultant Pediatric Surgeon &amp; Urologist
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.2 rounded-full bg-[#EAF3FA] border border-[#DCECF7] text-[#397FA5] text-[9px] font-bold mt-1">
                    <Trophy className="w-2.5 h-2.5 text-[#C7AD7A]" />
                    <span>Times Health Icon 2026</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl text-[#64748B] hover:text-[#34495E] hover:bg-[#EAF3FA] border border-[#E3EBF1]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Search Bar */}
            <div className="py-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-[#F8FAFC] border border-[#E3EBF1] text-xs text-[#8493A0]"
              >
                <span className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#397FA5]" />
                  <span>Search procedures, clinics, timings...</span>
                </span>
                <span className="text-[10px] font-bold text-[#397FA5]">Tap</span>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="py-2 space-y-1 flex-1 overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-semibold text-[#34495E] hover:text-[#397FA5] py-2.5 px-3 rounded-xl hover:bg-[#F1F7FC] transition-colors border-b border-[#E3EBF1]/60"
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#65B5AA]" />
                </Link>
              ))}
            </div>

            {/* Mobile Bottom Quick Actions */}
            <div className="pt-4 border-t border-[#E3EBF1] space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#397FA5] to-[#2E6F93] text-white font-semibold text-center text-xs sm:text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book an Appointment</span>
              </button>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${DOCTOR_PROFILE.phone}`}
                  className="py-2.5 px-3 rounded-full bg-[#EAF3FA] text-[#397FA5] text-center text-xs font-semibold flex items-center justify-center gap-1.5 border border-[#DCECF7]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#397FA5]" />
                  <span>Call Desk</span>
                </a>

                <a
                  href={DOCTOR_PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-full bg-[#E8F6F3] text-[#286B91] text-center text-xs font-semibold flex items-center justify-center gap-1.5 border border-[#65B5AA]/30"
                >
                  <Image
                    src="/images/whatsapp-logo.png"
                    alt="WhatsApp"
                    width={16}
                    height={16}
                    className="w-3.5 h-3.5 object-contain rounded-xs"
                  />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Search Modal */}
      <QuickSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}