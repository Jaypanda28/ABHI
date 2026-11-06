export interface QualificationItem {
  degree: string;
  institution: string;
  year?: string;
  details: string;
  badge?: string;
}

export interface ExperienceItem {
  role: string;
  institution: string;
  period: string;
  location?: string;
  description?: string;
  isCurrent?: boolean;
}

export interface LeadershipItem {
  title: string;
  organization: string;
  type: "executive" | "clinical";
  description?: string;
  badge?: string;
  address?: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  keyAreas: string[];
  icon: string;
}

export interface HospitalItem {
  id: string;
  name: string;
  role: string;
  type: "Centre of Excellence" | "Flagship Clinic" | "Primary Practice" | "Visiting Consultant";
  description: string;
  badge?: string;
  address?: string;
  isFlagship?: boolean;
  isCentreOfExcellence?: boolean;
  image?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  year: string;
  organization: string;
  category: string;
  description: string;
  badge: string;
  highlight?: boolean;
  image?: string;
  newspaperImage?: string;
  ceremonyImage?: string;
  newspaperHeadline?: string;
  newspaperQuotes?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  journal?: string;
  volume?: string;
  issue?: string;
  period?: string;
  authors?: string;
  forum: string;
  type: "Verified Journal Publication" | "International Journal" | "National Conference Presentation";
  conferenceName?: string;
  topic: string;
  summary: string;
  isMajorContribution?: boolean;
  articleUrl?: string; // Only populated when verified URL/DOI is provided
}

export interface MembershipItem {
  id: string;
  abbreviation: string;
  displayName: string;
  organizationCategory: string;
  verificationStatus: "Active Professional Member";
  documentStatus: "Verification Document Pending Upload" | "Document Verified on File";
  description: string;
}

export type DocumentCategory =
  | "Educational Qualifications"
  | "Professional Memberships"
  | "Medical Registration"
  | "Fellowships & Certifications"
  | "Research Publications";

export interface VerifiedDocument {
  id: string;
  documentTitle: string;
  documentCategory: DocumentCategory;
  issuingInstitution: string;
  issueDate?: string;
  verificationStatus: "Verified" | "Pending Document Upload" | "Internal Review";
  documentFile?: string;
  publicVisibility: boolean;
  notes?: string;
}

export interface BreakthroughCase {
  condition: string;
  procedure: string;
  outcome: string;
}

export interface PressFeature {
  id: string;
  title: string;
  publication: string;
  edition: string;
  date: string;
  badge: string;
  headline: string;
  summary: string;
  quote: string;
  ceremonyImage: string;
  buildingImage?: string;
  fullNewspaperImage: string;
  breakthroughCases: BreakthroughCase[];
  helpline?: string;
  address?: string;
}

export interface HighlightStat {
  value: string;
  suffix?: string;
  label: string;
  detail: string;
}

export interface DistinctivePillar {
  number: string;
  title: string;
  description: string;
  category: string;
  iconName: string;
}

export interface PersonalInterestItem {
  id: string;
  title: string;
  description: string;
  category: string;
  iconName: string;
}

export interface CommunityServiceItem {
  id: string;
  title: string;
  description: string;
  tagline: string;
  iconName: string;
}

export const PRIMARY_APPOINTMENT = {
  designation: "Full-Time Consultant",
  institution: "Wonderbloom Pediatric Surgical Centre of Excellence",
  badge: "Primary Full-Time Consultant",
  scope: "Specialized Pediatric Surgical, Reconstructive Urology & Neonatal Care"
};

export const CLINIC_PRIMARY = {
  name: "New Life Clinic",
  role: "Director & COO | Consultant Pediatric Surgeon",
  address: "Plot no-1117/3632, behind Mia By Tanishq, Soubhagya Nagar, Baramunda, Bhubaneswar, Odisha 751030",
  landmark: "Behind Mia By Tanishq, Soubhagya Nagar / Baramunda",
  phone: "+91 9777618555",
  formattedPhone: "+91 97776 18555",
  email: "Pandeyabhi13@live.com",
  googleMapsUrl: "https://maps.google.com/?q=Plot+no-1117/3632+behind+Mia+By+Tanishq+Soubhagya+Nagar+Baramunda+Bhubaneswar+Odisha+751030",
  image: "/images/new-life-clinic.jpg",
  timings: "Monday to Saturday • 5:00 PM – 9:00 PM",
  notes: "Dr. Abhishek Anand personally takes outpatient appointments, clinical examinations, second opinions, and pre-/post-operative surgical reviews at New Life Clinic."
};

export const DOCTOR_WELCOME_MESSAGE = {
  title: "Welcome to My Profile!",
  subheading: "A Personal Message to Parents and Families",
  salutation: "Thank you for visiting my profile.",
  paragraphs: [
    "I am Dr. Abhishek Anand, Consultant Pediatric Surgeon and Pediatric Urologist, dedicated to providing comprehensive, compassionate, and advanced surgical care for newborns, infants, and children.",
    "My areas of expertise include pediatric and neonatal surgery, pediatric urological conditions, congenital anomalies, minimally invasive and advanced laparoscopic surgery.",
    "I strongly believe that every child deserves the best possible care, delivered with compassion, precision, and a personal touch. I understand the concerns and anxieties of parents, and I strive to ensure that every family feels informed, supported, and confident throughout their child’s treatment journey.",
    "Whether you are seeking medical guidance, a second opinion, or specialized surgical care for your child, I am here to help."
  ],
  priorityStatement: "Your child’s health, comfort, and brighter future are always my priority.",
  closing: "Warm regards,",
  doctorName: "Dr. Abhishek Anand",
  credentials: "Consultant Pediatric Surgeon & Pediatric Urologist"
};

export const DOCTOR_MOTTO = {
  trio: "Heal. Protect. Empower.",
  pillars: [
    { title: "Heal", desc: "Expert surgical restoration with advanced pediatric precision" },
    { title: "Protect", desc: "Safe, minimally invasive, and nurturing neonatal care" },
    { title: "Empower", desc: "Guiding parents and shaping healthier, vibrant futures" }
  ],
  tagline: "Healing Little Lives, Shaping a Healthier Tomorrow.",
  author: "Dr. Abhishek Anand",
  title: "Consultant Pediatric Surgeon & Pediatric Urologist"
};

