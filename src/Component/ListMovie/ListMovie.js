import React, { useEffect, useState } from "react";
import { movieServ } from "../../services/movieServices";
import { NavLink } from "react-router-dom";

import { Button, Space } from "antd";
import { useDispatch } from "react-redux";
import {
  set_loading_ended,
  set_loading_started,
} from "../../redux/slices/loadingSlices";
const ListMovie = () => {
  const [moives, Setmovies] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(set_loading_started());
    movieServ
      .getListMoive()
      .then((res) => {
        return Setmovies(res.data.content), dispatch(set_loading_ended());
      })
      .catch((err) => console.log(err), dispatch(set_loading_ended()));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <h2 className="text-3xl font-bold">Danh Sach Phim</h2>
      {/* movie item */}
      <div className="grid grid-cols-4 gap-5">
        {moives.map((item, index) => {
          return (
            <div className="movie-item" key={index}>
              <img
                className="h-80 w-full object-cover"
                src={item.hinhAnh}
                alt=""
              />
              <div className="text my-3">
                <h3 className="font-bold text-xl line-clamp-1">
                  <span className="text-white py-1 px-2 bg-orange-500 rounded-md mr-3">
                    C18
                  </span>
                  {item.tenPhim}
                </h3>
                <p className="line-clamp-2">{item.moTa}</p>
                <NavLink
                  className="w-full inline-block"
                  to={`/detail/${item.maPhim}`}
                >
                  <Button className="w-full text-lg h-10" type="primary" danger>
                    Xem Ngay
                  </Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListMovie;
