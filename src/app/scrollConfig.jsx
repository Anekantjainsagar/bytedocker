import { useLayoutEffect, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Context from "../Context/Context";

const useLocoScroll = (start, handleScroll) => {
  gsap.registerPlugin(ScrollTrigger);
  const location = useLocation();
  const context = useContext(Context);

  useLayoutEffect(() => {
    if (!start) return;

    console.log("Initializing LocomotiveScroll...");
    const scrollEl = document.querySelector(".mainApp");

    if (!scrollEl) {
      console.error(
        "Scroll element not found. Make sure you have an element with class 'mainApp'."
      );
      return;
    }

    let locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
    });

    locoScroll.on("scroll", (args) => {
      if (handleScroll) {
        handleScroll(args);
      }
      ScrollTrigger.update();
    });

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed",
    });

    const lsUpdate = () => {
      locoScroll.update();
    };

    ScrollTrigger.defaults({
      scroller: scrollEl,
    });

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      console.log("Destroying LocomotiveScroll...");
      locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", lsUpdate);
    };
  }, [start, location, context?.filter, context?.showType]);

  useEffect(() => {
    console.log("Refreshing ScrollTrigger...");
    ScrollTrigger.refresh();
  }, [location, context?.filter, context?.showType]);
};

export default useLocoScroll;