export const DOCTOR_PHILOSOPHY = {
  statement:
    "Precision in surgery, compassion in care, innovation in practice, and a vision to transform pediatric healthcare.",
  shortStatement:
    "Precision in surgery, compassion in care, innovation in practice, and a vision to transform pediatric healthcare.",
  pillars: [
    {
      title: "Precision in Surgery",
      highlight: "Clinical & Operative Excellence",
      description:
        "Sub-millimeter delicate surgery tailored specifically to pediatric and neonatal anatomy with meticulous technical standards."
    },
    {
      title: "Compassion in Care",
      highlight: "Family-Centred Empathy",
      description:
        "Every child is treated with warmth, empathy, and individualized tenderness, ensuring parents are guided and supported at every step."
    },
    {
      title: "Innovation in Practice",
      highlight: "Advanced Minimal Access & Robotics",
      description:
        "Harnessing cutting-edge laparoscopic, endoscopic, and robotic systems to reduce surgical trauma, expedite healing, and enhance outcomes."
    },
    {
      title: "Vision to Transform",
      highlight: "Integrated Healthcare Ecosystems",
      description:
        "Establishing integrated pediatric surgical centres of excellence, modernizing clinics, and democratizing specialized pediatric care."
    }
  ]
};

export const DOCTOR_PERSONAL_QUOTE = {
  quote:
    "My passion is to heal with precision, lead with vision, and build healthcare with purpose. Every child deserves the best of modern surgical expertise, compassionate care, and a brighter tomorrow. For me, medicine is not just a profession; it is a responsibility to create a healthier future for every child.",
  author: "Dr. Abhishek Anand",
  credentials: "MBBS | DrNB (Pediatric Surgery) | FMAS",
  role: "Consultant Pediatric Surgeon & Pediatric Urologist",
  primaryAppointment:
    "Full-Time Consultant • Wonderbloom Pediatric Surgical Centre of Excellence"
};

export const TEACHING_EXPERIENCE = {
  title: "4 Years Postgraduate Surgical Faculty & Mentorship",
  duration: "4 Years",
  audience: "Postgraduate Surgical Residents & Fellows",
  summary:
    "Four years of dedicated academic instruction, bedside clinical teaching, and operative mentorship for postgraduate trainees in pediatric surgery, surgical decision-making, and neonatology.",
  highlights: [
    "Clinical decision-making and surgical rounds",
    "Neonatal intensive care surgical pre-op & post-op",
    "Minimally invasive and laparoscopic surgical instruction",
    "Journal club guidance and thesis research mentoring"
  ]
};

export const DISTINCTIVE_APPROACH_LIST: DistinctivePillar[] = [
  {
    number: "01",
    title: "Specialised expertise with a comprehensive perspective",
    description:
      "As a Pediatric Surgeon and Pediatric Urologist, I focus on managing complex congenital conditions, neonatal surgical problems, and pediatric urological disorders. My approach combines clinical precision with an understanding of the child's long-term growth and quality of life.",
    category: "Surgical Precision & Long-Term Health",
    iconName: "Stethoscope"
  },
  {
    number: "02",
    title: "Commitment to advanced and minimally invasive surgery",
    description:
      "I actively embrace advanced laparoscopic techniques, minimally invasive procedures, and robotic surgery. My philosophy is to bring modern surgical technology into pediatric care while prioritising safety, precision, and better outcomes.",
    category: "Minimal Access & Robotic Surgery",
    iconName: "Cpu"
  },
  {
    number: "03",
    title: "Child-centred and family-oriented care",
    description:
      "I believe that treating a child means caring for the entire family. Clear communication, counselling, parental involvement, and compassionate decision-making are important elements of my professional approach.",
    category: "Compassionate Family Care",
    iconName: "HeartHandshake"
  },
  {
    number: "04",
    title: "Focus on early diagnosis and timely intervention",
    description:
      "I emphasise identifying congenital and pediatric conditions early, guiding parents appropriately, and intervening at the right time to prevent long-term complications.",
    category: "Early Diagnosis & Prevention",
    iconName: "Clock"
  },
  {
    number: "05",
    title: "Building integrated healthcare systems",
    description:
      "Through my vision for Wonderbloom and my clinical initiatives, I aim to bring pediatric medicine, pediatric surgery, pediatric urology, neonatal care, and critical care under an integrated healthcare model.",
    category: "Integrated Hospital Systems",
    iconName: "Building2"
  },
  {
    number: "06",
    title: "Entrepreneurial thinking and healthcare innovation",
    description:
      "I like going beyond conventional clinical practice. My interest in developing clinic systems, digital appointment platforms, pharmacy workflows, and technology-enabled healthcare reflects my ambition to make healthcare more accessible, organised, and efficient.",
    category: "Healthcare Innovation & Technology",
    iconName: "Lightbulb"
  },
  {
    number: "07",
    title: "Commitment to education and knowledge sharing",
    description:
      "I also value educating parents, mentoring healthcare professionals, and using social media to discuss important pediatric surgical topics and create awareness about conditions that are often misunderstood.",
    category: "Education & Awareness",
    iconName: "GraduationCap"
  }
];

