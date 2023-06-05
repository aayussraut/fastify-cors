import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    username: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    console.log("Form submitted");
    axios
      .post(
        "http://localhost:3000/auth/signin",
        {
          username: form.username,
          password: form.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        navigate("/home");
      });
  };
  return (
    <>
      <h1>React</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleInputChange} />
        <br />
        <br />
        <label>Password</label>
        <input type="password" name="password" onChange={handleInputChange} />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
