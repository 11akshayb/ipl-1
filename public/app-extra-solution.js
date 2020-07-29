function fetchAndVisualizeData (){
    fetch("./ExtraSolution.json")
    .then(res=>res.json())
    .then(visualizeData);
}

fetchAndVisualizeData()

function visualizeData(data){
    visualizeTossesMatches(data.tossMatchesWon)
    return;
}

function visualizeTossesMatches(tossesMatchesWon){
    const visualizationArray = [];
    for (let team in tossesMatchesWon)  {
      visualizationArray.push([team, tossesMatchesWon[team]]);
    }
  
    Highcharts.chart("tosses_and_Matches", {
      chart: {
        type: "column"
      },
      title: {
        text: "Tosses & Matches Won Per Team"
      },
      // subtitle: {
      //   text:
      //     'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      // },
      xAxis: {
        title: {
          text: "Teams"
        },
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Wins"
        }
      },
      series: [
        {
          name: "Tosses and Matches Won",
          data: visualizationArray
        }
      ]
    });
}