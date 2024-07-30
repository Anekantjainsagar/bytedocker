import React, { useContext, useEffect, useState } from "react";
import Context from "../../Context/Context";
import Footer from "../Components/Utils/Footer";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ScrollToBottom from "react-scroll-to-bottom";
import { ThreeDots } from "react-loader-spinner";
import BallAnimation from "../Components/Animations/BallAnimation";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiOutlineSend,
} from "react-icons/ai";

const Contact = () => {
  let message = [
    {
      question: "What is your name?",
    },
    {
      question: "What is your email?",
    },
    {
      question: "What is your mobile?",
    },
    {
      question: "Any Queries..?",
    },
    {
      question: "Thank you for your responses!",
    },
  ];
  let [answers, setAnswers] = useState([]);
  let [response, setResponse] = useState("");
  let [questionIndex, setQuestionIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [loader, setLoader] = useState(false);
  const context = useContext(Context);
  const timeline = gsap.timeline();
  const location = useLocation();

  useEffect(() => {
    timeline.fromTo(
      "#achieveIdText span",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.05 }
    );
    if (context?.width > 600) {
      timeline.fromTo(".mainLineContact", { width: "0%" }, { width: "80%" });
    } else {
      timeline.fromTo(".mainLineContact", { width: "0%" }, { width: "95%" });
    }
    timeline
      .fromTo("#emailContact", { y: 50, opacity: 0 }, { opacity: 1, y: 0 })
      .fromTo("#socialContact", { y: 50, opacity: 0 }, { opacity: 1, y: 0 })
      .fromTo("#contactBlock", { y: -50, opacity: 0 }, { opacity: 1, y: 0 });
  }, [location]);

  useEffect(() => {
    context?.setNavColor(false);
  }, [location]);

  let handleSubmit = () => {
    setLoader(true);
    if (response?.length > 1) {
      if (questionIndex === 1 && !response.includes("@")) {
        setAnswers([
          ...answers,
          { question: message[questionIndex]?.question, answer: response },
          { question: "Please enter valid email address" },
        ]);
        setResponse("");
      } else if (questionIndex === 2 && response?.length !== 10) {
        setAnswers([
          ...answers,
          { question: message[questionIndex]?.question, answer: response },
          { question: "Please enter a 10 digit mobile no." },
        ]);
        setResponse("");
      } else {
        setAnswers([
          ...answers,
          { question: message[questionIndex]?.question, answer: response },
        ]);
        if (message.length - 2 == questionIndex) {
          axios
            .post("https://animatedportfoliobackend.onrender.com/", {
              data: [
                ...answers,
                {
                  question: message[questionIndex]?.question,
                  answer: response,
                },
              ],
            })
            .then((res) => {
              // console.log(res.data);
            });
        }
        setResponse("");
        setQuestionIndex(questionIndex + 1);
      }
    } else {
      setAnswers([...answers, { question: "Please enter a value" }]);
      setResponse("");
    }
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  };

  return (
    <div
      className="bg-white w-full flex flex-col items-center justify-center App"
      data-scroll-container
    >
      <div className="w-full mt-[25vw] md:mt-[8vw]" data-scroll-section>
        <h1
          id="achieveIdText"
          className="h1-text text-textGrey px-5 md:px-[12vw] md:w-10/12"
        >
          {"Get in Touch to Elevate Your Digital Experience"
            .split("")
            .map((e, i) => {
              return <span key={i}>{e}</span>;
            })}
        </h1>
        <div className="mainLineContact h-[1px] mx-5 md:mx-[12vw] mx-auto bg-gray-400/50 mt-5 md:mt-16"></div>
        <div className="mx-auto w-[87vw] md:w-[50vw] mt-5 md:mt-12 overflow-hidden">
          <div
            id="headerContact"
            className="flex items-end justify-end md:justify-between md:h-[5vh] overflow-hidden"
          >
            <p
              id="emailContact"
              className="px-4 border md:flex hidden items-center justify-center h-full border-textGrey rounded-t-md text-textGrey font-semibold border-b-0 w-fit"
            >
              anekantjainsagar@gmail.com
            </p>
            <div
              id="socialContact"
              className="border border-textGrey px-1 md:px-4 py-1.5 md:py-2 rounded-t-md text-textGrey border-b-0 w-fit flex items-center"
            >
              <AiFillLinkedin
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.linkedin.com/in/anekantjainsagar");
                }}
                className={`text-2xl md:text-3xl mx-1.5 md:mx-2 rounded-full cursor-pointer`}
              />
              <AiFillGithub
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/Anekantjainsagar");
                }}
                className={`text-2xl md:text-3xl mx-1.5 md:mx-2 rounded-full cursor-pointer`}
              />
              <AiFillInstagram
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://instagram.com/ig.anekant?igshid=NTc4MTIwNjQ2YQ=="
                  );
                }}
                className={`text-2xl md:text-3xl mx-1.5 md:mx-2 rounded-full cursor-pointer`}
              />
              <AiFillYoutube
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://youtube.com/@ajlearning8494");
                }}
                className={`text-2xl md:text-3xl mx-1.5 md:mx-2 rounded-full cursor-pointer`}
              />
              <AiFillTwitterSquare
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://twitter.com/Anekant28446852");
                }}
                className={`text-2xl md:text-3xl mx-1.5 md:mx-2 rounded-full cursor-pointer`}
              />
              <AiFillFacebook
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.facebook.com/anekant.jain.338/");
                }}
                className={`text-2xl md:text-3xl mx-1.5 md:mx-2 rounded-full cursor-pointer`}
              />
            </div>
          </div>
          <div
            className="h-[50vh] md:h-[40vh] p-2 border rounded-b-md border-textGrey msger-chat"
            id="contactBlock"
          >
            {!started ? (
              <BallAnimation
                className="w-full h-full"
                ballSize={
                  "w-[30vw] md:w-[7vw] h-[30vw] md:h-[7vw] md:text-lg font-medium"
                }
                text="Start Chat"
                cnt={5}
                onClick={(e) => {
                  setStarted(!started);
                  gsap.to(".mouse", {
                    scale: 1,
                    background: "transparent",
                    border: "1px solid #000",
                  });
                }}
              />
            ) : questionIndex === message?.length - 1 ? (
              <BallAnimation
                className="w-full h-full"
                ballSize={
                  "w-[30vw] md:w-[7vw] h-[30vw] md:h-[7vw] md:text-lg font-medium"
                }
                text="Restart Chat"
                cnt={5}
                onClick={(e) => {
                  setStarted(!started);
                  setQuestionIndex(0);
                  setAnswers([]);
                }}
              />
            ) : (
              <div className="h-full w-full">
                <ScrollToBottom className="h-[42vh] md:h-[34vh]">
                  {started ? (
                    <>
                      {[
                        { question: "Welcome to My Portfolio Website 😊" },
                        {
                          question:
                            "I hope you're having a fantastic day! 🔥🔥",
                        },
                        {
                          question:
                            "Please let me know some of your detail, so that I can get back to you as soon as possible ⚡",
                        },
                      ]?.map((e, i) => {
                        return (
                          <div key={i}>
                            <Chat text={e.question} mine={false} />
                          </div>
                        );
                      })}
                      {answers?.map((e, i) => {
                        return (
                          <div key={i}>
                            <Chat
                              text={e.question}
                              error={
                                e?.question.includes("Please enter")
                                  ? true
                                  : false
                              }
                              mine={false}
                            />
                            {e?.answer ? (
                              <Chat text={e?.answer} mine={true} />
                            ) : null}
                          </div>
                        );
                      })}
                      <Chat
                        text={message[questionIndex]?.question}
                        mine={false}
                        loader={loader}
                      />
                      {loader ? (
                        <ThreeDots height="70" width="70" color="#455ce8" />
                      ) : null}
                    </>
                  ) : null}
                </ScrollToBottom>
                <div
                  className="w-full h-[5vh] md:h-[4vh] flex justify-between"
                  onKeyDown={(e) => {
                    if (e?.code === "Enter") {
                      handleSubmit();
                    }
                  }}
                >
                  <input
                    type={
                      questionIndex === 2
                        ? "number"
                        : questionIndex === 1
                        ? "email"
                        : "text"
                    }
                    placeholder={
                      questionIndex === 2
                        ? "Enter Mobile No."
                        : questionIndex === 1
                        ? "Enter Email Address"
                        : "Enter Text"
                    }
                    disabled={
                      questionIndex === message?.length - 1 ||
                      questionIndex + 1 > message?.length
                    }
                    value={response}
                    onKeyDown={(e) => {
                      if (e?.code === "Enter") {
                        handleSubmit();
                      }
                    }}
                    autoFocus={true}
                    className="w-[74%] md:w-[89%] rounded-md outline-none text-textGrey bg-transparent border px-3 py-0.5"
                    onChange={(e) => {
                      setResponse(e.target.value);
                    }}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                    disabled={
                      questionIndex === message?.length - 1 ||
                      questionIndex + 1 > message?.length
                    }
                    className="flex items-center border border-transparent rounded-lg w-[24%] md:w-[10%] justify-center bg-newBlue/90 text-white hover:text-textGrey cursor-pointer text-sm md:text-base hover:bg-transparent hover:border-textGrey hover:border-spacing-0"
                  >
                    <AiOutlineSend className="mr-1" />
                    Send
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Chat = ({ mine, text, error, loader }) => {
  return !loader ? (
    <div
      id="chat"
      className={`flex items-start py-1 ${
        !mine ? "" : "float-right flex-row-reverse"
      } clear-both`}
    >
      <img
        src={
          mine
            ? "/user.png"
            : "https://png.pngtree.com/png-vector/20220718/ourmid/pngtree-chat-bot-icon-vector-png-image_5569903.png"
        }
        alt="Bot"
        className={`${
          mine ? "w-[11vw] md:w-[2vw] ml-3" : "w-[14vw] -ml-2 md:w-[3vw]"
        }`}
      />
      <div
        className={`max-w-[60vw] md:max-w-[24vw] w-fit px-4 py-2 rounded-md ${
          !mine
            ? error
              ? "bg-red-200 text-red-600 mt-2 md:mt-3"
              : "bg-newBlue/90 text-white mt-2 md:mt-3"
            : "border border-textGrey/20 text-textGrey mt-1"
        }`}
      >
        <span>{text}</span>
      </div>
    </div>
  ) : null;
};

export default Contact;
