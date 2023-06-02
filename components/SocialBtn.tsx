import { PropsWithChildren, ReactElement } from "react";

interface IProps {
  src: string;
  icon: ReactElement | string;
}

export default function SocialBtn({ src, icon }: PropsWithChildren<IProps>) {
  const isSrc = typeof icon === "string";

  return (
    <a href={src}>
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
        {isSrc ? <img src={icon} alt="icon" /> : icon}
      </div>
    </a>
  );
}
