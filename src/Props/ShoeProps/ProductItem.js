import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    /* Phân biệt state và props:
        - Giống nhau: Đây là 2 thuộc tính có sẵn cũa react class component để biding dữ liệu trên giao diện (html)
        - Khác nhau:
           + state dùng để chứa dữ liệu thay đổi trên giao diện từ 1 event (1 xử lý từ người dùng); state có thể gán lại giá trị thông qua phương thức this.setState
           + props là thuộc tính chứa giá trị từ component cha truyền vào; this.props không thể thay đổi giá trị (redonly)
    */
    
    // es6
    let {prod, xemChiTietGiay} = this.props;    

    // es5
    // let prod = this.props.prod;

    return (
      <div className="card p-3">
        <div className="d-flex justify-content-center">
          <img
            src={prod.image}
            alt="..."
            width={200}
          />
        </div>
        <div className="w-100">
          <p>{prod.name}</p>
          <p>Price: {prod.price}$</p>
          <div className="d-flex justify-content-around flex-column">
              <button onClick={() => {
                    xemChiTietGiay(prod)
                  }} className="btn btn-primary col-8 mb-3">See more</button>
              <button className="btn btn-success col-8">+ Add to carts</button>
          </div>
        </div>
      </div>
    );
  }
}
