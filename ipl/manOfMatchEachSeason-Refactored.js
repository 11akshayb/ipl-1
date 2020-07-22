function manOfMatchEachSeasonRefactored(matches){

    const seasonsObj = matches.reduce((seasons,match) => {
        if(match.season in seasons){
            if(match.player_of_match in seasons[match.season]){
                seasons[match.season][match.player_of_match] += 1
            }else{
                seasons[match.season][match.player_of_match] = 1
            }
        }else{
            seasons[match.season]= {}
        }
        return seasons;
},{});

let result={};
let xy;
for (let season in seasonsObj){
    
    //const manOfMatch = Math.max(...Object.values(seasonsObj[season]));
    var manOfMatch=Object.values(seasonsObj[season]).reduce(function(a, b){
         return a > b ? a : b 
    });
    let player = Object.keys(seasonsObj[season]).filter((key) => {
        return seasonsObj[season][key] ==manOfMatch;   
        });

    player.push(manOfMatch)
    result[season]=player;
}
    return result;
}


module.exports =manOfMatchEachSeasonRefactored;

