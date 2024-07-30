import React, { useEffect } from "react";
import { animatePageIn } from "./app/Components/Utils/Page-transitions";

const TransitionTemplate = ({ children }) => {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div
        id="transition-element"
        className="w-screen h-screen bg-textGrey z-[10000] fixed top-0 left-0 flex items-center justify-center"
      >
        <div className="w-[5px] md:w-[10px] h-[5px] md:h-[10px] rounded-full bg-white mr-2 md:mr-4"></div>
        <div
          id="transition-content"
          className="text-white text-center text-2xl md:text-4xl"
        ></div>
      </div>
      {children}
    </div>
  );
};

export default TransitionTemplate;
