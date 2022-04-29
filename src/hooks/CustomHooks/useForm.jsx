import {useState} from 'react'

// Custom hooks không return về giao diện mà chỉ return về data
export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    console.log(name, value);

    setValues({
        ...values,
        [name]: value
    })
    
  };

  return {values, handleChange};
}

// Cách sử dụng trong component
/* const {} = useForm({
     username: "",
     email: "",
     password: "",
}) */