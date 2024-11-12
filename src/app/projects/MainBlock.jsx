import React, { useContext } from "react";
import projects from "../data/projects";
import Block from "./Block";
import GridBlock from "./GridBlock";
import Context from "../../Context/Context";

const MainBlock = ({ filter, showType }) => {
  const { width } = useContext(Context);
  return (
    <div
      className={`px-2 md:mb-0 mb-[10vw] mt-[5vw] md:mt-[4vw] ${
        showType == "id1"
          ? "grid grid-cols-1 md:grid-cols-2 gap-8 md:px-0 px-5 md:w-[76vw]"
          : "w-full"
      }`}
      data-scroll-section
    >
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
