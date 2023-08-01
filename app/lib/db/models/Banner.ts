import { Schema, models, model, Model } from "mongoose";
import { IBanner } from "@/app/types/banner";

export const BannerSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imgUrl: [String],
});

const Banner: Model<IBanner> = models?.Banner || model("Banner", BannerSchema);

export default Banner;
