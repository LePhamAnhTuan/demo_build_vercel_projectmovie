import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import axios from "axios";
import { https } from "../../services/config";
import { movieServ } from "../../services/movieServices";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const HomePager = () => {
  const [banner, setbanner] = useState([]);
  const getAllBanner = async () => {
    const res = await movieServ.getAllBanner();
    console.log("res: ", res);
    setbanner(res.data.content);
  };
  useEffect(() => {
    getAllBanner();
  }, []);

  return (
    <div className="mt-8">
      <Carousel>
        {banner.map((banner, index) => {
          console.log("banner: ", banner);
          return (
            <div key={index} className="h-90vh mt-2">
              <img
                className=" w-full h-full object-cover"
                src={banner.hinhAnh}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HomePager;
