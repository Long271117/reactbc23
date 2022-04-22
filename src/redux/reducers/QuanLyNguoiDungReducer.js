import { act } from "react-dom/test-utils";

const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyenvana",
      matKhau: "123456",
      hoTen: "Nguyễn Văn A",
      soDienThoai: "123456789",
      email: "nguyenvana@gmail.com",
      loaiNguoiDung: "QuanTri",
    },
    {
      taiKhoan: "nguyenvanb",
      matKhau: "654321",
      hoTen: "Nguyễn Văn B",
      soDienThoai: "987654321",
      email: "nguyenvanb@gmail.com",
      loaiNguoiDung: "QuanDung",
    },
  ],
  nguoiDungSua: {
    // taiKhoan: "nguyenvanb",
    // matKhau: "654321",
    // hoTen: "Nguyễn Văn B",
    // soDienThoai: "987654321",
    // email: "nguyenvanb@gmail.com",
    // loaiNguoiDung: "QuanDung",
  },
};

export const quanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DANG_KY": {
      state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
      return { ...state };
    }

    case "XOA_NGUOI_DUNG": {
      state.mangNguoiDung = [
        ...state.mangNguoiDung.filter((nd) => nd.taiKhoan !== action.taiKhoan),
      ];
      return { ...state };
    }

    case "SUA_NGUOI_DUNG": {
      state.nguoiDungSua = action.nguoiDung;
      return { ...state };
    }

    case "CAP_NHAT_THONG_TIN": {
      // Tìm ra người dung chỉnh sửa trong mảng
      let mangNguoiDung = [...state.mangNguoiDung];
      // Tìm ra người dung trong mảng thay đổi dựa vào thuộc tính tài khoản
      let nguoiDungUpdate = mangNguoiDung.find((nd) => nd.taiKhoan === action.nguoiDungCapNhat.taiKhoan);
      if (nguoiDungUpdate) {
        for(let key in nguoiDungUpdate){
          nguoiDungUpdate[key] = action.nguoiDungCapNhat[key]
        }
      }
      // Cập nhật lại state
      state.mangNguoiDung = mangNguoiDung
      return { ...state };
    }

    default:
      return state;
  }
};
