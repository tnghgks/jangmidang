import { IProduct } from "@/app/types/product";

interface IProps {
  productData: IProduct;
}

export default function ProductCard({ productData }: IProps) {
  const { _id, thumbnail, title, description } = productData;
  return (
    <div className="w-full rounded-2xl overflow-hidden pb-5 bg-slate-200">
      <a href={`/product/${_id}`}>
        <img src={thumbnail} alt="" className="w-full h-3/5 object-cover" />
      </a>
      <strong className="block mt-5 px-5 font-bold leading-5 text-ellipsis whitespace-nowrap overflow-hidden">
        {title}
      </strong>
      <p className="mt-5 px-5 break-words">{description}</p>
    </div>
  );
}
