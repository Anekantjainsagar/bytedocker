import gsap from "gsap";
import { useEffect, useState } from "react";
import normalize from "./Normalize";

const PersonalInfo = ({ data, type }) => {
  let id = data
    .replaceAll(" ", "")
    .replaceAll("+", "plus")
    .replaceAll(".", "dot")
    .replaceAll("@", "at");
  let idTitle = id + "title";

  const [element, setElement] = useState();

  useEffect(() => {
    let el;
    el = document.getElementById(`${id}`);
    if (el) {
      setElement(el);
    }
  }, []);

  return (
    <div
      onMouseMove={(e) => {
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
        gsap.to(`#${idTitle}`, {
          x: `${x}px`,
          y: `${y}px`,
        });
      }}
      onMouseLeave={(e) => {
        gsap.to(`#${idTitle}`, {
          x: 0,
          y: 0,
          rotate: 0,
          ease: "elastic.out(1,0.3)",
        });
      }}
      id={id}
      className={`${
        type ? "border-gray-400 mt-[0.5vw]" : "border-gray-200/30"
      } md:mb-0 mb-2 border w-fit ${
        type ? "px-5 md:px-6 py-1.5 md:py-3" : "px-4 md:px-10 py-1.5 md:py-5"
      } whitespace-nowrap cursor-pointer text-sm md:text-xl rounded-full mr-5 ${
        type ? "" : "personalBlock"
      }`}
    >
      <p id={idTitle}>{data}</p>
    </div>
  );
};

export default PersonalInfo;
