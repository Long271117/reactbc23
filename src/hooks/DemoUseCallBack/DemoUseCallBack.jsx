import React, { useCallback, useState } from "react";
import Comment from "./Comment";

export default function DemoUseCallBack() {
  let [like, setLike] = useState(1);

  const [number, setNumber] = useState(1);

  const renderNotify = () => {
    return `Bạn đã thả ${like} ♥!`;
  };

  // Chỉ thay đổi like mới render lại, giữ lại function sau mỗi lần render
  // UseCallback sử dụng nhiều
  const renderNotifyCallBack = useCallback(renderNotify, [like])

  return (
    <div className="m-5">
      <p>Number: {number}</p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >+</button>
      Like: {like} ♥
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br />
      <br />
      <Comment renderNotify={renderNotifyCallBack} />
    </div>
  );
}
