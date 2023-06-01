import { PropsWithChildren } from "react";

interface IProps {
  src: string;
}

export default function IframePlayer({ src }: PropsWithChildren<IProps>) {
  return (
    <div className="max-w-5xl w-full">
      <iframe
        width="100%"
        style={{ aspectRatio: 16 / 9 }}
        src={src}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
