import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    
    let {phone} = this.props;
    // let {xemChiTiet} = this.props;

    return (
      <div className="card p-2">
        <img src={phone.hinhAnh} alt="..." className="w-full" height={300} />
        <div className="card-body">
          <p>{phone.tenSP}</p>
          <p>{phone.giaBan.toLocaleString()} VNĐ</p>
          <button
            onClick={() => {
              this.props.xemChiTiet(phone)
              // xemChiTiet(phone)
            }}
            className="btn btn-success"
          >
            Xem chi tiết
          </button>
          <button onClick={() => {
            this.props.themGioHang(phone)
          }} className="btn btn-danger ml-2"><i className="fa fa-shopping-cart mr-2"></i>Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}
