import React, { Component } from "react";
import FormDangKy from "./FormDangKy";
import TableNguoiDung from "./TableNguoiDung";

export default class BaiTapQuanLyNguoiDung extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid mt-4">
          <h3 className="text-center">Bai tập quản lý người dùng</h3>
          <FormDangKy />
          <TableNguoiDung />
        </div>
      </div>
    );
  }
}
