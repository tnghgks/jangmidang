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
        "flex w-full rounded-2xl bg-gray-600 text-white items-center justify-center bg-cover bg-no-repeat shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]"
      }
    >
      <span className="text-2xl font-bo">{children}</span>
    </div>
  );
}
