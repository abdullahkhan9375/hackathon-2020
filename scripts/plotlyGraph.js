
function createGraph() {
var plotColor = "transparent";
var paperColor = "transparent";
var fontColor = "white";
var barcol1 = "#3DDC97";
var barcol2 = "#FF495C";
const graph = document.querySelector('#graph')
console.log(graph)

var trace1 = {
  x: ['May', 'June', 'July', 'August', 'September'],
  y: [1000, 1200, 400, 800, 900],
  name: 'Inc',
  width: 0.35,
  showscale: false,
  showticklabels : false,
  type: 'bar'
};
var trace2 = {
  x: ['May', 'June', 'July', 'August', 'September'],
  y: [-500, -300, -600, -700, -1000],
  width : 0.35,
  name: 'Exp',
  showscale: false,
  showticklabels : false,
  type: 'bar'
};
var data = [trace1, trace2];

var layout = { 
    xaxis :{
        showgrid:false
    },
    yaxis :{
        showgrid: false
    },
    legend : {
        font : {
            color : `${fontColor}`
        }
    },
    bargap:1,
    showlegend: false,
    width:1000,
    height:500,
    colorway : [`${barcol1}`, `${barcol2}`],
    showgrid: false,
    paper_bgcolor: `${paperColor}`,
    plot_bgcolor : `${plotColor}`
};

var config = {
    displayModeBar : false
}

Plotly.newPlot(graph, data, layout, config);


}
