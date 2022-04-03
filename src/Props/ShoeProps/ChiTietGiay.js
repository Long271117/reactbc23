import React, { Component } from 'react'

export default class ChiTietGiay extends Component {
  render() {
    
    let {id, name, price, description, quantity, image} = this.props.shoe;

    return (
      <div id="chiTietGiay" className='row mt-4'>
        <div className="col-4">
            <h3 className="text-center">{name}</h3>
            <img src={image} alt="..." height={300} className="w-100"/>
        </div>
        <div className="col-8">
            <h3>Thông tin</h3>
            <table className="table">
                <tbody>
                    <tr>
                        <th width={120}>Mã số</th>
                        <td>{id}</td>
                    </tr>
                    <tr>
                        <th width={120}>Tên</th>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <th width={120}>Giá</th>
                        <td>{price}$</td>
                    </tr>
                    <tr>
                        <th width={120}>Mô tả</th>
                        <td>{description}</td>
                    </tr>
                    <tr>
                        <th width={120}>Số lượng</th>
                        <td>{quantity}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
