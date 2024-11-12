import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import LandingPage from "./Components/Sections/LandingPage";
import About from "./Components/Sections/About";
import Skills from "./Components/Sections/Skills";
import { ScrollTrigger } from "gsap/all";
import Line from "./Components/Utils/Line";
import Projects from "./Components/Sections/Projects";
import Context from "../Context/Context";
import Counters from "./Components/Sections/Counters";
import Footer from "./Components/Utils/Footer";
import useLocoScroll from "./scrollConfig";
import { useLocation } from "react-router-dom";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  const prevScrollY = useRef(0);
  const scrollHandler = (e) => {
    if (e.deltaY > 0) {
      context?.headingRightScroll();
    } else {
      context?.headingLeftScroll();
    }
  };

  const context = useContext(Context);
  const location = useLocation();

  useEffect(() => {
    context?.setNavColor(true);
    window.scroll(0, 0);
  }, []);

  useLocoScroll(true, context?.handleScroll);

  return (
    <div
      onWheel={(e) => scrollHandler(e)}
      onScroll={(e) => context?.handleScroll(e)}
      className="overflow-hidden w-full App AppHome"
      data-scroll-container
    >
      <LandingPage location={location} />
      <About />
      <Line />
      <Projects />
      <Line />
      <Counters />
      <Footer />
    </div>
  );
};

export default Home;
