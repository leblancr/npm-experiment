import React from "react";
import './styles.css';

export default function DecrementButton({ count, setCount }) {
  return (
    <button
      onClick={() => setCount(count - 1)}
      className="decrement-button"
    >Decrement X</button>
  );
}
