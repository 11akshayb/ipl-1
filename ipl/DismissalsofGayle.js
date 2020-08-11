function dismissalsofGayle(deliveries){
    var result = deliveries.reduce((bowlersObj,delivery) =>{
        let bowler=delivery.bowler;
        if(delivery.player_dismissed == 'CH Gayle'){
            if(bowler in bowlersObj){
                bowlersObj[bowler]+=1
            }else{
                bowlersObj[bowler]=1
            }
        }
        return bowlersObj;
    },{});
    return result;
}

module.exports = dismissalsofGayle