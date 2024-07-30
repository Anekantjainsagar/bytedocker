import React, { useContext, useEffect } from "react";
import BallAnimation from "../Animations/BallAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { animatePageOut } from "../Utils/Page-transitions";
import Context from "../../../Context/Context";
import { useNavigate } from "react-router-dom";

const About = () => {
  const history = useNavigate();
  const context = useContext(Context);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let start = "top 80%";
    let end = "top 50%";
    if (context?.width > 600) {
      gsap.fromTo(
        "#leftAboutSection span",
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          scrollTrigger: {
            trigger: "#leftAboutSection",
            start,
            end,
            scrub: true,
            scroller: ".mainApp",
          },
        }
      );
      gsap.fromTo(
        "#rightAboutSection",
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: "#leftAboutSection",
            start,
            end,
            scrub: true,
            scroller: ".mainApp",
          },
        }
      );
      gsap.fromTo(
        "#aboutSectionBall",
        { opacity: 0, scale: 0, y: 100 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          scrollTrigger: {
            trigger: "#leftAboutSection",
            start,
            end,
            scrub: true,
            scroller: ".mainApp",
          },
        }
      );
      gsap.fromTo(
        "#aboutSectionBall",
        { y: 120 },
        {
          y: 0,
          scrollTrigger: {
            trigger: "#leftAboutSection",
            start,
            end: "top 0%",
            scrub: true,
            scroller: ".mainApp",
          },
        }
      );
    } else {
    }
  }, []);

  return (
    <div
      data-scroll-section
      className="bg-white px-5 md:px-[12vw] pt-[10vw] md:pt-[5vw] pb-[8vw] md:pb-[15vw]"
    >
      <div className="flex md:flex-row flex-col items-start justify-between">
        <h1
          className="w-full md:w-8/12 md:block hidden text-xl md:text-4xl md:leading-[50px]"
          id="leftAboutSection"
        >
          {"Skilled Full Stack Developer, SDE 1 at consciousleap, Intern at ProwizAnalytics, Freelancer at Trubuddies, Having 2 Years of Experience, Learning Machine Learning."
            .split(" ")
            .map((word, i) => {
              switch (word) {
                case "consciousleap,":
                  return (
                    <Block
                      key={i}
                      word={word}
                      link={"https://consciousleap.co"}
                    />
                  );
                case "ProwizAnalytics,":
                  return (
                    <Block key={i} word={word} link={"https://prowiz.io/"} />
                  );
                case "Trubuddies,":
                  return (
                    <Block
                      key={i}
                      word={word}
                      link={"https://trubuddies.com"}
                    />
                  );
                default:
                  return (
                    <span key={i} className="mr-2">
                      {word}
                    </span>
                  );
              }
            })}
        </h1>
        <h1
          className="w-full md:w-8/12 md:hidden text-xl md:text-4xl md:leading-[50px]"
          id="leftAboutSection"
        >
          Skilled Full Stack Developer, SDE 1 at{" "}
          <span
            className="text-newBlue"
            onClick={(e) => {
              window.open("https://consciousleap.co");
            }}
          >
            consciousleap
          </span>
          , Intern at
          <span
            className="text-newBlue ml-1"
            onClick={(e) => {
              window.open("https://prowiz.io");
            }}
          >
            Prowiz Analytics
          </span>
          , Freelancer at{" "}
          <span
            className="text-newBlue"
            onClick={(e) => {
              window.open("https://trubuddies.com");
            }}
          >
            Trubuddies
          </span>
          , Having 2 Years of Experience, Learning Machine Learning.
        </h1>
        <p
          className="w-full md:text-base text-sm md:mt-0 mt-1 md:w-3/12"
          id="rightAboutSection"
        >
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </p>
      </div>
      <div
        className="md:absolute right-[12vw] flex items-end justify-end md:mt-0 mt-5 z-30"
        id="aboutSectionBall"
      >
        <BallAnimation
          className="w-[23vw] md:w-[10vw] h-[23vw] md:h-[10vw]"
          ballSize={"w-[23vw] md:w-[10vw] h-[23vw] md:h-[10vw] md:text-2xl"}
          text="About me"
          cnt={2}
          onClick={(e) => {
            context?.setScrollPosition(0);
            animatePageOut("/about", history, "About");
          }}
        />
      </div>
    </div>
  );
};

const Block = ({ word, link }) => {
  return (
    <span
      onMouseMove={(e) => {
        gsap.to(".mouse", {
          width: "70px",
          height: "70px",
          border: "5px solid #E6F0FF",
        });
      }}
      onMouseLeave={(e) => {
        gsap.to(".mouse", {
          width: "25px",
          height: "25px",
          border: "1px solid #000",
        });
      }}
      onClick={(e) => {
        window.open(link);
      }}
      className="text-newBlue mr-2 break-words cursor-pointer relative z-40"
    >
      {word == "ProwizAnalytics," ? (
        <>
          <span className="mr-2">Prowiz</span>
          <span>Analytics</span>
        </>
      ) : (
        word.slice(0, word?.length - 1)
      )}
      ,
    </span>
  );
};

export default About;
