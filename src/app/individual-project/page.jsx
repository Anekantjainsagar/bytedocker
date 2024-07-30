import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../../Context/Context";
import useLocoScroll from "../scrollConfig";
import Footer from "../Components/Utils/Footer";
import gsap from "gsap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import projects from "../data/projects";
import LiveButtons from "./LiveButtons";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { animatePageOut } from "../Components/Utils/Page-transitions";
import LaptopView from "./LaptopView";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  let { id } = useParams();
  const context = useContext(Context);
  const [projectIndex, setProjectIndex] = useState(0);
  const [data, setData] = useState();
  const timeline = gsap.timeline();
  // useLocoScroll(true, context?.handleScroll);
  const [buttonsGrid, setButtonsGrid] = useState(0);
  const location = useLocation();

  const overviewHeading = useRef(null);
  const description = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    let temp = projects?.filter(
      (e) => e?.name?.toLowerCase().replaceAll(" ", "-") === id
    )[0];
    setProjectIndex(
      projects?.findIndex(
        (e) => e?.name?.toLowerCase().replaceAll(" ", "-") === id
      )
    );
    setData(temp);
    let cnt = 0;
    if (temp?.url) {
      cnt++;
    }
    if (temp?.github?.length > 0) {
      cnt++;
    }
    if (temp?.linkedin) {
      cnt++;
    }
    setButtonsGrid(cnt);
  }, [id, location]);

  useEffect(() => {
    window.scroll(0, 0);
    context?.setNavColor(false);
    ScrollTrigger.refresh();
  }, [location]);

  useEffect(() => {
    const spans = document.querySelectorAll("#projectIdIndividual span");
    if (spans.length) {
      timeline.fromTo(spans, { opacity: 0 }, { opacity: 1, stagger: 0.1 });
    }
    if (context?.width > 600) {
      timeline.fromTo(
        ".mainLineIndividualProject",
        { width: "0%" },
        { width: "80%" }
      );
    } else {
      timeline.fromTo(
        ".mainLineIndividualProject",
        { width: "0%" },
        { width: "95%" }
      );
    }

    if (context?.width > 600) {
      timeline
        .fromTo(".macbook", { x: -100, opacity: 0 }, { opacity: 1, x: 0 })
        .fromTo("#mobile", { x: 100, opacity: 0 }, { opacity: 1, x: 0 });
      gsap.fromTo(
        overviewHeading?.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: overviewHeading?.current,
            start: "top 80%",
            end: "top 60%",
            scroller: ".mainApp",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        description?.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: overviewHeading?.current,
            start: "top 70%",
            end: "top 50%",
            scroller: ".mainApp",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        elementsRef?.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: overviewHeading?.current,
            start: "top 60%",
            end: "top 40%",
            scroller: ".mainApp",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        ".viewLiveButtons",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: overviewHeading?.current,
            start: "top 50%",
            end: "top 30%",
            scroller: ".mainApp",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        "#rightShowButton",
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: overviewHeading?.current,
            start: "top 30%",
            end: "top 0%",
            scroller: ".mainApp",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        "#leftShowButton",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: overviewHeading?.current,
            start: "top 30%",
            end: "top 0%",
            scroller: ".mainApp",
            scrub: true,
          },
        }
      );
    } else {
      timeline.fromTo(
        overviewHeading?.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
        }
      );
      timeline.fromTo(
        description?.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
        }
      );
      timeline.fromTo(
        "#iconsProject",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
        }
      );
      timeline.fromTo(
        ".viewLiveButtons",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
        }
      );
      timeline.fromTo(
        "#rightShowButton",
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
        }
      );
      timeline.fromTo(
        "#leftShowButton",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
        }
      );
      timeline
        .fromTo(".macbook", { x: -100, opacity: 0 }, { opacity: 1, x: 0 })
        .fromTo("#mobile", { x: 100, opacity: 0 }, { opacity: 1, x: 0 });
    }
    ScrollTrigger.refresh();
  }, [id]);

  const formattedDescription = data?.desc.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div
      data-scroll-container
      className="bg-white w-full flex flex-col items-center justify-center App"
    >
      <div className="w-full mt-[25vw] md:mt-[8vw]" data-scroll-section>
        <h1
          id="projectIdIndividual"
          className="h1-text text-textGrey px-5 md:px-[12vw] md:w-10/12"
        >
          {data?.name?.split("").map((e, i) => {
            return <span key={i}>{e}</span>;
          })}
        </h1>
        <div className="mainLineIndividualProject h-[1px] mx-5 md:mx-[12vw] mx-auto bg-gray-400/50 mt-5 md:mt-8"></div>
        <div className="mt-5 md:mt-8 mx-5 md:mx-[12vw]">
          <div className="relative md:pb-10 mx-auto">
            <div className="md:block hidden">
              <LaptopView data={data?.img} />
              <MobileView data={data} />
            </div>
          </div>
          <div className="w-full mt-5 md:mt-[5vw] text-textGrey">
            <h1 className="text-2xl font-semibold" ref={overviewHeading}>
              {data?.overview}
            </h1>
            <p
              className="mt-1 text-lg md:text-xl text-gray-500 px-1"
              ref={description}
            >
              {formattedDescription}
            </p>
            <div
              id="iconsProject"
              className="text-textGrey mt-4 md:mb-0 mb-4 md:mt-5 flex items-start flex-wrap"
            >
              <Icons data={data?.skills} elementsRef={elementsRef} />
            </div>
          </div>{" "}
          <div className="md:hidden">
            <LaptopView data={data?.img} />
            <MobileView data={data} />
          </div>
          <LiveButtons data={data} buttonsGrid={buttonsGrid} />
        </div>
        <BottomBlock idx={projectIndex} />
      </div>
      <Footer />
    </div>
  );
};

