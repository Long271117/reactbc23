import React, { Component } from "react";

export default class DataBiding extends Component {
  product = {
    id: 1,
    name: "Iphone",
    price: 1000,
    img: "https://i.pravatar.cc?u=80",
  };

  renderMessage = () => {
    return "Hello CyberSoft"; // Nội dung trả về phải là string, number, component (thẻ bao phủ)
  };

  renderCard = () => {
    return ( // Nội dung render của hàm phải nằm trong 1 thẻ bao phủ
      <div className="card w-25">
        <img src={this.product.img} alt="..." />
        <div className="card-body">
          <p>{this.product.name}</p>
          <p>{this.product.price}</p>
          <button className="btn btn-success">Add to cart</button>
        </div>
      </div>
    );
  };

  render() {
    let title = "CyberSoft";

    return (
      <div className="container mt-5">
        <p id="title">Tên trung tâm: {title}</p>
        <hr />
        {/* <div className="card w-25">
              <img src={this.product.img} alt="..." />
              <div className='card-body'>
                  <p>{this.product.name}</p>
                  <p>{this.product.price}</p>
                  <button className='btn btn-success'>Add to cart</button>
              </div>
          </div>     */}
        {this.renderCard()}
        <hr />
        <p>Lời chào: {this.renderMessage()}</p>
      </div>
    );
  }
}
