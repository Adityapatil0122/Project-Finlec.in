"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
} from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const benefits = [
  "One dashboard for all your SIP investments",
  "Research-backed mutual fund recommendations",
  "Track goals with smart portfolio insights",
];

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: "/dashboard",
      });

      if (result?.ok && !result.error) {
        toast.success("Login successful.");
        router.push("/dashboard");
        router.refresh();
        return;
      }

      toast.error("Invalid email or password. Please try again.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3f4f6] px-4 py-10">
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="grid lg:grid-cols-2">
          <div className="bg-gradient-to-br from-[#16a34a] via-[#15803d] to-[#14532d] p-8 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-100">
              Finlec
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Smart Investments for a Secure Future
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-green-50 sm:text-base">
              Build wealth confidently with a unified platform designed for SIP
              planning, fund discovery, and long-term growth.
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
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="mt-2 text-sm text-gray-500">
              Login to continue your investment journey.
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-gray-200 py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition-colors focus:border-[#16a34a] focus:ring-2 focus:ring-green-100"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
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
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full rounded-md border border-gray-200 py-3 pl-10 pr-11 text-sm text-gray-900 outline-none transition-colors focus:border-[#16a34a] focus:ring-2 focus:ring-green-100"
                    {...register("password")}
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>
                )}
              </div>

              <div className="flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-[#16a34a] hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#16a34a] px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-semibold tracking-wider text-gray-400">
                OR
              </span>
              <span className="h-px flex-1 bg-gray-200" />
            </div>

            <p className="text-center text-sm text-gray-600">
              New to Finlec?{" "}
              <Link href="/signup" className="font-semibold text-[#16a34a] hover:underline">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
