// src/App.jsx
import React, { useState } from "react";
import TodoList from './TodoList';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import XYPlot from './XYPlot';

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
      <div className="header-container">
        <IncrementButton count={count} setCount={setCount} /> {/* Pass state and setter as props */}
        <h2>Clicked {count} times</h2>
        <DecrementButton count={count} setCount={setCount} /> {/* Pass state and setter as props */}
      </div>
      <div className="todo-container">
        <TodoList />
      </div>
      <XYPlot x_values={xarray} y_values={yarray} />
    </div>
  );
}

export default App;