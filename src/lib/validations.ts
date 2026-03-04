import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

export const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits."),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .regex(/[A-Z]/, "Password must include at least one uppercase letter.")
      .regex(/\d/, "Password must include at least one number."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Confirm Password must match Password.",
  });

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export const sipSchema = z.object({
  fundId: z.string().min(1, "Fund is required."),
  amount: z
    .number({ invalid_type_error: "Amount must be a number." })
    .positive("Amount must be greater than 0."),
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
