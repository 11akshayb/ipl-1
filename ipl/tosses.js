function tosses(matches){
    let result={};
    for(let match of matches){
        let season=match.season;
            if(season=='2016'){
                let team=match.toss_winner;
                    if(result[team]){
                        result[team]+=1;

                    }else{
                        result[team]=1
                    }
                
            
        }
    }
return result;
}

module.exports = tosses;