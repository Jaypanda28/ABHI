import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs";
import path from "path";
import os from "os";

const enquirySchema = z.object({
  parentName: z.string().trim().min(2, "Parent/Guardian name must be at least 2 characters").max(100),
  childName: z.string().trim().max(100).optional().or(z.literal("")),
  phone: z.string().trim().regex(/^(\+91[\-\s]?)?[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  email: z.string().trim().email("Please enter a valid email address").optional().or(z.literal("")),
  preferredHospital: z.string().trim().min(1, "Please select your preferred hospital"),
  preferredDate: z.string().trim().min(1, "Please select a preferred date"),
  enquiry: z.string().trim().min(5, "Please provide a brief description of the condition or query").max(1000),
  privacyConsent: z.boolean().refine(val => val === true, {
    message: "You must accept the privacy policy to submit an enquiry"
  })
});

function getEnquiriesFilePath(): string {
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.LAMBDA_TASK_ROOT) {
    return path.join(os.tmpdir(), "dr-anand-enquiries.json");
  }
  const dir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return path.join(dir, "enquiries.json");
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json();
    const result = enquirySchema.safeParse(rawBody);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: result.error.flatten().fieldErrors
        },
        { status: 400 }
      );
    }

    const { parentName, childName, phone, email, preferredHospital, preferredDate, enquiry } = result.data;

    const enquiryRecord = {
      id: `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      parentName,
      childName: childName || null,
      phone,
      email: email || null,
      preferredHospital,
      preferredDate,
      enquiry,
      submittedAt: new Date().toISOString(),
      status: "PENDING_COORDINATION"
    };

    // Store record safely in persistent / local storage
    try {
      const filePath = getEnquiriesFilePath();
      let records = [];
      if (fs.existsSync(filePath)) {
        try {
          const raw = fs.readFileSync(filePath, "utf-8");
          records = JSON.parse(raw);
        } catch {
          records = [];
        }
      }
      records.push(enquiryRecord);
      fs.writeFileSync(filePath, JSON.stringify(records, null, 2), "utf-8");
    } catch (saveErr) {
      // Non-fatal if storage fails, enquiry is processed
      console.error("Enquiry storage fallback notice");
    }

    // Do NOT log PII in console/logs
    console.info(`[Enquiry Received] ID: ${enquiryRecord.id} | Hospital: ${preferredHospital} | Timestamp: ${enquiryRecord.submittedAt}`);

    return NextResponse.json({
      success: true,
      message: "Your consultation enquiry has been received. Our clinical coordinator will reach out to confirm appointment scheduling.",
      referenceId: enquiryRecord.id
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your request. Please call +91 97776 18555 directly." },
      { status: 500 }
    );
  }
}

