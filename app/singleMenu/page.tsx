import FilterHeader from "@/components/organisms/FilterHeader";
import ProductCardList from "@/components/organisms/ProductCardList";

export default function page() {
  return (
    <div className="bg-slate-100 p-5">
      <FilterHeader />
      <ProductCardList />
    </div>
  );
}
