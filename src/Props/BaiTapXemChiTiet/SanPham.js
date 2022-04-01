import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    
    let {phone} = this.props;

    return (
      <div className="card p-2">
        <img src={phone.hinhAnh} alt="..." className="w-full" height={300} />
        <div className="card-body">
          <p>{phone.tenSP}</p>
          <p>{phone.giaBan.toLocaleString}</p>
          <button
            onClick={() => {
              this.props.xemChiTiet(phone)
            }}
            className="btn btn-success"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
