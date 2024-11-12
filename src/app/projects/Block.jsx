import gsap from "gsap";
import { useContext } from "react";
import Context from "../../Context/Context";
import { animatePageOut } from "../Components/Utils/Page-transitions";
import { useNavigate } from "react-router-dom";

const Block = ({ data, index, total }) => {
  let id = data?.name?.replaceAll(" ", "space")?.slice(0, 10);
  const { colors, width } = useContext(Context);
  const history = useNavigate();
  function setInnerHtml() {
    let mouseElements;
    if (typeof document !== "undefined") {
      mouseElements = document.querySelectorAll(".mouse");
    }
    mouseElements.forEach((element) => {
      element.innerHTML = `<div class='relative'><img src=${data?.img} alt='Project img' /><button class='newBtn'>View</button></div>`;
    });
  }
  function removeInnerHtml() {
    let mouseElements;
    if (typeof document !== "undefined") {
      mouseElements = document.querySelectorAll(".mouse");
    }
    mouseElements.forEach((element) => {
      element.innerHTML = "";
    });
  }

  return (
    <div className="w-full flex flex-col items-center justify-center projectBlockPage">
      <BigLine />
      <div
        id={id}
        className="grid w-full md:w-[76vw] px-4 md:px-2 py-8 text-textGrey text-xs md:text-xl md:font-medium items-center cursor-pointer"
        style={{ gridTemplateColumns: "100%" }}
        onMouseMove={(e) => {
          if (width > 600) {
            const randomNumber = Math.floor(Math.random() * colors?.length);
            gsap.to(".mouse", {
              width: "500px",
              height: "350px",
              border: "none",
              background: colors[randomNumber],
              borderRadius: 0,
              padding: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              onComplete: setInnerHtml,
            });
          }
          gsap.to(`#${id}`, { opacity: 0.5, scaleX: 1.025 });
        }}
        onMouseLeave={(e) => {
          if (width > 600) {
            gsap.to(".mouse", {
              width: "25px",
              height: "25px",
              border: "1px solid #000",
              background: "transparent",
              borderRadius: "50%",
              padding: 0,
              display: "block",
              onComplete: removeInnerHtml,
            });
            gsap.to(`#${id}`, { opacity: 1, scaleX: 1 });
          }
        }}
        onClick={(e) => {
          let id = data?.title?.toLowerCase().replaceAll(" ", "-");
          animatePageOut(
            `/projects/${id}`,
            history,
            data?.title?.slice(0, 50) + "..."
          );
          if (width > 600) {
            gsap.to(".mouse", {
              width: "25px",
              height: "25px",
              border: "1px solid #000",
              background: "transparent",
              borderRadius: "50%",
              padding: 0,
              display: "block",
              onComplete: removeInnerHtml,
            });
          }
        }}
      >
        <h1 className="md:text-3xl text-lg font-semibold md:font-normal md:pr-0 pr-3">
          {data?.title}
        </h1>
      </div>
      {index == total - 1 && <BigLine />}
    </div>
  );
};

const BigLine = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[95%] md:w-[88%] mx-auto h-[1px] bg-gray-500/20"></div>
    </div>
  );
};

export default Block;
