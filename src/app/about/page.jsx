import React, { useContext, useEffect } from "react";
import Context from "../../Context/Context";
import useLocoScroll from "../scrollConfig";
import Footer from "../Components/Utils/Footer";
import gsap from "gsap";
import { FaLaptopCode } from "react-icons/fa";
import { ScrollTrigger } from "gsap/all";
import PersonalInfo from "../Components/Utils/PersonalInfo";
import { CgWebsite } from "react-icons/cg";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BiLogoAws } from "react-icons/bi";
import { IoIosArrowRoundDown } from "react-icons/io";
import { useLocation } from "react-router-dom";

const About = () => {
  const context = useContext(Context);
  const timeline = gsap.timeline();
  const location = useLocation();

  // useLocoScroll(true, context?.handleScroll);

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    let start = "top 80%";
    let end = "top 40%";

    timeline.fromTo(
      "#projectId span",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.05 }
    );
    if (context?.width > 600) {
      timeline.fromTo(".mainLine", { width: "0%" }, { width: "80%" });
      timeline
        .fromTo(
          "#arrowIconAbout",
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1 }
        )
        .fromTo("#mainAbout", { x: -100, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo("#mainImg", { x: 100, opacity: 0 }, { x: 0, opacity: 1 });
    } else {
      timeline.fromTo(".mainLine", { width: "0%" }, { width: "95%" });
      timeline
        .fromTo("#mainImg", { x: 100, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(
          "#arrowIconAbout",
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1 }
        )
        .fromTo("#mainAbout", { x: -100, opacity: 0 }, { x: 0, opacity: 1 });
    }

    if (context?.width > 600) {
      gsap.fromTo(
        "#mainHeading",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: "#mainHeading",
            scrub: true,
            start,
            end,
          },
        }
      );
      gsap.fromTo(
        "#aboutBlock",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: "#mainHeading",
            scrub: true,
            start,
            end,
          },
          stagger: 0.5,
        }
      );
      gsap.fromTo(
        ".image-container",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".image-container",
            scrub: true,
            start,
            end,
          },
        }
      );
      gsap.fromTo(
        ".aboutLast",
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".image-container",
            scrub: true,
            start,
            end: "top 20%",
          },
        }
      );
    }
  }, [location]);

  useEffect(() => {
    window.scroll(0, 0);
    context?.setNavColor(false);
    gsap.set("#arrowIconAbout", {
      rotate: -90,
    });
    gsap.fromTo(
      "#arrowIconAbout",
      { rotate: -90 },
      {
        rotate: -45,
        scrollTrigger: {
          trigger: "#arrowIconAbout",
          start: "top 40%",
          end: "top 20%",
          scrub: true,
          scroller: ".mainApp",
        },
      }
    );
    let doc = document.querySelector("#AboutIcon");
    ScrollTrigger.create({
      trigger: "#AboutIcon",
      start: "top 40%",
      end: "top 20%",
      onEnter: () => {
        let color = getRandomColor();
        doc.style.backgroundColor = color;
      },
      onLeave: () => {
        doc.style.backgroundColor = "#455ce8";
      },
      onEnterBack: () => {
        let color = getRandomColor();
        doc.style.backgroundColor = color;
      },
      onLeaveBack: () => {
        doc.style.backgroundColor = "#455ce8";
      },
      scroller: ".mainApp",
    });
  }, [location]);

  return (
    <div
      data-scroll-container
      className="bg-white w-full flex flex-col items-center justify-center App"
    >
      <div className="w-full mt-[25vw] md:mt-[8vw]" data-scroll-section>
        <h1
          id="projectId"
          className="h1-text text-textGrey px-5 md:px-[12vw] md:w-10/12"
        >
          {"Helping brands thrive in the digital world"
            .split("")
            .map((e, i) => {
              return <span key={i}>{e}</span>;
            })}
        </h1>
        <div className="mainLine h-[1px] mx-5 md:mx-[12vw] mx-auto bg-gray-400/50 mt-5 md:mt-16"></div>
        <div className="px-5 md:px-[12.5vw] mx-auto flex md:flex-row flex-col-reverse md:my-0 my-5 items-start justify-between">
          <div
            className="my-5 md:pb-0 pb-5 md:my-20 flex items-start"
            data-scroll
            data-scroll-speed="2"
          >
            <IoIosArrowRoundDown
              id="arrowIconAbout"
              className="text-5xl mr-5"
            />
            <h1
              id="mainAbout"
              className="w-10/12 md:w-8/12 text-textGrey text-base md:text-xl font-[400]"
            >
              I help companies with each project to make their online presence,
              I push my work to new horizons, always putting quality first.
              <br />
              <br />
              <span className="text-gray-400">Always Learning...</span>
            </h1>
          </div>
          <img
            src="/main-about.jpg"
            alt="Anekant Jain"
            className="w-full md:w-6/12"
            data-scroll
            data-scroll-speed="2"
            id="mainImg"
          />
        </div>
        <div className="py-5 md:py-10 mt-[5vw] bg-gray-200 px-6 md:px-[12vw]">
          <h1
            className="text-3xl md:text-5xl md:leading-[55px] text-textGrey md:w-8/12"
            id="mainHeading"
          >
            I can help you with ...
          </h1>
          <div className="grid md:grid-cols-3 items-start gap-x-[5vw] mt-10">
            {[
              {
                icon: <CgWebsite />,
                title: "Web Development",
                text: "I create beautiful and interactive websites using GSAP for animations and the MERN Stack for functionality. My goal is to build websites that are not only visually appealing but also highly functional, providing a seamless user experience.",
              },
              {
                icon: <GiArtificialIntelligence />,
                title: "Artificial Intelligence",
                text: "I build machine learning models that help in making predictions, recommendations, and gaining insights from data. By analyzing data, I help businesses make better decisions and understand their operations more deeply.",
              },
              {
                icon: <BiLogoAws />,
                title: "Deployment",
                text: "I deploy websites and machine learning models to the cloud, ensuring they run smoothly, reliably, and can handle lots of users. My deployment solutions are secure and efficient, bringing your projects to life on the web.",
              },
            ].map((e, i) => {
              return <Block key={i} data={e} id={i + 1} />;
            })}
          </div>
        </div>
      </div>
      <div
        className="flex md:flex-row flex-col items-start justify-between mt-10 px-5 md:px-[12vw]"
        data-scroll-section
      >
        {" "}
        <div
          className="image-container md:w-5/12"
          data-scroll
          data-scroll-speed="2"
        >
          <img src="/about.jpg" alt="Anekant Jain" />{" "}
        </div>
        <div
          onMouseMove={(e) => {
            gsap.to(".mouse", {
              width: "25px",
              height: "25px",
              border: "none",
              background: "#1c1d21",
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
          className="md:w-[55%]"
          data-scroll
          data-scroll-speed="2"
        >
          <div
            className="bg-newBlue aboutLast md:block hidden text-white p-8 text-5xl rounded-full w-fit cursor-pointer"
            id="AboutIcon"
          >
            <FaLaptopCode />
          </div>
          <h1 className="text-3xl md:text-5xl md:leading-[55px] md:mt-6 md:mb-6 mt-4 mb-2 text-textGrey w-full md:w-8/12 aboutLast">
            Full Stack Developer & ML Engineer
          </h1>
          <div className="text-textGrey md:text-xl md:w-9/12 aboutLast">
            Hi, I am Anekant Jain a Final-year undergraduate Computer Science
            Engineering student from SATI Vidisha (M.P). <br /> I have good
            hands-on experience in Full Stack Web Development technologies such
            as{" "}
            <span className="mr-2 text-newBlue">
              Next.js, React.js, Node.js, Express.js, MongoDb (MERN Stack) &
              Machine Learning technologies such as Numpy, Pandas, Matplotlib
              and it&apos;s various algorithms.
            </span>
            I have participated in 10+ Offline Web Development and Ai Hackathons
            out of which in{" "}
            <span className="text-newBlue">
              Kriyeta 2023 & SIH 2023 I became the winner
            </span>{" "}
            and in others we are the part of top 10 teams. <br /> If you want to
            talk, hit me up or just contact me at:
            <div className="mt-[5vw] md:mt-5 flex-col items-start aboutLast">
              {["anekantjainsagar@gmail.com", "+91 76920 45606"].map((e, i) => {
                return <PersonalInfo data={e} key={i} type={"about"} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Block = ({ data, id }) => {
  return (
    <div className="mb-6 md:mb-5" id="aboutBlock">
      <p className="md:text-xl text-gray-500">0{id}</p>
      <div className="line h-[1px] w-full bg-gray-400/50 my-2 md:my-2"></div>
      <h1 className="text-textGrey text-xl md:text-3xl my-1 md:my-4 font-[400] flex items-center">
        {data?.icon}
        <span className="ml-2">{data?.title}</span>
      </h1>
      <p className="md:text-lg font-[400] text-textGrey">{data?.text}</p>
    </div>
  );
};

export default About;
