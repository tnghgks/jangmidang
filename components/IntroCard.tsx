import { PropsWithChildren } from "react";

interface IProps {
  bgSrc: string;
}

export default function IntroCard({ bgSrc, children }: PropsWithChildren<IProps>) {
  return (
    <div
      style={{
        backgroundImage: `url(${bgSrc ? bgSrc : ""})`,
      }}
      className={
        "flex w-full rounded-2xl bg-gray-600 text-white items-center justify-center bg-cover bg-no-repeat shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px]"
      }
    >
      <span>{children}</span>
    </div>
  );
}
