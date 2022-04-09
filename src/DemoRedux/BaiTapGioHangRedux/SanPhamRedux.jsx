import React, { Component } from "react";

import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {

    let {sanPham} = this.props;

    return (
        <div className="card">
          <img src={sanPham.hinhAnh} alt="..." height={350} />
          <div className="card-body">
            <p>{sanPham.tenSP}</p>
            <p>{sanPham.giaBan.toLocaleString()}</p>
            <button onClick={() => {
                this.props.themGioHang(sanPham)
            }} className="btn btn-success">Thêm giỏ hàng</button>
          </div>
        </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPhamClick) => {
            // console.log({sanPhamClick})
            let spGH = {...sanPhamClick, soLuong: 1}
                const action = {
                type: 'THEM_GIO_HANG',
                spGH
            }
            // Đưa dữ liệu lên store
            dispatch(action)
        }        
    }
}

export default connect(null, mapDispatchToProps)(SanPhamRedux)
// Vì ko có mapState nên ghi null
// Hoặc
// const mapStateToProps = (rootReducer) => {
//     return{

//     }
// } 
