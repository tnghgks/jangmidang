import { JWT } from "next-auth/jwt";
import NextAuth, { DefaultSession } from "next-auth";
import { IUser } from "./user";

declare module "next-auth/jwt" {
  interface JWT {
    user: { name?: string; email?: string; role?: string };
  }
}
declare module "next-auth" {
  interface User extends Partial<IUser> {}
}