export const PERSONAL_INTERESTS: PersonalInterestItem[] = [
  {
    id: "surgical-excellence",
    title: "Advancing Surgical Excellence",
    description:
      "Keeping updated with modern pediatric surgical techniques, minimally invasive surgery and emerging medical technologies.",
    category: "Surgical Mastery",
    iconName: "Stethoscope"
  },
  {
    id: "healthcare-innovation",
    title: "Healthcare Innovation & Entrepreneurship",
    description:
      "Developing better healthcare systems, digital solutions and accessible medical services.",
    category: "Healthcare Systems",
    iconName: "Lightbulb"
  },
  {
    id: "medical-education",
    title: "Medical Education",
    description:
      "Sharing medical knowledge and creating awareness about pediatric surgical conditions.",
    category: "Knowledge Sharing",
    iconName: "BookOpen"
  },
  {
    id: "institution-building",
    title: "Leadership & Institution Building",
    description:
      "Contributing towards the development of modern, patient-centred healthcare institutions.",
    category: "Leadership",
    iconName: "Building2"
  },
  {
    id: "continuous-learning",
    title: "Continuous Learning",
    description:
      "Exploring innovations, research and global developments in healthcare.",
    category: "Lifelong Learning",
    iconName: "Sparkles"
  }
];

export const COMMUNITY_SERVICE_LIST: CommunityServiceItem[] = [
  {
    id: "child-health-awareness",
    title: "Child Health Awareness",
    description:
      "Educating parents about congenital anomalies, pediatric urological problems and early warning signs requiring medical attention.",
    tagline: "Parental Awareness & Anomaly Guidance",
    iconName: "Heart"
  },
  {
    id: "early-diagnosis",
    title: "Early Diagnosis & Intervention",
    description:
      "Promoting timely treatment to prevent avoidable complications and long-term disability.",
    tagline: "Timely Surgical Intervention",
    iconName: "Clock"
  },
  {
    id: "healthcare-accessibility",
    title: "Healthcare Accessibility",
    description:
      "Supporting initiatives that make specialised pediatric surgical care more accessible to underserved communities.",
    tagline: "Accessible Specialized Surgery",
    iconName: "HandHeart"
  },
  {
    id: "parent-counselling",
    title: "Parent Education & Counselling",
    description:
      "Empowering families with knowledge to make informed decisions about their children's health.",
    tagline: "Family Empowerment & Compassion",
    iconName: "HeartHandshake"
  },
  {
    id: "awareness-campaigns",
    title: "Medical Awareness Campaigns",
    description:
      "Participating in community health programmes, educational sessions and public health initiatives.",
    tagline: "Public Health & Social Commitment",
    iconName: "Megaphone"
  }
];

export const DOCTOR_PROFILE = {
  name: "Dr. Abhishek Anand",
  degrees: "MBBS | DrNB (Pediatric Surgery) | FMAS",
  primaryDesignation: "Full-Time Consultant",
  primaryInstitution: "Wonderbloom Pediatric Surgical Centre of Excellence",
  specialty: "Consultant Pediatric Surgeon & Pediatric Urologist",
  eyebrow: "PEDIATRIC SURGERY | PEDIATRIC UROLOGY",
  tagline: "Specialized Surgical Care. A Healthier Tomorrow for Every Child.",
  bioSummary:
    "Providing advanced pediatric surgical, neonatal, and urological care with expertise, compassion, and a commitment to better outcomes for children and families.",
  fullBio: [
    "Dr. Abhishek Anand is a distinguished Pediatric Surgeon serving as Full-Time Consultant at Wonderbloom Pediatric Surgical Centre of Excellence, with advanced super-specialty training in Pediatric Surgery, Pediatric Urology, Neonatal Surgery, and Minimally Invasive Surgery.",
    "His clinical focus spans delicate congenital disorders in newborns, pediatric reconstructive urology, complex gastrointestinal conditions, and modern laparoscopic and robotic interventions tailored specifically for growing anatomy.",
    "Committed to academic rigor and surgical education, Dr. Anand brings four years of postgraduate teaching experience, active publication in peer-reviewed pediatric surgery journals, and healthcare leadership as Director & COO of Wonderbloom Mother & Child Superspeciality Hospital and Neovitaz Curae Pvt. Ltd."
  ],
  phone: "+91 9777618555",
  formattedPhone: "+91 97776 18555",
  email: "Pandeyabhi13@live.com",
  whatsappUrl:
    "https://wa.me/919777618555?text=Hello%20Dr.%20Abhishek%20Anand%2C%20I%20would%20like%20to%20enquire%20about%20a%20pediatric%20surgical%20consultation.",
  doctorPhoto: "/images/dr-abhishek-anand.png",
  doctorPhotoJpg: "/images/dr-abhishek-anand.jpg",
  logo: "/images/logo.jpg",
  logoRound: "/images/dr-abhishek-anand-logo.jpg",
  
  heroPillars: [
    "Full-Time Consultant – Wonderbloom Centre of Excellence",
    "Minimal Access & Robotic Surgery",
    "Neonatal Surgical Expertise"
  ]
};

export const AWARDS_LIST: AwardItem[] = [
  {
    id: "times-health-icon-2026",
    title: "TIMES HEALTH ICON AWARD Odisha 2026",
    year: "2026",
    organization: "The Times of India / Times Health Group",
    category: "Emerging Excellence in Pediatric Surgery",
    description:
      "Prestigious state-wide medical honor awarded on National Doctors' Day by The Times of India / Bennett & Coleman for distinguished pediatric surgical excellence, neonatal care, and clinical innovation.",
    badge: "State Medical Icon",
    highlight: true,
    image: "/images/dr-anand-award-ceremony.jpg",
    ceremonyImage: "/images/dr-anand-award-ceremony.jpg",
    newspaperImage: "/images/times-health-icons-newspaper.jpg",
    newspaperHeadline: "A Proud Tribute to the Pillars of Healthcare on National Doctors' Day",
    newspaperQuotes:
      "Children are not simply small adults. Early diagnosis and timely intervention can significantly improve outcomes while reducing long-term complications."
  },
  {
    id: "uvacon-2025",
    title: "Tejasvi Medal at UVACON 2025",
    year: "2025",
    organization: "UVACON (Urological Association Conference)",
    category: "Pediatric Urology & Reconstructive Excellence",
    description:
      "Awarded the coveted Tejasvi Medal in recognition of distinguished academic contribution and reconstructive technique in pediatric urological surgery.",
    badge: "Gold / Silver Medalist",
    highlight: true
  },
  {
    id: "iapscon-awards",
    title: "Awarded 2nd Prize in IAPSCON (2018 & 2021)",
    year: "2018 & 2021",
    organization: "Indian Association of Pediatric Surgeons (IAPS)",
    category: "National Pediatric Surgical Conference",
    description:
      "Two-time national prize winner at the premier annual scientific conference of the Indian Association of Pediatric Surgeons for clinical research presentations.",
    badge: "National 2-Time Awardee"
  },
  {
    id: "psawb-2020",
    title: "Awarded 2nd Prize in PSAWB Kolkata",
    year: "2020",
    organization: "Pediatric Surgeons Association of West Bengal (PSAWB)",
    category: "Pediatric Surgery Clinical Forum",
    description:
      "Awarded 2nd Prize for distinguished scientific research presentation during residency at Institute of Child Health, Kolkata.",
    badge: "State Scientific Prize"
  }
];

