"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

interface IProps {
  images: string[];
}

export default function ImageSlider({ images = [] }: IProps) {
  const [current, setCurrent] = useState(0);
  const timerId = useRef<NodeJS.Timer>();

  const prevSlide = useCallback(() => {
    const isFirst = current === 0;
    const newIndex = isFirst ? images.length - 1 : current - 1;
    setCurrent(newIndex);
  }, [current, images]);

  const nextSlide = useCallback(() => {
    const isLast = current === images.length - 1;
    const newIndex = isLast ? 0 : current + 1;
    setCurrent(newIndex);
  }, [current, images]);

  const moveSlide = (newIndex: number) => {
    setCurrent(newIndex);
  };

  useEffect(() => {
    timerId.current = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timerId.current);
  }, [nextSlide]);

  return (
    <div className="w-full h-[550px] ">
      <div className="w-full h-full overflow-hidden flex relative group duration-500">
        <img
          src={images[current]}
          alt={images[current]}
          className={`w-full h-full object-cover shrink-0 select-none select-none`}
        />
        <BsChevronCompactLeft
          onClick={prevSlide}
          className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer select-none w-10 h-10"
        />
        <BsChevronCompactRight
          onClick={nextSlide}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer select-none w-10 h-10"
        />
        <div className="absolute flex gap-1 left-1/2 translate-x-[-50%] bottom-0 pb-1 b">
          {images.map((_, i) => (
            <img
              onClick={() => moveSlide(i)}
              key={i}
              src={i === current ? "/fill_circle.svg" : "/circle.svg"}
              alt={`슬라이드 ${i}번 버튼`}
              className="cursor-pointer select-none"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
