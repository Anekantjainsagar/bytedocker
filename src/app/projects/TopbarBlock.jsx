import { useContext, useEffect, useState } from "react";
import normalize from "../Components/Utils/Normalize";
import gsap from "gsap";
import Context from "../../Context/Context";

const TopbarBlock = ({ e, filter, onClick, cnt }) => {
  let id = e?.replaceAll(" ", "space");
  const context = useContext(Context);
  const [element, setElement] = useState();

  useEffect(() => {
    if (typeof document !== "undefined") {
      let el = document.querySelector(`#${id}`);
      if (el) {
        setElement(el);
      }
    }
  }, [e]);

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
      onMouseLeave={(e) => {
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
      onClick={() => {
        onClick();
      }}
      className="relative leftBlockProject md:mt-0 my-1"
    >
      <span className="absolute z-[100] right-5 md:right-12 top-0.5 md:top-2 text-gray-700 text-xs md:text-sm">
        {cnt}
      </span>
      <div
        className={`${
          filter != e
            ? "button-animation button-animation--skoll text-textGrey"
            : "bg-textGrey text-white"
        } overflow-hidden cursor-pointer px-5 md:px-10 py-2.5 md:py-4 rounded-full mr-2 md:mr-5 whitespace-nowrap text-xs md:text-xl`}
        style={{ border: "1px solid #999d9e" }}
      >
        <span>
          <span>{e}</span>
        </span>
      </div>
    </div>
  );
};

export default TopbarBlock;
