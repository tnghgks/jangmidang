import { PropsWithChildren, ReactElement } from "react";

interface IProps {
  src: string;
  icon: ReactElement | string;
}

export default function SocialBtn({ src, icon }: PropsWithChildren<IProps>) {
  if (typeof icon === "string") {
    return (
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
        <img src={icon} alt="icon" />
      </div>
    );
  }

  return (
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">{icon}</div>
  );
}
