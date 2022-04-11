// rcredux
import React, { Component } from "react";
import { connect } from "react-redux";
import KetQuaTroChoi from "./KetQuaTroChoi";
import XucXac from "./XucXac";
import style from "../../assets/styles/components/BaiTapGameXucXac.module.css";

export class BaiTaiGameXucXac extends Component {
  render() {
    return (
      // <div style = {{backgroundImage: 'url(./img/gameXucXac/bgGame.png)', width: '100wh', height: '100vh'}}></div>

      // style module phải có ${}
      <div className={`${style["bg-game"]} m-0 p-0`}>
        <h3 className="text-center display-4 pt-4">Bài tập game xúc xắc</h3>
        <XucXac />
        <KetQuaTroChoi />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BaiTaiGameXucXac);
