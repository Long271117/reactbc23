import React, { Component } from 'react'

import { connect } from "react-redux";

class ChiTietSanPhamRedux extends Component {
  render() {    

   let {tenSP, hinhAnh, heDieuHanh, manHinh, ram, rom, cameraSau, cameraTruoc} = this.props.stateXemChiTiet;

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
                        <td>{manHinh}</td>
                    </tr>
                    <tr>
                        <th>Hệ điều hành</th>
                        <td>{heDieuHanh}</td>
                    </tr>
                    <tr>
                        <th>Camera trước</th>
                        <td>{cameraTruoc}</td>
                    </tr>
                    <tr>
                        <th>Camera sau</th>
                        <td>{cameraSau}</td>
                    </tr>
                    <tr>
                        <th>RAM</th>
                        <td>{ram}</td>
                    </tr>
                    <tr>
                        <th>ROM</th>
                        <td>{rom}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
    return{
        stateXemChiTiet: rootReducer.xemChiTietReducer
    }
}

export default connect(mapStateToProps)(ChiTietSanPhamRedux)

