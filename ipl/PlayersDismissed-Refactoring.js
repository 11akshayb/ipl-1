function playersDismissedRefactoring(deliveries){

    const playersObj=deliveries.reduce((players,delivery) => {
        if(delivery.player_dismissed !==""){
            if(delivery.player_dismissed in players){
                if(delivery.bowler in players[delivery.player_dismissed]){
                    players[delivery.player_dismissed][delivery.bowler]+=1;
                }else{

                    players[delivery.player_dismissed][delivery.bowler]=1;

                }
            }else{
                players[delivery.player_dismissed]={};
            } 
        }return players;
},{});
    return playersObj;
}


module.exports =playersDismissedRefactoring