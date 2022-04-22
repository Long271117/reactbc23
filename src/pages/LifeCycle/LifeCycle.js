import React, { Component } from "react";
import Child from "./Child";

export default class LifeCycle extends Component {
  // state = {}
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      like: 1,
      object: {
        number: 1
      },
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    // Đây là hàm dùng để tiền xử lý các giá trị state và props trước khi render
    console.log("getDerivedStateFromProps");
    //currentState.number = 2;
    return currentState; // return về state mới của component
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate");

    return true;
  }

  render() {
    console.log("render");

    return (
      <div className="mt-2">
        <h3>LifeCycle</h3>
        <div className="p-5 bg-dark text-white">
          <h3>Parent Component</h3>
          <p>Number: {this.state.object.number}</p>
          <button
            className="btn btn-primary mb-3 mr-2"
            onClick={() => {
              let newObject = {...this.state.object};
              newObject.number += 1;
              this.setState({
                object: newObject,
              });
            }}
          >+</button>
          <button
            className="btn btn-primary mb-3"
            onClick={() => {
              this.setState({
                number: this.state.number - 1,
              });
            }}
          >-</button>
          <h3>Like: {this.state.like}</h3>
          <button className="btn btn-danger mb-3" onClick={() => {
              this.setState({
                  like: this.state.like + 1
              })
          }}>Like</button>
          <div className="bg-success p-5">
            <Child object={this.state.object} />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // Đây thường gọi các hàm thực thi thư viện hoặc call api
    console.log("componentDidMount");
  }
}
