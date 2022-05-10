import axios from "axios";

export const getTaskApiAction = async (dispatch) => {
  try {
    let result = await axios({
      url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
      method: "GET",
    });
    console.log("result", result.data);
    console.log(123);
    // Sau khi xử lý api có giá trị
    dispatch({
      type: "GET_TASK_TODO",
      data: result.data,
    });
  } catch (err) {
    console.log({ err });
  }
};

// closure function
export const addTaskApi = (taskData) => {
  return async (dispatch, getState) => {
    const store = getState();
    console.log("store", store);
    try {
      const result = await axios({
        url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
        method: "POST",
        data: taskData,
      });
      console.log("result", result.data);

      const action = getTaskApiAction;
      dispatch(action);
      // dispatch(getTaskApiAction)
    } catch (err) {
      console.log({ err });
    }
  };
};

export const xoaTaskApi = (taskName) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url:
          "http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=" + taskName,
        method: "DELETE",
      });
      //alert(result.data);
      // Sau khi gọi api thành công thì gọi lại action getTaskApi
      const action = getTaskApiAction;
      dispatch(action);
      // dispatch(getTaskApiAction)
    } catch (err) {
      console.log({ err });
    }
  };
};

export const doneTaskApi = (taskName) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url:
          "http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=" + taskName,
        method: "PUT",
      });
      //alert(result.data);
      // Sau khi gọi api thành công thì gọi lại action getTaskApi
      const action = getTaskApiAction;
      dispatch(action);
      // dispatch(getTaskApiAction)
    } catch (err) {
      console.log({ err });
    }
  };
};

export const rejectTaskApi = (taskName) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url:
          "http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=" + taskName,
        method: "PUT",
      });
      //alert(result.data);
      // Sau khi gọi api thành công thì gọi lại action getTaskApi
      const action = getTaskApiAction;
      dispatch(action);
      // dispatch(getTaskApiAction)
    } catch (err) {
      console.log({ err });
    }
  };
};

// export const searchTaskApi = (taskName) => {
//   return async (dispatch) => {
//     try {
//       let result = await axios({
//         url: "http://svcy.myclass.vn/api/ToDoList/GetTask?taskName=" + taskName,
//         method: "GET",
//       });
//       //alert(result.data);
//       // Sau khi gọi api thành công thì gọi lại action getTaskApi
//       const action = getTaskApiAction;
//       dispatch(action);
//       // dispatch(getTaskApiAction)
//     } catch (err) {
//       console.log({ err });
//     }
//   };
// };
