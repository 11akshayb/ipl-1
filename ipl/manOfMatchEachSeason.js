function manOfMatchEachSeason(matches){

    var seasonObj={ };
    for(let match of matches){
        var season=match.season;
        if(seasonObj[season]){
            var player=match.player_of_match;
            if(seasonObj[season][player]){
                seasonObj[season][player]+=1;
            }
            else{
                seasonObj[season][player]=1;
            }
            }
            else{
                seasonObj[season]={}
            }
        }
    var result={};
    for(let season in seasonObj){
        result[season]={};
        const maxVal = Math.max(...Object.values(seasonObj[season]));
        const playerKey = Object.keys(seasonObj[season]).find(key => seasonObj[season][key] === maxVal);
        result[season][playerKey]=maxVal
        }

    return result;
}


module.exports =manOfMatchEachSeason;

