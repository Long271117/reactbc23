import React, { Component } from "react";

// Viết hoa ten file component
export default class RCC extends Component {
  // Phương thức render sẽ là phương thức định nghĩa giao diện của thẻ này
  // Nội dung component tạo ra phải được bao phủ bởi 1 thẻ
  render() {
    return (
      <div className="d-flex p-5">
        <div className="card w-25 p-3">
          <img src="https://i.pravatar.cc?u=1" alt="..." />
          <div className="card-body">
            <p>Iphone</p>
            <p>1000</p>
            <button className="btn btn-success">Add to cart</button>
          </div>
        </div>
        <div className="card w-25 p-3">
          <img src="https://i.pravatar.cc?u=2" alt="..." />
          <div className="card-body">
            <p>Iphone</p>
            <p>1000</p>
            <button className="btn btn-success">Add to cart</button>
          </div>
        </div>
        <div className="card w-25 p-3">
          <img src="https://i.pravatar.cc?u=3" alt="..." />
          <div className="card-body">
            <p>Iphone</p>
            <p>1000</p>
            <button className="btn btn-success">Add to cart</button>
          </div>
        </div>
        <div className="card w-25 p-3">
          <img src="https://i.pravatar.cc?u=4" alt="..." />
          <div className="card-body">
            <p>Iphone</p>
            <p>1000</p>
            <button className="btn btn-success">Add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}
