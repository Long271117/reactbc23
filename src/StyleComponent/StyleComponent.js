import React, { Component } from 'react'

//Cách 1: import đường dẫn css -> ảnh hưởng toàn ứng dụng
// import './Style.css'

//Cách 2: import module css => ảnh hưởng tại nơi import module vào code
// Đặt tên gì cũng được nhưng đường dẫn phải đúng
import style from './Style.module.css';
//Cách 3: import css cho từng thẻ 


export default class StyleComponent extends Component {
  render() {

    let status = false;
    let classStyle = status ? 'text-green' : 'text-red'; 
    return (
      <div>
          <h3>Style component</h3>
          <p className='text-red'>Hello cybersoft</p>
          <p className={style['text-red']}>Hello cybersoft</p>
          <p className={`p-5 ${style[classStyle]} bg-dark`}>Hello cybersoft</p>
          {/* Dùng string template để chèn thêm class khác nếu muốn, thay đổi đơn vị, đơn vị mặc định là px */}
          <p style={{backgroundColor:'#000',color:'green',padding:'15px'}}>Hello bc23 </p>
      </div>
    )
  }
}