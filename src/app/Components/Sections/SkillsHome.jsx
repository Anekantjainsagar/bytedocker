import gsap from "gsap";
import React, { useContext, useEffect, useState } from "react";
import normalize from "../Utils/Normalize";
import { ScrollTrigger } from "gsap/all";
import Context from "../../../Context/Context";

const SkillsHome = () => {
  gsap.registerPlugin(ScrollTrigger);
  const context = useContext(Context);

  useEffect(() => {
    let start = "top 90%";
    let end = "top 00%";
    let moveX = window.innerWidth * (8 / 100);

    if (context?.width > 600) {
      gsap.to("#skillRow34", {
        x: -moveX,
        scrollTrigger: {
          trigger: "#skillContainer2",
          scrub: true,
          start,
          end,
          scroller: ".mainApp",
        },
      });
      gsap.to("#skillRow342", {
        x: moveX,
        scrollTrigger: {
          trigger: "#skillContainer2",
          scrub: true,
          start,
          end,
          scroller: ".mainApp",
        },
      });
    }
  }, []);

  return (
    <div
      id="skillContainer2"
      className="py-[5vw] flex flex-col items-center px-5 md:px-[10vw]"
    >
      <div
        id="skillRow34"
        className="grid grid-cols-4 md:flex items-start md:items-center justify-between flex-wrap w-full mb-8 md:translate-x-[8vw] relative z-30"
      >
        <Icon source={"/companies/tapio.png"} title={"Tapio Digital"} />{" "}
        <Icon
          source={"/companies/kenstone-digital.png"}
          title={"Kenstone Capital"}
        />
        <Icon source={"/companies/campuswave.png"} title={"Campus Wave"} />
        <Icon source={"/companies/claws.png"} title={"Claws"} />
        <Icon source={"/companies/houseliv.png"} title={"House Liv"} />
        <Icon source={"/companies/innovact.png"} title={"Innovact"} />
        <Icon
          source={"/companies/just-for-corporates.png"}
          title={"Just for Corporates"}
        />{" "}
        <Icon source={"/companies/bms.png"} title={"BMS College"} />
        {context?.width < 600 && (
          <>
            <Icon source={"/companies/kidat.png"} title={"Kidat"} />
            <Icon
              source={"/companies/make-my-adventures.png"}
              title={"Make My Adventures"}
            />
            <Icon source={"/companies/meesha.png"} title={"Miesha"} />
            <Icon source={"/companies/seenuz.png"} title={"Seenuz Conceptsz"} />
            <Icon source={"/companies/tapio.png"} title={"Tapio Digital"} />
            <Icon source={"/companies/white-pearl.png"} title={"White Peart"} />
            <Icon source={"/companies/wrenberg.png"} title={"Wrenberg"} />
          </>
        )}
      </div>
      <div
        id="skillRow342"
        className="hidden md:flex items-center justify-between w-full mb-8 md:-translate-x-[8vw] relative z-30"
      >
        <Icon source={"/companies/kidat.png"} title={"Kidat"} />
        <Icon
          source={"/companies/make-my-adventures.png"}
          title={"Make My Adventures"}
        />
        <Icon source={"/companies/meesha.png"} title={"Miesha"} />
        <Icon source={"/companies/seenuz.png"} title={"Seenuz Conceptsz"} />
        <Icon
          source={"/companies/big-foundation.png"}
          title={"Big Foundation"}
        />
        <Icon source={"/companies/white-pearl.png"} title={"White Peart"} />
        <Icon source={"/companies/wrenberg.png"} title={"Wrenberg"} />
      </div>
    </div>
  );
};

const Icon = ({ source, title }) => {
  const [hovered, setHovered] = useState(false);
  const context = useContext(Context);
  let id = title.replace(/\+/g, "plus").replace(".", "").replace(" ", "");

  const [element, setElement] = useState();

  useEffect(() => {
    let el;
    el = document.getElementById(`${title}`);
    if (el) {
      setElement(el);
    }
  }, []);

  return (
    <div className="md:mx-0 md:my-0 mx-1.5 my-3 flex flex-col items-center justify-center">
      <div
        onMouseMove={(e) => {
          if (context?.width > 600) {
            setHovered(true);
            gsap.fromTo(
              `#${id + "title"}`,
              { opacity: 0 },
              {
                opacity: 1,
              }
            );
            let x =
              normalize(
                (e?.nativeEvent?.offsetX / element.offsetWidth) * 100,
                0,
                50,
                100
              ) / 5;
            let y =
              normalize(
                (e?.nativeEvent?.offsetY / element.offsetHeight) * 100,
                0,
                50,
                100
              ) / 5;
            gsap.to(`#${id + "img"}`, {
              x: `${x}px`,
              y: `${y}px`,
              rotate: x,
            });
            gsap.to(".mouse", {
              width: "150px",
              height: "150px",
              border: "5px solid #E6F0FF",
            });
          }
        }}
        onMouseLeave={(e) => {
          if (context?.width > 600) {
            setHovered(false);
            gsap.fromTo(
              `#${id + "title"}`,
              { opacity: 1 },
              {
                opacity: 0,
              }
            );
            gsap.to(`#${id + "img"}`, {
              x: 0,
              y: 0,
              rotate: 0,
              ease: "elastic.out(1,0.3)",
              duration: 1,
            });
            gsap.to(".mouse", {
              width: "25px",
              height: "25px",
              border: "1px solid #000",
            });
          }
        }}
        id={title}
        className={`p-1 md:p-4 cursor-pointer w-[15vw] md:w-[8vw] aspect-square flex flex-col items-center justify-center ${
          hovered ? "bg-newLightBlue/0" : "bg-newLightBlue"
        } rounded-lg relative z-40`}
      >
        <p
          id={id + "title"}
          className="absolute opacity-0 -top-3 text-textGrey font-semibold text-lg"
        >
          {title}
        </p>
        <img
          src={source}
          alt={title}
          width={1000}
          height={1000}
          id={id + "img"}
          className={`${
            title == "Kidat" ? "w-full" : "w-11/12"
          } aspect-square object-contain`}
        />{" "}
      </div>
      <p className="md:hidden text-textGrey text-center mt-1">{title}</p>
    </div>
  );
};

export default SkillsHome;
