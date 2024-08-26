import React from "react";

export default function CounterButton({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
