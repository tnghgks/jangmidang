import { useEffect, useRef, useState } from "react";

const useOnScrollHide = (): boolean => {
  const [isHide, setIsHide] = useState(false);
  const prevScrollTop = useRef(0);

  const handleScroll = () => {
    let nextScrollTop = window.scrollY || 0;
    if (nextScrollTop > prevScrollTop.current) {
      setIsHide(true);
    } else if (nextScrollTop < prevScrollTop.current) {
      setIsHide(false);
    }
    prevScrollTop.current = nextScrollTop;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return isHide;
};

export default useOnScrollHide;