export const PRESS_FEATURES: PressFeature[] = [
  {
    id: "times-health-icon-feature",
    title: "Times Health Icons Odisha 2026 — 8th Edition",
    publication: "The Times of India",
    edition: "National Doctors' Day Special Edition",
    date: "July 1, 2026",
    badge: "Emerging Excellence in Pediatric Surgery",
    ceremonyImage: "/images/dr-anand-award-ceremony.jpg",
    fullNewspaperImage: "/images/times-health-icons-newspaper.jpg",
    headline: "A Proud Tribute to the Pillars of Healthcare on National Doctors' Day",
    summary:
      "The Times of India (Bennett & Coleman Ltd., Powered by Axis Bank, Driven by Empreo Skoda) officially honored Dr. Abhishek Anand among the state's distinguished medical icons in the Award-Winning Doctors roster for pioneering pediatric surgery in Odisha.",
    quote:
      "Children are not simply small adults. Many paediatric surgical conditions require specialised evaluation, dedicated surgical expertise, and age-appropriate perioperative care. Early diagnosis and timely intervention can significantly improve outcomes while reducing long-term complications.",
    breakthroughCases: [
      {
        condition: "Meckel's Diverticulitis with Chronic Abdominal Pain",
        procedure: "Laparoscopy-Assisted Resection & Intestinal Anastomosis",
        outcome:
          "Treated a child who suffered recurrent abdominal pain for 6 months without definitive diagnosis elsewhere. Performed precise keyhole resection; child resumed oral feeding early and was discharged in excellent health on postoperative day 5."
      },
      {
        condition: "Thoracoscopic Tracheoesophageal Fistula (TEF)",
        procedure: "Keyhole Video-Assisted Thoracoscopic Repair",
        outcome:
          "Delicate neonatal thoracic reconstruction performed without extensive thoracotomy, ensuring normal pulmonary development and minimal pain."
      },
      {
        condition: "Pioneering Robotic Pediatric Surgery",
        procedure: "Advanced Robotic-Assisted Surgical Training",
        outcome:
          "With Dr. Anand having completed formal robotic surgery training, introducing robotic-assisted pediatric surgery to provide precision surgical care for children in Odisha."
      }
    ]
  },
  {
    id: "wonderbloom-times-feature",
    title: "Advancing Pediatric Surgery & Urology in Odisha",
    publication: "The Times of India Special Feature",
    edition: "State Super-Speciality Healthcare Report",
    date: "July 2026",
    badge: "Centre of Excellence Showcase",
    ceremonyImage: "/images/dr-anand-award-ceremony.jpg",
    buildingImage: "/images/wonderbloom-hospital-building.jpg",
    fullNewspaperImage: "/images/wonderbloom-times-feature.jpg",
    headline: "Wonderbloom Superspeciality Hospital: Advancing Pediatric Surgery & Pediatric Urology in Odisha",
    summary:
      "Exclusive Times of India feature on the dedicated Department of Pediatric Surgery led by Dr. Abhishek Anand, Director. Showcasing state-of-the-art operation theatres, advanced NICU & PICU, reconstructive urology, and specialized pediatric laparoscopy.",
    quote:
      "Our mission at Wonderbloom is to provide quality paediatric surgical and paediatric urology services so that families no longer have to travel outside the state for advanced treatment.",
    breakthroughCases: [
      {
        condition: "Giant Pediatric Ovarian Tumours",
        procedure: "Organ-Preserving Complete Oncologic Resection",
        outcome: "Safely excised while safeguarding adjacent delicate anatomical structures and pediatric reproductive fertility."
      },
      {
        condition: "Hirschsprung Disease & Neonatal Jejunal Atresia",
        procedure: "Endorectal Pull-Through & Precision Intestinal Reconnection",
        outcome: "Early restoration of regular bowel motility, feeding tolerance, and pediatric digestive health."
      },
      {
        condition: "Complex Pediatric Hand Trauma",
        procedure: "Micro-Surgical Reconstructive Repair",
        outcome: "Restored full functional mobility, delicate tendon gliding, and cosmetic tissue alignment."
      }
    ],
    helpline: "9124 616 272 / 73 / 74 • 7377 609 946",
    address: "457/11713, Nandankanan Road, Shree Vihar, Chandrasekharpur, Bhubaneswar"
  }
];

export const HIGHLIGHT_STATS: HighlightStat[] = [
  {
    value: "Full-Time",
    label: "Wonderbloom Centre of Excellence",
    detail: "Primary full-time clinical consultant appointment leading pediatric surgical care."
  },
  {
    value: "Times Icon",
    suffix: "2026",
    label: "Emerging Excellence Award",
    detail: "Times Health Icon Award Odisha 2026 for pediatric surgical excellence."
  },
  {
    value: "4+",
    suffix: "Years",
    label: "Postgraduate Teaching",
    detail: "Dedicated training and academic mentorship of postgraduate surgical trainees."
  },
  {
    value: "JIAPS 2024",
    label: "Major Research Publication",
    detail: "Published original research on Switch Operation for cloacal defect reconstruction."
  }
];

