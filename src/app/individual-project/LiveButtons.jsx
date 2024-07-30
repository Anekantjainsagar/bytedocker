import React from "react";
import BallAnimation from "../Components/Animations/BallAnimation";

const LiveButtons = ({ data, buttonsGrid }) => {
  return (
    <div className={`flex items-center grid grid-cols-${buttonsGrid}`}>
      {data?.url && (
        <div className="viewLiveButtons">
          <BallAnimation
            className="w-[40vw] md:w-full h-[40vw] md:h-[15vw]"
            ballSize={
              "w-[23vw] md:w-[8vw] h-[23vw] md:h-[8vw] md:text-2xl font-semibold"
            }
            text="View Live"
            cnt={8}
            onClick={(e) => {
              window.open(data?.url);
            }}
          />
        </div>
      )}{" "}
      {data?.github?.length > 0 && (
        <div className="viewLiveButtons">
          <BallAnimation
            className="w-[40vw] md:w-full h-[40vw] md:h-[15vw]"
            ballSize={
              "w-[23vw] md:w-[8vw] h-[23vw] md:h-[8vw] md:text-2xl font-semibold"
            }
            text="Github"
            cnt={6}
            onClick={(e) => {
              data?.github.map((e) => {
                window.open(e);
              });
            }}
          />
        </div>
      )}
      {data?.linkedin && (
        <div className="viewLiveButtons">
          <BallAnimation
            className="w-[40vw] md:w-full h-[40vw] md:h-[15vw]"
            ballSize={
              "w-[23vw] md:w-[8vw] h-[23vw] md:h-[8vw] md:text-2xl font-semibold"
            }
            text="Linkedin"
            cnt={7}
            onClick={(e) => {
              window.open(data?.linkedin);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default LiveButtons;
