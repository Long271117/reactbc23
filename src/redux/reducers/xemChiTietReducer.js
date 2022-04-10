const stateDefault = {
  maSP: 1,
  tenSP: "VinSmart Live",
  manHinh: "AMOLED, 6.2, Full HD+",
  heDieuHanh: "Android 9.0 (Pie)",
  cameraTruoc: "20 MP",
  cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
  ram: "4 GB",
  rom: "64 GB",
  giaBan: 5700000,
  hinhAnh: "./img/vsphone.jpg",
}

export const xemChiTietReducer = (state = stateDefault, action) => {
    switch (action.type) {
      case "XEM_CHI_TIET": {
        return action.sanPhamClick;
      }
      default:
        return state;
    }
  };