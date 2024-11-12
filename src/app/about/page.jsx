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
          {"Helping Brands Succeed Digitally".split("").map((e, i) => {
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
              className="w-10/12 md:w-8/12 text-textGrey text-xl md:text-3xl font-[400]"
            >
              Welcome to Bytedocker, your trusted technology partner dedicated
              to transforming businesses through powerful digital solutions. We
              specialize in designing and developing ERP and CRM systems,
              creating seamless e-commerce platforms, and crafting customized
              applications for clients across various industries. At Bytedocker,
              innovation meets execution to deliver results that drive growth,
              efficiency, and customer satisfaction.
              <br />
              <br />
              Our team is passionate about solving complex challenges with
              user-centered designs and scalable solutions. With active clients,
              committed interns, and partnerships with emerging brands, we
              continue to expand our reach and capabilities.
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
            Mission
          </h1>
          <p className="text-xl">
            Our Mission To deliver high-quality, affordable technology solutions
            that address our client&apos;s unique needs, combining technical
            expertise with a deep understanding of industry trends to create
            products that are both functional and future-ready. By nurturing
            talent and fostering innovation, we aim to be a catalyst for digital
            transformation across industries.
          </p>
          <h1
            className="text-3xl md:text-5xl mt-5 md:leading-[55px] text-textGrey md:w-8/12"
            id="mainHeading"
          >
            Vision
          </h1>
          <p className="text-xl">
            Our Vision To be the premier technology partner for businesses
            worldwide, empowering them to achieve operational excellence and
            expand their digital presence through cutting-edge solutions that
            inspire growth and innovation.
          </p>
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
          <div className="text-textGrey md:text-xl md:w-9/12 aboutLast mt-5">
            <div className="mt-[5vw] md:mt-7 flex-col items-start aboutLast gap-y-5">
              {[
                "Corporate office 1: Residency Road, Bengaluru 560025",
                "Corporate office 2: Bull Temple Road, Basavanagudi, Bengaluru 560019",
                "Registered Office: Kanakapura Road, Bengaluru 560062",
                "+91 99809 36762",
                "management@bytedocker.com",
              ].map((e, i) => {
                return (
                  <div key={i} className="mb-7">
                    <PersonalInfo data={e} type={"about"} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
