import React, { useContext, useEffect, useState } from "react";
import Context from "../Context/Context";
import useLocoScroll from "../useLocoScroll";
import projects from "@/app/data/projects";
import Block from "./Block";
import Topbar from "./Topbar";
import GridBlock from "./GridBlock";

const Projects = () => {
  const context = useContext(Context);
  useLocoScroll(true, context?.handleScroll);
  const { filter, setFilter, showType, setShowType } = useContext(Context);
  let types = ["All", "MERN Stack", "Gsap", "Machine Learning", "Basic"];

  useEffect(() => {
    context?.setNavColor(false);
  }, []);

  return (
    <div
      ref={context?.mainRef}
      data-scroll-section
      className="bg-white w-full flex flex-col items-center justify-center my-[5vw]"
    >
      <div className="w-full mt-[8vw] px-[12vw]">
        <h1 className="h1 text-textGrey w-8/12">
          Creating next level digital products
        </h1>
      </div>
      {/* <div className="h-[100vh] bg-textGrey w-full">lreom</div> */}
      <Topbar
        filter={filter}
        setFilter={setFilter}
        showType={showType}
        setShowType={setShowType}
        types={types}
      />
      <div
        className={`px-2 mt-[2vw] ${
          showType == "id1" ? "grid grid-cols-2 gap-8 w-[76vw]" : "w-full"
        }`}
      >
        {showType !== "id1" && (
          <div
            className="grid w-full text-gray-500/80 mb-8 px-[12vw]"
            style={{ gridTemplateColumns: "35% 25% 20% 20%" }}
          >
            <p>Project Name</p>
            <p>Service</p>
            <p>Year</p>
            <p>Time Took</p>
          </div>
        )}
        {projects
          .slice(0)
          .reverse()
          ?.filter((e) => {
            if (filter != "All") {
              if (e?.type?.toLowerCase().includes(filter?.toLowerCase())) {
                return e;
              }
            } else {
              return e;
            }
          })
          ?.map((e, i) => {
            return showType == "id0" ? (
              <Block data={e} key={i} index={i} total={projects?.length} />
            ) : (
              <GridBlock data={e} key={i} index={i} total={projects?.length} />
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
