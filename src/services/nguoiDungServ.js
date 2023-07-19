import { https } from "./config";

export const nguoiDungServ = {
  dangNhap: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
  },
  getAllUser: () => {
    return https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03");
  },
  deletelUser: (taiKhoan) => {
    //lưu ý khi sử dụng authorization sẽ có Bearer token
    return https.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
  addUser: (data) => {
    return https.post("/api/QuanLyNguoiDung/ThemNguoiDung", data);
  },
};
