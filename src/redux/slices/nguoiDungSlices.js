import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { layLocal } from "../../util/localStore";
import { nguoiDungServ } from "../../services/nguoiDungServ";
//noi tao ra asyncthunk
//bên trong createThunk sẽ có 2 tham số, 1 là name , 2 là sử ký async await hàm bất động bộ
export const getAllUser = createAsyncThunk("nguoidung/getAllUser", async () => {
  const res = await nguoiDungServ.getAllUser();
  //return về giá trị muốn store lưu trữ
  return res.data.content;
});
//thu vien immerjs
//lần đầu tiên vào trang web store sẽ có đc khởi tạo
const initialState = {
  hoTen: layLocal("user"),
  users: [],
};
export const nguoiDungSlices = createSlice({
  name: "nguoiDung",
  initialState,
  reducers: {
    setDuLieuHoTen: (state, action) => {
      //check xem hoTen co du lieu hay ko neu ko co set du lieu cho no
      console.log(action.payload);
      if (state.hoTen == null) {
        state.hoTen = action.payload;
      }
    },
  },
  //extraReducers giup tach biet cac logic bat dong bo ra khoi reducer vi khi xu ly bat dong bo co nhieu truong hop xay ra
  extraReducers: (builder) => {
    //khi xu ly thi ben trong se co 3 phuong thuc trong ung voi cac truong hop chay thanh cong , dang chay, that bai
    //pending dang chay, reject that bai, fullfilled thanh cong
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.users = action.payload;
      console.log(action);
    });
    builder.addCase(getAllUser.rejected, (state, action) => {
      state.users = {
        taiKhoan: "123abc123",
      };
    });
  },
});
export const { setDuLieuHoTen } = nguoiDungSlices.actions;

export default nguoiDungSlices.reducer;
