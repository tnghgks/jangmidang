import { IProduct } from "@/types/product";
import ProductCard from "../moecules/ProductCard";

interface IProps {
  cards: IProduct[];
}

export default function ProductCardList({ cards = [] }: IProps) {
  return (
    <div className="flex flex-col py-5 gap-5 sm:grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
      {cards.map((card, i) => (
        <ProductCard key={i} cardData={card} />
      ))}
    </div>
  );
}
