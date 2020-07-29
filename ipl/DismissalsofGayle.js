function dismissalsofGayle(deliveries){

    let result={};
    for(let delivery of deliveries){
        let bowler=delivery.bowler;
        let batsman='CH Gayle';
        if(delivery.player_dismissed == 'CH Gayle'){
            if(result[bowler]){
                //if(result[batsman][bowler]){
                    result[bowler]+=1
            }else{
                result[bowler]=1
            }
        }
        // else{
        //     result[batsman]={};
        // }
        
    //}
    }
    return result;
}

module.exports = dismissalsofGayle