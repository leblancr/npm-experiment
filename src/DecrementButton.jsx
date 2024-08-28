import React from "react";

export default function DecrementButton({ count, setCount }) {
  return (
    <button onClick={() => setCount(count - 1)}>Decrement</button>
  );
}
