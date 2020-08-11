function superOverEconomies(deliveries){

    var runsCount={};
    var ballsCount={};
    for(let delivery of deliveries){
        var bowler=delivery.bowler;
        var superOverCheck =delivery.is_super_over;
        if(parseInt(superOverCheck)!=0){
            if(runsCount[bowler] ){
                runsCount[bowler] += parseInt(delivery.total_runs);
                ballsCount[bowler] +=1;
            }else{
                runsCount[bowler] = parseInt(delivery.total_runs);

                ballsCount[bowler] =1;
            }
        }
    }
    
    let economies={};
    for(let element in runsCount){
            var economy = (runsCount[element]/((ballsCount[element])/6));
            economies[element] = economy; 
    }
    const minVal = Math.min(...Object.values(economies));
    const bowlerKey = Object.keys(economies).find(key => economies[key] === minVal);
    var result={};
    result[bowlerKey]=minVal;
    return result;
}


module.exports =superOverEconomies;