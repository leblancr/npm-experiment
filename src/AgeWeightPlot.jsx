import React, { useEffect } from "react";
import Plotly from "plotly.js-dist-min";

export default function AgeWeightPlot(props) {
  useEffect(() => {
    // this runs when dependencies change
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
    <div id="plotly-graph" style={{ width: '100%', height: '400px' }}></div>
  );
}