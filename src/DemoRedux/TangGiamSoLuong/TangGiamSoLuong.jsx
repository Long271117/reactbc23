import React, { Component } from 'react'

// Kết nối redux, gõ connect sẽ tự kết nối component và reactstore
import { connect } from 'react-redux'

class TangGiamSoLuong extends Component {
  // state = {number: 1}

  render() {
    return (
      <div className='container'>
          <p>{this.props.number}</p>
          <button onClick={() => {

          }}>+</button>
          <button>-</button>
      </div>
    )
  }
}

// Lấy dữ liệu từ redux về
const mapStateToProps = (rootReducer) => { // state tổng của tất cả ứng dụng
    return{
        number: rootReducer.stateNumber
        // tên number là tự do đặt
    }
}


// Hàm định props gửi dữ liệu lên store, dùng để gửi giá trị lên store
const mapDispatchToProps = (dispatch) => {
    return {
        tangGiamSoLuong: () => {
            
        }
    }
}

export default connect(mapStateToProps)(TangGiamSoLuong);


