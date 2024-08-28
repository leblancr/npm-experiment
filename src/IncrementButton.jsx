import React from "react";

export default function IncrementButton({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>Increment</button>
  );
}
