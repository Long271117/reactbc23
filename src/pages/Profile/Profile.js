import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Profile extends Component {
  render() {
    
    if(!localStorage.getItem('username')){
        alert('Bạn chưa đăng nhập nên không thể vào trang');
        //this.history.push('') => Chuyển hướng nhưng vẫn load dữ liệu phía dưới
        return <Redirect to="/login" /> // Kết thúc tại đây ko chạy ở dưới nữa
    }
    return (
      <div>Profile</div>
    )
  }
}
