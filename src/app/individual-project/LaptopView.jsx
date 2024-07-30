import gsap from "gsap";
import React from "react";

const LaptopView = ({ data }) => {
  return (
    <div
      onMouseMove={(e) => {
        gsap.to(".mouse", {
          border: "none",
          background: "#fff",
        });
      }}
      onMouseLeave={(e) => {
        gsap.to(".mouse", {
          background: "transparent",
          border: "1px solid #000",
        });
      }}
      className="macbook cursor-pointer max-w-full md:max-w-[63vw] mx-auto"
    >
      <div className="screen">
        <div
          className="viewport"
          style={{
            backgroundImage: `url(${data})`,
          }}
        ></div>
      </div>
      <div className="base"></div>
      <div className="notch"></div>
    </div>
  );
};

export default LaptopView;
