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
    taiKhoan: "nguyenvanb",
    matKhau: "654321",
    hoTen: "Nguyễn Văn B",
    soDienThoai: "987654321",
    email: "nguyenvanb@gmail.com",
    loaiNguoiDung: "QuanDung",
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
      state.nguoiDungSua = action.nguoiDung
      
      
      return { ...state };
    }

    default:
      return state;
  }
};
