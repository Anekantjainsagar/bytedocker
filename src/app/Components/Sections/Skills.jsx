import gsap from "gsap";
import React, { useContext, useEffect, useState } from "react";
import normalize from "../Utils/Normalize";
import { ScrollTrigger } from "gsap/all";
import Context from "../../../Context/Context";

const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);
  const context = useContext(Context);

  useEffect(() => {
    let start = "top 90%";
    let end = "top 00%";
    let moveX = window.innerWidth * (8 / 100);

    if (context?.width > 600) {
      gsap.to("#skillRow", {
        x: -moveX,
        scrollTrigger: {
          trigger: "#skillContainer",
          scrub: true,
          start,
          end,
          scroller: ".mainApp",
        },
      });
      gsap.to("#skillRow2", {
        x: moveX,
        scrollTrigger: {
          trigger: "#skillContainer",
          scrub: true,
          start,
          end,
          scroller: ".mainApp",
        },
      });
      gsap.to("#skillRow3", {
        x: -moveX,
        scrollTrigger: {
          trigger: "#skillContainer",
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
      data-scroll-section
      id="skillContainer"
      className="py-[5vw] flex flex-col items-center px-5 md:px-[10vw]"
    >
      <div
        id="skillRow"
        className="grid grid-cols-4 md:flex items-start md:items-center justify-between flex-wrap w-full mb-8 md:translate-x-[8vw] relative z-30"
      >
        <Icon source={"/data/icons/html.png"} title={"Html"} />
        <Icon source={"/data/icons/css-3.png"} title={"CSS"} />
        <Icon source={"/data/icons/bootstrap.png"} title={"Bootstrap"} />
        <Icon source={"/data/icons/tailwind.png"} title={"Tailwind css"} />
        <Icon source={"/data/icons/js.png"} title={"JavaScript"} />
        <Icon source={"/data/icons/typescript.png"} title={"TypeScript"} />
        <Icon source={"/data/icons/python.png"} title={"Python"} />
        <Icon source={"/data/icons/numpy.svg"} title={"Numpy"} />{" "}
        {context?.width < 600 && (
          <>
            <Icon source={"/data/icons/pandas.svg"} title={"Pandas"} />
            <Icon
              source={"/data/icons/matplotlib-seeklogo.svg"}
              title={"Matplotlib"}
            />
            <Icon source={"/data/icons/react.png"} title={"React.js"} />
            <Icon source={"/data/icons/next.png"} title={"Next.js"} />
            <Icon source={"/data/icons/npm.png"} title={"NPM"} />
            <Icon source={"/data/icons/gsap.svg"} title={"GSAP"} />
            <Icon
              source={"/data/icons/node-js-736399_1280.png"}
              title={"Node.js"}
            />
            <Icon source={"/data/icons/Expressjs.png"} title={"Express.js"} />{" "}
            <Icon source={"/data/icons/mongodb.png"} title={"MongoDB"} />
            <Icon source={"/data/icons/sql.png"} title={"Mysql"} />
            <Icon source={"/data/icons/git.png"} title={"Git"} />
            <Icon source={"/data/icons/github.png"} title={"Github"} />
            <Icon source={"/data/icons/aws.png"} title={"AWS"} />
            <Icon source={"/data/icons/letter-c.png"} title={"C"} />
            <Icon source={"/data/icons/c++.png"} title={"C++"} />
            <Icon source={"/data/icons/dsa.png"} title={"DSA"} />
          </>
        )}
      </div>
      <div
        id="skillRow2"
        className="hidden md:flex items-center justify-between w-full mb-8 md:-translate-x-[8vw] relative z-30"
      >
        <Icon source={"/data/icons/pandas.svg"} title={"Pandas"} />
        <Icon
          source={"/data/icons/matplotlib-seeklogo.svg"}
          title={"Matplotlib"}
        />
        <Icon source={"/data/icons/react.png"} title={"React.js"} />
        <Icon source={"/data/icons/next.png"} title={"Next.js"} />
        <Icon source={"/data/icons/npm.png"} title={"NPM"} />
        <Icon source={"/data/icons/gsap.svg"} title={"GSAP"} />
        <Icon
          source={"/data/icons/node-js-736399_1280.png"}
          title={"Node.js"}
        />
        <Icon source={"/data/icons/Expressjs.png"} title={"Express.js"} />
      </div>
      <div
        id="skillRow3"
        className="hidden md:flex items-center justify-between w-full md:translate-x-[8vw] relative z-30"
      >
        <Icon source={"/data/icons/mongodb.png"} title={"MongoDB"} />
        <Icon source={"/data/icons/sql.png"} title={"Mysql"} />
        <Icon source={"/data/icons/git.png"} title={"Git"} />
        <Icon source={"/data/icons/github.png"} title={"Github"} />
        <Icon source={"/data/icons/aws.png"} title={"AWS"} />
        <Icon source={"/data/icons/letter-c.png"} title={"C"} />
        <Icon source={"/data/icons/c++.png"} title={"C++"} />
        <Icon source={"/data/icons/dsa.png"} title={"DSA"} />
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
          className="w-9/12 aspect-square object-contain"
        />{" "}
      </div>
      <p className="md:hidden text-textGrey text-center mt-1">{title}</p>
    </div>
  );
};

export default Skills;