export const PROFESSIONAL_MEMBERSHIPS: MembershipItem[] = [
  {
    id: "asicon",
    abbreviation: "ASICON",
    displayName: "ASICON",
    organizationCategory: "Surgical Academic Assembly",
    verificationStatus: "Active Professional Member",
    documentStatus: "Verification Document Pending Upload",
    description:
      "Professional affiliation with ASICON, participating in surgical discourse and continuing medical education."
  },
  {
    id: "iapscon",
    abbreviation: "IAPSCON",
    displayName: "IAPSCON",
    organizationCategory: "Pediatric Surgical Conference & Society",
    verificationStatus: "Active Professional Member",
    documentStatus: "Verification Document Pending Upload",
    description:
      "Active professional member and two-time national scientific prize recipient (2018 & 2021) at IAPSCON."
  },
  {
    id: "asi",
    abbreviation: "ASI",
    displayName: "ASI",
    organizationCategory: "Professional Surgical Association",
    verificationStatus: "Active Professional Member",
    documentStatus: "Verification Document Pending Upload",
    description:
      "Professional membership contributing to surgical standards and specialized peer collaboration."
  }
];

export const FUTURE_DOCUMENTS_REGISTRY: VerifiedDocument[] = [
  {
    id: "doc-drnb",
    documentTitle: "DrNB Degree Certificate in Pediatric Surgery",
    documentCategory: "Educational Qualifications",
    issuingInstitution: "Institute of Child Health, Kolkata / National Board of Examinations",
    issueDate: "2022",
    verificationStatus: "Verified",
    publicVisibility: false,
    notes: "Super-specialty qualification in Pediatric Surgery."
  },
  {
    id: "doc-fmas",
    documentTitle: "Fellowship Certificate in Minimal Access Surgery (FMAS)",
    documentCategory: "Fellowships & Certifications",
    issuingInstitution: "Accredited Minimal Access Surgical Body",
    verificationStatus: "Verified",
    publicVisibility: false,
    notes: "Fellowship covering advanced laparoscopic & thoracoscopic techniques."
  },
  {
    id: "doc-mbbs",
    documentTitle: "MBBS Degree Certificate",
    documentCategory: "Educational Qualifications",
    issuingInstitution: "JJM Medical College, Davangere",
    issueDate: "2013",
    verificationStatus: "Verified",
    publicVisibility: false,
    notes: "Foundational medical degree."
  },
  {
    id: "doc-jiaps-2024",
    documentTitle: "Research Publication: Reconstruction of Cloacal Defect: Switch Operation",
    documentCategory: "Research Publications",
    issuingInstitution: "Journal of Indian Association of Pediatric Surgeons (JIAPS)",
    issueDate: "2024-07",
    verificationStatus: "Verified",
    publicVisibility: true,
    notes: "Vol. 29, Issue 4, July–August 2024."
  },
  {
    id: "doc-mem-asicon",
    documentTitle: "ASICON Professional Membership Certificate",
    documentCategory: "Professional Memberships",
    issuingInstitution: "ASICON",
    verificationStatus: "Pending Document Upload",
    publicVisibility: false,
    notes: "Supporting document pending doctor upload."
  },
  {
    id: "doc-mem-iapscon",
    documentTitle: "IAPSCON Professional Membership Certificate",
    documentCategory: "Professional Memberships",
    issuingInstitution: "IAPSCON",
    verificationStatus: "Pending Document Upload",
    publicVisibility: false,
    notes: "Supporting document pending doctor upload."
  },
  {
    id: "doc-mem-asi",
    documentTitle: "ASI Professional Membership Certificate",
    documentCategory: "Professional Memberships",
    issuingInstitution: "ASI",
    verificationStatus: "Pending Document Upload",
    publicVisibility: false,
    notes: "Supporting document pending doctor upload."
  }
];

export const EDUCATION_LIST: QualificationItem[] = [
  {
    degree: "DrNB (Pediatric Surgery)",
    institution: "Institute of Child Health, Kolkata",
    year: "2022",
    details:
      "Comprehensive super-specialty residency in pediatric general, neonatal, urological, and reconstructive surgery at eastern India's pioneer child health institute.",
    badge: "Super-Specialty"
  },
  {
    degree: "FMAS",
    institution: "Fellowship in Minimal Access Surgery",
    details:
      "Formal fellowship training covering advanced laparoscopic, endourological, and thoracoscopic surgical interventions in pediatric patients.",
    badge: "Fellowship"
  },
  {
    degree: "MBBS",
    institution: "JJM Medical College, Davangere",
    year: "2013",
    details:
      "Foundational medical degree accredited by the Medical Council of India with distinguished rotations across general surgery and pediatrics.",
    badge: "Medical Graduate"
  }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    role: "Full-Time Consultant",
    institution: "Wonderbloom Pediatric Surgical Centre of Excellence",
    period: "Current Primary Appointment",
    location: "Bhubaneswar, Odisha",
    description:
      "Primary full-time clinical consultant appointment leading comprehensive pediatric surgical, reconstructive urology, and neonatal care.",
    isCurrent: true
  },
  {
    role: "Director & COO | Consultant Pediatric Surgeon",
    institution: "New Life Clinic",
    period: "Present Practice",
    location: "Soubhagya Nagar, Baramunda, Bhubaneswar",
    description:
      "Executive clinical stewardship and regular daily outpatient pediatric surgical clinics, second opinions, and pre-operative evaluations.",
    isCurrent: true
  },
  {
    role: "Consultant Pediatric Surgeon",
    institution: "Padmini Care Hospital",
    period: "December 2025 – Present",
    location: "Bhubaneswar, Odisha",
    description:
      "Leading comprehensive pediatric surgical and urological outpatient and operative services.",
    isCurrent: true
  },
  {
    role: "Assistant Professor",
    institution: "IMS & SUM Hospital 2",
    period: "Past Faculty Appointment",
    location: "Bhubaneswar, Odisha",
    description:
      "Academic instruction, clinical teaching of postgraduate trainees, and complex inpatient pediatric surgical care.",
    isCurrent: false
  },
  {
    role: "Associate Consultant, Pediatric Surgery",
    institution: "Neotia Getwel Multispeciality Hospital",
    period: "Past Associate Consultant",
    location: "Siliguri, West Bengal",
    description:
      "Delivered advanced neonatal and pediatric surgical care across the North Bengal and eastern Himalayan corridor.",
    isCurrent: false
  },
  {
    role: "Consultant Emergency Surgeon",
    institution: "Institute of Child Health",
    period: "Post-Residency Service",
    location: "Kolkata, West Bengal",
    description:
      "Managed emergency pediatric surgical referrals, acute abdomens, pediatric trauma, and critical neonatal emergencies.",
    isCurrent: false
  },
  {
    role: "DrNB Resident, Pediatric Surgery",
    institution: "Institute of Child Health",
    period: "2017 – 2022",
    location: "Kolkata, West Bengal",
    description:
      "Intensive 5-year super-specialty training encompassing high-volume neonatal intensive care, reconstructive urology, and pediatric laparoscopy.",
    isCurrent: false
  },
  {
    role: "Junior Resident, Urology & Renal Transplant",
    institution: "BLK Super Speciality Hospital",
    period: "Past Clinical Residency",
    location: "New Delhi",
    description:
      "Specialized clinical rotation in adult and reconstructive urology, endourology, and renal transplantation care.",
    isCurrent: false
  },
  {
    role: "Junior Resident, General Surgery",
    institution: "Deen Dayal Upadhyay Hospital",
    period: "Past Clinical Residency",
    location: "New Delhi",
    description:
      "Rigorous frontline general surgical emergency, acute trauma resuscitation, and perioperative surgical management.",
    isCurrent: false
  }
];

