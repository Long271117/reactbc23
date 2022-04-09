import React, { Component } from 'react'

// Kết nối redux
import { connect } from 'react-redux'

class BaiTapChonXeRedux extends Component {
  render() {
    return (
      <div className='container mt-5'>
          <h3>Bài tập chọn xe</h3>
          <div className='row'>
              <div className='col-8'>
                 <img src={this.props.imgCar} alt='...' className='w-100'/>
              </div>
              <div className='col-4'>
                  <div className='row'>
                      <div className='col-3'>
                          <button onClick={() => {
                              this.props.chonXe("red")
                          }} className='btn' style={{backgroundColor: 'red', color: '#fff'}}>Red</button>
                      </div>
                      <div className='col-3'>
                          <button onClick={() => {
                              this.props.chonXe("black")
                          }} className='btn' style={{backgroundColor: 'black', color: 'yellow'}}>Black</button>
                      </div> 
                      <div className='col-3'>
                          <button onClick={() => {
                              this.props.chonXe("silver")
                          }} className='btn' style={{backgroundColor: 'silver', color: '#000'}}>Silver</button>
                      </div>
                      <div className='col-3'>
                          <button onClick={() => {
                              this.props.chonXe("steel")
                          }} className='btn' style={{backgroundColor: '#EEE', color: '#000'}}>Steel</button>
                      </div>                     
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

// Định nghĩa hàm lấy dữ liệu từ redux về
const mapStateToProps = (rootReducer) => {
    return{
        imgCar: rootReducer.stateImgCar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chonXe: (srcCar) => {
            const action = {
                type: 'DOI_MAU_XE',
                imgCar: `./img/products/${srcCar}-car.jpg`
            }
            // Đưa dữ liệu lên store
            dispatch(action)
        }        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BaiTapChonXeRedux)