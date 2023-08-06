import Image from "next/image";

interface IProps {
  images: string[];
}

export default function DetailImages({ images }: IProps) {
  return (
    <div className="w-full h-full flex items-center flex-col">
      {images.map((src, i) => (
        <Image
          src={src}
          key={i}
          alt={`${i}번사진`}
          width={800}
          height={800}
          style={{ maxWidth: "100%", minWidth: "60%" }}
        />
      ))}
    </div>
  );
}
