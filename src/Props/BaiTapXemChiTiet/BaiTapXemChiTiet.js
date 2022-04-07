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

    // setState => thay đổi giỏ hàng
    this.setState({
      gioHang: gioHang,
    });
  };

  // Thiết kế giao diện
  // biding dữ liệu arrayPhone lên giao diện
  renderProduct = () => {
    return this.arrPhone.map((phone, index) => {
      return (
        <div className="col-4 mt-4" key={index}>
          {/* Vì nút button nằm ở component giỏ hàng nên phải dùng props, nếu nút button nằm ở chung file thì ko cần */}
          {/* <button onClick={() => {
              this.themGioHang()
            }} >Thêm giỏ hàng</button> */}

          <SanPham
            phone={phone}
            xemChiTiet={this.xemChiTiet}
            themGioHang={this.themGioHang}
          />

          {/* <div className="card p-2">
              <img src={phone.hinhAnh} alt="..." className="w-full" height={300}/>
              <div className="card-body">
                  <p>{phone.tenSP}</p>
                  <p>{phone.giaBan.toLocaleString}</p>
                  <button onClick={() => {
                      this.xemChiTiet(phone)
                  }} className="btn btn-success">Xem chi tiết</button>
              </div>
          </div> */}
        </div>
      );
    });
  };

  xemChiTiet = (sanPhamClick) => {
    // console.log("sanPhamClick", sanPhamClick);
    // setState thay đổi spChiTiet
    this.setState({
      spChiTiet: sanPhamClick,
    });
  };

  render() {
    //let {maSP, tenSP, giaBan, hinhAnh, heDieuHanh, manHinh, ram, rom, cameraSau, cameraTruoc} = this.state.spChiTiet

    let tongSoLuong = this.state.gioHang.reduce((tongSanPham, spGH, index) => {
      return (tongSanPham += spGH.soLuong);
    }, 0);

    return (
      <div className="container">
        <h3 className="mt-5">Giỏ hàng</h3>

        {/* <button onClick={() => {
          this.xoaGioHang()
        }} >Xóa giỏ hàng</button> */}
        <GioHang
          tongSoLuong={tongSoLuong}
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />

        <h3 className="text-center mt-5">DANH SÁCH SẢN PHẨM</h3>
        <div className="row">
          {this.renderProduct()}
          {/* <div className="col-4">
            <div className="card">
                <img src="" alt="..." className="w-full" height={300}/>
                <div className="card-body">
                    <p>Iphone 13</p>
                    <p>27,000,000</p>
                    <button className="btn btn-success">Xem chi tiết</button>
                </div>
            </div>
          </div>
          <div className="col-4">
          </div>
          <div className="col-4">
          </div> */}
        </div>

        <ChiTietSanPham spChiTiet={this.state.spChiTiet} />
        {/* <div className="row mt-5">
            <div className="col-4">
                <h3 className="text-center">{tenSP}</h3>
                <img src={hinhAnh} alt="..." height={300} className="w-100"/>
            </div>
            <div className="col-8">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Màn hình</th>
                            <th>{manHinh}</th>
                        </tr>
                        <tr>
                            <th>Hệ điều hành</th>
                            <th>{heDieuHanh}</th>
                        </tr>
                        <tr>
                            <th>Camera trước</th>
                            <th>{cameraTruoc}</th>
                        </tr>
                        <tr>
                            <th>Camera sau</th>
                            <th>{cameraSau}</th>
                        </tr>
                        <tr>
                            <th>RAM</th>
                            <th>{ram}</th>
                        </tr>
                        <tr>
                            <th>ROM</th>
                            <th>{rom}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> */}
      </div>
    );
  }
}
