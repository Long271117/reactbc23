import React, { memo } from "react";

// Memo: ko render lại khi props thay đổi, nên sử dụng thường xuyên
function Comment(props) {
  console.log("comment");
  return (
    <div>
      {props.renderNotify()} <br/>
      <textarea></textarea> <br />
      <button className="btn btn-primary">Gửi</button>
    </div>
  );
}

export default memo(Comment);
