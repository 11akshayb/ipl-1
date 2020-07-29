function gayleStrikeRate(matches,deliveries){
    var seasonObj={}
    for(let delivery in deliveries){
        let player = delivery.batsman;
        let matchId=delivery.match_id;
        let season = matchingSeason(matches)
        function findingSeason(matches){
            for(let match of matches){
                if(match.id == matchId){
                    var match_season = match.season
            }return match_season
        }
    }
    if(player == "CH Gayle"){
        if(seasonObj[season]){
            seasonObj[season].runs+=parseInt(delivery.batsman_runs);
            seasonObj[season].ballsCount+=1
        }else{
            seasonObj[season]={}
            seasonObj[season].runs=parseInt(delivery.batsman_runs);
            seasonObj[season].ballsCount=1
        }
    }
}
var result={};
for(let season in seasonObj){
    result[season] = ((seasonObj[season].runs/seasonObj[season].ballsCount)*100).toFixed(3));

}

return result;


}


module.exports=gayleStrikeRate