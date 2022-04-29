import { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios(config) {
  const [data, setData] = useState(null); // Chứa data từ API

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios(config);
        setData(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return { data };
}

// const {data} = useAxios({
// url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask"
// method: 'GET'
// })
