import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      role: "INVESTOR" | "ADVISOR" | "ADMIN";
    };
  }

  interface User {
    role?: "INVESTOR" | "ADVISOR" | "ADMIN";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: "INVESTOR" | "ADVISOR" | "ADMIN";
  }
}
