import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addTaskApi,
  doneTaskApi,
  getTaskApiAction,
  rejectTaskApi,
  xoaTaskApi,
} from "../../redux/actions/toDoListActions";

export default function ToDoListApp() {
  //const [tasks, setTasks] = useState([]);
  const taskRef = useRef({ taskName: "" });
  const { tasks } = useSelector((state) => state.toDoListReducer);
  console.log("tasks", tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    // Cách 2: sử dụng asyn await

    /*
        redux cho phép dispatch 2 dạng action
        action1: {type: '', data: ''};
        action2: (dispatch) => {xử lý có giá trị}
        dispatch 2 dispatch
      */
    const action2 = getTaskApiAction;
    dispatch(action2);
  }, []);

  const handleChange = (e) => {
    let { id, value } = e.target;
    taskRef.current[id] = value;
    console.log(taskRef.current);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gọi hàm để tạo ra action loại 2 (dispatch) => {}
    const action = addTaskApi(taskRef.current);
    // dispatch action loại 2 để thunk gọi api thực thi
    dispatch(action);
  };

  const deleteTask = (taskName) => {
    const action = xoaTaskApi(taskName);
    dispatch(action);
    //dispatch(xoaTaskApi(taskName))
    // Hoặc xuống chỗ nút nhập trực tiếp
  };

  const doneTask = (taskName) => {
    const action = doneTaskApi(taskName);
    dispatch(action);
    //dispatch(doneTaskApi(taskName))
    // Hoặc xuống chỗ nút nhập trực tiếp
  };

  const rejectTask = (taskName) => {
    const action = rejectTaskApi(taskName);
    dispatch(action);
    //dispatch(rejectTaskApi(taskName))
    // Hoặc xuống chỗ nút nhập trực tiếp
  }

  return (
    <div className="container mt-5">
      <h3 className="text-center display-4">To to list</h3>

      <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
        <div className="input-group w-50 my-5">
          <input
            className="form-control"
            id="taskName"
            name="taskName"
            onChange={handleChange}
          />
          <button className="btn btn-success" type="submit">
            Add Task
          </button>
        </div>
      </form>

      <div className="d-flex justify-content-center">
        <table className="table w-50 text-center">
          <tbody>
            {tasks
              .filter((task) => !task.status)
              .map((task, index) => {
                return (
                  <tr key={index}>
                    <td>{task.taskName}</td>
                    <td className="w-25">
                      <span className="badge badge-danger">{task.status}</span>
                      <span
                        className="fa fa-check ml-2 text-success"
                        style={{ fontSize: 25 }}
                        onClick={() => {
                          doneTask(task.taskName)
                        }}
                      ></span>
                      <span
                        className="fa fa-trash ml-4 text-danger"
                        style={{ fontSize: 25, cursor: "pointer" }}
                        onClick={() => {
                          deleteTask(task.taskName);
                        }}
                      ></span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            {tasks
              .filter((task) => task.status)
              .map((task, index) => {
                return (
                  <tr key={index}>
                    <td>{task.taskName}</td>
                    <td className="w-25">
                      <span
                        className="fa fa-undo ml-2 text-warning"
                        style={{ fontSize: 25,  cursor: "pointer"  }}
                        onClick={() => {
                          rejectTask(task.taskName)
                        }}
                      ></span>
                      <span
                        className="fa fa-trash ml-4 text-danger"
                        style={{ fontSize: 25, cursor: "pointer" }}
                        onClick={() => {
                          deleteTask(task.taskName);
                        }}
                      ></span>
                    </td>
                  </tr>
                );
              })}
          </tfoot>
        </table>
      </div>
    </div>
  );
}
