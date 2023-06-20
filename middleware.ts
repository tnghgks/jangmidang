import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/adminPage")) {
    const session = await getToken({ req: request });
    if (session == null) {
      return NextResponse.redirect(new URL("/api/auth/signin", request.url));
    }
  }
}
