import React, { Component } from "react";
import axios from "axios";

export default class ApiFcc extends Component {
  state = {
    arrTask: [],
  };

  getAllTaskApi = async () => {
    // // Cách 1: promise
    // let promise = axios({
    //   url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
    //   method: "GET",
    // });

    // // Xử lý thành công
    // promise.then((result) => {
    //   console.log("result", result.data);
    //   console.table(result.data);
    //   // Lấy dữ liệu về và gán vào state
    //   this.setState({
    //     arrTask: result.data,
    //   });
    // });

    // // Xử lý thất bại
    // promise.catch((err) => {
    //   console.log({ err });
    // });

    // Cách 2: Sử dụng async await
    try {
      let result = await axios({
        url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
        method: "GET",
      });
      console.log("result", result.data);
      console.log(123);
      this.setState({
        arrTask: result.data,
      });
    } catch (err) {
      console.log({ err }); // try catch => chương trình sẽ không bị đứng khi gặp lỗi
    }
  };

  // Nên sử dụng promise khi nào ? async await khi nào ?
  // TH1: api1 -> load dữ liệu -> dùng dữ liệu api1 -> call api2 -> dùng dữ liệu api2 -> call api 3 lấy dữ liệu
  // => Sử dụng cú phap1async await cho tình huống các api phải thực hiện tuần tự (Sử dụng promise vẫn được nhưng sẽ bị callback hell)

  // TH2: Khi gọi 3 api không phụ thuộc vào nhau
  // api1(3s)  api2(5s)   api3(2s)
  // => Sử dụng 3 promise để call 3 api độc lập

  // TH3: 
  // api1(3s)  api2(5s)   api3(2s)
  // api3(3s): nhưng điều kiện phải đợi 3 api trước hoàn thành thì mới call api4
  /* Propmise.all([api1, api2, api3]).then(result => {
    let api4 = getApi();
  }) */





  componentDidMount() {
    // Chạy sau render và chạy 1 lần duy nhất
    this.getAllTaskApi();
  }

  render() {
    return (
      <div className="container mt-4">
        <button
          className="btn btn-primary"
          onClick={() => {
            this.getAllTaskApi();
          }}
        >
          Get all task
        </button>
        <h3 className="text-center display-4">To to list</h3>
        <div className="d-flex justify-content-center">
          <table className="table w-50 text-center">
            <tbody>
              {this.state.arrTask
                .filter((task) => task.status === false)
                .map((task, index) => {
                  return (
                    <tr key={index}>
                      <td>{task.taskName}</td>
                      <td>
                        <span className="badge badge-danger">Incomplete</span>
                        <span
                          className="fa fa-check ml-2"
                          style={{ fontSize: 25 }}
                        ></span>
                      </td>
                    </tr>
                  );
                })}
              {/* <tr>
                <td>Làm bài tập</td>
                <td>
                  <span className="badge badge-danger">Incomplete</span>
                  <span className="fa fa-check ml-2" style={{ fontSize: 25 }}></span>
                </td>
              </tr>
              <tr>
                <td>Tập thể dục</td>
                <td>
                  <span className="badge badge-danger">Incomplete</span>
                  <span className="fa fa-check ml-2" style={{ fontSize: 25 }}></span>
                </td>
              </tr> */}
            </tbody>
            <tfoot>
              {this.state.arrTask
                .filter((task) => task.status === true)
                .map((task, index) => {
                  return (
                    <tr key={index}>
                      <td>{task.taskName}</td>
                      <td>
                        <span className="badge badge-success">Complete</span>
                      </td>
                    </tr>
                  );
                })}
              {/* <tr>
                <td>Tập thể dục</td>
                <td>
                  <span className="badge badge-success">Complete</span>
                </td>
              </tr>
              <tr>
                <td>Làm bài tập</td>
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
}
