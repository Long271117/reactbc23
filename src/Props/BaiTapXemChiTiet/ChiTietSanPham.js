import React, { Component } from 'react'

export default class ChiTietSanPham extends Component {
  render() {
    
    // Lấy dữ liệu sản phẩm thông qua this.props.spChiTiet
    let {maSP, tenSP, giaBan, hinhAnh, heDieuHanh, manHinh, ram, rom, cameraSau, cameraTruoc} = this.props.spChiTiet;
    // Hoặc: let spChiTiet = this.props;  => Xuống dưới khi gọi phải spChiTiet.hinhAnh, spChiTiet.tenSP,...

    return (
        <div className="row mt-5">
        <div className="col-4">
            <h3 className="text-center">{tenSP}</h3>
            <img src={hinhAnh} alt="..." height={300} className="w-100"/>
        </div>
        <div className="col-8">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Màn hình</th>
                        <th>{manHinh}</th>
                    </tr>
                    <tr>
                        <th>Hệ điều hành</th>
                        <th>{heDieuHanh}</th>
                    </tr>
                    <tr>
                        <th>Camera trước</th>
                        <th>{cameraTruoc}</th>
                    </tr>
                    <tr>
                        <th>Camera sau</th>
                        <th>{cameraSau}</th>
                    </tr>
                    <tr>
                        <th>RAM</th>
                        <th>{ram}</th>
                    </tr>
                    <tr>
                        <th>ROM</th>
                        <th>{rom}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    )
  }
}
