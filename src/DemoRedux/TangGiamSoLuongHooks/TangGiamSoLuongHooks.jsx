import React from "react";
import { useSelector, useDispatch} from "react-redux";

// useSelector là một hooks giúp kết nối với redux store và lấy state về cho component
// useDispatch là 1 hook giúp dispatch 1 redux action lên redux store
export default function TangGiamSoLuongHooks() {
  const stateNumber = useSelector((rootState) => rootState.stateNumber);

  const dispatch = useDispatch();

  const tangGiamSoLuong = (soLuong) => {
      // Tạo action
      const action = {
          type: 'TANG_GIAM_SO_LUONG', //redux bắt buộc phải có
          soLuong: soLuong,
      };
      // Gửi action lên redux store
      dispatch (action)
      console.log(action)
  }
  return (
    <div>
      <p>stateNumber: {stateNumber}</p>
      <button onClick={() => {tangGiamSoLuong(-1)}}>-</button>
      <button onClick={() => {tangGiamSoLuong(1)}}>+</button>
    </div>
  );
}
