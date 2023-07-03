"use client";

import { FaSearch } from "react-icons/fa";
import Icon from "../atoms/Icon";
import Input from "../atoms/Input";

export default function SearchBar() {
  const handleClick = () => {};

  return (
    <form>
      <Input
        scale="lg"
        icon={<Icon icon={<FaSearch size={24} />} size="lg" onClick={handleClick} />}
      />
    </form>
  );
}
