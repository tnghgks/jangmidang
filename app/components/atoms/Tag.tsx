import { PropsWithChildren } from "react";

interface IProps {
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "px-3 py-1 text-sm",
  md: "px-6 py-2 text-md",
  lg: "px-6 py-2 text-md",
};

export default function Tag({ size = "md", children }: PropsWithChildren<IProps>) {
  const tagSize = sizes[size];

  return <div className={`bg-teal-700 ${tagSize} rounded-full text-white`}>{children}</div>;
}
