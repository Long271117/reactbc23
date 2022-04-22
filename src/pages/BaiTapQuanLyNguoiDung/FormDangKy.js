import React, { Component } from "react";
import { connect } from "react-redux";

class FormDangKy extends Component {
  state = {
    value: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
      loaiNguoiDung: "NguoiDung",
    },
    error: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
  };

  handleChange = (event) => {
    // Biến event dùng để truy xuất ngược đến thẻ xảy ra sự kiện
    // event.target => dom ngược lại thẻ input đang xảy ra sự kiện

    let { className, id, name, value } = event.target; // id: 'taiKhoan', value: 'nguyenvana'
    // let id = event.target.id;
    // data-type <input date-type /> => dù nằm trên thẻ input nhưng không phải là property => không dùng event.target['data-type']
    // console.log(event['target']['value']);
    let dataType = event.target.getAttribute("data-type");

    // Lấy lại state của value
    let newValue = { ...this.state.value };
    // Xử lý
    newValue[id] = value;

    // Lấy lại state của error
    let newError = { ...this.state.error };
    // Xử lý
    let messError = "";
    if (value === "") {
      messError = id + " không được bỏ trống !";
    }
    if (dataType === "email") {
      let regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!regexEmail.test(value)) {
        messError = "email không đúng đinh dạng";
      }
    }

    newError[id] = messError;

    // set lại state cho value và error
    this.setState(
      {
        value: newValue,
        error: newError,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault(); // Hàm chặn sự kiện reload của browser

    // Kiểm tra dữ liệu nhập trước khi submit
    let { value, error } = this.state;
    // Kiểm tra form lỗi state.error
    for (let key in error) {
      if (error[key] !== "") {
        alert(key + " chưa hợp lệ 1");
        return; // Dừng hàm
      }
    }

    // Kiểm tra form nhập đẩy đủ chưa state.value
    for (let key in value) {
      if (value[key] === "") {
        alert(key + " chưa hợp lệ 2");
        return;
      }
    }

    // Hợp lệ thì gửi dữ liệu lên redux
    console.log(this.state.value);
    const action = {
      type: "DANG_KY",
      nguoiDung: this.state.value,
    };

    // Gữi dữ liệu lên redux
    this.props.dispatch(action);
  };

  // Hướng giải quyết: Thay vì dữ liệu follow từ props => Chuyển dữ liệu sang state.value
  // static getDerivedStateFromProps(newProps, currentState) {
  //   // Lấy props từ redux về gán cho state trước khi render
  //   if (currentState.value.taiKhoan !== newProps.nguoiDungSua.taiKhoan) {
  //     currentState.value = { ...newProps.nguoiDungSua };
  //   }
  //   return currentState;
  // }

  componentWillReceiveProps(newProps) {
    // Nó chỉ chạy khi props thay đổi (khi bấm nút sửa), không chạy khi state thay đổi (handleChange)
    this.setState({
      value: newProps.nguoiDungSua,
    });
  }

  render() {
    console.log("state", this.state.value);
    let { taiKhoan, matKhau, email, hoTen, soDienThoai, loaiNguoiDung } =
      this.state.value;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h3>Thông tin người dùng</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>Tài khoản</p>
                  <input
                    className="form-control"
                    id="taiKhoan"
                    name="taiKhoan"
                    onChange={this.handleChange}
                    value={taiKhoan}
                  />
                  <p className="text text-danger mt-2">
                    {this.state.error.taiKhoan}
                  </p>
                </div>
                <div className="form-group">
                  <p>Họ tên</p>
                  <input
                    className="form-control"
                    id="hoTen"
                    name="hoTen"
                    onChange={this.handleChange}
                    value={hoTen}
                  />
                  <p className="text text-danger mt-2">
                    {this.state.error.hoTen}
                  </p>
                </div>
                <div className="form-group">
                  <p>Email</p>
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={this.handleChange}
                    value={email}
                    data-type="email"
                  />
                  <p className="text text-danger mt-2">
                    {this.state.error.email}
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Mật khẩu</p>
                  <input
                    className="form-control"
                    id="matKhau"
                    name="matKhau"
                    type={"password"}
                    onChange={this.handleChange}
                    value={matKhau}
                  />
                  <p className="text text-danger mt-2">
                    {this.state.error.matKhau}
                  </p>
                </div>
                <div className="form-group">
                  <p>Số điện thoại</p>
                  <input
                    className="form-control"
                    id="soDienThoai"
                    name="soDienThoai"
                    onChange={this.handleChange}
                    value={soDienThoai}
                    data-type="phone"
                  />
                  <p className="text text-danger mt-2">
                    {this.state.error.soDienThoai}
                  </p>
                </div>
                <div className="form-group">
                  <p>Loại người dùng</p>
                  <select
                    className="form-control"
                    id="loaiNguoiDung"
                    name="loaiNguoiDung"
                    onChange={this.handleChange}
                    value={loaiNguoiDung}
                  >
                    <option value={"NguoiDung"}>Người dùng</option>
                    <option value={"QuanTri"}>Quản trị</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-center">
            <button type="submit" className="btn btn-success px-4 mr-3">
              Đăng ký
            </button>
            <button
              type="button"
              className="btn btn-primary px-4"
              onClick={() => {
                // Kiểm tra dữ liệu nhập trước khi cập nhật
                let { value, error } = this.state;
                // Kiểm tra form lỗi state.error
                for (let key in error) {
                  if (error[key] !== "") {
                    alert(key + " chưa hợp lệ 1");
                    return; // Dừng hàm
                  }
                }            
                // Kiểm tra form nhập đẩy đủ chưa state.value
                for (let key in value) {
                  if (value[key] === "") {
                    alert(key + " chưa hợp lệ 2");
                    return;
                  }
                }

                // Gữi dữ liệu sau khi người dùng cập nhật lên redux
                const action = {
                  type: "CAP_NHAT_THONG_TIN",
                  nguoiDungCapNhat: this.state.value,
                };
                this.props.dispatch(action);
              }}
            >
              Cập nhật
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nguoiDungSua: state.quanLyNguoiDungReducer.nguoiDungSua,
  };
};

export default connect(mapStateToProps)(FormDangKy);
