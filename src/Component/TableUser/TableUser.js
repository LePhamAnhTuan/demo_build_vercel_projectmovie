import React, { useRef } from "react";
import { Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { nguoiDungServ } from "../../services/nguoiDungServ";
import { getAllUser } from "../../redux/slices/nguoiDungSlices";

const TableUser = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => {
    return state.nguoiDung;
  });
  console.log("users: ", users);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      //custom cột hiện thiện
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDT",
      key: "soDT",
    },
    {
      title: "Loại Người Dùng",
      key: "maLoaiNguoiDung",
      dataIndex: "maLoaiNguoiDung",
      render: (text, record, index) => {
        return (
          <Tag color={text == "QuanTri" ? "purple" : "orange"}>
            {text == "QuanTri" ? "Quản Trị" : "Khách Hàng"}
          </Tag>
        );
        //text chứa giá trị của thuộc tính đó, record chứa các phần tử trong data, index là vị trí của phần tử trong mảng data
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            onClick={() => {
              nguoiDungServ
                .deletelUser(record.taiKhoan)
                .then((res) => {
                  alert("xoa thanh cong");
                  dispatch(getAllUser());
                })
                .catch((err) => {
                  alert("ko xoa thanh cong");
                });

              console.log("record.taiKhoan: ", record.taiKhoan);
            }}
            className="py-2 px-5 bg-red-500 text-white rounded-lg hover:bg-red-700 duration-500"
          >
            Xóa
          </button>
          <button className="py-2 px-5 bg-orange-500 text-white rounded-lg hover:bg-orange-700 duration-500">
            Sửa
          </button>
        </Space>
      ),
    },
  ];
  //   const data =
  //     {
  //       key: "1",
  //       name: "John Brown",
  //       age: 32,
  //       address: "New York No. 1 Lake Park",
  //       tags: ["nice", "developer"],
  //     },
  //     {
  //       key: "2",
  //       name: "Jim Green",
  //       age: 42,
  //       address: "London No. 1 Lake Park",
  //       tags: ["loser"],
  //     },
  //     {
  //       key: "3",
  //       name: "Joe Black",
  //       age: 32,
  //       address: "Sydney No. 1 Lake Park",
  //       tags: ["cool", "teacher"],
  //     },
  //   ];
  let newUser = users.map((item, index) => {
    return { ...item, id: index + 1 };
  });
  return <Table columns={columns} dataSource={newUser.length > 0 && newUser} />;
};

export default TableUser;
