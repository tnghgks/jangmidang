"use client";

import { tabMenuList } from "@/constant/tabMenuList";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, PropsWithChildren, SetStateAction, useEffect, useState } from "react";

interface IProps {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

export default function TabMenu({ toggle, setToggle }: PropsWithChildren<IProps>) {
  const handleOffMenu = () => {
    setToggle(false);
  };

  return (
    <>
      <div
        id="overlay"
        className={`${
          toggle ? "block" : "hidden"
        } w-screen h-screen bg-black absolute top-0 left-0 opacity-30`}
        onClick={handleOffMenu}
      ></div>
      <article
        id="tabMenu"
        className={`fixed top-0 right-0 w-[300px] h-screen bg-teal-700 duration-150 drop-shadow-md ${
          toggle ? "translate-x-0" : "translate-x-[300px]"
        }`}
      >
        <div className="flex justify-between items-center p-5">
          <strong className="text-2xl text-white font-bold">장미당</strong>
          <Image
            src="/mingcute_menu-fill.svg"
            width={37}
            height={37}
            alt="menu button"
            className="cursor-pointer"
            onClick={() => setToggle(false)}
          />
        </div>
        <ul className="flex flex-col group mt-5 gap-3">
          {tabMenuList.map((v) => (
            <li
              key={v.id}
              className="bg-white mx-5 h-10 text-2xl font-bold text-teal-700 even:bg-teal-700 even:text-white"
            >
              <Link href={v.src} className="w-full h-full flex items-center p-2">
                {v.title}
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
