import {combineReducers, createStore} from 'redux'

import { stateNumber } from './reducers/numberReducer';
import { stateImgCar } from './reducers/stateImgCarReducer';
import { gioHangReducer } from './reducers/gioHangReducer';
import { xemChiTietReducer } from './reducers/xemChiTietReducer';
import { gameXucXacReducer } from './reducers/gameXucXacReducer';
import { quanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer';

// const stateDefaultImg = './img/products/red-car.jpg';

const rootReducer = combineReducers({
    // Các state dự án sẽ được khai báo ở đây 

    stateNumber: stateNumber,

    stateImgCar: stateImgCar,
    // stateImgCar: (state = stateDefaultImg, action) => {
    //     switch (action.type){
    //         case 'DOI_MAU_XE': {
    //             console.log(action)
    //             state = action.imgCar;
    //             return state;
    //         }
    //         default: return state;
    //     }
    // },

    gioHangReducer: gioHangReducer,

    xemChiTietReducer: xemChiTietReducer,

    gameXucXacReducer,

    quanLyNguoiDungReducer: quanLyNguoiDungReducer,

});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
