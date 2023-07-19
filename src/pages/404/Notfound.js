import React from "react";
import Lottie from "react-lottie";
import * as animation from "./../../assets/animation/95560-error-404.json";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
const Notfound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <Lottie options={defaultOptions} height={400} width={400} />
      <NavLink to="/">
        <Button type="primary" danger>
          Quay về trang chủ
        </Button>
      </NavLink>
    </div>
  );
};

export default Notfound;
