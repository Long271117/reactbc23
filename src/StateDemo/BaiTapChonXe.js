import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {


    state = {
        imgSrc: './img/products/black-car.jpg'
    }

    handleChangeColor = (color) => {
        this.setState({
            imgSrc: `./img/products/${color}-car.jpg`
        })
    }

    render() {

        return (
            <div className='container mt-5'>
                <h3>Bài tập chọn xe</h3>
                <div className='row'>
                    <div className='col-8'>
                        <img src={this.state.imgSrc} alt='...' className='w-100' />
                    </div>
                    <div className='col-4'>
                        <div className='row'>
                            <div className='col-3'>
                                <button className='btn text-white' style={{ background: 'red' }} onClick={() => {
                                    this.handleChangeColor('red');
                                }}>Red car</button>
                            </div>
                            <div className='col-3'>
                                <button className='btn text-white' style={{ background: 'silver' }} onClick={() => {
                                    this.handleChangeColor('silver');
                                }}>Silver car</button>
                            </div>
                            <div className='col-3'>
                                <button className='btn text-white' style={{ background: 'black' }} onClick={() => {
                                    this.handleChangeColor('black');
                                }}>Black car</button>
                            </div>
                            <div className='col-3'>
                                <button className='btn text-dark' style={{ background: '#EEE' }} onClick={() => {
                                    this.handleChangeColor('steel');
                                }}>Steel car</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
