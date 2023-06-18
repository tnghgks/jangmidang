import TagList from "@/app/components/molecule/TagList";
import FilterHeader from "@/app/components/organisms/FilterHeader";
import ProductCardList from "@/app/components/organisms/ProductCardList";
import dbConnect from "@/app/lib/db/dbConnect";
import Products from "@/app/lib/db/models/Products";

export const revalidate = 60;

export const metadata = {
  title: "선물세트 | 장미당",
  description: "전통디저트 선물세트 소개",
};

export default async function page() {
  await dbConnect();

  const products = await Products.find({ type: ["giftSet"] });

  return (
    <div className="bg-slate-100 p-5 min-h-screen">
      <FilterHeader />
      <TagList tagList={["test", "Test"]} />
      <ProductCardList products={products} />
    </div>
  );
}
