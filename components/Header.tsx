import Image from "next/image";

export default function Header() {
  return (
    <header className="flex fixed top-0 left-0 w-full justify-between items-center px-10 pt-5 h-20 z-10">
      <h1 className="text-5xl text-teal-700 font-semibold">장미당</h1>
      <div>
        <Image src="/mingcute_menu-fill.svg" width={37} height={37} alt="" />
      </div>
    </header>
  );
}
