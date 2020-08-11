function tossmatchesWon(matches){
    var result={};
    for(let match of matches){
        let toss_winner=match.toss_winner;
        let winner =match.winner;
        if(winner==toss_winner){
            if(result[winner]){
                result[winner]+=1;
            }else{
                result[winner]=1;
            }
        }
    }
    return result;
}

module.exports = tossmatchesWon;