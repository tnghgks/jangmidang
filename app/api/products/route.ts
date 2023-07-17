import Products from "@/app/lib/db/models/Products";
import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import mongoose from "mongoose";

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req });
    if (!token || token.user.role !== "admin")
      return NextResponse.json({ error: "권한이 없습니다." }, { status: 401 });

    const newProduct = await req.json();
    const product = await Products.create(newProduct);
    return NextResponse.json(product);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError)
      return NextResponse.json({ error: error.name }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const token = await getToken({ req });
    if (!token || token.user.role !== "admin")
      return NextResponse.json({ error: "권한이 없습니다." }, { status: 401 });
    const { searchParams } = new URL(req.url);

    let count = 0;
    for (let id of searchParams.values()) {
      await Products.deleteOne({ _id: id });
      count++;
    }
    return NextResponse.json({ message: `${count}개 삭제하였습니다.` });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError)
      return NextResponse.json({ error: error.name }, { status: 400 });
  }
}
