import React, { useContext } from "react";
import projects from "../data/projects";
import Block from "./Block";
import GridBlock from "./GridBlock";
import Context from "../../Context/Context";

const MainBlock = ({ filter, showType }) => {
  const { width } = useContext(Context);
  return (
    <div
      className={`px-2 md:mb-0 mb-[10vw] mt-[5vw] md:mt-[2vw] ${
        showType == "id1"
          ? "grid grid-cols-1 md:grid-cols-2 gap-8 md:px-0 px-5 md:w-[76vw]"
          : "w-full"
      }`}
      data-scroll-section
    >
      {showType !== "id1" && (
        <div
          className="grid w-full text-gray-500/80 mb-3 md:mb-8 px-5 md:px-[12vw] projectPageHeading text-xs md:text-base"
          style={
            width > 600
              ? { gridTemplateColumns: "35% 25% 20% 20%" }
              : { gridTemplateColumns: "48% 32% 20%" }
          }
        >
          <p>Project Name</p>
          <p>Service</p>
          <p className="md:block hidden">Year</p>
          <p className="md:pl-0 pl-2"> Time Took</p>
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
  );
};

export default MainBlock;
