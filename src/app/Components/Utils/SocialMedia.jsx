import React from "react";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillYoutube,
  AiFillMail,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

const SocialMedia = ({ color }) => {
  return (
    <div className="flex items-center md:mt-2 text-[10vw] flex-wrap md:text-[2.5vw]">
      <AiFillLinkedin
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.linkedin.com/in/anekantjainsagar");
        }}
        className={`md:mr-4 mr-3 bg-textGrey md:p-2 p-1.5 rounded-full cursor-pointer ${
          color === "grey" ? "greyHover" : "oceanHover"
        }`}
        color={color === "grey" ? "#383838" : "#455ce8"}
      />
      <AiFillGithub
        onClick={(e) => {
          e.preventDefault();
          window.open("https://github.com/Anekantjainsagar");
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
            "https://instagram.com/ig.anekant?igshid=NTc4MTIwNjQ2YQ=="
          );
        }}
        className={`md:mr-4 mr-3 bg-textGrey md:p-2 p-1.5 rounded-full cursor-pointer ${
          color === "grey" ? "greyHover" : "oceanHover"
        }`}
        color={color === "grey" ? "#383838" : "#455ce8"}
      />
      <AiFillYoutube
        onClick={(e) => {
          e.preventDefault();
          window.open("https://youtube.com/@ajlearning8494");
        }}
        className={`md:mr-4 mr-3 bg-textGrey md:p-2 p-1.5 rounded-full cursor-pointer ${
          color === "grey" ? "greyHover" : "oceanHover"
        }`}
        color={color === "grey" ? "#383838" : "#455ce8"}
      />
      <AiFillTwitterSquare
        onClick={(e) => {
          e.preventDefault();
          window.open("https://twitter.com/Anekant28446852");
        }}
        className={`md:mr-4 mr-3 bg-textGrey md:p-2 p-1.5 rounded-full cursor-pointer ${
          color === "grey" ? "greyHover" : "oceanHover"
        }`}
        color={color === "grey" ? "#383838" : "#455ce8"}
      />
      <AiFillMail
        onClick={(e) => {
          e.preventDefault();
          window.open("mailto:bytedocker@gmail.com");
        }}
        className={`md:mr-4 mr-3 bg-textGrey md:p-2 p-1.5 rounded-full cursor-pointer ${
          color === "grey" ? "greyHover" : "oceanHover"
        }`}
        color={color === "grey" ? "#383838" : "#455ce8"}
      />
      <AiFillFacebook
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.facebook.com/anekant.jain.338/");
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
