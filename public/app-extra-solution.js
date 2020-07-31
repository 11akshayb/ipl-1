function fetchAndVisualizeData (){
  fetch("./ExtraSolution.json")
  .then(res=>res.json())
  .then(visualizeData);
}

fetchAndVisualizeData();

function VisualizingFunction(obj,data){
  const visualizationArray = [];
  for (let element in data)  {
    visualizationArray.push([element, data[element]]);
  }
  Highcharts.chart(obj.container_Id,{
    chart: {
      type: "column"
    },
    title: {
      text: obj.text
    },
    xAxis: {
      title: {
        text: obj.x_text
      },
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: obj.y_text
      }
    },
    series: [
      {
        name: obj.series_name,
        data: visualizationArray
      }
    ]
  });
}


function visualizeData(data){
  visualizeGayleDismissal(data.DismissalsofGayle)
  visualizeGayleStrikeRate(data.gayleStrikeRate)
  return;
}

function visualizeGayleDismissal(DismissalsofGayle){
  var obj={
    container_Id : 'DismissalsofGayle',
    text : "Dismissals of Gayle",
    x_text : "Seasons",
    y_text : "Wicket",
    series_name : "Dismissals_of"
};
VisualizingFunction(obj,DismissalsofGayle)
}
function visualizeGayleStrikeRate(gayleStrikeRate){
  var obj={
    container_Id : 'gayleStrikeRate',
    text : "Chris Gayle Strike Rates in Each Season",
    x_text : "Bowler",
    y_text : "Strike Rates",
    series_name : "Strike Rates"
};
VisualizingFunction(obj,gayleStrikeRate)
}
