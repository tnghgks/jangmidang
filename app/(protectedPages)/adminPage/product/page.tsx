import ProductView from "@/app/components/molecule/ProductView";
import dbConnect from "@/app/lib/db/dbConnect";
import Products from "@/app/lib/db/models/Products";

export const dynamic = "force-dynamic";

export default async function page() {
  await dbConnect();

  const products = (await Products.find()).map((item: any) => ({
    ...item._doc,
    _id: item._id.toString(),
  }));

  return <ProductView products={products} />;
}
