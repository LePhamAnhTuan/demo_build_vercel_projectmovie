import React from "react";
import HomePager from "../../Component/HomePage/HomePager";
import ListMovie from "../../Component/ListMovie/ListMovie";
import Tabmovie from "../../Component/TabMove/Tabmovie";

const HomePage = () => {
  return (
    <div>
      <HomePager />
      {/* Danh Sach phim   */}
      <ListMovie />
      {/* cac tab he thong rap */}
      <Tabmovie />
    </div>
  );
};

export default HomePage;