const Icons = ({ data, elementsRef }) => {
  const iconsData = [
    { title: "html", img: "/data/icons/html.png" },
    { title: "css", img: "/data/icons/css-3.png" },
    { title: "bootstrap", img: "/data/icons/bootstrap.png" },
    { title: "tailwind css", img: "/data/icons/tailwind.png" },
    { title: "javascript", img: "/data/icons/js.png" },
    { title: "typescript", img: "/data/icons/typescript.png" },
    { title: "python", img: "/data/icons/python.png" },
    { title: "numpy", img: "/data/icons/numpy.svg" },
    { title: "pandas", img: "/data/icons/pandas.svg" },
    { title: "matplotlib", img: "/data/icons/matplotlib-seeklogo.svg" },
    { title: "react.js", img: "/data/icons/react.png" },
    { title: "next.js", img: "/data/icons/next.png" },
    { title: "npm", img: "/data/icons/npm.png" },
    { title: "gsap", img: "/data/icons/gsap.svg" },
    { title: "node.js", img: "/data/icons/node-js-736399_1280.png" },
    { title: "socket.io", img: "/data/icons/socket.png" },
    { title: "express.js", img: "/data/icons/Expressjs.png" },
    { title: "mongodb", img: "/data/icons/mongodb.png" },
    { title: "mysql", img: "/data/icons/sql.png" },
    { title: "git", img: "/data/icons/git.png" },
    { title: "github", img: "/data/icons/github.png" },
    { title: "aws", img: "/data/icons/aws.png" },
    { title: "c", img: "/data/icons/letter-c.png" },
    { title: "c++", img: "/data/icons/c++.png" },
    { title: "firebase", img: "/data/icons/firebase.png" },
    {
      title: "machine learning",
      img: "/data/icons/ml.png",
    },
  ];
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return data?.map((e, i) => {
    return (
      <div
        key={i}
        id="individualIcon"
        ref={addToRefs}
        className="mr-6 md:mr-8 w-[15vw] md:mb-0 mb-4 md:w-[4vw]"
      >
        <div
          onMouseMove={(e) => {
            gsap.to(".mouse", {
              border: "none",
              background: "#000",
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(".mouse", {
              background: "transparent",
              border: "1px solid #000",
            });
          }}
          className="w-full h-[15vw] md:h-[4vw] flex items-center justify-center border border-gray-400/20 p-2 md:p-4 rounded-full bg-newLightBlue"
        >
          <img
            src={
              iconsData.filter((temp) => {
                return temp?.title?.toLowerCase()?.includes(e?.toLowerCase());
              })[0]?.img
            }
            className="w-full aspect-squre object-contain cursor-pointer"
          />
        </div>
        <p className="text-center whitespace-initial mt-1">
          {
            iconsData.filter((temp) => {
              return temp?.title?.toLowerCase()?.includes(e?.toLowerCase());
            })[0]?.title
          }
        </p>
      </div>
    );
  });
};

const BottomBlock = ({ idx }) => {
  const [buttonLeft, setButtonLeft] = useState(false);
  const [buttonRight, setButtonRight] = useState(false);
  const history = useNavigate();

  return (
    <div className="my-5 md:my-[2vw] mx-[6vw]">
      <div className="flex items-center justify-between">
        <button
          onMouseEnter={(e) => {
            setButtonLeft(true);
          }}
          onMouseLeave={(e) => {
            setButtonLeft(false);
          }}
          onClick={(e) => {
            let temp_id = "";
            if (idx === projects?.length - 1) {
              temp_id = projects[0]?.name?.toLowerCase()?.replaceAll(" ", "-");
              animatePageOut(
                `/projects/${temp_id}`,
                history,
                projects[0]?.name
              );
            } else {
              temp_id = projects[idx + 1]?.name
                ?.toLowerCase()
                ?.replaceAll(" ", "-");
              animatePageOut(
                `/projects/${temp_id}`,
                history,
                projects[idx + 1]?.name
              );
            }
          }}
          id="leftShowButton"
          className="bg-textGrey p-4 rounded-full cursor-pointer text-4xl hover:bg-newBlue transition-all text-white"
        >
          <AiOutlineLeft />
        </button>
        <button
          onMouseEnter={(e) => {
            setButtonRight(true);
          }}
          onMouseLeave={(e) => {
            setButtonRight(false);
          }}
          onClick={(e) => {
            let temp_id = "";
            if (idx === 0) {
              temp_id = projects[projects?.length - 1]?.name
                ?.toLowerCase()
                ?.replaceAll(" ", "-");
              animatePageOut(
                `/projects/${temp_id}`,
                history,
                projects[projects?.length - 1]?.name
              );
            } else {
              temp_id = projects[idx - 1]?.name
                ?.toLowerCase()
                ?.replaceAll(" ", "-");
              animatePageOut(
                `/projects/${temp_id}`,
                history,
                projects[idx - 1]?.name
              );
            }
          }}
          id="rightShowButton"
          className="bg-textGrey p-4 rounded-full cursor-pointer text-4xl hover:bg-newBlue transition-all text-white"
        >
          <AiOutlineRight />
        </button>
      </div>
      <div className="flex items-center justify-between text-textGrey text-xl mt-2">
        <p className={`${buttonLeft ? "opacity-100" : "opacity-0"}`}>
          {idx === projects?.length - 1
            ? projects[0]?.name
            : projects[idx + 1]?.name}
        </p>
        <p className={`${buttonRight ? "opacity-100 text-end" : "opacity-0"}`}>
          {idx === 0
            ? projects[projects?.length - 1]?.name
            : projects[idx - 1]?.name}
        </p>
      </div>
    </div>
  );
};

const MobileView = ({ data }) => {
  return (
    data?.mobile_img && (
      <div
        onMouseMove={(e) => {
          gsap.to(".mouse", {
            border: "none",
            background: "#fff",
          });
        }}
        onMouseLeave={(e) => {
          gsap.to(".mouse", {
            background: "transparent",
            border: "1px solid #000",
          });
        }}
        className="md:absolute md:mt-0 mt-10 cursor-pointer md:-bottom-5 md:-right-[120px] scale-[1]"
      >
        <div
          id="mobile"
          className="relative w-[50vw] md:w-[18vw] mx-auto flex flex-col items-center justify-center overflow-hidden"
        >
          <img src="/phone.png" alt="Mobile" className="z-20" />
          <img
            src={data?.mobile_img}
            className={`absolute top-0 z-10 px-2 md:px-10 object-cover ${
              data?.big
                ? "mt-2 md:mt-4 md:rounded-none rounded-xl"
                : "mt-2 md:mt-[18px] md:rounded-t-0 rounded-t-[20px] rounded-b-[35px] md:rounded-b-[25px]"
            }`}
            alt=""
          />
        </div>
      </div>
    )
  );
};

export default Projects;
