import React, { Component } from "react";

export default class Login extends Component {
  handleLogin = () => {
    console.log("Login");
    //this.props.history: tại vì được load ra từ thẻ route
    let usName = document.querySelector("#username").value;
    let pass = document.querySelector("#password").value;
    if (usName === "cybersoft" && pass === "cybersoft") {
      // alert("Đăng nhập thành công");

      // history: chuyển hướng trang sau khi xử lý
      this.props.history.push("/profile");

      // replace: thay đổi route hiện tại bằng route khác, dùng cho trang search
      // this.props.history.replace('/profile');

      // Đăng nhập thành công sẽ lưu thông tin user
      localStorage.setItem('username', usName);
      

    } else {
      alert("Tài khoản hoặc mật khẩu không đóng");
    }
  };

  render() {
    return (
      <div className="container mt-5 col-6">
        <h3>Login</h3>
        <div className="form-group mt-3">
          <p>User name</p>
          <input className="form-control" id="username" name="username" />
        </div>
        <div className="form-group mt-3">
          <p>Password</p>
          <input className="form-control" id="password" name="password" />
        </div>
        <div className="form-group mt-3">
          <button
            className="btn btn-success"
            onClick={() => {
              this.handleLogin();
            }}
          >
            Login
          </button>
          <button
            className="ml-3 btn btn-warning"
            onClick={() => {
              this.props.history.goBack();
            }}
          >
            Trở về
          </button>
        </div>
      </div>
    );
  }
}

// history.goBack: chuyển hướng về trang trước đó