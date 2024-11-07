import React, { useContext, useEffect, useState } from "react";
import gsap from "gsap";
import normalize from "./Normalize";
import BallAnimation from "../Animations/BallAnimation";
import { AiOutlineClose } from "react-icons/ai";
import { animatePageOut } from "../Utils/Page-transitions";
import { useNavigate } from "react-router-dom";
import Context from "../../../Context/Context";
import { RiMenu3Fill } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const { tl, scrollPosition, openMenu, setOpenMenu, navColor } =
    useContext(Context);
  let timeline = gsap.timeline({ duration: 0.5 });
  const history = useNavigate();
  let threshold = 10;
  let routes = [
    { name: "Services", route: "/projects" },
    { name: "Clients", route: "/experience" },
    { name: "About", route: "/about" },
    { name: "Contact", route: "/contact" },
  ];

  const animateMenu = (timeline) => {
    timeline.fromTo(
      ".navigationHeading",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.2"
    );
    timeline.fromTo("#line", { opacity: 0 }, { opacity: 1 });
    timeline.fromTo(
      ".navItems",
      { x: 20, opacity: 0 },
      { opacity: 1, x: 0, stagger: 0.1 },
      "-=0.5"
    );
  };

  useEffect(() => {
    tl.fromTo(
      "#logo",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out" }
    );
    tl.fromTo(
      ".navItem",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    if (openMenu) {
      timeline.to("#menuBar", {
        right: 0,
      });
      timeline.to(
        "#vSvg path",
        {
          attr: { d: "M 0 0 Q 0 50 0 100 L 25 100 L 25 0 Z" },
        },
        "-=0.25"
      );
      animateMenu(timeline);
    } else {
      if (window.innerWidth > 600) {
        gsap.to("#menuBar", {
          right: "-35vw",
          duration: 0.5,
        });
      } else {
        gsap.to("#menuBar", {
          right: "-70vw",
          duration: 0.5,
        });
      }
      gsap.to("#vSvg path", {
        attr: { d: "M 0 0 Q 50 50 0 100 L 25 100 L 25 0 Z" },
        duration: 0.5,
      });
      if (window.innerWidth > 600) {
        // console.log("Working ", scrollPosition, threshold);
        if (scrollPosition > threshold) {
          gsap.to("#routes, #logoBox", {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to("#navMenu", {
            opacity: 1,
            scale: 1,
            rotate: 360,
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to("#routes, #logoBox", {
            display: "none",
            ease: "power2.out",
          });
        } else {
          gsap.to("#routes, #logoBox", {
            display: "flex",
            ease: "power2.out",
          });
          gsap.to("#routes, #logoBox", {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to("#navMenu", {
            opacity: 0,
            scale: 0,
            rotate: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      } else {
        gsap.to("#logoBox", {
          display: "flex",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to("#navMenu", {
          opacity: 1,
          scale: 1,
          rotate: 360,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    }
  }, [scrollPosition, openMenu]);

  const [element, setElement] = useState();

  useEffect(() => {
    let el;
    el = document.getElementById(`logoBox`);
    if (el) {
      setElement(el);
    }
  }, []);

  return (
    <div className="w-full flex items-center justify-center bg-transparent">
      <div className="w-full md:pr-10 flex items-center md:h-fit h-[10vh] justify-between md:border-blur-none backdrop-blur-sm z-40 fixed top-0 left-0">
        <div
          onMouseMove={(e) => {
            let x =
              normalize(
                (e?.nativeEvent?.offsetX / element.offsetWidth) * 100,
                0,
                50,
                100
              ) / 5;
            let y =
              normalize(
                (e?.nativeEvent?.offsetY / element.offsetHeight) * 100,
                0,
                50,
                100
              ) / 5;
            gsap.to(`#logo`, {
              x: `${x}px`,
              y: `${y}px`,
            });
            gsap.to(".mouse", {
              width: "100px",
              height: "100px",
              border: navColor ? "4px solid #fff" : "4px solid #1c1d21",
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(`#logo`, {
              x: 0,
              y: 0,
              rotate: 0,
              ease: "elastic.out(1,0.3)",
              duration: 1,
            });
            gsap.to(".mouse", {
              width: "25px",
              height: "25px",
              border: "1px solid #000",
            });
          }}
          id="logoBox"
          className="px-4 md:px-12 py-3"
        >
          <h1
            id="logo"
            onClick={() => {
              animatePageOut("/", history, "Home");
            }}
            className={`text-3xl ${
              navColor ? "text-white" : "text-black"
            } font-semibold montserrat_font`}
          >
            BYTEDOCKER
          </h1>
        </div>
        <div id="routes" className="hidden md:flex items-center text-lg h-full">
          {routes?.map((e, i) => {
            return <NavItem key={i} e={e} i={i} />;
          })}
        </div>
        <div
          id="navMenu"
          className="absolute z-50 right-3 md:right-4 top-3 md:top-4 opacity-0 scale-0"
        >
          <BallAnimation
            className="w-[12vw] md:w-[4vw] h-[12vw] md:h-[4vw] border border-white/40 rounded-full"
            ballSize={"w-[12vw] md:w-[4vw] h-[12vw] md:h-[4vw]"}
            cnt={1}
            text={
              openMenu ? (
                <>
                  <AiOutlineClose />
                </>
              ) : (
                <>
                  <CiMenuBurger className="text-base md:text-2xl" />
                </>
              )
            }
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          />
        </div>
        <div
          id="menuBar"
          onMouseMove={(e) => {
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
          className="fixed border-l border-l-grey z-30 right-[-70vw] md:right-[-30vw] top-0 w-[70vw] md:w-[30vw] h-[100vh] flex items-start justify-end"
        >
          <div className="relative w-[10vw] md:w-[5vw] h-full -mr-1">
            <svg
              id="vSvg"
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 25 100"
              preserveAspectRatio="none"
            >
              <path
                d={`M 0 0 Q 50 50 0 100 L 25 100 L 25 0 Z`}
                fill="#1c1d21"
              />
            </svg>
          </div>
          <div className="w-[60vw] md:w-[30vw] bg-textGrey h-full flex flex-col justify-center items-center pr-[10vw] md:pr-[5vw]">
            <div className="w-9/12">
              <h1 className="text-lightGrey navigationHeading text-base md:text-xl mb-2 cursor-pointer hover:text-white">
                Navigation
              </h1>
              <div id="line" className="w-full h-[1px] bg-grey"></div>
            </div>
            <div className="w-9/12 mt-16">
              {[{ name: "Home", route: "/" }, ...routes]?.map((e, i) => {
                return <NavItemMenu key={i} e={e} i={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ e, i }) => {
  const history = useNavigate();
  const context = useContext(Context);
  const [showDot, setShowDot] = useState(false);
  const [element, setElement] = useState();

  useEffect(() => {
    let el;
    el = document.getElementById(`navItem${i}`);
    if (el) {
      setElement(el);
    }
  }, []);

  return (
    <div
      id={`navItem${i}`}
      onMouseMove={(e) => {
        setShowDot(true);
        let x =
          normalize(
            (e?.nativeEvent?.offsetX / element.offsetWidth) * 100,
            0,
            50,
            100
          ) / 5;
        let y =
          normalize(
            (e?.nativeEvent?.offsetY / element.offsetHeight) * 100,
            0,
            50,
            100
          ) / 5;
        gsap.to(`#navItemText${i}`, {
          x: `${x}px`,
          y: `${y}px`,
        });
        gsap.to(".mouse", {
          width: "100px",
          height: "100px",
          border: context?.navColor ? "4px solid #fff" : "4px solid #1c1d21",
        });
      }}
      onMouseLeave={(e) => {
        setShowDot(false);
        gsap.to(`#navItemText${i}`, {
          x: 0,
          y: 0,
          rotate: 0,
          ease: "elastic.out(1,0.3)",
          duration: 1,
        });
        gsap.to(".mouse", {
          width: "25px",
          height: "25px",
          border: "1px solid #000",
        });
      }}
      onClick={() => {
        animatePageOut(e?.route, history, e?.name);
      }}
      className={`navItem relative cursor-pointer ${
        context?.navColor ? "text-gray-200" : "text-gray-700"
      } ${
        context?.navColor ? "hover:text-white" : "hover:text-textGrey"
      } h-full px-8 py-4`}
    >
      <div id={`navItemText${i}`} className="flex flex-col items-center">
        {e?.name}
        {showDot && (
          <p
            className={`w-[5px] h-[5px] ${
              context?.navColor ? "bg-white" : "bg-textGrey"
            } rounded-full top-8 absolute`}
          ></p>
        )}
      </div>
    </div>
  );
};

const NavItemMenu = ({ e, i }) => {
  const [showDot, setShowDot] = useState(false);
  const history = useNavigate();
  const context = useContext(Context);
  const pathname = window.location.pathname;
  const [element, setElement] = useState();

  useEffect(() => {
    let el;
    el = document.getElementById(`navItems${i}`);
    if (el) {
      setElement(el);
    }
  }, []);

  return (
    <div
      id={`navItems${i}`}
      onMouseMove={(e) => {
        setShowDot(true);
        let x =
          normalize(
            (e?.nativeEvent?.offsetX / element.offsetWidth) * 100,
            0,
            50,
            100
          ) / 5;
        let y =
          normalize(
            (e?.nativeEvent?.offsetY / element.offsetHeight) * 100,
            0,
            50,
            100
          ) / 5;
        gsap.to(`#navItemTexts${i}`, {
          x: `${x}px`,
          y: `${y}px`,
        });
      }}
      onMouseLeave={(e) => {
        setShowDot(false);
        gsap.to(`#navItemTexts${i}`, {
          x: 0,
          y: 0,
          rotate: 0,
          ease: "elastic.out(1,0.3)",
          duration: 1,
        });
      }}
      onClick={() => {
        context?.setOpenMenu(false);
        context?.setScrollPosition(0);
        animatePageOut(e?.route, history, e?.name);
      }}
      className="navItems cursor-pointer text-gray-200 py-3 md:py-5 hover:text-white w-fit"
    >
      <div
        id={`navItemTexts${i}`}
        className="flex flex-col items-center text-2xl md:text-5xl relative"
      >
        {e?.name}
        {showDot ? (
          <p className="w-[7px] md:w-[15px] h-[7px] md:h-[15px] bg-white rounded-full -left-5 md:-left-8 top-1/2 -translate-y-1/2 absolute"></p>
        ) : (
          pathname === e?.route && (
            <p className="w-[7px] md:w-[15px] h-[7px] md:h-[15px] bg-white rounded-full -left-5 md:-left-8 top-1/2 -translate-y-1/2 absolute"></p>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
