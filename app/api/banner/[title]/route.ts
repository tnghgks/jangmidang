import Banner from "@/app/lib/db/models/Banner";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest,{params}:{params:{title:string}}) {
     try {
       const banner = await Banner.findOne({title:params.title})
      return NextResponse.json(banner);
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError)
        return NextResponse.json({ error: error.name }, { status: 400 });
    }
  }