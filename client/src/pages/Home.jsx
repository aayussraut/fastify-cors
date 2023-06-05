import React from "react";
import axios from "axios";
export default function Home() {
  const [id, setId] = React.useState(0);

  const handleChange = (e) => {
    setId(e.target.value);
  };
  const handleGetPost = () => {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:3000/items")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleGetByIdPost = () => {};
  const handleDeletePost = () => {};

  return (
    <>
      <input
        type="number"
        value={id}
        onChange={handleChange}
        placeholder="Enter Id"
      />
      <br />
      <br />
      <button onClick={handleGetPost}>Get Post</button> <br />
      <br />
      <button onClick={handleGetByIdPost}>Get Items By Id</button>
      <br />
      <br />
      <button onClick={handleDeletePost}>Delete Items By Id</button>
    </>
  );
}
