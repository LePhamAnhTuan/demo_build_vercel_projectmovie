import { Input, message } from "antd";
import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import * as yub from "yup";
import { nguoiDungServ } from "../../services/nguoiDungServ";
import { luuLocal } from "../../util/localStore";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDuLieuHoTen } from "../../redux/slices/nguoiDungSlices";

const FormLogin = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      nguoiDungServ
        .dangNhap(values)
        .then((res) => {
          console.log(res);
          messageApi.success("thanh cong");
          dispatch(setDuLieuHoTen(res.data.content));
          luuLocal("user", res.data.content);
          setTimeout(() => {
            navigate("/");
          }, [1000]);
        })
        .catch((err) => {
          console.log(err);
          //   messageApi.error(err.response?.data?.content);
        });
    },
    validationSchema: yub.object({
      taiKhoan: yub.string().required("Chưa nhập tài khoản!"),
      matKhau: yub
        .string()
        .required("Chưa nhập mật khẩu!")
        .min(3, "Nhập trên 3 kí tự!"),
    }),
  });
  let { handleSubmit, handleChange, handleBlur } = formik;
  return (
    <div className="w-1/2">
      {contextHolder}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="taiKhoan"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Tài Khoản
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="taiKhoan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tài khoản"
          />
          {/* <Input
            name="taiKhoan"
            onChange={handleChange}
            onBlur={handleBlur}
            status={
              formik.errors.taiKhoan && formik.touched.taiKhoan ? "error" : ""
            }
            placeholder="Error"
          /> */}
          {/* //xử lý chỉ hiển thị lỗi của ô input người dùng nhập */}
          {formik.errors.taiKhoan && formik.touched.taiKhoan ? (
            <p className="text-red-600">{formik.errors.taiKhoan}</p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="matKhau"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Mật Khẩu
          </label>
          <input
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            id="matKhau"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {formik.errors.matKhau && formik.touched.matKhau ? (
            <p className="text-red-600">{formik.errors.matKhau}</p>
          ) : (
            ""
          )}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Đăng Nhập
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
