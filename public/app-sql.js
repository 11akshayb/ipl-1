function fetchAndVisualizeData (){
    fetch("./sql-solutions.json")
    .then(res=>res.json())
    .then(visualizeData);
  }
  
  fetchAndVisualizeData();
  
  function VisualizingFunction(obj,data){
    var visualizationArray = data.map(element=>{
      return (Object.values(element));
    });
    //var flattenedVizArray=visualizationArray.flat();
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
    visualizeTossesAndMatch(data.tossAndMatches)
    visualizeCHGayleManofMatch(data.CHGayleManofMatch)
    visualizeGayleStrikeRate(data.CHGayleStrikeRate)
    visualizeGayleDismissal(data.CHGayleDismissals)
    return;
  }
  function visualizeGayleDismissal(CHGayleDismissals){
    var obj={
      container_Id : 'CHGayleDismissals',
      text : "Dismissals of Gayle",
      x_text : "Seasons",
      y_text : "Wicket",
      series_name : "Dismissals_of"
  };
  VisualizingFunction(obj,CHGayleDismissals)
  }

  function visualizeCHGayleManofMatch(CHGayleManofMatch){
    var obj={
      container_Id : 'CHGayleManofMatch',
      text : "Chris Gayle Man of Matches in Each Season",
      x_text : "Season",
      y_text : "Man of Match",
      series_name : "Strike Rates"
  };
  VisualizingFunction(obj,CHGayleManofMatch)
  }
  function visualizeGayleStrikeRate(CHGayleStrikeRate){
    var obj={
      container_Id : 'CHGayleStrikeRate',
      text : "Chris Gayle Strike Rates in Each Season",
      x_text : "Bowler",
      y_text : "Strike Rates",
      series_name : "Strike Rates"
  };
  VisualizingFunction(obj,CHGayleStrikeRate)
  }
  
  function visualizeTossesAndMatch(tossAndMatches){
  var obj={
    container_Id : 'tossAndMatches',
    text : "Tosses And Matches Won by Each Team",
    x_text : "Teams",
    y_text : "Matches",
    series_name : "Matches"
  };
  VisualizingFunction(obj,tossAndMatches)
  }