const stateDefault = [
  //{maSP: 1, tenSP: 'Iphone', hinhAnh: './img/products/black-car.jpg', giaBan: '1000', soLuong: 1}
]; // 00xx

export const gioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHang = state;
      let sp = gioHang.find((sp) => sp.maSP === action.spGH.maSP);
      if (sp) {
        sp.soLuong += 1;
      } else {
        gioHang.push(action.spGH);
        //console.log("gioHang", gioHang);
      }
      // immutable: tính bất biến
      // Đối với state là object hoặc array phải clone ra object array mới
      return [...gioHang]; //00xx
    }

    case "XOA_GIO_HANG": {
      // Nếu clone ở trên thì xuống dưới ko cần clone nữa
      let gioHang = [...state];
      if (window.confirm("Bạn có muốn xóa sản phẩm này không")) {
        gioHang = gioHang.filter((sp) => sp.maSP !== action.maSPClick);
      }
      return gioHang;
    }

    case "TANG_GIAM_SO_LUONG": {
      let gioHang = [...state];
      let spGH = gioHang.find((sp) => sp.maSP === action.maSPClick);
      if (spGH) {
        spGH.soLuong += action.soTangGiam;
      }
      if (spGH.soLuong < 1) {
        if (window.confirm("Bạn có muốn xóa sản phẩm này không")) {
          gioHang = gioHang.filter((sp) => sp.maSP !== action.maSPClick);
        }
        spGH.soLuong -= action.soTangGiam;
      }
      return gioHang;
    }

    default:
      return state; // 00xx
  }
};
