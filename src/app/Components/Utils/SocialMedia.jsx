import React from "react";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const SocialMedia = ({ color }) => {
  return (
    <div className="flex items-center md:mt-2 text-[10vw] flex-wrap md:text-[2.5vw]">
      <AiFillLinkedin
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.linkedin.com/company/bytedocker/");
        }}
        className={`md:mr-4 mr-3 bg-textGrey md:p-2 p-1.5 rounded-full cursor-pointer ${
          color === "grey" ? "greyHover" : "oceanHover"
        }`}
        color={color === "grey" ? "#383838" : "#455ce8"}
      />
      <AiFillInstagram
        onClick={(e) => {
          e.preventDefault();
          window.open(
            "https://www.instagram.com/bytedocker?igsh=b3J3d3BqNHF4NDVi"
          );
        }}
        className={`md:mr-4 mr-3 bg-textGrey md:p-2 p-1.5 rounded-full cursor-pointer ${
          color === "grey" ? "greyHover" : "oceanHover"
        }`}
        color={color === "grey" ? "#383838" : "#455ce8"}
      />
    </div>
  );
};

export default SocialMedia;
