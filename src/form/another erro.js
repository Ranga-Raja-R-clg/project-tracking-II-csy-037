import React from "react";

const initialValues = {
  username: "",
  email: "",
};
const useCustomForm = (initialValues, validate, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = validate(values);
    if (Object.keys(newErrors).length === 0) {
      await onSubmit(values);
      setValues(initialValues);
    } else {
      setErrors(newErrors);
    }
  };
  return { values, errors, handleChange, handleSubmit };
};
const MyFormComponent = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    return errors;
  };
  const onSubmit = async (values) => {
    console.log("Form Submitted!", values);
  };
  const { values, errors, handleChange, handleSubmit } = useCustomForm(
    initialValues,
    validate,
    onSubmit
  );
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={values.username}
        onChange={handleChange}
        placeholder="Username"
      />
      {errors.username && <p>{errors.username}</p>}
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};
export default MyFormComponent;
