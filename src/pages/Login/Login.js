import React from "react";
import Lottie from "react-lottie";
import * as animationLogin from "./../../assets/animation/login.json";
import FormLogin from "../../Component/FormLogin/FormLogin";
const Login = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLogin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="w-1/2">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <FormLogin />
    </div>
  );
};

export default Login;
