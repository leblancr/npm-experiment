// src/App.jsx
import React, { useState } from "react";
import TodoList from './TodoList';
import CounterButton from './CounterButton';
import DecrementButton from './DecrementButton';

function App() {
  const [count, setCount] = useState(0); // Manage state here

  const x_max = count
  let y = 1

  const xarray = [];
  const yarray = [];

  for (let i = 1; i <= x_max; i++) {
    xarray.push(i);
    yarray.push(y);
    y = y * 2
  }

  return (
    <div>
      <CounterButton count={count} setCount={setCount} /> {/* Pass state and setter as props */}
      <DecrementButton count={count} setCount={setCount} /> {/* Pass state and setter as props */}
      <TodoList x_values={xarray} y_values={yarray} />
    </div>
  );
}

export default App;