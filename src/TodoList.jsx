import React, { useEffect } from "react";
import Plotly from "plotly.js-dist-min";

export default function TodoList() {
  useEffect(() => {
    const root = document.getElementById("plotly-graph");

    Plotly.newPlot(
      root,
      [
        {
          x: [1, 2, 3, 4, 5, 6, 7],
          y: [1, 2, 4, 8, 16, 32, 64],
        },
      ],
      {
        margin: { t: 0 },
        plot_bgcolor: 'black',
        paper_bgcolor: 'black',
        xaxis: { color: 'white' },
        yaxis: { color: 'white' },
        font: { color: 'white' },
      },
    );
  }, []);

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