function superOverEconomiesRefactoring(deliveries){


    const superOvers = deliveries.reduce((bowlers,delivery) => {
        if(parseInt(delivery.is_super_over)!=0){
            if(delivery.bowler in bowlers){
                bowlers[delivery.bowler].runs += parseInt(delivery.total_runs);
                 bowlers[delivery.bowler].balls += 1;
        }else{
            bowlers[delivery.bowler] ={};

            bowlers[delivery.bowler].runs = parseInt(delivery.total_runs);
            bowlers[delivery.bowler].balls = 1;
        }
    }
    return bowlers
}, {});
    
    let economyBowler = Object.keys(superOvers).map((key) => {
        let economy = (superOvers[key].runs / (superOvers[key].balls/6)).toFixed(3);
        return [key,parseFloat(economy)];
      });

      var result = economyBowler.sort((a,b) =>{
        return a[1] - b[1];
      });

    return result[0];

}


module.exports =superOverEconomiesRefactoring;