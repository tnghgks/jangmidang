"use client";

import Image from "next/image";
import { useState } from "react";
import TabMenu from "./TabMenu";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="flex fixed top-0 left-0 w-full justify-between items-center px-10 pt-5 h-20 z-10">
        <h1 className="text-5xl text-teal-700 font-semibold">장미당</h1>
        <Image
          src="/mingcute_menu-fill.svg"
          width={37}
          height={37}
          alt="menu button"
          className="cursor-pointer"
          onClick={() => setToggle(true)}
        />
        <TabMenu toggle={toggle} setToggle={setToggle} />
      </header>
    </>
  );
}
