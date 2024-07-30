import React, { useContext, useEffect } from "react";
import Context from "../../Context/Context";
import useLocoScroll from "../scrollConfig";
import Footer from "../Components/Utils/Footer";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import { IoPinSharp } from "react-icons/io5";

let timelineData = [
  {
    date: "2023-04-09",
    img: "/achievements/Wittyhacks 3.0.jpg",
    title: "Top 10 Teams",
    name: "Wittyhacks 3.0, Indore",
  },
  {
    date: "2023-04-09",
    img: "/achievements/Raj it day.jpg",
    title: "Participant",
    name: "Raj IT Day, Jaipur",
  },
  {
    date: "2024-02-19",
    img: "/achievements/Kriyeta 2.0.jpg",
    title: "Top 10 Teams",
    name: "Kriyeta 2.0, Indore",
  },
  {
    date: "2024-06-15",
    img: "/achievements/Kriyeta 3.0.jpg",
    title: "Participant",
    name: "Kriyeta 3.0, Indore",
  },
  {
    date: "2023-02-23",
    img: "/achievements/codebite 2.jpg",
    title: "Participant",
    name: "Codebite, Bhopal",
  },
  {
    date: "2023-11-10",
    img: "/achievements/devfest.jpg",
    title: "Participant",
    name: "Devfest, Bhopal",
  },
];
timelineData = timelineData.sort((a, b) => new Date(b.date) - new Date(a.date));

const bigAchievements = [
  {
    date: "2023-12-23",
    img: "/achievements/sih.jpeg",
    title: "Hackathon Winner 2023",
    name: "Smart India Hackathon, Chennai",
  },
  {
    date: "2024-02-03",
    img: "/achievements/nec 2024.jpg",
    title: "AIR 12th 2024",
    name: "NEC IITB, Bombay",
  },
  {
    date: "2023-06-11",
    img: "/achievements/Kriyeta 1.0.jpg",
    title: "Hackathon Winner 2023",
    name: "Kriyeta 1.0, Indore",
  },
];

const Hackathons = () => {
  const context = useContext(Context);
  const timeline = gsap.timeline();
  const location = useLocation();
  // useLocoScroll(true, context?.handleScroll);

  useEffect(() => {
    timeline.fromTo(
      "#achieveIdText span",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.05 }
    );
    if (context?.width > 600) {
      timeline.fromTo(".mainLineAchieve", { width: "0%" }, { width: "80%" });
    } else {
      timeline.fromTo(".mainLineAchieve", { width: "0%" }, { width: "95%" });
    }
    if (context?.width > 600) {
      gsap.fromTo(
        `#achievement`,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.4,
          scrollTrigger: {
            trigger: "#achievement",
            scrub: true,
            start: "top 40%",
            end: "top -100%",
            scroller: ".mainApp",
          },
        }
      );
    } else {
      timeline.fromTo(
        `#achievement`,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.4,
        }
      );
    }
  }, [location]);

  useEffect(() => {
    window.scroll(0, 0);
    context?.setNavColor(false);
  }, [location]);

  return (
    <div
      data-scroll-container
      className="bg-white w-full flex flex-col items-center justify-center App"
    >
      <div className="w-full mt-[25vw] md:mt-[8vw]" data-scroll-section>
        <h1
          id="achieveIdText"
          className="h1-text text-textGrey px-5 md:px-[12vw] md:w-10/12"
        >
          {"Innovating at the Forefront of Hackathons".split("").map((e, i) => {
            return <span key={i}>{e}</span>;
          })}
        </h1>
        <div className="mainLineAchieve h-[1px] mx-5 md:mx-[12vw] mx-auto bg-gray-400/50 mt-5 md:mt-16"></div>
        <div
          className="grid md:grid-cols-2 gap-5 mx-5 md:mx-[12vw] mt-5 md:mt-14"
          id="hackathonContainer"
        >
          {[...bigAchievements, ...timelineData]?.map((e, i) => {
            return (
              <div
                key={i}
                id={"achievement"}
                className={`border ${
                  e?.title.includes("Winner") || e?.title.includes("AIR")
                    ? "border-newBlue"
                    : e?.title.includes("Top")
                    ? "border-newBlue/50"
                    : ""
                } p-2 w-full flex flex-col h-fit cursor-pointer items-start rounded-md relative`}
                onMouseMove={(e) => {
                  gsap.to(".mouse", {
                    width: "30px",
                    height: "30px",
                    border: "none",
                    background: "#000",
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(".mouse", {
                    width: "25px",
                    height: "25px",
                    background: "transparent",
                    border: "1px solid #000",
                  });
                }}
              >
                {(e?.title.includes("Winner") || e?.title.includes("AIR")) && (
                  <div className="absolute -right-3 md:-right-5 -top-3 md:-top-5 text-newBlue text-3xl md:text-5xl rotate-45">
                    <IoPinSharp />
                  </div>
                )}
                <img
                  src={e?.img}
                  alt={e?.img?.src}
                  className="w-full h-[35%] md:h-[45vh] object-cover object-center rounded-md"
                />
                <div className="mt-1 flex items-start justify-between w-full">
                  <div className="w-9/12">
                    <h1 className="text-xl md:text-4xl text-textGrey">
                      {e?.title}
                    </h1>
                    <p className="text-base md:text-2xl text-newBlue md:py-1">
                      {e?.name}
                    </p>
                  </div>
                  <p className="text-sm w-2/12 text-end md:text-xl font-[400] text-gray-500">
                    {new Date(e?.date).toString().slice(4, 16)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hackathons;
