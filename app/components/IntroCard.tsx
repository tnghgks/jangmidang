import { PropsWithChildren } from "react";

interface IProps {
  link?: string;
  bgSrc: string;
}

export default function IntroCard({ link, bgSrc, children }: PropsWithChildren<IProps>) {
  return (
    <a
      style={{
        backgroundImage: `url(${bgSrc ? bgSrc : ""})`,
      }}
      className={
        "flex w-full rounded-2xl bg-gray-600 text-white items-center justify-center bg-cover bg-no-repeat shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]"
      }
      href={link}
    >
      <span className="text-2xl font-bold">{children}</span>
    </a>
  );
}
