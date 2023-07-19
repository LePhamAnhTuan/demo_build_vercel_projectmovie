import React from "react";
import Header from "../Component/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import { useSelector } from "react-redux";
import Loading from "../pages/Loading/Loading";

const UserTemplate = () => {
  const { isLoading } = useSelector((state) => {
    return state.loading;
  });
  return (
    <>
      {isLoading ? <Loading /> : <></>}
      <div className="flex flex-col min-h-screen justify-between">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default UserTemplate;