export const LEADERSHIP_ROLES: {
  primaryClinical: LeadershipItem[];
  executive: LeadershipItem[];
  clinical: LeadershipItem[];
  visiting: string[];
} = {
  primaryClinical: [
    {
      title: "FULL-TIME CONSULTANT",
      organization: "Wonderbloom Pediatric Surgical Centre of Excellence",
      type: "clinical",
      description: "Primary full-time clinical consultant appointment leading specialized pediatric surgical and urological care.",
      badge: "Primary Current Designation"
    }
  ],
  executive: [
    {
      title: "DIRECTOR & COO",
      organization: "Wonderbloom Mother & Child Superspeciality Hospital",
      type: "executive",
      description: "Operational leadership and clinical quality stewardship for specialized mother and child care.",
      badge: "Hospital Leadership"
    },
    {
      title: "DIRECTOR & COO",
      organization: "Neovitaz Curae Pvt. Ltd.",
      type: "executive",
      description: "Healthcare enterprise leadership, clinical governance, and strategic medical direction.",
      badge: "Enterprise Leadership"
    },
    {
      title: "DIRECTOR & COO",
      organization: "New Life Clinic",
      type: "executive",
      address: "Plot no-1117/3632, behind Mia By Tanishq, Soubhagya Nagar, Baramunda, Bhubaneswar, Odisha 751030",
      description: "Executive stewardship and personal outpatient clinical consultation desk.",
      badge: "Flagship Clinic Practice"
    }
  ],
  clinical: [
    {
      title: "CONSULTANT PEDIATRIC SURGEON",
      organization: "Padmini Care Hospital",
      type: "clinical",
      description: "Tertiary hospital appointment for pediatric surgery and pediatric urology operations.",
      badge: "Tertiary Surgical Operating Hospital"
    }
  ],
  visiting: [
    "Care Hospital",
    "Kalinga Hospital",
    "Ankura Hospital",
    "Utkal Hospital",
    "Sadguru Hospital"
  ]
};

