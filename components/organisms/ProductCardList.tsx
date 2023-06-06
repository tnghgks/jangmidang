import { ICard } from "@/types/product";
import ProductCard from "../moecules/ProductCard";

interface IProps {
  cards: ICard[];
}

export default function ProductCardList({ cards = [] }: IProps) {
  return (
    <div className="grid grid-cols-4 gap-5">
      {cards.map((v, i) => (
        <ProductCard key={i} img={v.img} title={v.title} description={v.description} />
      ))}
    </div>
  );
}
