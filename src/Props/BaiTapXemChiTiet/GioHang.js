import React, { Component } from 'react'

export default class GioHang extends Component {
  
    renderGioHang = () => {
        let {gioHang} = this.props;
        return gioHang.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td>                
                    <img src={spGH.hinhAnh} alt="..." width={50} height={50}/>
                </td>
                <td>
                    <button onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP, 1)
                    }} className='btn btn-primary mr-2'>+</button>
                    {spGH.soLuong}

                    <button onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP, -1)
                    }} className='btn btn-primary ml-2'>-</button>
                </td>
                <td>{spGH.giaBan.toLocaleString()}</td>
                <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                <td>
                    <button onClick={() => {
                        this.props.xoaGioHang(spGH.maSP);
                    }} className='btn btn-danger'>Xóa</button>
                </td>
            </tr>
        })
    }



    render() {

    let {tongSoLuong} = this.props;

    return (
      <div>
          <div className='text-right'>
            <span style={{cursor: 'pointer'}}></span>
            <i class="fa fa-shopping-cart mr-2 mb-3"></i>Giỏ hàng ({tongSoLuong})
          </div>

          <table className='table'>
            <thead>
                <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Giá bán</th>
                    <th>Thành tiền</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.renderGioHang()}
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td style={{fontWeight: "bold"}}>Tổng tiền</td>
                    <td style={{fontWeight: "bold"}}>{this.props.gioHang.reduce((tongTien, spGH, index) => {
                        return tongTien += spGH.giaBan * spGH.soLuong;
                    }, 0).toLocaleString()} VNĐ</td>
                </tr>
            </tfoot>
          </table>
      </div>
    )
  }
}

