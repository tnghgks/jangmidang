import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import mongoose from "mongoose";
import ProductData from "@/app/lib/db/models/ProductData";

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req });
    if (!token || token.user.role !== "admin")
      return NextResponse.json({ error: "권한이 없습니다." }, { status: 401 });

    const productDetails = await ProductData.find({});

    return NextResponse.json(productDetails);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError)
      return NextResponse.json({ error: error.name }, { status: 400 });
    return error;
  }
}
