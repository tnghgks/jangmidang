import SlideController from "@/app/components/SlideController";
import dbConnect from "@/app/lib/db/dbConnect";
import Banner from "@/app/lib/db/models/Banner";

export default async function page() {
  await dbConnect();
  const banner = await Banner.findOne({ title: "mainBanner" });

  if (!banner) return;
  return <SlideController images={banner.imgUrl} />;
}
