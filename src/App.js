import React, { useState, useEffect } from "react";
import "./styles.css";

import Child from "./Child";

export default function App() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(users);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Fetch Data</button>
      {show && <Child userDetails={users} />}
    </div>
  );
}
