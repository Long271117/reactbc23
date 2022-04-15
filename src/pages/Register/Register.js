import React, { Component } from "react";
import { Prompt } from 'react-router-dom';
export default class Register extends Component {
  state = {
    statis: true,
  };

  handleSubmit = () => {
    this.setState({ status: false });
  };

  render() {
    return (
      <div className="container">
        <h3>Đăng ký</h3>
        <div class="form-group">
          <p>Tài khoản</p>
          <input className="form-control" id="taiKhoan" />
        </div>
        <div class="form-group">
          <p>Mật khẩu</p>
          <input className="form-control" id="matKhau" />
        </div>
        <div class="form-group">
          <button
            className="btn btn-success"
            onClick={() => {
              this.handleSubmit();
            }}
          >
            Đăng ký
          </button>
        </div>
        <Prompt
           when={this.state.status} 
           message={location => ('Bạn có muốn rời trang ?')}
           />           
      </div>
    );
  }
}
