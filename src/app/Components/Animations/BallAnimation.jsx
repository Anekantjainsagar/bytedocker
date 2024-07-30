import gsap from "gsap";
import React, { useContext, useEffect, useState } from "react";
import normalize from "../Utils/Normalize";
import Context from "../../../Context/Context";

const BallAnimation = ({ className, ballSize, text, cnt, onClick }) => {
  const [element, setElement] = useState();
  const context = useContext(Context);

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
        if (context?.width > 600) {
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
        }
      }}
      onMouseLeave={(e) => {
        if (context?.width > 600) {
          gsap.to(`.ball${cnt}`, {
            x: 0,
            y: 0,
            rotate: 0,
            ease: "elastic.out(1,0.3)",
            duration: 1,
          });
        }
      }}
      onClick={onClick}
      className={`${className} ${
        className.includes("flex") ? "" : "flex items-center justify-center"
      }`}
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
        className={`ball${cnt} button button--calypso ${ballSize} relative z-40 rounded-full bg-textGrey flex items-center justify-center text-white`}
      >
        <span className="z-10">{text}</span>
      </button>
    </div>
  );
};

export default BallAnimation;
