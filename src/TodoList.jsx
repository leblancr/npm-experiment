import React, { useEffect } from "react";
import Plotly from "plotly.js-dist-min";

export default function TodoList(props) {
  useEffect(() => {
    const root = document.getElementById("plotly-graph");

    Plotly.newPlot(
      root,
      [
        {
          x: props.x_values,
          y: props.y_values,
        },
      ],
      {
        margin: { t: 0 },
        plot_bgcolor: 'black',
        paper_bgcolor: 'black',
        xaxis: { color: 'white', title: "Age" },
        yaxis: { color: 'white', title: "Weight" },
        font: { color: 'white' },
      },
    );
  }, [props.x_values, props.y_values]);

  // components return jsx
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
      <div id="plotly-graph" style={{ width: '100%', height: '400px' }}></div>
    </>
  );
}