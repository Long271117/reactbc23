import React, { Component } from 'react'

export default class ThayDoiMauSac extends Component {

    state = {
        colorHome : 'black'
    }

    handleChangeColor = (newColor) => {
        this.setState({
            colorHome: newColor
        })
    }

  render() {
    return (
      <div className='container mt-5'>
          <h3>Bài tập: Thay đổi màu sắc ngôi nhà</h3>
          <i className='fa fa-home' style={{fontSize:150, color:this.state.colorHome}}></i>

          <br />

          <button className='btn btn-success' onClick={() => {
              this.handleChangeColor('green');
          }}>Green</button>
          
          <button className='btn btn-primary ml-2' onClick={() => {
              this.handleChangeColor('blue');
          }}>Blue</button>

          <button className='btn btn-danger ml-2' onClick={() => {
              this.handleChangeColor('red');
          }}>Red</button>

          <button className='btn btn-warning ml-2' onClick={() => {
              this.handleChangeColor('yellow');
          }}>Yellow</button>
          
      </div>
    )
  }
}
