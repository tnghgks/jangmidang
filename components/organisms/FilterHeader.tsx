import FilterButton from "../moecules/FilterButton";
import SearchBar from "../moecules/SearchBar";

export default function FilterHeader() {
  return (
    <div className="p-5">
      <header className="w-full bg-[#FBA78B] h-20 px-6 py-2 rounded-3xl flex justify-between">
        <SearchBar />
        <FilterButton />
      </header>
    </div>
  );
}
