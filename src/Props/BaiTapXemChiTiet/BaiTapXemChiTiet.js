import React, { Component } from "react";
import ChiTietSanPham from "./ChiTietSanPham";
import GioHang from "./GioHang";
import SanPham from "./SanPham";

export default class BaiTapXemChiTiet extends Component {
  arrPhone = [
    {
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
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    spChiTiet: {
      // nếu là object thì phải có dữ liệu mặc định, copy trong mảng
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
    },

    gioHang: [
      // maSP: 1, tenSP: 'Iphone', hinhAnh: 'https://picsum.photos/200', giaBan: 1000, soLuong: 2}
    ],
  };

  tangGiamSoLuong = (maSPClick, soLuong) => {
    //1 => nút +, -1 => nút -
    console.log(maSPClick, soLuong);

    let gioHang = this.state.gioHang;
    // let {gioHang} = this.state

    let spGH = gioHang.find((sp) => sp.maSP === maSPClick);
    if (spGH) {
      spGH.soLuong += soLuong;
      if (spGH.soLuong < 1) {
        if (window.confirm("Bạn có muốn xóa sản phẩm này không")) {
          gioHang = gioHang.filter((sp) => sp.maSP !== maSPClick);
        }
        // Nếu người dùng cancel => -- số lượng đó, nghĩa là cộng
        spGH.soLuong -= soLuong;
      }
    }

    // setState lại cho giỏ hàng
    this.setState({
      gioHang: gioHang,
    });
  };

  xoaGioHang = (maSanPhamClick) => {
    console.log("maSanPhamClick", maSanPhamClick);

    let gioHang = this.state.gioHang;
    // tìm ra sp chứa mã click nút xóa
    let index = gioHang.findIndex((sp) => sp.maSP) === maSanPhamClick;
    if (index !== -1) {
      // Hỏi người dùng trước khi thực hiện
      window.confirm("Bạn có muốn xóa sản phẩm đang chọn");
      gioHang.splice(index, 1);
    }

    // setState
    this.setState({
      gioHang: gioHang,
    });
  };

  // state đặt ở đâu thì hàm setState sẽ đặt tại đó
  themGioHang = (sanPhamClick) => {
    // spClick chưa có thuộc tính số lượng

    let sp = { ...sanPhamClick, soLuong: 1 };

    console.log("sanPhamClick", sanPhamClick);
    let gioHang = this.state.gioHang;

    //gioHang.push(sp)
    // check giỏ hàng đã có object sanpham đó chưa => nếu có tăng số lượng => chưa có push pbject vào gioHang
    let spGH = gioHang.find((spObjectConCuaMangGioHang) => spObjectConCuaMangGioHang.maSP === sanPhamClick.maSP);
    if (spGH) {
      spGH.soLuong += 1;
    } else {
      gioHang.push(sp);
    }

    this.setState({
      gioHang: gioHang,
    });
  };

  renderProduct = () => {
    return this.arrPhone.map((phone, index) => {
      return (
        <div className="col-4 mt-4" key={index}>
          <SanPham
            phone={phone}
            xemChiTiet={this.xemChiTiet}
            themGioHang={this.themGioHang}
          />
        </div>
      );
    });
  };

  xemChiTiet = (sanPhamClick) => {
    this.setState({
      spChiTiet: sanPhamClick,
    });
  };

  render() {

    let tongSoLuong = this.state.gioHang.reduce((tongSanPham, spGH, index) => {
      return (tongSanPham += spGH.soLuong);
    }, 0);

    return (
      <div className="container">
        <h3 className="mt-5">Giỏ hàng</h3>
        <GioHang
          tongSoLuong={tongSoLuong}
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />
        <h3 className="text-center mt-5">DANH SÁCH SẢN PHẨM</h3>
        <div className="row">
          {this.renderProduct()}
        </div>
        <ChiTietSanPham spChiTiet={this.state.spChiTiet} />
      </div>
    );
  }
}
