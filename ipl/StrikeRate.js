function strikeRate(matches,deliveries){
    let runsObj={};
    let ballsCount={};
    for(let delivery of deliveries){
        var player=delivery.batsman;
        var delMatchId=delivery.match_id;
        var season = findingSeason(matches);
            function findingSeason(matches){
                for(let match of matches){
                    var matchesId=match.id;
                    var season = match.season;
                    if(matchesId==delMatchId){
                        return season;
                    }
                    
                }
            }
            if(runsObj[season] && ballsCount[season]){
                if(runsObj[season][player]){
                    runsObj[season][player] += parseInt(delivery.batsman_runs);
                    ballsCount[season][player] += 1;
                }else{
                    runsObj[season][player] = parseInt(delivery.batsman_runs);
                    ballsCount[season][player] = 1;
                }
            }else{
                runsObj[season]={}
                ballsCount[season]={}
            }
    }
    var result={};
    for(let season in runsObj){
        result[season] = {}
        for(let player in runsObj[season])
        {       
            result[season][player] = ((runsObj[season][player]/ballsCount[season][player])*100).toFixed(3)

        }
    }
     return result;
}

module.exports =strikeRate;