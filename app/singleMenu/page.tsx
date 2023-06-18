import TagList from "@/components/molecule/TagList";
import FilterHeader from "@/components/organisms/FilterHeader";
import ProductCardList from "@/components/organisms/ProductCardList";
import dbConnect from "@/lib/db/dbConnect";
import Products from "@/lib/db/models/Products";

export const metadata = {
  title: "단품메뉴 | 장미당",
  description: "전통디저트 단품메뉴 소개,",
};

export default async function page() {
  await dbConnect();

  const products = await Products.find({ type: ["singleMenu"] });

  return (
    <div className="bg-slate-100 p-5 min-h-screen">
      <FilterHeader />
      <TagList tagList={["test", "Test"]} />
      <ProductCardList products={products} />
    </div>
  );
}
