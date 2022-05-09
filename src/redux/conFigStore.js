import { applyMiddleware, combineReducers, createStore, compose } from "redux";

import { stateNumber } from "./reducers/numberReducer";
import { stateImgCar } from "./reducers/stateImgCarReducer";
import { gioHangReducer } from "./reducers/gioHangReducer";
import { xemChiTietReducer } from "./reducers/xemChiTietReducer";
import { gameXucXacReducer } from "./reducers/gameXucXacReducer";
import { quanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";
import { tasksReducer } from "./reducers/tasksReducer/tasksReducer";
import { toDoListReducer } from "./reducers/toDoListReducer";

//import redux thunk
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

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
  tasksReducer,
  toDoListReducer,
});

// Cấu hình thunk

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
