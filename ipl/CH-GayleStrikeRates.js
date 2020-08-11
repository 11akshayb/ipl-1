function gayleStrikeRates(matches,deliveries){

    let strikeRatesObj=deliveries.reduce((seasonsObj,delivery) => {
        var player=delivery.batsman;
        var delMatchId=delivery.match_id;
            function matchingSeason(matches){
                for(let match of matches){
                    var matchesId=match.id;
                    var season = match.season;
                    if(matchesId==delMatchId){
                        return season;
                    }
                    
                }
            }
            var season = matchingSeason(matches);

            if(player=='CH Gayle'){
                if(season in seasonsObj){
                    seasonsObj[season].runs += parseInt(delivery.batsman_runs);
                    seasonsObj[season].ballsCount += 1;
                }else{
                    seasonsObj[season]={}
                    seasonsObj[season].runs = parseInt(delivery.batsman_runs);
                    seasonsObj[season].ballsCount = 1;
                }
            }
        return seasonsObj;

    },{});
        
    var result={};
    for(let season in strikeRatesObj){
        
           result[season] = parseInt(((strikeRatesObj[season].runs/strikeRatesObj[season].ballsCount)*100).toFixed(3));     
    }
     return result;
}

module.exports = gayleStrikeRates;