function millsDismissals(matches,deliveries){

    var result={}
    for(let delivery of deliveries){
        var player = delivery.bowler;
        var type=delivery.dismissal_kind
        var id=delivery.match_id
        function matchingSeason(matches){
            for(match of matches){
                
                if(id == match.id){
                        
                
                    var seasonMatch = match.season
                    return seasonMatch
                }
            }
            
        }
        var season = matchingSeason(matches)
        // result=season;
        if(parseInt(season) == 2015 || parseInt(season) == 2016){
            if(player == 'SL Malinga' && type!=""){
           {
                if(result[player]){
                    if(result[player][type])
                    {
                        result[player][type]+=1;
                    }else{
                        result[player][type]=1;
                    }
            }else{
                result[player]={}
            }
        }
    }
}
    }
return result;
}


module.exports =millsDismissals