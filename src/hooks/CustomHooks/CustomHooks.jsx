import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";
import useForm from "./useForm";
import useAxios from "./useAxios";

export default function CustomHooks() {
  // // Cách 1:
  //   const [values, setValues] = useState({
  //     username: "",
  //     email: "",
  //     password: "",
  //   });

  //   const handleChange = (evt) => {
  //     const { name, value } = evt.target;
  //     console.log(name, value);

  //     setValues({
  //         ...values,
  //         [name]: value
  //     })
  //   };

  // // Cách 2:
  const { values, handleChange } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { count, increase, decrease } = useCounter(0);

  const { data: tasks } = useAxios({
    url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
    method: "GET",
  });

  const { data: task } = useAxios({
    url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
    method: "GET",
  });

  console.log("GetAllTask", tasks);
  console.log("GetTask", task);

  return (
    <div className="container mt-5 w-50">
      <div>
        <button onClick={decrease} className="btn btn-success">
          -
        </button>
        <span className="mx-2">Count: {count}</span>
        <button onClick={increase} className="btn btn-success">
          +
        </button>
      </div>
      {/* Username */}
      <div className="form-group mt-5">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
      </div>
      {/* Email */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      {/* Password */}
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
