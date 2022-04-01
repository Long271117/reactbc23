import React, { Component } from "react";
import CardProduct from "./CardProduct";

export default class DemoProps extends Component {
  
    product1 = {
        id: 1,
        name: 'Iphone',
        price: 1000,
        img: 'https://picsum.photos/id/1/200'
    }

    product2 = {
        id: 2,
        name: 'Samsung',
        price: 5000,
        img: 'https://picsum.photos/id/2/200'
    }

 
  render() {
    return (
      <div className="container p-5">
        <div className="d-flex">
          {/* <div className="w-25">
            <CardProduct name="Iphone" price="1000" img="https://picsum.photos/id/1/200"/>
          </div>
          <div className="w-25 ml-5">
            <CardProduct name="Samsung" price="5000" img="https://picsum.photos/id/2/200"/>
          </div> */}

          <div className="w-25">
            <CardProduct product = {this.product1}/>
          </div>
          <div className="w-25">
            <CardProduct product = {this.product2}/>
          </div>
        </div>
      </div>
    );
  }
}
