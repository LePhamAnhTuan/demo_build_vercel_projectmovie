import React, { useEffect, useState } from "react";
import { Radio, Space, Tabs } from "antd";
import { rapServ } from "../../services/rapServ";
import TabMovieItem from "./TabMovieItem";
const Tabmovie = () => {
  const [heThongRap, setheThongRap] = useState([]);
  useEffect(() => {
    rapServ
      .getAllHeThongRap()
      .then((res) => {
        setheThongRap(res.data.content);
        console.log(res.data.content);
      })
      .catch((err) => console.log(err));
  }, []);
  const renderItemTab = () => {
    return heThongRap.map((item, index) => {
      return {
        label: <img src={item.logo} className="w-10 h-10" alt="" />,
        key: index,
        children: <TabMovieItem maHeThongRap={item.maHeThongRap} />,
      };
    });
  };
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <Tabs
        tabPosition="left"
        items={renderItemTab()}
        // items={new Array(heThongRap.length)
        //   .fill(heThongRap.maHeThongRap)
        //   .map((_, i) => {
        //     console.log("_: ", _);
        //     const id = String(i + 1);

        //     return {
        //       label: `${id}`,
        //       key: id,
        //       children: `Content of Tab ${id}`,
        //     };
        //   })}
      />
    </div>
  );
};

export default Tabmovie;
