import React, { useContext } from "react";
import useLocoScroll from "./scrollConfig";
import Context from "../Context/Context";

const ScrollWrapper = ({ children }) => {
  const context = useContext(Context);
  useLocoScroll(true, context?.handleScroll);

  return <div className="mainApp">{children}</div>;
};

export default ScrollWrapper;
