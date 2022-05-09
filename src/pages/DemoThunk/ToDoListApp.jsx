import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getTaskApiAction } from "../../redux/actions/toDoListActions";

export default function ToDoListApp() {
  //const [tasks, setTasks] = useState([]);
  const { tasks } = useSelector((state) => state.ToDoListReducer);
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

  return (
    <div className="container mt-5">
      <h3 className="text-center display-4">To to list</h3>
      <div className="d-flex justify-content-center">
        <table className="table w-50 text-center">
          <tbody>
            {tasks.map((task, index) => {
              return (
                <tr key={index}>
                  <td>{task.taskName}</td>
                  <td>
                    <span className="badge badge-danger">{task.status}</span>
                    <span
                      className="fa fa-check ml-2"
                      style={{ fontSize: 25 }}
                    ></span>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
}
