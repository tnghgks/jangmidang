import { ComponentProps, ReactElement, useState } from "react";

interface IProps extends ComponentProps<"input"> {
  scale?: "sm" | "md" | "lg";
  color?: "white" | "black";
  rounded?: "full" | "none";
  icon?: ReactElement;
  shadow?: "none" | "sm" | "md" | "lg";
  className?: string;
}
const shadowType = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

const scales = {
  sm: "w-20 h-4 text-xs pl-2 pr-4",
  md: "w-40 h-8 text-xl pl-4 pr-8",
  lg: "w-80 h-16 text-3xl pl-8 pr-16",
};

const off = {
  sm: "w-4 h-4 opacity-0",
  md: "w-8 h-8 opacity-0",
  lg: "w-16 h-16 opacity-0",
};

const colors = {
  white: "bg-white",
  black: "bg-black",
};

const radius = {
  full: "rounded-full",
  none: "rounded-none",
};

export default function Input({
  scale = "sm",
  color = "white",
  rounded = "full",
  icon,
  shadow = "none",
  ref,
  className,
  ...props
}: IProps) {
  const [toggle, setToggle] = useState(false);
  const inputOption = `${scales[scale]} ${colors[color]} ${radius[rounded]} ${shadowType[shadow]}`;

  const handleOnInput = () => {
    setToggle((prev) => !prev);
  };

  if (!icon) {
    return (
      <input
        type="text"
        ref={ref}
        className={`outline-none duration-300 ${inputOption} ${className}`}
        {...props}
      />
    );
  }

  return (
    <div className="relative inline-block">
      {icon && (
        <div className="absolute right-0 top-0 z-10" onClick={handleOnInput}>
          {icon}
        </div>
      )}
      <input
        type="text"
        ref={ref}
        className={`relative outline-none duration-300 ${
          toggle ? inputOption : off[scale]
        } ${className}`}
        {...props}
      />
    </div>
  );
}
