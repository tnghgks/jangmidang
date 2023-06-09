import { IProduct } from "@/types/product";

interface IProps {
  cardData: IProduct;
}

export default function ProductCard({ cardData }: IProps) {
  const { id, img, title, description } = cardData;
  return (
    <div className="w-full rounded-2xl overflow-hidden pb-5 bg-slate-200">
      <a href={`${process.env.BASE_URL}product/${id}`}>
        <img src={img} alt="" className="w-full h-3/5 object-cover" />
      </a>
      <strong className="block mt-5 px-5 font-bold leading-5 text-ellipsis whitespace-nowrap overflow-hidden">
        {title}
      </strong>
      <p className="mt-5 px-5 break-words">{description}</p>
    </div>
  );
}
