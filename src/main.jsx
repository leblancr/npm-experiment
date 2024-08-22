import Plotly from "plotly.js-dist-min";

const root = document.getElementById("root");
Plotly.newPlot(
  root,
  [
    {
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16],
    },
  ],
  {
    margin: { t: 0 },
    plot_bgcolor: 'black',    // Background color of the plot area
    paper_bgcolor: 'black',   // Background color of the entire figure
    xaxis: { color: 'white' }, // Optional: Change x-axis line color to white
    yaxis: { color: 'white' }, // Optional: Change y-axis line color to white
    font: { color: 'white' },  // Optional: Change font color to white
  },
);
