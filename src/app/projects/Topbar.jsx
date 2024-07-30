import React, { useContext, useEffect, useState } from "react";
import { SlMenu } from "react-icons/sl";
import { BsGrid } from "react-icons/bs";
import normalize from "../Components/Utils/Normalize";
import gsap from "gsap";
import TopbarBlock from "./TopbarBlock";
import projects from "../data/projects";
import Context from "../../Context/Context";

const Topbar = ({ filter, setFilter, showType, setShowType, types }) => {
  let context = useContext(Context);
  const [data, setData] = useState({
    all: 0,
    mern: 0,
    gsap: 0,
    ml: 0,
    basic: 0,
  });

  useEffect(() => {
    setData({
      all: projects?.length,
      mern: projects?.filter((e) => e?.type?.toLowerCase().includes("mern"))
        .length,
      ml: projects?.filter((e) => e?.type?.toLowerCase().includes("machine"))
        .length,
      gsap: projects?.filter((e) => e?.type?.toLowerCase().includes("gsap"))
        .length,
      basic: projects?.filter((e) => e?.type?.toLowerCase().includes("basic"))
        .length,
    });
  }, []);

  useEffect(() => {
    context?.setNavColor(false);
  }, []);

  return (
    <div
      className="w-full flex md:flex-row flex-col-reverse items-end md:items-center justify-between my-6 md:my-16 px-5 md:px-[12vw]"
      data-scroll-section
    >
      <div className="flex items-center flex-wrap">
        {types.map((e, i) => {
          return (
            <div key={i}>
              <TopbarBlock
                e={e}
                filter={filter}
                cnt={
                  i === 0
                    ? data?.all
                    : i === 1
                    ? data?.mern
                    : i === 2
                    ? data?.gsap
                    : i === 3
                    ? data?.ml
                    : data?.basic
                }
                onClick={() => setFilter(e)}
              />
            </div>
          );
        })}
      </div>
      <div className="flex items-center flex-wrap">
        {[<SlMenu key="menu" />, <BsGrid key="grid" />].map((e, i) => {
          return (
            <div key={i}>
              <TopRightBlock
                e={e}
                id={"id" + i}
                filter={showType}
                setFilter={setShowType}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TopRightBlock = ({ e, filter, setFilter, id }) => {
  const [element, setElement] = useState();
  const context = useContext(Context);

  useEffect(() => {
    if (typeof document !== "undefined") {
      let el = document.querySelector(`#${id}`);
      if (el) {
        setElement(el);
      }
    }
  }, [id]);

  return (
    <div
      id={id}
      onMouseMove={(e) => {
        let x =
          normalize(
            (e?.nativeEvent?.offsetX / element?.offsetWidth) * 100,
            0,
            50,
            100
          ) / 5;
        let y =
          normalize(
            (e?.nativeEvent?.offsetY / element?.offsetHeight) * 100,
            0,
            50,
            100
          ) / 5;
        if (context?.width > 600) {
          gsap.to(`#${id} div`, {
            x: `${x}px`,
            y: `${y}px`,
          });
        }
        gsap.to(".mouse", {
          width: "25px",
          height: "25px",
          border: "none",
          background: "#1c1d21",
        });
      }}
      onMouseLeave={() => {
        gsap.to(`#${id} div`, {
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
          background: "transparent",
        });
      }}
      className="rightBlockProject opacity-0"
    >
      <div
        className={`${
          filter !== id
            ? "button-animation button-animation--skoll text-textGrey"
            : "bg-textGrey text-white"
        } overflow-hidden cursor-pointer md:my-0 my-1 ml-2 md:mr-5 text-xs md:text-2xl rounded-full`}
        onClick={() => {
          setFilter(id);
        }}
      >
        <span>
          <span
            className="w-[10vw] md:w-[4vw] flex items-center justify-center aspect-square rounded-full"
            style={{ border: "1px solid #999d9e" }}
          >
            {e}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Topbar;
