import { ComponentProps, ReactElement } from "react";

interface IProps extends Omit<ComponentProps<"input">, "size"> {
  icon: ReactElement;
  size?: "sm" | "md" | "lg";
  color?: "white" | "black";
  className?: string;
}

const colors = {
  white: "bg-white",
  black: "bg-black",
};

const sizes = {
  sm: "w-4 h-4",
  md: "w-8 h-8",
  lg: "w-16 h-16",
};

export default function Icon({
  icon,
  size = "md",
  color = "white",
  className = "",
  ...rest
}: IProps) {
  const iconOption = `${sizes[size]} ${colors[color]}`;

  return (
    <div
      className={`rounded-full ${iconOption} flex items-center justify-center cursor-pointer ${className}`}
      {...rest}
    >
      {icon}
    </div>
  );
}
