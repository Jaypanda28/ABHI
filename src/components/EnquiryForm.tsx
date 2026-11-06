"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { HOSPITAL_ASSOCIATIONS } from "@/data/doctorData";
import { CheckCircle2, AlertCircle, Loader2, Calendar, Phone, Mail, User, Building, FileText, Shield } from "lucide-react";

const enquiryFormSchema = z.object({
  parentName: z
    .string()
    .min(2, "Please enter the parent/guardian name")
    .max(100, "Name is too long"),
  childName: z.string().max(100).optional(),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^(\+91[\-\s]?)?[6-9]\d{9}$/, "Please enter a valid Indian mobile number"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  preferredHospital: z
    .string()
    .min(1, "Please choose your preferred hospital location"),
  preferredDate: z
    .string()
    .min(1, "Please select a preferred date for consultation"),
  enquiry: z
    .string()
    .min(5, "Please provide a brief note on the condition or symptoms")
    .max(1000, "Enquiry is too long"),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "Consent to communicate regarding your appointment is required"
  })
});

type EnquiryFormData = z.infer<typeof enquiryFormSchema>;

interface EnquiryFormProps {
  defaultHospital?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export default function EnquiryForm({ defaultHospital, onSuccess, compact = false }: EnquiryFormProps) {
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [todayStr, setTodayStr] = useState<string>("");

  React.useEffect(() => {
    setTodayStr(new Date().toISOString().split("T")[0]);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      parentName: "",
      childName: "",
      phone: "",
      email: "",
      preferredHospital: defaultHospital || "",
      preferredDate: "",
      enquiry: "",
      privacyConsent: false
    }
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      const response = await fetch("/api/appointment-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to send consultation request. Please try again or call directly.");
      }

      setSubmitSuccess(
        `Thank you! Your consultation enquiry has been registered (Ref: ${result.referenceId || "Confirmed"}). Our clinical coordinator will reach out promptly to finalize the time slot.`
      );
      reset();
      if (onSuccess) {
        setTimeout(onSuccess, 3000);
      }
    } catch (err: unknown) {
      const error = err as Error;
      setSubmitError(error.message || "Failed to submit enquiry. Please call +91 97776 18555 for immediate assistance.");
    }
  };

  return (
    <div className="w-full">
      {submitSuccess ? (
        <div className="p-6 sm:p-8 rounded-2xl bg-[#E8F6F3] border border-[#65B5AA]/30 text-center animate-fade-in">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#65B5AA]/15 flex items-center justify-center text-[#65B5AA]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-[#34495E] mb-2 font-editorial">
            Enquiry Received
          </h3>
          <p className="text-sm text-[#64748B] max-w-md mx-auto leading-relaxed mb-6">
            {submitSuccess}
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#34495E] bg-white px-4 py-2 rounded-full border border-[#E3EBF1] shadow-2xs">
            <span>Direct Call Available:</span>
            <a href="tel:+919777618555" className="text-[#397FA5] hover:underline font-bold">
              +91 97776 18555
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          {submitError && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
              <div>
                <p className="font-semibold">Unable to submit enquiry</p>
                <p>{submitError}</p>
              </div>
            </div>
          )}

          <div className={`grid grid-cols-1 ${compact ? "gap-4" : "sm:grid-cols-2 gap-4"}`}>
            {/* Parent / Guardian Name */}
            <div>
              <label htmlFor="parentName" className="block text-xs font-semibold uppercase tracking-wider text-[#34495E] mb-1.5">
                Parent / Guardian Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8493A0]">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="parentName"
                  type="text"
                  placeholder="e.g. Ramesh Patnaik"
                  {...register("parentName")}
                  className={`w-full pl-10 pr-4 py-2.5 bg-white text-sm text-[#34495E] border rounded-xl shadow-2xs transition-all placeholder:text-[#8493A0] focus:bg-white ${
                    errors.parentName
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-[#E3EBF1] focus:border-[#397FA5] focus:ring-2 focus:ring-[#397FA5]/15"
                  }`}
                />
              </div>
              {errors.parentName && (
                <p className="mt-1 text-xs text-red-600">{errors.parentName.message}</p>
              )}
            </div>

            {/* Child's Name (Optional) */}
            <div>
              <label htmlFor="childName" className="block text-xs font-semibold uppercase tracking-wider text-[#34495E] mb-1.5">
                Child's Name <span className="text-[#8493A0] font-normal lowercase">(optional)</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8493A0]">
                  <User className="w-4 h-4 opacity-60" />
                </div>
                <input
                  id="childName"
                  type="text"
                  placeholder="e.g. Master Aarav (Age 3)"
                  {...register("childName")}
                  className="w-full pl-10 pr-4 py-2.5 bg-white text-sm text-[#34495E] border border-[#E3EBF1] rounded-xl shadow-2xs transition-all placeholder:text-[#8493A0] focus:border-[#397FA5] focus:ring-2 focus:ring-[#397FA5]/15"
                />
              </div>
            </div>
          </div>

          <div className={`grid grid-cols-1 ${compact ? "gap-4" : "sm:grid-cols-2 gap-4"}`}>
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#34495E] mb-1.5">
                Contact Phone <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8493A0]">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  {...register("phone")}
                  className={`w-full pl-10 pr-4 py-2.5 bg-white text-sm text-[#34495E] border rounded-xl shadow-2xs transition-all placeholder:text-[#8493A0] ${
                    errors.phone
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-[#E3EBF1] focus:border-[#397FA5] focus:ring-2 focus:ring-[#397FA5]/15"
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
              )}
            </div>

            {/* Email (Optional) */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#34495E] mb-1.5">
                Email Address <span className="text-[#8493A0] font-normal lowercase">(optional)</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8493A0]">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="parent@example.com"
                  {...register("email")}
                  className={`w-full pl-10 pr-4 py-2.5 bg-white text-sm text-[#34495E] border rounded-xl shadow-2xs transition-all placeholder:text-[#8493A0] ${
                    errors.email
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-[#E3EBF1] focus:border-[#397FA5] focus:ring-2 focus:ring-[#397FA5]/15"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className={`grid grid-cols-1 ${compact ? "gap-4" : "sm:grid-cols-2 gap-4"}`}>
            {/* Preferred Hospital */}
            <div>
              <label htmlFor="preferredHospital" className="block text-xs font-semibold uppercase tracking-wider text-[#34495E] mb-1.5">
                Preferred Hospital <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8493A0]">
                  <Building className="w-4 h-4" />
                </div>
                <select
                  id="preferredHospital"
                  {...register("preferredHospital")}
                  className={`w-full pl-10 pr-8 py-2.5 bg-white text-sm text-[#34495E] border rounded-xl shadow-2xs transition-all appearance-none ${
                    errors.preferredHospital
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-[#E3EBF1] focus:border-[#397FA5] focus:ring-2 focus:ring-[#397FA5]/15"
                  }`}
                >
                  <option value="">Select consultation location (Clinic / Hospital)...</option>
                  {HOSPITAL_ASSOCIATIONS.map((h) => (
                    <option key={h.id} value={h.name}>
                      {h.name} ({h.type === "Flagship Clinic" ? "Flagship Practice • Director & COO" : h.type === "Primary Practice" ? "Primary Operating Hospital" : "Visiting Consultant"})
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[#8493A0]">
                  <span className="text-xs">▼</span>
                </div>
              </div>
              {errors.preferredHospital && (
                <p className="mt-1 text-xs text-red-600">{errors.preferredHospital.message}</p>
              )}
            </div>

            {/* Preferred Date */}
            <div>
              <label htmlFor="preferredDate" className="block text-xs font-semibold uppercase tracking-wider text-[#34495E] mb-1.5">
                Preferred Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8493A0]">
                  <Calendar className="w-4 h-4" />
                </div>
                <input
                  id="preferredDate"
                  type="date"
                  min={todayStr}
                  {...register("preferredDate")}
                  className={`w-full pl-10 pr-4 py-2.5 bg-white text-sm text-[#34495E] border rounded-xl shadow-2xs transition-all ${
                    errors.preferredDate
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-[#E3EBF1] focus:border-[#397FA5] focus:ring-2 focus:ring-[#397FA5]/15"
                  }`}
                />
              </div>
              {errors.preferredDate && (
                <p className="mt-1 text-xs text-red-600">{errors.preferredDate.message}</p>
              )}
            </div>
          </div>

          {/* Brief Enquiry */}
          <div>
            <label htmlFor="enquiry" className="block text-xs font-semibold uppercase tracking-wider text-[#34495E] mb-1.5">
              Brief Description / Medical Reason <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3.5 pointer-events-none text-[#8493A0]">
                <FileText className="w-4 h-4" />
              </div>
              <textarea
                id="enquiry"
                rows={compact ? 3 : 4}
                placeholder="Briefly describe the condition (e.g. hernia evaluation, recurrent UTI, hydronephrosis second opinion, post-operative review)..."
                {...register("enquiry")}
                className={`w-full pl-10 pr-4 py-2.5 bg-white text-sm text-[#34495E] border rounded-xl shadow-2xs transition-all placeholder:text-[#8493A0] ${
                  errors.enquiry
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-[#E3EBF1] focus:border-[#397FA5] focus:ring-2 focus:ring-[#397FA5]/15"
                }`}
              />
            </div>
            {errors.enquiry && (
              <p className="mt-1 text-xs text-red-600">{errors.enquiry.message}</p>
            )}
          </div>

          {/* Privacy Consent */}
          <div className="pt-1">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                {...register("privacyConsent")}
                className="mt-1 w-4 h-4 text-[#397FA5] border-[#E3EBF1] rounded focus:ring-[#397FA5]"
              />
              <span className="text-xs text-[#64748B] leading-relaxed">
                I understand that this enquiry allows Dr. Abhishek Anand's clinical coordination team to contact me regarding appointment scheduling. I agree to the processing of contact information for this purpose.
              </span>
            </label>
            {errors.privacyConsent && (
              <p className="mt-1 text-xs text-red-600">{errors.privacyConsent.message}</p>
            )}
          </div>

          {/* Emergency Disclaimer Alert Box */}
          <div className="p-3.5 bg-[#FFF9F0] rounded-xl border border-[#C7AD7A]/30 text-xs text-[#64748B] leading-relaxed flex items-start gap-2.5">
            <Shield className="w-4 h-4 text-[#C7AD7A] flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#34495E] font-semibold">Important Notice: </strong>
              For acute emergencies, please contact your nearest hospital emergency department immediately. Submission of this form expresses interest and does not constitute a confirmed appointment until scheduled by our coordination desk.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl bg-[#397FA5] hover:bg-[#286B91] text-white font-semibold text-sm shadow-[0_4px_14px_rgba(57,127,165,0.25)] hover:shadow-[0_6px_20px_rgba(57,127,165,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Transmitting Enquiry...</span>
              </>
            ) : (
              <span>Request Consultation Scheduling</span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
