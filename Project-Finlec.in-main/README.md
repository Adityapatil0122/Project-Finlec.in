# Finlec - All-in-One Mutual Fund Investment Platform

A full-stack mutual fund investment platform built with Next.js, providing portfolio management, financial calculators, and investment tools.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Shadcn/ui, Radix UI
- **Authentication:** NextAuth.js with Prisma Adapter
- **Database:** MySQL via Prisma ORM
- **Backend:** Supabase
- **Charts:** Recharts, Chart.js
- **Animation:** Framer Motion
- **Validation:** Zod + React Hook Form

## Features

- **Investment Dashboard** - Portfolio overview, order management, SIP tracking
- **15 Financial Calculators** - SIP, Lumpsum, EMI, PPF, EPF, NPS, FD, Inflation, XIRR, Retirement, and more
- **Mutual Fund Explorer** - Browse and compare funds by category
- **Authentication** - Secure login/signup with role-based access (Investor, Advisor, Admin)
- **Admin Panel** - KYC management, mandate monitoring, operational overview
- **Compliance** - KYC verification, FATCA/CRS consent tracking, audit logging

## Getting Started

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Environment Variables

Create a `.env` file with the following:

```env
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```
