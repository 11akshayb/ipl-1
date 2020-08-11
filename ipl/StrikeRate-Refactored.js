function strikeRateRefactorings(matches,deliveries){
   
    const seasonsObj = deliveries.reduce((playersObj,delivery)=> {

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


            if(season in playersObj){
                if(player in playersObj[season]){
                    playersObj[season][player].runs+=parseInt(delivery.batsman_runs); 
                    playersObj[season][player].balls+= 1;
                }else{
                    playersObj[season][player]={}
                    playersObj[season][player].runs=parseInt(delivery.batsman_runs); 
                    playersObj[season][player].balls= 1;
                }
            }else{
                playersObj[season]={}
        
                }
            return playersObj;
    },{});


    var result={};
    for(let season in seasonsObj){
        let strikeRatesofEachBatsman = Object.keys(seasonsObj[season]).map((key) => {
        let strikeRate = ((seasonsObj[season][key].runs / seasonsObj[season][key].balls)*100).toFixed(3);
        return [key,parseFloat(strikeRate)];
        });
        result [season] =strikeRatesofEachBatsman;
    }
     return result;

}

module.exports = strikeRateRefactorings;