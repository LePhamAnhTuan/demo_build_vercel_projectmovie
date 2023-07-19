import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { rapServ } from "../../services/rapServ";
import moment from "moment/moment";
const TabMovieItem = ({ maHeThongRap }) => {
  const [listCumRap, setlistCumRap] = useState([]);
  useEffect(() => {
    rapServ
      .getListCumRap(maHeThongRap)
      .then((res) => {
        console.log(res);
        setlistCumRap(res.data.content);
      })
      .catch((err) => console.log(err));
  }, [maHeThongRap]);

  const renderTabMovieItem = () => {
    return listCumRap[0]?.lstCumRap.map((item, index) => {
      return {
        label: (
          <div className="text-left w-60">
            <p>{item.tenCumRap}</p>
            <p className="truncate ...">{item.diaChi}</p>
          </div>
        ),
        key: index,
        children: (
          <div className="space-y-5">
            {item.danhSachPhim.map((item1, index1) => {
              if (item1.dangChieu) {
                return (
                  <div className="flex " key={index1}>
                    <div className="w-2/12">
                      <img src={item1.hinhAnh} alt="" />
                    </div>
                    <div className="w-10/12">
                      <h1>{item1.tenPhim}</h1>
                      <div className="flex flex-wrap">
                        {item1.lstLichChieuTheoPhim
                          .slice(0, 5)
                          .map((item2, index2) => {
                            return (
                              <p
                                key={index2}
                                className="w-1/2 border broder-dark rounded-md py-2 px-4 m-2"
                              >
                                {moment(item2.ngayChieuGioChieu).format(
                                  "DD/MM/YYYY, h:mm"
                                )}
                              </p>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        ),
      };
    });
  };
  return (
    <div>
      <Tabs
        tabPosition="left"
        items={renderTabMovieItem()}
        style={{ maxHeight: "400px", overflowY: "scroll" }}
      />
    </div>
  );
};

export default TabMovieItem;
