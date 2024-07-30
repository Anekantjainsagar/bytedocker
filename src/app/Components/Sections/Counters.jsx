import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useContext, useEffect, useState } from "react";
import { useCountUp } from "react-countup";
import Context from "../../../Context/Context";

const Counters = () => {
  gsap.registerPlugin(ScrollTrigger);
  let data = [
    { title: "Projects Completed", value: 15 },
    { title: "Coding Days", value: 750 },
    { title: "Awards Received", value: 4 },
    { title: "Coffee Cups", value: 500 },
    { title: "Sleepless Nights", value: 100 },
  ];

  return (
    <div
      data-scroll-section
      id="CounterContainer"
      className="pt-[3vw] pb-[5vw] items-center flex-wrap justify-around md:items-start px-[10vw] flex md:grid md:grid-cols-5 w-full"
    >
      {data.map((e, i) => {
        return (
          <div className="flex items-center justify-center" key={i}>
            <Block data={e} />
          </div>
        );
      })}
    </div>
  );
};

const Block = ({ data }) => {
  const countUpRef = React.useRef(null);
  const context = useContext(Context);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: data?.value,
    delay: 0,
  });

  useEffect(() => {
    pauseResume();
    if (context?.width > 600) {
      ScrollTrigger.create({
        trigger: countUpRef.current,
        start: "top 90%",
        end: "top 20%",
        onEnter: () => start(),
        onLeave: () => reset(),
        onEnterBack: () => start(),
        onLeaveBack: () => reset(),
        scroller: ".mainApp",
      });
    } else {
      start();
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center md:my-0 my-2 text-textGrey">
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
        className="w-[20vw] md:w-[9vw] aspect-square cursor-pointer text-xl md:text-5xl text-white bg-textGrey rounded-full flex items-center justify-center"
      >
        <div ref={countUpRef} />
        <p className="text-base md:text-4xl ml-0.5">+</p>
      </div>
      <h1 className="text-base md:text-2xl md:font-medium mt-1 md:mt-3 w-8/12 text-center">
        {data?.title}
      </h1>
    </div>
  );
};

export default Counters;
