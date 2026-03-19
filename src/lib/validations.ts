import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

const registerFieldsSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[A-Z]/, "Password must include at least one uppercase letter.")
    .regex(/\d/, "Password must include at least one number."),
});

export const registerSchema = registerFieldsSchema
  .extend({
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export const registerRequestSchema = registerFieldsSchema;

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export const sipSchema = z.object({
  fundId: z.string().min(1, "Fund is required."),
  amount: z.coerce.number().positive("Amount must be greater than 0."),
  frequency: z.enum(["DAILY", "WEEKLY", "MONTHLY", "QUARTERLY", "YEARLY"]),
});

export const kycSchema = z.object({
  pan: z
    .string()
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Please enter a valid PAN number."),
  aadhaar: z
    .string()
    .regex(/^\d{12}$/, "Aadhaar number must be exactly 12 digits."),
});

export const investorProfileSchema = z.object({
  dateOfBirth: z.string().min(1, "Date of birth is required."),
  panNumber: z
    .string()
    .trim()
    .toUpperCase()
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Please enter a valid PAN number."),
  occupation: z.string().min(2, "Occupation is required."),
  annualIncomeBand: z.string().min(2, "Annual income band is required."),
  riskProfile: z.enum(["LOW", "MODERATE", "HIGH"]),
});

export const orderCreateSchema = z.object({
  fundId: z.string().min(1, "Fund selection is required."),
  kind: z.enum(["LUMPSUM_PURCHASE", "SIP_REGISTRATION"]),
  amount: z.coerce.number().min(500, "Minimum transaction amount is INR 500."),
  paymentRail: z.enum(["UPI", "NETBANKING", "UPI_AUTOPAY"]),
  frequency: z.enum(["MONTHLY", "QUARTERLY"]).optional(),
});

export const supportTicketSchema = z.object({
  type: z.enum(["INVESTING", "KYC", "MANDATE", "ORDER", "SIP", "REPORTING", "COMPLAINT"]),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  description: z.string().min(12, "Description must be at least 12 characters."),
});
