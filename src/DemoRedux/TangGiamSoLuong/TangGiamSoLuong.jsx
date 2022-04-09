import React, { Component } from 'react'

// Kết nối redux, gõ connect sẽ tự kết nối component và reactstore
import { connect } from 'react-redux'

class TangGiamSoLuong extends Component {
  // state = {number: 1}

  render() {
    return (
      <div className='container my-5'>          
          <button onClick={() => {
            this.props.tangGiamSoLuong(1);
          }} className="btn btn-primary">+</button>

          <span className="mx-3">{this.props.number}</span>

          <button onClick={() => {
            this.props.tangGiamSoLuong(-1);
          }} className="btn btn-danger">-</button>
      </div>
    )
  }
}

// Lấy dữ liệu từ redux về
// Cú pháp kết nối giữa react component và redux
const mapStateToProps = (rootReducer) => { // state tổng của tất cả ứng dụng // Tạo ra các props cho component là giá trị
    return{
        number: rootReducer.stateNumber
        // tên number là tự do đặt
    }
}


// Đĩnh nghĩa 1 hàm mapDispatchToProps => Nhiệm vụ: tạo ra các props cho component là hàm
const mapDispatchToProps = (dispatch) => {
    return {
        tangGiamSoLuong: (soLuong) => {
            // console.log(soLuong)
            // Để gửi dữ liệu lên redux (action)
            const action = {
              type: 'TANG_GIAM_SO_LUONG', // redux bắt buộc phải có
              soLuong: soLuong
            }
            // Đưa dữ liệu lên redux
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TangGiamSoLuong);


