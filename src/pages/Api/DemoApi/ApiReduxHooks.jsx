import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ApiReduxHooks() {
  const { data, isLoading, error } = useSelector(
    (rootState) => rootState.tasksReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getTasks = async () => {
      try {
        // Trước khi gọi API dispatch action để set isLoading thành true
        dispatch({ type: "GET_TASK_PENDING" });
        // Call API thành công => dispatch action để set data
        const result = await axios({
          url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
          method: "GET",
        });
        // Dispatch action
        dispatch({
          type: "GET_TASKS_FULFILLED",
          data: result.data,
        });
      } catch (error) {
        dispatch({
          type: "GET_TASKS_REJECTED",
          error: error.response.data, // format error của axios,
        });

        // Call API thất bại => dispatch action để set error
        console.log(error);
      }
    };
    getTasks();
  }, []);

  if(isLoading){
      // return <Loading />
      return <p>Loanding...</p>
  }

  if(error){
      // return <ErrorMessage error={error} />
      return <p>{error}</p>
  }

  return <div>
      {data.map((item, index) => {
          return <p key={index}>{item.taskName}</p>
      })}
  </div>


}
    