import React, { Component } from "react";
import { connect } from "react-redux";

class TableNguoiDung extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tài khoản</th>
            <th>Họ tên</th>
            <th>Ảnh đại diện</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Loại người dùng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.mangNguoiDung.map((nd, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{nd.taiKhoan}</td>
                <td>{nd.hoTen}</td>
                <td>
                  <img
                    src={`https://i.pravatar.cc?u=${nd.taiKhoan}`}
                    width={50}
                    height={50}
                  />
                </td>
                <td>{nd.email}</td>
                <td>{nd.soDienThoai}</td>
                <td>{nd.loaiNguoiDung}</td>
                <td>
                  <button className="btn btn-danger mr-2" onClick={() => {
                      const action = {
                          type: 'XOA_NGUOI_DUNG',
                          taiKhoan: nd.taiKhoan
                      }
                      this.props.dispatch(action)
                  }}>Xóa</button>
                  <button className="btn btn-primary" onClick={() => {
                      const action = {
                          type: 'SUA_NGUOI_DUNG',
                          nguoiDung: nd
                      }
                      this.props.dispatch(action)
                  }}>Sửa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangNguoiDung: rootReducer.quanLyNguoiDungReducer.mangNguoiDung,
  };
};

export default connect(mapStateToProps)(TableNguoiDung);