export const CLINICAL_EXPERTISE: ExpertiseItem[] = [
  {
    id: "pediatric-urology",
    title: "Pediatric Urology",
    shortDesc:
      "Comprehensive evaluation and surgical reconstruction of congenital urinary tract disorders and hydronephrosis.",
    fullDesc:
      "Management of pelvi-ureteric junction obstruction (PUJO), vesicoureteral reflux (VUR), posterior urethral valves (PUV), duplex kidneys, and neurogenic bladder disorders. Emphasizes renal preservation and normal childhood urinary development.",
    keyAreas: ["Pelvi-Ureteric Junction Obstruction (PUJO)", "Antenatal Hydronephrosis", "Vesicoureteral Reflux (VUR)", "Posterior Urethral Valves (PUV)"],
    icon: "Activity"
  },
  {
    id: "neonatal-surgery",
    title: "Neonatal Surgery",
    shortDesc:
      "Delicate, high-precision surgical intervention for newborns and premature infants born with congenital structural anomalies.",
    fullDesc:
      "Specialized surgical care for critical conditions diagnosed antenatally or at birth, working closely alongside tertiary neonatal intensive care units (NICUs). Focuses on anatomical repair with gentle tissue handling.",
    keyAreas: ["Congenital Diaphragmatic Hernia (CDH)", "Intestinal Atresia & Malrotation", "Tracheoesophageal Fistula (TEF)", "Abdominal Wall Defects (Gastroschisis / Omphalocele)"],
    icon: "Baby"
  },
  {
    id: "pediatric-laparoscopy",
    title: "Pediatric Laparoscopy & Robotic Surgery",
    shortDesc:
      "Advanced keyhole surgical techniques providing smaller incisions, reduced post-operative discomfort, and rapid recovery.",
    fullDesc:
      "Minimal access pediatric surgery utilizing miniature instruments and robotic assistance principles specifically engineered for infants and children to perform diagnostic and therapeutic abdominal procedures, including appendectomy, orchidopexy, and reconstructive pyeloplasty.",
    keyAreas: ["Laparoscopic Orchidopexy", "Pediatric Laparoscopic Appendectomy", "Laparoscopic Pyeloplasty", "Robotic-Assisted Pediatric Surgery Concepts"],
    icon: "Eye"
  },
  {
    id: "thoracoscopy",
    title: "Thoracoscopy",
    shortDesc:
      "Minimally invasive video-assisted thoracic surgery (VATS) for diseases of the pediatric lung, pleura, and mediastinum.",
    fullDesc:
      "Keyhole access to the chest cavity allowing effective treatment of pediatric empyema, lung biopsies, excision of congenital lung lesions, and mediastinal cysts with minimal impact on chest wall development.",
    keyAreas: ["Empyema Decortication", "Congenital Lung Lesions (CPAM)", "Mediastinal Cysts", "Pleural & Lung Biopsies"],
    icon: "Wind"
  },
  {
    id: "hypospadias-repair",
    title: "Hypospadias Repair",
    shortDesc:
      "Meticulous single-stage and staged reconstructive surgery to restore natural urethral anatomy and genital function.",
    fullDesc:
      "Specialized reconstructive technique addressing both distal and complex proximal hypospadias, prioritizing reliable functional urination, straight penile alignment (orthoplasty), and natural cosmetic outcomes.",
    keyAreas: ["Distal & Mid-shaft Hypospadias", "Proximal / Penoscrotal Hypospadias", "Chordee Correction", "Re-operative Hypospadias Reconstructions"],
    icon: "Sparkles"
  },
  {
    id: "pediatric-stone-disease",
    title: "Pediatric Stone Disease",
    shortDesc:
      "Endourological and minimally invasive management of urinary calculi in pediatric and adolescent patients.",
    fullDesc:
      "Carefully calibrated endourological stone retrieval using pediatric ureteroscopes, laser lithotripsy, and percutaneous techniques combined with comprehensive metabolic workup to identify underlying causative factors.",
    keyAreas: ["Pediatric Ureteroscopy (URS)", "Laser Lithotripsy", "Bladder Calculi Management", "Metabolic Stone Evaluation"],
    icon: "ShieldAlert"
  },
  {
    id: "hirschsprung-disease",
    title: "Hirschsprung Disease",
    shortDesc:
      "Definitive evaluation and endorectal pull-through procedures for congenital bowel motility disorders.",
    fullDesc:
      "Structured diagnostic pathway including bedside rectal biopsies followed by tailored surgical pull-through (transanal endorectal or laparoscopy-assisted) to re-establish regular bowel continuity and continence.",
    keyAreas: ["Transanal Endorectal Pull-Through (TERPT)", "Laparoscopy-Assisted Pull-Through", "Suction Rectal Biopsy Diagnostics", "Post-operative Bowel Management"],
    icon: "Layers"
  },
  {
    id: "anorectal-malformations",
    title: "Anorectal Malformations & Cloacal Anomalies",
    shortDesc:
      "Careful multi-stage surgical correction for congenital imperforate anus and complex cloacal malformations with long-term follow-up.",
    fullDesc:
      "Detailed anatomical repair including posterior sagittal anorectoplasty (PSARP), the innovative Switch Operation approach, and laparoscopically assisted reconstructions for high, intermediate, low, and cloacal malformations.",
    keyAreas: ["Switch Operation for Cloacal Defects", "Posterior Sagittal Anorectoplasty (PSARP)", "Laparoscopic Assisted Anorectoplasty", "Long-Term Continence Support"],
    icon: "Compass"
  },
  {
    id: "pediatric-trauma-surgery",
    title: "Pediatric Trauma Surgery",
    shortDesc:
      "Immediate surgical stabilization and organ-preserving management for blunt and penetrating pediatric injuries.",
    fullDesc:
      "Dedicated management of pediatric blunt abdominal trauma (liver, spleen, and kidney lacerations) with an emphasis on non-operative organ preservation whenever safe, and prompt surgical intervention when indicated.",
    keyAreas: ["Blunt Abdominal Injury Evaluation", "Splenic & Hepatic Trauma Preservation", "Pediatric Thoracic Trauma", "Pediatric Emergency Resuscitation"],
    icon: "HeartHandshake"
  },
  {
    id: "pediatric-oncology-surgery",
    title: "Pediatric Oncology Surgery",
    shortDesc:
      "Tumor-board coordinated surgical resection and diagnostic biopsies for childhood solid tumors.",
    fullDesc:
      "Safe, oncologically radical resections of pediatric solid neoplasms including Wilms tumor, neuroblastoma, germ cell tumors, and soft tissue sarcomas, integrated tightly with pediatric medical oncologists.",
    keyAreas: ["Wilms Tumor (Nephroblastoma) Resection", "Neuroblastoma Evaluation & Surgery", "Sacrococcygeal & Abdominal Teratomas", "Diagnostic Biopsies & Chemoport Placements"],
    icon: "Stethoscope"
  }
];

