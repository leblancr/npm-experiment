// src/App.jsx
import React, { useState } from "react";
import TodoList from './TodoList';
import CounterButton from './CounterButton';
import DecrementButton from './DecrementButton';
import AgeWeightPlot from './AgeWeightPlot.jsx'

function App() {
  const [count, setCount] = useState(0); // Manage state here

  let y = 1

  const xarray = [];
  const yarray = [];

  // build arrays with x up to count
  // pass arrays as props
  for (let i = 1; i <= count; i++) {
    xarray.push(i);
    yarray.push(y);
    y = y * 2
  }

  return (
    <div>
      <CounterButton count={count} setCount={setCount} /> {/* Pass state and setter as props */}
      <DecrementButton count={count} setCount={setCount} /> {/* Pass state and setter as props */}
      <TodoList />
      <AgeWeightPlot x_values={xarray} y_values={yarray} />
    </div>
  );
}

export default App;