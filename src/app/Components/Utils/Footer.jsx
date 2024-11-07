import React, { useContext, useEffect, useRef, useState } from "react";
import normalize from "./Normalize";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { IoIosArrowRoundDown } from "react-icons/io";
import BallAnimationInverted from "../Animations/BallAnimationInverted";
import SocialMedia from "./SocialMedia";
import Context from "../../../Context/Context";
import { useNavigate } from "react-router-dom";
import { animatePageOut } from "./Page-transitions";
import PersonalInfo from "./PersonalInfo";

const Footer = () => {
  const history = useNavigate();
  const context = useContext(Context);
  const svgBox = useRef(null);
  const svgRef = useRef(null);
  const svgPath = useRef(null);
  const mainFooterImg = useRef(null);
  const contactUsFooter = useRef(null);
  const arrowFooter = useRef(null);
  const copyrightFooter = useRef(null);
  const socialFooter = useRef(null);

  const moveEyes = (e) => {
    let x =
      normalize((e?.nativeEvent?.x / window.innerWidth) * 100, 0, 50, 100) / 3;
    let y =
      normalize((e?.nativeEvent?.y / window.innerHeight) * 100, 0, 50, 100) / 3;

    gsap.to(".footer-pupil-left", {
      transform: `translate(${x}%, ${y}%)`,
    });
    gsap.to(".footer-pupil-right", {
      transform: `translate(${x}%, ${y}%)`,
    });
  };

  let scroll100 = "top 100%";
  let scroll80 = "top 80%";
  let scroll60 = "top 50%";
  let scroll40 = "top 40%";
  let scroll20 = "top 20%";
  let scroll10 = "top 10%";
  let scroll0 = "top 0%";

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let margin = window.innerHeight * (25 / 100);
    if (context?.width > 600) {
      gsap.fromTo(
        svgBox?.current,
        {
          marginBottom: -margin,
        },
        {
          marginBottom: 0,
          scrollTrigger: {
            trigger: svgPath?.current,
            start: scroll100,
            end: scroll80,
            scrub: true,
            scroller: ".mainApp",
          },
        }
      );
      gsap.fromTo(
        svgPath?.current,
        {
          attr: {
            d: `M 0 0 Q 50 50 100 0 L 100 25 L 0 25 Z`,
          },
        },
        {
          attr: {
            d: `M 0 0 Q 50 0 100 0 L 100 25 L 0 25 Z`,
          },
          scrollTrigger: {
            scroller: ".mainApp",
            trigger: svgPath?.current,
            start: scroll60,
            end: scroll10,
            scrub: true,
          },
        }
      );
      gsap.to(svgBox?.current, {
        background: "#1c1d21",
        scrollTrigger: {
          scroller: ".mainApp",
          trigger: svgPath?.current,
          start: scroll10,
          end: scroll0,
          scrub: true,
        },
      });
    } else {
      gsap.set(svgBox?.current, {
        marginBottom: 0,
      });
      gsap.set(svgPath?.current, {
        attr: {
          d: `M 0 0 Q 50 0 100 0 L 100 25 L 0 25 Z`,
        },
      });
      gsap.set(svgBox?.current, {
        background: "#1c1d21",
      });
    }
  }, []);

  useEffect(() => {
    if (context?.width > 600) {
      gsap.to(mainFooterImg?.current, {
        opacity: 1,
        scrollTrigger: {
          scroller: ".mainApp",
          trigger: svgPath?.current,
          start: scroll40,
          end: scroll0,
          scrub: true,
        },
      });
      gsap.fromTo(
        contactUsFooter?.current,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            scroller: ".mainApp",
            trigger: svgPath?.current,
            start: scroll40,
            end: scroll0,
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        arrowFooter?.current,
        { opacity: 0, x: -100, y: -100 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scrollTrigger: {
            scroller: ".mainApp",
            trigger: svgPath?.current,
            start: scroll40,
            end: scroll0,
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        ".personalBlock",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          stagger: 1,
          scrollTrigger: {
            scroller: ".mainApp",
            trigger: svgPath?.current,
            start: scroll20,
            end: scroll0,
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        copyrightFooter?.current,
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          stagger: 1,
          scrollTrigger: {
            scroller: ".mainApp",
            trigger: svgPath?.current,
            start: scroll10,
            end: scroll0,
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        socialFooter?.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          stagger: 1,
          scrollTrigger: {
            scroller: ".mainApp",
            trigger: svgPath?.current,
            start: scroll10,
            end: scroll0,
            scrub: true,
          },
        }
      );
    } else {
      gsap.set(mainFooterImg?.current, {
        opacity: 1,
      });
      gsap.set(contactUsFooter?.current, {
        opacity: 1,
        scale: 1,
      });
      gsap.set(arrowFooter?.current, {
        opacity: 1,
        x: 0,
        y: 0,
      });
      gsap.set(".personalBlock", {
        opacity: 1,
        y: 0,
        stagger: 1,
      });
      gsap.set(copyrightFooter?.current, {
        opacity: 1,
        y: 0,
        stagger: 1,
      });
      gsap.set(socialFooter?.current, {
        opacity: 1,
        y: 0,
        stagger: 1,
      });
    }
    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      id="footer"
      className="overflow-hidden h-fit md:h-[100vh] mt-[5vw]"
      onMouseMove={(e) => {
        moveEyes(e);
        gsap.to(".mouse", {
          width: "15px",
          height: "15px",
          border: "none",
          background: "#fff",
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
      data-scroll-section
    >
      <div
        id="SvgBox"
        ref={svgBox}
        className="-mb-[25vw] md:block hidden bg-white overflow-hidden"
      >
        <div className="relative w-full h-[15vh] ">
          <svg
            id="svg"
            ref={svgRef}
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 25"
            preserveAspectRatio="none"
          >
            <path
              ref={svgPath}
              d={`M 0 0 Q 50 50 100 0 L 100 25 L 0 25 Z`}
              fill="#1c1d21"
            />
          </svg>
        </div>
      </div>
      <div className="h-fit md:h-[85vh] w-[100vw] flex justify-between items-center bg-textGrey text-white flex-col px-5 md:px-[10vw] relative z-10">
        <div className="w-full flex flex-col mt-[10vw] md:-mt-[1vw]">
          <div className="w-full flex items-end justify-between">
            <div className="flex flex-col items-start font-medium">
              <div className="flex items-center">
                <div
                  id="mainFooterImg"
                  ref={mainFooterImg}
                  className="w-[16vw] md:w-[5vw] bg-darkGrey rounded-full opacity-0 aspect-square overflow-hidden pt-3"
                >
                  <img
                    src={"/data/bg2.png"}
                    alt="Anekant Jain"
                    width={100}
                    height={100}
                    className="w-full scale-110 aspect-square object-cover object-top relative z-0"
                  />
                </div>
                <h1 className="ml-5 md:ml-7 h1-text">Let&apos;s work</h1>
              </div>
              <h1 className="md:mt-2 h1-text">together</h1>
            </div>
            <div ref={arrowFooter}>
              <IoIosArrowRoundDown
                id="arrowFooter"
                className="text-7xl md:block hidden rotate-[45deg]"
              />
            </div>
          </div>
          <div
            className="h-[1px] bg-gray-200/30 w-full relative mt-[6vw] md:mt-[5vw]"
            id="contactUsFooter"
            ref={contactUsFooter}
          >
            <BallAnimationInverted
              className="w-[23vw] md:w-[10vw] h-[23vw] md:h-[10vw] absolute right-0 md:right-20 top-1/2 -translate-y-1/2"
              ballSize={
                "w-[23vw] md:w-[10vw] h-[23vw] md:h-[10vw] text-base md:text-lg"
              }
              text="Get in Touch"
              cnt={3}
              onClick={(e) => {
                context?.setScrollPosition(0);
                animatePageOut("/contact", history, "Contact");
              }}
            />
          </div>
          <div className="mt-[5vw] md:mt-[2vw] flex md:flex-row flex-col items-start md:items-center">
            <div className="w-9/12 mb-2 md:hidden">
              <SocialMedia />
            </div>
            {["bytedocker@gmail.com", "+91 81970 26959"].map((e, i) => {
              return <PersonalInfo data={e} key={i} />;
            })}
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 text-lg w-[80vw] flex items-center justify-between">
          <p id="copyrightFooter" ref={copyrightFooter}>
            Built by ©Anekantjainsagar
          </p>
          <div id="socialFooter" ref={socialFooter} className="md:block hidden">
            <SocialMedia />
          </div>
        </div>
        <div className="w-[80vw] md:w-[25vw] relative">
          <img
            src={"/toon.png"}
            alt="Toon png"
            className="w-full z-20 relative contrast-100"
            width={1000}
            height={1000}
          />
          <div className="absolute w-full h-full md:h-[95%] top-0 flex items-center justify-center gap-[25px] md:gap-[45px] ml-2 md:ml-4 z-10">
            <div className="footer-avatar-eye footer-left-eye">
              <div className="footer-pupil footer-pupil-left"></div>
            </div>
            <div className="footer-avatar-eye footer-right-eye">
              <div className="footer-pupil footer-pupil-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
