import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingAppointmentButton from "@/components/FloatingAppointmentButton";
import AppointmentModalProvider from "@/components/AppointmentModalProvider";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif-display",
  display: "swap",
  weight: ["400"]
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"]
});

export const viewport: Viewport = {
  themeColor: "#397FA5",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  title: "Dr. Abhishek Anand | Pediatric Surgeon & Pediatric Urologist",
  description:
    "Explore the professional profile of Dr. Abhishek Anand, Consultant Pediatric Surgeon and Pediatric Urologist with expertise in neonatal surgery, pediatric urology and minimally invasive surgery.",
  keywords: [
    "Dr. Abhishek Anand",
    "Pediatric Surgeon",
    "Pediatric Urologist",
    "Neonatal Surgery",
    "Pediatric Laparoscopy",
    "Hypospadias Repair",
    "Padmini Care Hospital",
    "Pediatric Surgeon Bhubaneswar",
    "Minimal Access Surgery"
  ],
  authors: [{ name: "Dr. Abhishek Anand" }],
  creator: "Dr. Abhishek Anand",
  metadataBase: new URL("https://drabhishekanand.in"),
  alternates: {
    canonical: "https://drabhishekanand.in"
  },
  openGraph: {
    title: "Dr. Abhishek Anand | Pediatric Surgeon & Pediatric Urologist",
    description:
      "Consultant Pediatric Surgeon & Pediatric Urologist. MBBS | DrNB (Pediatric Surgery) | FMAS. Providing advanced surgical care for children with expertise and compassion.",
    url: "https://drabhishekanand.in",
    siteName: "Dr. Abhishek Anand — Pediatric Surgery",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "/images/dr-abhishek-anand.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Abhishek Anand - Consultant Pediatric Surgeon & Pediatric Urologist"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Abhishek Anand | Pediatric Surgeon & Pediatric Urologist",
    description:
      "Consultant Pediatric Surgeon & Pediatric Urologist. Advanced pediatric, neonatal, and urological surgical care.",
    images: ["/images/dr-abhishek-anand.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Abhishek Anand",
    "image": "https://drabhishekanand.in/images/dr-abhishek-anand.jpg",
    "jobTitle": "Full-Time Consultant, Wonderbloom Pediatric Surgical Centre of Excellence | Consultant Pediatric Surgeon & Pediatric Urologist",
    "description":
      "Full-Time Consultant at Wonderbloom Pediatric Surgical Centre of Excellence, specializing in neonatal surgery, pediatric reconstructive urology, and pediatric laparoscopy.",
    "telephone": "+91-9777618555",
    "email": "Pandeyabhi13@live.com",
    "medicalSpecialty": [
      "https://schema.org/Pediatric",
      "https://schema.org/Urological",
      "https://schema.org/Surgical"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Institute of Child Health, Kolkata",
        "award": "DrNB (Pediatric Surgery)"
      },
      {
        "@type": "EducationalOrganization",
        "name": "JJM Medical College, Davangere",
        "award": "MBBS"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot no-1117/3632, behind Mia By Tanishq, Soubhagya Nagar, Baramunda",
      "addressLocality": "Bhubaneswar",
      "addressRegion": "Odisha",
      "postalCode": "751030",
      "addressCountry": "IN"
    },
    "hospitalAffiliation": [
      {
        "@type": "MedicalOrganization",
        "name": "Wonderbloom Pediatric Surgical Centre of Excellence",
        "roleName": "Full-Time Consultant"
      },
      {
        "@type": "MedicalClinic",
        "name": "New Life Clinic",
        "address": "Plot no-1117/3632, behind Mia By Tanishq, Soubhagya Nagar, Baramunda, Bhubaneswar, Odisha 751030"
      },
      {
        "@type": "Hospital",
        "name": "Padmini Care Hospital"
      },
      {
        "@type": "Hospital",
        "name": "Care Hospital"
      },
      {
        "@type": "Hospital",
        "name": "Kalinga Hospital"
      },
      {
        "@type": "Hospital",
        "name": "Ankura Hospital"
      },
      {
        "@type": "Hospital",
        "name": "Utkal Hospital"
      },
      {
        "@type": "Hospital",
        "name": "Sadguru Hospital"
      }
    ]
  };

  return (
    <html lang="en" className={`${dmSerif.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FDFEFE] text-[#64748B] font-sans antialiased selection:bg-[#E8F6F3] selection:text-[#397FA5]">
        <AppointmentModalProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingAppointmentButton />
          </div>
        </AppointmentModalProvider>
      </body>
    </html>
  );
}
