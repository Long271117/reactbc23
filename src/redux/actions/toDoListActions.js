import axios from "axios";

export const getTaskApiAction = async (dispatch2) => {
  try {
    let result = await axios({
      url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
      method: "GET",
    });
    console.log("result", result.data);
    console.log(123);
    // Sau khi xử lý api có giá trị
    dispatch2({
      type: "GET_TASK_TODO",
      data: result.data,
    });
  } catch (err) {
    console.log({ err });
  }
};
