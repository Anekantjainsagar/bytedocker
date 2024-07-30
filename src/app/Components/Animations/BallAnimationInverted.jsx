import gsap from "gsap";
import React, { useEffect, useState } from "react";
import normalize from "../Utils/Normalize";

const BallAnimationInverted = ({ className, ballSize, text, cnt, onClick }) => {
  const [element, setElement] = useState();

  useEffect(() => {
    let el;
    el = document.getElementById(`ballBox${cnt}`);
    if (el) {
      setElement(el);
    }
  }, []);

  return (
    <div
      id={`ballBox${cnt}`}
      onMouseMove={(e) => {
        let x =
          normalize(
            (e?.nativeEvent?.offsetX / element.offsetWidth) * 100,
            0,
            50,
            100
          ) / 3;
        let y =
          normalize(
            (e?.nativeEvent?.offsetY / element.offsetHeight) * 100,
            0,
            50,
            100
          ) / 3;
        gsap.to(`.ball${cnt}`, {
          x: `${x}px`,
          y: `${y}px`,
          rotate: `${x}px`,
        });
      }}
      onMouseLeave={(e) => {
        gsap.to(`.ball${cnt}`, {
          x: 0,
          y: 0,
          rotate: 0,
          ease: "elastic.out(1,0.3)",
          duration: 1,
        });
      }}
      onClick={onClick}
      className={`${className} flex items-center justify-center`}
    >
      <button
        onMouseMove={(e) => {
          gsap.to(".mouse", { scale: 0.5, border: "none", background: "#fff" });
        }}
        onMouseLeave={(e) => {
          gsap.to(".mouse", {
            scale: 1,
            background: "transparent",
            border: "1px solid #000",
          });
        }}
        className={`ball${cnt} button-inverted button--calypso-inverted ${ballSize} relative z-40 rounded-full bg-textGrey flex items-center justify-center text-white`}
      >
        <span className="z-10">{text}</span>
      </button>
    </div>
  );
};

export default BallAnimationInverted;
