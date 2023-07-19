import React, { useEffect, useState } from "react";
import { nguoiDungServ } from "../../services/nguoiDungServ";
import { useDispatch, useSelector } from "react-redux";

import { getAllUser } from "../../redux/slices/nguoiDungSlices";
import TableUser from "../../Component/TableUser/TableUser";
import { Button, Drawer, Space } from "antd";
import FormAddUser from "../../Component/FormAddUser/FormAddUser";

const UserManagement = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => {
    return state.nguoiDung;
  });
  useEffect(() => {
    // nguoiDungServ;
    //   .getAllUser()
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    dispatch(getAllUser());
  }, []);
  console.log(users);
  //redux-thunk la mot middleware cho phep xu ly truoc khi dispatch toi store
  //redux-saga
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button
        onClick={showDrawer}
        className="bg-green-500 rounded-lg py-2 px-5 mb-5"
      >
        Thêm mới
      </button>
      <TableUser />
      <Drawer
        title="Thêm người dùng"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        size="large"
      >
        <FormAddUser />
      </Drawer>
    </div>
  );
};

export default UserManagement;
