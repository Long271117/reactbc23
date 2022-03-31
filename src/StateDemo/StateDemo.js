import React, { Component } from "react";
import BaiTapChonXe from "./BaiTapChonXe";
import TangGiamFontSize from "./TangGiamFontSize";
import ThayDoiMauSac from "./ThayDoiMauSac";

export default class StateDemo extends Component {
  /*
        this.state: Là thuộc tính có sẵn được kế thừa từ react class component, dùng để chứa các giá trị thay đổi trên giao diện khi người dùng thao tác (handle event);
  */

  state = {
    login: false,
  };
  // login = false; //true : đăng nhập, false: chưa đăng nhập

  userName = "Cybersoft";

  renderLogin = () => {
    if (this.state.login) {
      return (
        <div className="nav-item text-light font-weight-bold">
          Hello ! {this.userName}
        </div>
      );
    }
    return (
      <button
        onClick={() => {
          //Định nghĩa
          this.handleLogin();
        }}
        type="button"
        className="btn btn-success"
      >
        Đăng nhập
      </button>
    );
  };

  handleLogin = () => {
    //Đổi trạng thái đăng nhập
    // this.state.login = true; //Không thay đổi giá trị state theo các gán giá trị trực tiếp

    /*
        + this.setState: Là phương thức có sẵn của react class component, dùng để thay đổi giá trị state và xử lý render lại giao diện. setState là phương thức bất đồng bộ.
        setState nhận vào 2 tham số : state mới (là object state chứa giá trị mới).

    */

    let newState = { login: true };

    this.setState(newState, () => {
      // Gọi sau khi state thay đổi sau khi giao diện render code trong này (Cách xem)
      console.log(this.state.login);
    });

    // this.setState({
    //     login: true
    // });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              {/* {this.login ? <div className='nav-item text-light font-weight-bold'>Hello ! {this.userName}</div> : <button className='btn btn-success'>Đăng nhập</button>} */}
              {this.renderLogin()}
            </form>
          </div>
        </nav>
        <hr></hr>
        <TangGiamFontSize />
        <ThayDoiMauSac />
        <BaiTapChonXe />
      </div>
    );
  }
}
