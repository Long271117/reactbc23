import React, { useState, useRef } from "react";

export default function DemoUseRef() {
  //const [state, setState] = useState({ username: "", password: "" });
  const [number, setNumber] = useState(1);
  //console.log("state", state);

  // useRef: có thể cache lại giá trị sau mỗi lần render nhưng không render lại giao diện. Giống useState nhưng không cần render lại giao diện khi state thay đổi
  const useLoginRef = useRef({ username: "", password: "" });
  //let userLogin = { username: "", password: "" };

  const userNameRef = useRef({});
  const userPassRef = useRef({});

  const handleChange = (event) => {
    const { value, name } = event.target;
    useLoginRef.current[name] = value;
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Chặn sự kiện reload của brower, giao diện sẽ không render lại, tuy nhiên cú pháp dài
    // let username = document.getElementsByName('username')[0].value; // [0] là thấy cái đầu tiên
    // let password = document.getElementsByName('password')[0].value;
    // console.log(username, password)

    // Cách #:
    console.log("userLogin", useLoginRef.current);
    console.log("username", userNameRef.current.value); // DOM đến thẻ (tính năng phụ của useRef)
    console.log("userpass", userPassRef.current.value);
    userNameRef.current.style.color = "red";
  };

  return (
    <form className="container mt-5 w-50" onSubmit={handleSubmit}>
      <h3>Number: {number}</h3>
      <button
        type="button"
        className="btn btn-success mb-5"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <h3>Login</h3>
      <div className="form-group">
        <p>username</p>
        <input
          className="form-control"
          name="username"
          alt="..."
          ref={userNameRef}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <p>password</p>
        <input
          className="form-control"
          name="password"
          alt="..."
          ref={userPassRef}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success" type="submit" alt="...">
          Login
        </button>
      </div>
    </form>
  );
}
