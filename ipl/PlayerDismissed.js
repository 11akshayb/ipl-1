function playerDismissed(deliveries){

    let result={};
    for(let delivery of deliveries){
        let bowler=delivery.bowler;
        let batsman=delivery.player_dismissed;
        if(batsman !== ""){
            
            if(result[batsman]){
                if(result[batsman][bowler]){
                    result[batsman][bowler]+=1
            }else{
                result[batsman][bowler]=1
            }
        }else{
            result[batsman]={};
        }
        
    }
    }
    return result;
}

module.exports= playerDismissed;