import dbConnect from "@/app/lib/db/dbConnect";
import Products from "@/app/lib/db/models/Products";
import ProductData from "./components/ProductData";
import DetailImages from "./components/DetailImages";
import "@/app/lib/db/models/ProductData";
import Button from "@/app/components/atoms/Button";

interface IProps {
  params: { id: string };
}

export default async function page({ params }: IProps) {
  await dbConnect();

  const productData = await Products.findById(params.id).populate("detail");

  if (!productData) return;

  return (
    <section className="flex p-5 justify-center items-center flex-col">
      <div className="w-[80%] grid grid-cols-2 gap-5">
        <figure className="w-full h-full">
          <img
            src={productData?.thumbnail || ""}
            alt={productData?.thumbnail || ""}
            className="w-full h-full rounded-md"
          />
          <figcaption></figcaption>
        </figure>
        <section className="flex flex-col gap-3 p-3 shadow-md rounded-md">
          <h2 className="text-2xl text-teal-700 font-semibold">{productData.title}</h2>
          <span className="text-2xl font-semibold">
            {Number(productData.price).toLocaleString()} 원
          </span>
          <span>수량 : {productData.count}</span>
          <span>배송비 : {Number(productData.deliveryFee).toLocaleString()} 원</span>
          <select name="" id=""></select>
          <Button>장바구니</Button>
          <Button>구매하기</Button>
          <Button>선물하기</Button>
        </section>
      </div>
      <section className="mt-5 w-[80%] bg-white flex flex-col gap-4">
        <ProductData productData={productData.detail} />
        <DetailImages images={productData.detailImgs} />
      </section>
    </section>
  );
}
