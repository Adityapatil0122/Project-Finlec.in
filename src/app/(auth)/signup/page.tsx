"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Loader2,
  Lock,
  Mail,
  Phone,
  User,
} from "lucide-react";

const signupSchema = z
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
    agreeToTerms: z.boolean().refine((value) => value, {
      message: "You must agree to Terms and Privacy Policy.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Confirm Password must match Password.",
  });

type SignupFormValues = z.infer<typeof signupSchema>;

const benefits = [
  "Build SIP plans around your goals",
  "Explore funds with expert guidance",
  "Track everything in one dashboard",
];

function getStrengthScore(password: string): number {
  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  return score;
}

function getStrengthLabel(score: number): string {
  if (score <= 1) return "Weak";
  if (score <= 3) return "Medium";
  return "Strong";
}

export default function SignupPage() {
  const router = useRouter();
  const timeoutRef = useRef<number | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const passwordValue = useWatch({
    control,
    name: "password",
    defaultValue: "",
  });
  const strengthScore = getStrengthScore(passwordValue);
  const strengthLabel = getStrengthLabel(strengthScore);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const onSubmit = async (values: SignupFormValues) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          password: values.password,
        }),
      });

      const payload = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        toast.error(payload?.message || "Unable to create account. Please try again.");
        return;
      }

      toast.success("Account created successfully.");
      timeoutRef.current = window.setTimeout(() => {
        router.push("/login");
        router.refresh();
      }, 1300);
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    void handleSubmit(onSubmit)(event);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#f3f4f6] px-4 py-10">
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="grid lg:grid-cols-2">
          <div className="bg-gradient-to-br from-[#04b488] via-[#00b286] to-[#7B4FD4] p-8 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-100">
              Finlec
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Start investing with clarity
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-green-50 sm:text-base">
              Create your account to start SIPs, explore funds, and track your
              goals.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-100" />
                  <span className="text-sm text-green-50 sm:text-base">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 sm:p-10">
            <h2 className="text-3xl font-bold text-[#1a1560]">Create Your Account</h2>
            <p className="mt-2 text-sm text-[#4a5568]">
              Set up your Finlec profile and start investing with clarity.
            </p>

            <form className="mt-8 space-y-4" onSubmit={onFormSubmit}>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-md border border-gray-200 py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition-colors focus:border-[#04b488] focus:ring-2 focus:ring-[#04b488]/20"
                    {...register("name")}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-gray-200 py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition-colors focus:border-[#04b488] focus:ring-2 focus:ring-[#04b488]/20"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="10 digit mobile number"
                    className="w-full rounded-md border border-gray-200 py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition-colors focus:border-[#04b488] focus:ring-2 focus:ring-[#04b488]/20"
                    {...register("phone")}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    className="w-full rounded-md border border-gray-200 py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition-colors focus:border-[#04b488] focus:ring-2 focus:ring-[#04b488]/20"
                    {...register("password")}
                  />
                </div>
                <div className="mt-2">
                  <div className="flex gap-1.5">
                    {[0, 1, 2, 3].map((index) => (
                      <span
                        key={index}
                        className={`h-1.5 flex-1 rounded-full ${
                          index < strengthScore ? "bg-[#04b488]" : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Password strength: {strengthLabel}
                  </p>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Re-enter your password"
                    className="w-full rounded-md border border-gray-200 py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition-colors focus:border-[#04b488] focus:ring-2 focus:ring-[#04b488]/20"
                    {...register("confirmPassword")}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#04b488] focus:ring-[#04b488]"
                    {...register("agreeToTerms")}
                  />
                  <span className="text-sm text-[#4a5568]">
                    I agree to{" "}
                    <Link href="/terms" className="font-medium text-[#04b488] hover:underline">
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="font-medium text-[#04b488] hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                {errors.agreeToTerms && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.agreeToTerms.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#04b488] px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                {isSubmitting ? "Creating account..." : "Create account"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[#4a5568]">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-[#04b488] hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
