import { useEffect, useRef } from "react";

type BackgroundProps = {
  items: number;
  color?: string;
};

const Background = ({ items, color }: BackgroundProps) => {
  const divRef = useRef<any>(null);

  useEffect(() => {
    const xAxisFunction = (y: number, width: number) => {
      if (width < 500) return width / 15;
      let max = width - 200;
      return -((max / 2) * Math.cos(0.002 * y)) + (2 * max) / 5;
    };

    const yAxisFunction = (y: number, height: number) => {
      if (y >= height - 700) {
        return height - 700;
      }
      return y + 200 * (Math.sin(0.0013 * y) + 1);
    };

    const scaleFunction = (y: number) => {
      return 80 - (-150 * Math.cos(0.0021 * y) + 150) / 10;
    };

    const animateDiv = () => {
      let windowWidth = window.innerWidth;
      let windowHeight = document.body.scrollHeight;
      console.log(windowHeight);
      let windowY = window.scrollY;

      let X = xAxisFunction(windowY, windowWidth);
      let Y = yAxisFunction(windowY, windowHeight);
      let S = scaleFunction(windowY);

      divRef.current.style.left = `${X}px`;
      divRef.current.style.top = `${Y}px`;
      divRef.current.style.transform = `scale(${S}%)`;
    };

    animateDiv();

    window.addEventListener("scroll", animateDiv);
    return () => {
      window.removeEventListener("scroll", animateDiv);
    };
  }, []);

  return (
    <>
      <div className="top-0 bottom-0 left-0 right-0 h-screen w-screen -z-20 bg-[#0a0a0a] fixed"></div>
      <div
        className="absolute -z-10 w-96 h-96 rounded-full blur-lg"
        style={{
          background: `radial-gradient(circle, ${
            color === `green`
              ? `rgb(20 83 45)`
              : color === `yellow`
              ? `rgb(113 63 18)`
              : ` rgb(0, 119, 255)`
          } 0%, rgba(255, 255, 255, 0) 100%)`,
        }}
        ref={divRef}
        id="bg-color"
      ></div>
    </>
  );
};

export default Background;
