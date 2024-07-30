import gsap from "gsap";
import React from "react";

const Line = () => {
  return (
    <div
      className="w-full flex items-center justify-center"
      onMouseMove={(e) => {
        gsap.to(".mouse", {
          width: "25px",
          height: "25px",
          background: "#1c1d21",
          border: "none",
        });
      }}
      onMouseLeave={(e) => {
        gsap.to(".mouse", {
          background: "transparent",
          width: "25px",
          height: "25px",
          border: "1px solid #000",
        });
      }}
      data-scroll-section
    >
      {" "}
      <div className="w-[88vw] my-4 mx-auto h-[1px] bg-gray-900 bg-gradient gradient-line opacity-90 md:hidden"></div>
      <div
        className="w-10/12 md:block hidden mx-auto opacity-50"
        onMouseMove={(e) => {
          gsap.to("#svgLine path", {
            attr: {
              d: `M 0 125 Q ${e?.nativeEvent?.offsetX} ${e?.nativeEvent?.offsetY} 1700 125`,
            },
          });
        }}
        onMouseLeave={(e) => {
          gsap.to("#svgLine path", {
            attr: {
              d: `M 0 125 Q 52.5 125 1700 125`,
            },
            ease: "elastic.out(1,0.3)",
          });
        }}
      >
        <svg id="svgLine" height="250" className="w-full overflow-x-hidden">
          <path
            d="M 0 125 Q 52.5 125 1700 125"
            stroke="#1c1d21"
            fill="transparent"
          />
        </svg>
      </div>
    </div>
  );
};

export default Line;
