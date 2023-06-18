import { IProduct } from "@/types/product";
import ProductCard from "../molecule/ProductCard";

interface IProps {
  products: IProduct[];
}

export default function ProductCardList({ products = [] }: IProps) {
  return (
    <div className="flex flex-col py-5 gap-5 sm:grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product._id} productData={product} />
      ))}
    </div>
  );
}
