import React, { useEffect, useRef, useState } from "react";
import Context from "./Context";
import gsap from "gsap";
import { animatePageOut } from "../app/Components/Utils/Page-transitions";
import { useNavigate } from "react-router-dom";

const State = (props) => {
  let mainRef = useRef(null);
  const history = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navColor, setNavColor] = useState(true);
  const [filter, setFilter] = useState("All");
  const [showType, setShowType] = useState("id0");
  const [width, setWidth] = useState(window.innerWidth);

  const handleNavigation = (navigation, title) => {
    animatePageOut(navigation, history, title);
  };

  const tl = gsap.timeline({ duration: 0.5 });
  let colors = ["#d7d8dc", "#e7e7e7", "#d5d4cf", "#d7e4ec", "#212429"];

  const handleScroll = (e) => {
    setScrollPosition(e?.scroll?.y);
    // if (window.innerWidth < 600) {
    //   if (currentScrollY > prevScrollY.current) {
    //     context?.headingRightScroll();
    //   } else {
    //     context?.headingLeftScroll();
    //   }
    // }
    // prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const headingRightScroll = () => {
    let scrollingTextWidth;
    let scrollingTextWrapper;
    let scrollingText;
    if (typeof document !== "undefined") {
      scrollingTextWidth =
        document.querySelector("#nameBoxHeading").offsetWidth;
      scrollingText = document.querySelector("#nameBoxHeading");
      scrollingTextWrapper = document.querySelector("#nameBox");
    }
    scrollingTextWrapper.appendChild(scrollingText.cloneNode(true));

    gsap.to("#nameBox", {
      x: -scrollingTextWidth,
      repeat: -1,
      duration: 10,
      ease: "none",
    });
  };

  const headingLeftScroll = () => {
    let scrollingTextWidth;
    let scrollingTextWrapper;
    let scrollingText;
    if (typeof document !== "undefined") {
      scrollingTextWidth =
        document.querySelector("#nameBoxHeading").offsetWidth;
      scrollingText = document.querySelector("#nameBoxHeading");
      scrollingTextWrapper = document.querySelector("#nameBox");
    }
    scrollingTextWrapper.appendChild(scrollingText.cloneNode(true));
    const initialOffset = -scrollingTextWidth;

    // Set initial position of the wrapper
    gsap.set(scrollingTextWrapper, { x: initialOffset });

    // Animate to the correct position
    gsap.to(scrollingTextWrapper, {
      x: 0,
      duration: 10,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % scrollingTextWidth),
      },
    });
  };

  return (
    <Context.Provider
      value={{
        tl,
        scrollPosition,
        setScrollPosition,
        openMenu,
        setOpenMenu,
        headingRightScroll,
        headingLeftScroll,
        handleScroll,
        navColor,
        setNavColor,
        colors,
        filter,
        setFilter,
        showType,
        setShowType,
        mainRef,
        width,
        handleNavigation,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
