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
  }, []); // Nhận vào 1 callback funciton, tham số 2 là 1 array, [] nghĩa là chạy 1 lần duy nhất (didMount)

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
          <tfoot>
            {/* <tr>
              <td>Tập thể dục</td>
              <td>
                <span className="badge badge-success">Complete</span>
              </td>
            </tr> */}
          </tfoot>
        </table>
      </div>
    </div>
  );
}
