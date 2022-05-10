import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ApiRfc(props) {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    // Gọi API
    try {
      // const { data } = await axios({
      //   url: `http://svcy.myclass.vn/api/ToDoList/GetTask?taskName=${search}`,
      // });

      const { data } = await axios.get(
        `http://svcy.myclass.vn/api/ToDoList/GetTask?taskName=${search}`
      );

      setTasks([data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (taskName) => {
    try {
      const { data } = await axios.delete(
        `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`
      );
      setTasks([data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Tạo async function
    async function getTask() {
      try {
        const { data } = await axios({
          url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
          method: "GET",
        });
        // setState
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    }

    // Call function
    getTask();
  }, [tasks]); // Nhận vào 1 callback funciton, tham số 2 là 1 array, [] nghĩa là chạy 1 lần duy nhất (didMount)

  return (
    <div className="container mt-4">
      <h3 className="text-center display-4">To to list</h3>

      {/* Search */}
      <div className="form-inline my-4 d-flex justify-content-center">
        <label htmlFor="">Search</label>
        <input
          type="text"
          className="form-control"
          id="search"
          value={search}
          onChange={(evt) => setSearch(evt.target.value)}
        />
        <button className="btn btn-success" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="d-flex justify-content-center">
        <table className="table w-50 text-center">
          <tbody>
            {tasks
              .filter((task) => !task.status)
              .map((task, index) => {
                return (
                  <tr key={index}>
                    <td>{task.taskName}</td>
                    <td>
                      <span className="badge badge-danger">{task.status}</span>
                      <span
                        className="fa fa-check ml-2 text-success"
                        style={{ fontSize: 25, cursor: "pointer" }}
                        onClick={() => {
                          try {
                            const { data } = axios.put(
                              `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${task.taskName}`
                            );
                            this.setTasks([data]);
                          } catch (error) {
                            console.log(error);
                          }
                        }}
                      ></span>
                      <span
                        onClick={() => {
                          deleteTask(task.taskName);
                        }}
                        className="fa fa-trash text-danger ml-3"
                        style={{ fontSize: 25, cursor: "pointer" }}
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
                    <td>
                      <span className="badge badge-danger">{task.status}</span>
                      <span
                        className="fa fa-undo ml-2 text-primary"
                        style={{ fontSize: 25, cursor: "pointer" }}
                        onClick={() => {
                          try {
                            const { data } = axios.put(
                              `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${task.taskName}`
                            );
                            this.setTasks([data]);
                          } catch (error) {
                            console.log(error);
                          }
                        }}
                      ></span>
                      <span
                        onClick={() => {
                          deleteTask(task.taskName);
                        }}
                        className="fa fa-trash text-danger ml-3"
                        style={{ fontSize: 25, cursor: "pointer" }}
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
