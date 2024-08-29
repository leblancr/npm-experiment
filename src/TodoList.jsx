import React, { useEffect } from "react";
import beauImage from "./assets/beau2.jpeg";

export default function TodoList() {
  useEffect(() => {
        // this runs when dependencies change
        // components return jsx
  }, []);
  return (
    <>
      <h1>Beau's Todos</h1>
      <img
        src={beauImage}
        alt="beau2"
        style={{ width: '150px', height: 'auto' }}
      />
      <ul>
        <li>Chase fox</li>
        <li>Chew stick</li>
        <li>Cool off in creek</li>
      </ul>
    </>
  );
}