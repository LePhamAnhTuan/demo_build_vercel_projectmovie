import { useFormik } from "formik";
import React from "react";
import * as yub from "yup";
import { nguoiDungServ } from "../../services/nguoiDungServ";
import { luuLocal } from "../../util/localStore";
import { useNavigate } from "react-router-dom";
const FormLoginAdmin = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      console.log("values: ", values);
      nguoiDungServ
        .dangNhap(values)
        .then((res) => {
          console.log(res);
          //dieu kien de vao trang admin, check maloainguoidung
          if (res.data.content.maLoaiNguoiDung == "QuanTri") {
            luuLocal("user", res.data.content);
            navigate("/admin");
          } else {
            window.location.href = "http://localhost:3000/";
          }
        })
        .catch((err) => {
          console.log(err);
          alert("co loi!!!");
          //clear formik bang phuong thuc .resetform
          formik.resetForm({
            values: {
              taiKhoan: "acb123",
            },
          });
        });
    },
    validationSchema: yub.object({
      taiKhoan: yub.string().required("ko de trong"),
      matKhau: yub.string().required("ko de trong"),
    }),
  });

  return (
    <div className="w-1/2">
      <h2 className="font-bold text-2xl">Login Admin</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Tài khoản
          </label>
          <input
            //phuong thuc formik.value.taikhoan lay value cho input
            value={formik.values.taiKhoan}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            id="taiKhoan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Nhập họ tên"
          />
          {formik.errors.taiKhoan && formik.touched.taiKhoan ? (
            <p className="text-red-600">{formik.errors.taiKhoan}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label
            htmlFor="matKhau"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Mật khẩu
          </label>
          <input
            value={formik.values.matKhau}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="text"
            id="matKhau"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Nhập mật khẩu"
          />
          {formik.errors.matKhau && formik.touched.matKhau ? (
            <p className="text-red-600">{formik.errors.matKhau}</p>
          ) : (
            ""
          )}
        </div>
        <button className="py-1 px-3 rounded bg-green-700 text-white">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default FormLoginAdmin;
