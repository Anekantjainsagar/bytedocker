import gsap from "gsap";
import { animatePageOut } from "../Components/Utils/Page-transitions";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../../Context/Context";

const GridBlock = ({ data }) => {
  const { width } = useContext(Context);
  const history = useNavigate();
  let id = data?.title?.replaceAll(" ", "space")?.slice(0, 10);

  return (
    <div
      id={id}
      className="p-2 md:p-5 border h-fit border-gray-200 rounded-md text-textGrey bg-gray-200 hover:bg-textGrey text-sm md:text-xl font-medium items-center cursor-pointer"
      onMouseMove={(e) => {
        gsap.to(".mouse", {
          width: "40px",
          height: "40px",
          border: "none",
          background: "#fff",
        });
        gsap.to(`#${id}`, { scale: 1.025 });
        gsap.to(`#${id} img`, { scale: 1.025 });
        gsap.to(`#${id} h1`, { color: "#fff" });
        gsap.to(`#${id} p, #${id} h4`, { color: "#ccc" });
      }}
      onMouseLeave={(e) => {
        gsap.to(".mouse", {
          width: "25px",
          height: "25px",
          border: "1px solid #000",
          background: "transparent",
        });
        gsap.to(`#${id}`, { scale: 1 });
        gsap.to(`#${id} img`, { scale: 1 });
        gsap.to(`#${id} h1`, { color: "#1c1d21" });
        gsap.to(`#${id} p, #${id} h4`, { color: "#4a5568" });
      }}
      onClick={(e) => {
        let temp_id = data?.name?.toLowerCase().replaceAll(" ", "-");
        animatePageOut(`/projects/${temp_id}`, history, data?.name);
        if (width > 600) {
          gsap.to(".mouse", {
            width: "25px",
            height: "25px",
            border: "1px solid #000",
            background: "transparent",
          });
          gsap.to(`#${id}`, { scale: 1 });
          gsap.to(`#${id} img`, { scale: 1 });
          gsap.to(`#${id} h1`, { color: "#1c1d21" });
          gsap.to(`#${id} p, #${id} h4`, { color: "#4a5568" });
        }
      }}
    >
      <img
        src={data?.img}
        alt={data?.img?.src}
        width={1000}
        height={1000}
        id="img"
        className="rounded-md h-[26%] md:h-[36%] object-cover object-center"
      />
      <div className="flex items-start mt-2 px-1 justify-between">
        <div>
          <h1 className="text-lg md:text-2xl">{data?.name}</h1>
          <p className="text-gray-700 text-xs md:text-lg">{data?.type}</p>
        </div>
        <h4 className="text-gray-700">{data?.year}</h4>
      </div>
    </div>
  );
};

export default GridBlock;
