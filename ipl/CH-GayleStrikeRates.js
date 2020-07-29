function gayleStrikeRates(matches,deliveries){
    let seasonObj={};
    for(let delivery of deliveries){
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
                if(seasonObj[season]){
                    seasonObj[season].runs += parseInt(delivery.batsman_runs);
                    seasonObj[season].ballsCount += 1;
                }else{
                    seasonObj[season]={}
                    seasonObj[season].runs = parseInt(delivery.batsman_runs);
                    seasonObj[season].ballsCount = 1;
                }
            }
    }
    var result={};
    for(let season in seasonObj){
        
           result[season] = parseInt(((seasonObj[season].runs/seasonObj[season].ballsCount)*100).toFixed(3));     
    }
     return result;
}

module.exports = gayleStrikeRates;