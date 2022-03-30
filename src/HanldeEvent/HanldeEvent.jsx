import React, { Component } from 'react'

export default class HanldeEvent extends Component {
  
    showMess = () => {
        alert('Hello Hello')
    }
  
    sayHello = (name) => {
        alert('Hello ' + name)
    }

    render() {
    return (
      <div className="container">
          <button onClick={this.showMess}>Click me 1</button>
          <button onClick={() => {
              alert('Hello Hello')
          }}>Click me 2</button>

          <hr />

          {/* Hàm trả về hàm */}
          <button onClick={this.sayHello.bind(this,'Long')}>Say hello 1</button> 

          {/* anonymos function */}
          <button onClick={() => (
              this.sayHello('Long')
          )}>Say hello 2</button>
      </div>
    )
  }
}
