function TossMatchesWonRefactored(matches) {
    
    const matchesPerYearObj = matches.reduce((winners, match) => {
        if(match.winner == match.toss_winner){
          if (match.winner in winners) { 
            winners [match.winner] += 1;
          }else{
            winners[match.winner] = 1;
          }
      }
        return winners;
      }, {});
  
      return matchesPerYearObj;
  }
  
  module.exports = TossMatchesWonRefactored;