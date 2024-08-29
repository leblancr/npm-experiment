import React from "react";
import './styles.css';

export default function IncrementButton({ count, setCount }) {
  return (
    <button
      onClick={() => setCount(count + 1)}
      className="increment-button"
    >Increment X</button>
  );
}
