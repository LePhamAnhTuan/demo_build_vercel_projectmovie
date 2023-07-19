import React from "react";
import FormLoginAdmin from "../../Component/FormLoginAdmin/FormLoginAdmin";
import Lottie from "react-lottie";
import * as animationFormLogin from "./../../assets/animation/formLogin.json";
const LoginAdmin = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationFormLogin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="min-h-screen flex items-center">
      <div className="w-1/2 ">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>

      <FormLoginAdmin />
    </div>
  );
};

export default LoginAdmin;
