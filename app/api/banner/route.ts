import Banner from "@/app/lib/db/models/Banner";
import mongoose from "mongoose";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
      let banner;
      const token = await getToken({ req });
      if (!token || token.user.role !== "admin")
        return NextResponse.json({ error: "권한이 없습니다." }, { status: 401 });
      const newBanner = await req.json();
      if(await Banner.exists({title:newBanner.title})){
        banner = await Banner.findOneAndUpdate({title:newBanner.title}, {imgUrl:newBanner.imgUrl})
      }else{
        banner = await Banner.create(newBanner);
      }

      return NextResponse.json(banner);
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError)
        return NextResponse.json({ error: error.name }, { status: 400 });
    }
  }

export async function PUT(req: NextRequest) {
    try {
      const token = await getToken({ req });
      if (!token || token.user.role !== "admin")
        return NextResponse.json({ error: "권한이 없습니다." }, { status: 401 });

      const newBanner = await req.json();

      if(await Banner.exists({title:newBanner.title})){
        await Banner.findOneAndUpdate({title:newBanner.title}, {imgUrl:newBanner.imgUrl})
        return NextResponse.json(newBanner);
      }

      return NextResponse.json({ error: "배너가 없습니다."}, { status: 400 });
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError)
        return NextResponse.json({ error: error.name }, { status: 400 });
    }
  }