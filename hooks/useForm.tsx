import { useState } from "react";

const useForm = (callback: any, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });

    console.log(values);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};

export default useForm;
