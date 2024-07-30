import gsap from "gsap";
import React, { useContext, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import projects from "../../data/projects";
import Block from "../../projects/Block";
import { animatePageOut } from "../Utils/Page-transitions";
import TopbarBlock from "../../projects/TopbarBlock";
import { useNavigate } from "react-router-dom";
import Context from "../../../Context/Context";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
  const history = useNavigate();
  const context = useContext(Context);

  useEffect(() => {
    let start = "top 75%";
    let end = "top 30%";

    if (context?.width > 600) {
      gsap.fromTo(
        "#projectIdBlock",
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: "#projectContainer",
            scrub: true,
            start,
            end,
            scroller: ".mainApp",
          },
        }
      );
      gsap.fromTo(
        "#moreWork",
        { opacity: 0, scale: 0 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: "#projectContainer",
            scrub: true,
            start,
            end,
            scroller: ".mainApp",
          },
        }
      );
    }
  }, []);

  return (
    <div
      data-scroll-section
      id="projectContainer"
      className="py-[8vw] md:py-[2vw] flex flex-col items-center px-5 md:px-[10vw]"
    >
      {projects
        .slice(10)
        .reverse()
        ?.map((e, i) => {
          return (
            <div key={i} id={"projectIdBlock"} className="w-full">
              <Block data={e} key={i} index={i} total={projects?.length} />
            </div>
          );
        })}
      <div className="mt-4 md:mt-10" id="moreWork">
        <TopbarBlock
          e={"More work"}
          onClick={() => {
            animatePageOut("/projects", history, "Projects");
          }}
          cnt={projects?.length}
        />
      </div>
    </div>
  );
};

export default Projects;
