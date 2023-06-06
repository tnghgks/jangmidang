import Image from "next/image";

interface IProps {
  img: string;
  title: string;
  description: string;
}

export default function ProductCard({ title, description }: IProps) {
  return (
    <div className="w-full rounded-2xl overflow-hidden">
      <img
        src="https://jangmidang.s3.ap-northeast-2.amazonaws.com/a430ef4f75ff49f7b9d74d71fadb0801.jpg"
        alt=""
        className="w-full h-3/5 object-cover"
      />
      <span className="mt-5 font-bold px-5">{title}</span>
      <p className="mt-5 px-5">{description}</p>
    </div>
  );
}
