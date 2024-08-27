import React from "react";

export default function CounterButton({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>Increment Clicked {count} times</button>
  );
}
