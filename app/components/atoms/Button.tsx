import { PropsWithChildren } from "react";

interface IProps {
  size?: "sm" | "md" | "lg";
  color?: "white" | "black";
  rounded?: "full" | "top" | "bottom" | "none";
  variant?: "normal" | "blue" | "teal";
  onClick?: () => void;
}

const sizes = {
  sm: "text-xs px-3 h-5",
  md: "text-xl px-4 h-10",
  lg: "text-3xl px-8 h-12",
};

const colors = {
  white: "text-white",
  black: "bg-black",
};

const radius = {
  full: "rounded-full",
  top: "rounded-t-md",
  bottom: "rounded-b-md",
  none: "rounded-none",
};

const variants = {
  normal: "bg-white",
  blue: "bg-blue-500",
  teal: "bg-teal-500",
};

export default function Button({
  size = "sm",
  color = "black",
  rounded = "none",
  variant = "normal",
  onClick,
  children,
  ...prop
}: PropsWithChildren<IProps>) {
  const inputOption = `${sizes[size]} ${colors[color]} ${radius[rounded]} ${variants[variant]}`;

  return (
    <div
      className={`h-full rounded-t-md leading-loose cursor-pointer ${inputOption}`}
      onClick={onClick}
      {...prop}
    >
      {children}
    </div>
  );
}
