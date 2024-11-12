import React, { useContext, useEffect } from "react";
import Context from "../../Context/Context";
import MainBlock from "./MainBlock";
import Topbar from "./Topbar";
import useLocoScroll from "../scrollConfig";
import Footer from "../Components/Utils/Footer";
import gsap from "gsap";

const Projects = () => {
  const context = useContext(Context);
  const { filter, setFilter, showType, setShowType } = useContext(Context);
  let types = ["All", "MERN Stack", "Gsap", "Machine Learning", "Basic"];
  const timeline = gsap.timeline();

  // useLocoScroll(true, context?.handleScroll);

  useEffect(() => {
    window.scroll(0, 0);
    timeline
      .fromTo(
        "#projectId span",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.05 }
      )
      .fromTo(
        ".leftBlockProject",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1 }
      )
      .fromTo(
        ".rightBlockProject",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1 }
      )
      .fromTo(
        ".projectPageHeading p",
        { y: 10, opacity: 0 },
        { opacity: 1, y: 0, stagger: 0.1 }
      )
      .fromTo(
        ".projectBlockPage",
        { x: 25, opacity: 0 },
        { opacity: 1, x: 0, stagger: 0.1 }
      );
  }, []);

  return (
    <div
      data-scroll-container
      className="bg-white w-full flex flex-col items-center justify-center App"
    >
      <div
        data-scroll-section
        className="w-full mt-[25vw] md:mt-[8vw] px-5 md:px-[12vw]"
      >
        <h1 id="projectId" className="h1-text text-textGrey md:w-8/12">
          {"Delivering next-level digital solutions.".split("").map((e, i) => {
            return <span key={i}>{e}</span>;
          })}
        </h1>
      </div>
      <MainBlock filter={filter} showType={showType} />
      <Footer />
    </div>
  );
};

export default Projects;
