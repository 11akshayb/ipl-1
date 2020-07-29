function fetchAndVisualizeData (){
  fetch("./ExtraSolution.json")
  .then(res=>res.json())
  .then(visualizeData);
}

fetchAndVisualizeData()

function visualizeData(data){
    visualizeTossesMatches(data.tossMatchesWon)
    visualizeManOfMatchEachSeason(data.manOfMatchEachSeason)
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


function visualizeManOfMatchEachSeason(manOfMatchEachSeason){
  var seasons = Object.keys(manOfMatchEachSeason)
  var players = [];
  for(let season in manOfMatchEachSeason){
  players.push(Object.keys(manOfMatchEachSeason[season]))
  }
  var x = players.flat();

  let visualizationArray=[];
  visualizationArray = x.map(player => ({
  name: player,
  data: seasons.map(season => manOfMatchEachSeason[season][player] || 0)
  }));

  Highcharts.chart('man_of_match', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Highest Man of The Match every season'
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      title: {
        text: "Seasons"
      },
        categories: seasons,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Man of Matches'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.01,
            borderWidth: 0
        }
    },
    series: visualizationArray
});
}