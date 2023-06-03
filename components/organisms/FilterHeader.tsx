import FilterButton from "../moecules/FilterButton";
import SearchBar from "../moecules/SearchBar";

export default function FilterHeader() {
  return (
    <header className="w-full bg-[#FBA78B] h-20 px-6 py-2 rounded-3xl flex justify-between mt-20">
      <SearchBar />
      <FilterButton />
    </header>
  );
}
