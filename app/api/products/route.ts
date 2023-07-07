import Products from "@/app/lib/db/models/Products";
import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import mongoose from "mongoose";

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req });
    if (!token || token.user.role !== "admin")
      return NextResponse.json({ error: "권한이 없습니다." }, { status: 401 });

    const res = await req.json();
    const product = await Products.create(res);
    return NextResponse.json(product);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError)
      return NextResponse.json({ error: error.name }, { status: 400 });
  }
}
