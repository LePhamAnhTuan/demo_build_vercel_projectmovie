import React from "react";
import Lottie from "react-lottie";
import * as animation1 from "./../../assets/animation/loading2.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className="h-screen w-full flex items-center fixed bg-white"
      style={{ zIndex: "9999" }}
    >
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Loading;
