import dbConnect from "@/app/lib/db/dbConnect";
import Products from "@/app/lib/db/models/Products";

interface IProps {
  params: { id: string };
}

export default async function page({ params }: IProps) {
  await dbConnect();

  const productData = await Products.findById({ _id: params.id });

  return (
    <section className="flex bg-slate-600 p-5 justify-center items-center flex-col gap-5">
      <div className="w-[80%] bg-slate-100 h-96 grid grid-cols-2 ">
        <figure>
          <img
            src={productData?.thumbnail || ""}
            alt={productData?.thumbnail || ""}
            className="w-full h-full"
          />
          <figcaption></figcaption>
        </figure>
        <section className="flex flex-col gap-3 p-3">
          <h2 className="text-2xl text-teal-700 font-semibold">{productData.title}</h2>
          <span className="text-2xl font-semibold">
            {Number(productData.price).toLocaleString()} 원
          </span>
          <span>수량 : {productData.count}</span>
          <span>배송비 : {Number(productData.deliveryFee).toLocaleString()} 원</span>
        </section>
      </div>
      <section className="w-[80%] bg-slate-100 h-[500px] grid grid-cols-2 "></section>
    </section>
  );
}