export const ACADEMIC_CONTRIBUTIONS: PublicationItem[] = [
  {
    id: "jiaps-cloacal-switch",
    title: "Reconstruction of Cloacal Defect: Switch Operation – A New Approach",
    journal: "Journal of Indian Association of Pediatric Surgeons (JIAPS)",
    volume: "29",
    issue: "4",
    period: "July–August 2024",
    authors: "A. Basu, K. Basu, K. Bhaumik, J. Basu, and A. Anand",
    forum: "Journal of Indian Association of Pediatric Surgeons (JIAPS) • Vol 29, Issue 4",
    type: "Verified Journal Publication",
    topic: "Cloacal Defect Reconstruction",
    summary:
      "Peer-reviewed landmark scientific publication presenting the innovative Switch Operation approach for the surgical reconstruction of complex cloacal defects in pediatric patients.",
    isMajorContribution: true
  },
  {
    id: "choledochal-cyst-pub",
    title: "Management of Choledochal Cyst in Pediatric Patients: Clinical Insights & Surgical Technique",
    forum: "International Indexed Pediatric Surgical Journal",
    type: "International Journal",
    topic: "Choledochal Cyst Management",
    summary:
      "Peer-reviewed study discussing diagnostic nuances, cyst excision, and hepatico-jejunostomy reconstruction in children."
  },
  {
    id: "articles-collection",
    title: "Published 5 Scientific Articles in Indexed National & International Journals",
    forum: "National & International Pediatric Surgery Journals",
    type: "International Journal",
    topic: "Peer-Reviewed Publications",
    summary:
      "Authored and co-authored 5 original research articles and clinical series in reputed indexed medical journals advancing pediatric surgical technique."
  },
  {
    id: "iapscon-presentation",
    title: "Clinical Innovations & Outpatient Follow-up in Pediatric Surgery",
    forum: "Annual Conference of the Indian Association of Pediatric Surgeons (IAPSCON)",
    type: "National Conference Presentation",
    conferenceName: "IAPSCON",
    topic: "Pediatric Surgical Practice",
    summary:
      "Two-time 2nd Prize Winner (2018 & 2021) at the premier national forum for pediatric surgeons in India."
  },
  {
    id: "pesicon-presentation",
    title: "Minimally Invasive Approaches in Pediatric Laparoscopy: Institutional Experience",
    forum: "Pediatric Endoscopic Surgeons of India Conference (PESICON)",
    type: "National Conference Presentation",
    conferenceName: "PESICON",
    topic: "Pediatric Laparoscopy & Thoracoscopy",
    summary:
      "Showcased outcomes, safety protocols, and technical lessons from minimally invasive endoscopic pediatric surgical procedures."
  },
  {
    id: "urology-conference",
    title: "Reconstructive Nuances in Congenital Pediatric Urology",
    forum: "UVACON / National Urology Academic Forum",
    type: "National Conference Presentation",
    conferenceName: "UVACON 2025",
    topic: "Pediatric Urology & Reconstructive Surgery",
    summary:
      "Awarded the prestigious Tejasvi Medal at UVACON 2025 for scientific paper on reconstructive pediatric urology."
  }
];

export const HOSPITAL_ASSOCIATIONS: HospitalItem[] = [
  {
    id: "wonderbloom-coe",
    name: "Wonderbloom Pediatric Surgical Centre of Excellence",
    role: "Full-Time Consultant",
    type: "Centre of Excellence",
    badge: "Primary Full-Time Consultant Appointment",
    isCentreOfExcellence: true,
    address: "457/11713, Nandankanan Road, Shree Vihar, Chandrasekharpur, Bhubaneswar, Odisha",
    image: "/images/wonderbloom-hospital-building.jpg",
    description:
      "Primary full-time clinical consultant appointment leading advanced pediatric surgical, neonatal, and urological surgical care. Featured in The Times of India for cutting-edge laparoscopic and robotic-ready pediatric surgical facilities, modern operation theatres, and dedicated NICU & PICU."
  },
  {
    id: "new-life-clinic",
    name: "New Life Clinic",
    role: "Director & COO | Consultant Pediatric Surgeon",
    type: "Flagship Clinic",
    badge: "Flagship OPD Consultation Center",
    isFlagship: true,
    address: "Plot no-1117/3632, behind Mia By Tanishq, Soubhagya Nagar, Baramunda, Bhubaneswar, Odisha 751030",
    image: "/images/new-life-clinic.jpg",
    description:
      "Flagship clinic where Dr. Abhishek Anand is Director & COO and personally consults patients. Comprehensive outpatient pediatric surgical evaluations, antenatal counseling, and follow-ups."
  },
  {
    id: "padmini-care",
    name: "Padmini Care Hospital",
    role: "Consultant Pediatric Surgeon",
    type: "Primary Practice",
    badge: "Primary Surgical Operating Hospital",
    description:
      "Comprehensive outpatient pediatric surgery and pediatric urology clinics, pre-operative planning, and inpatient surgical operations."
  },
  {
    id: "care-hospital",
    name: "Care Hospital",
    role: "Visiting Consultant",
    type: "Visiting Consultant",
    badge: "Visiting Consultant",
    description:
      "Pediatric surgical consultations, tertiary inpatient admissions, and multi-specialty operative procedures by appointment."
  },
  {
    id: "kalinga-hospital",
    name: "Kalinga Hospital",
    role: "Visiting Consultant",
    type: "Visiting Consultant",
    badge: "Visiting Consultant",
    description:
      "Advanced pediatric surgery and reconstructive urology consultations and elective surgeries."
  },
  {
    id: "ankura-hospital",
    name: "Ankura Hospital",
    role: "Visiting Consultant",
    type: "Visiting Consultant",
    badge: "Visiting Consultant",
    description:
      "Mother & child dedicated super-specialty consultations for neonatal and pediatric surgical conditions."
  },
  {
    id: "utkal-hospital",
    name: "Utkal Hospital",
    role: "Visiting Consultant",
    type: "Visiting Consultant",
    badge: "Visiting Consultant",
    description:
      "Visiting consultant for complex pediatric surgical care, pediatric trauma, and multidisciplinary surgical reviews."
  },
  {
    id: "sadguru-hospital",
    name: "Sadguru Hospital",
    role: "Visiting Consultant",
    type: "Visiting Consultant",
    badge: "Visiting Consultant",
    description:
      "Specialist pediatric surgical consultations and scheduled pediatric surgical interventions."
  }
];

export const CONTACT_DETAILS = {
  phone: "+91 9777618555",
  formattedPhone: "+91 97776 18555",
  email: "Pandeyabhi13@live.com",
  primaryCentre: "Wonderbloom Pediatric Surgical Centre of Excellence (Full-Time Consultant)",
  clinicAddress: "Plot no-1117/3632, behind Mia By Tanishq, Soubhagya Nagar, Baramunda, Bhubaneswar, Odisha 751030",
  clinicLandmark: "Behind Mia By Tanishq, Soubhagya Nagar, Baramunda",
  emergencyNote:
    "For urgent or acute emergencies, please immediately visit the nearest hospital emergency department. Online enquiry submissions do not replace emergency medical triage and do not constitute confirmed appointment booking.",
  disclaimerNote:
    "Submitting an enquiry allows our clinical coordinator to connect with you to schedule a consultation at Wonderbloom Pediatric Surgical Centre of Excellence, New Life Clinic, or associated partner hospitals. Submission of this form does not confirm an immediate appointment."
};
