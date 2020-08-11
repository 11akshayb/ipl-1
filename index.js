const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear=require("./ipl/matchesPlayedPerYear");
const winsPerTeameachYear=require("./ipl/winsPerTeameachYear");
const extraRunsConceded=require("./ipl/extraRunsConceded");
const mosteconomicalBowlers =require("./ipl/mosteconomicalBowlers");
const mostManOfTheMatches=require("./ipl/mostManOfTheMatches");
const winsPerVenue= require("./ipl/winsPerVenue");
const winsByAllTeams=require("./ipl/winsByAllTeams");
const tosses=require("./ipl/tosses");

const tossMatchesWon=require("./ipl/TossMatchesWon");
const manOfMatchEachSeason=require("./ipl/manOfMatchEachSeason");
const strikerates=require("./ipl/StrikeRate.js");
const gayleStrikeRate=require("./ipl/CH-GayleStrikeRates.js")
//const strikerates1=require("./ipl/Review.js");
const playerDismissed=require("./ipl/PlayerDismissed.js");
const DismissalsofGayle=require("./ipl/DismissalsofGayle.js");
const superOverEconomies=require("./ipl/superOverEconomies");

const tossMatchesWon_refactored =require("./ipl/TossMatchesWon-Refactored");
const manOfMatch_refactored =require("./ipl/manOfMatchEachSeason-Refactored");
const strikeRates_refactored =require("./ipl/StrikeRate-Refactored");
const playersDismissed_refactored =require("./ipl/PlayersDismissed-Refactoring");
const superOverEconomies_refactored =require("./ipl/SuperOverEconomies-Refactoring");

const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_FILE_PATH_EXTRA_SOLUTIONS = "./public/ExtraSolution.json";
const JSON_OUTPUT_FILE_PATH_REFACTORED = "./public/RefactoredData.json"

function main() {

  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let all_in_one_Result={};
      let refactoredResult={};
      let extraQuestionSolutionResult={};
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries =>{
        let resultmatchesPlayedPerYear = matchesPlayedPerYear(matches);
        let resultwinsPerTeameachYear = winsPerTeameachYear(matches);
        let resultextraRunsConceded = extraRunsConceded(deliveries);
        let resultmosteconomicalBowlers = mosteconomicalBowlers(deliveries);
        let resultmostManOfTheMatches = mostManOfTheMatches(matches);
        let resultwinsPerVenue = winsPerVenue(matches);
        let resultwinsByAllTeams = winsByAllTeams(matches);
        let resulttosses = tosses(matches);

        let resulttossMatchesWon = tossMatchesWon(matches);
        let resultmanOfMatchEachSeason = manOfMatchEachSeason(matches);
        let resultstrikerates = strikerates(matches,deliveries);
        let resultgayleStrikeRate = gayleStrikeRate(matches,deliveries);
        let resultplayerDismissed = playerDismissed(deliveries);
        let resultDismissalsofGayle = DismissalsofGayle(deliveries);
        let resultsuperOverEconomies = superOverEconomies(deliveries);
        //let resultx= strikerates1(matches,deliveries);

        let resultTossMatchesWon_refactored = tossMatchesWon_refactored(matches);
        let manOfMatchEachSeason_refactored = manOfMatch_refactored(matches);
        let strikeRates_refactoredResult = strikeRates_refactored(matches,deliveries);
        let resultPlayersDismissed_refactored = playersDismissed_refactored(deliveries);
        let resultSuperOverEconomies_refactored = superOverEconomies_refactored(deliveries);

        all_in_one_Result['matchesPlayedPerYear'] = resultmatchesPlayedPerYear;
        all_in_one_Result['winsPerTeameachYear'] = resultwinsPerTeameachYear;
        all_in_one_Result['extraRunsConceded'] = resultextraRunsConceded;
        all_in_one_Result['mosteconomicalBowlers'] = resultmosteconomicalBowlers;
        all_in_one_Result['mostManOfTheMatches'] = resultmostManOfTheMatches;
        all_in_one_Result['winsPerVenue'] = resultwinsPerVenue;
        all_in_one_Result['winsByAllTeams'] = resultwinsByAllTeams;
        all_in_one_Result['tosses'] = resulttosses;

        extraQuestionSolutionResult['tossMatchesWon'] = resulttossMatchesWon;
        extraQuestionSolutionResult['manOfMatchEachSeason'] = resultmanOfMatchEachSeason;
        extraQuestionSolutionResult['strikerates'] = resultstrikerates;
        extraQuestionSolutionResult['gayleStrikeRate'] = resultgayleStrikeRate;
        extraQuestionSolutionResult['playerDismissed'] = resultplayerDismissed;
        extraQuestionSolutionResult['DismissalsofGayle'] = resultDismissalsofGayle;
        extraQuestionSolutionResult['superOverEconomies'] = resultsuperOverEconomies;
      
        refactoredResult['TossMatchesWon'] = resultTossMatchesWon_refactored;
        refactoredResult['ManOfMatchEachSeason'] = manOfMatchEachSeason_refactored;
        refactoredResult['StrikeRateRefactored'] = strikeRates_refactoredResult;
        refactoredResult['PlayersDismissed'] = resultPlayersDismissed_refactored;
        refactoredResult['SuperOverEconomy'] = resultSuperOverEconomies_refactored;

        const jsonString_all_in_one_Result =JSON.stringify(all_in_one_Result);
        const jsonString_extraSolution =JSON.stringify(extraQuestionSolutionResult);
        const jsonString_Refactored_Result =JSON.stringify(refactoredResult);

        const async = require('async');
        const arrayOfOutputs = [{filename:JSON_OUTPUT_FILE_PATH, data:jsonString_all_in_one_Result}, {filename:JSON_OUTPUT_FILE_PATH_EXTRA_SOLUTIONS, data:jsonString_extraSolution},{filename:JSON_OUTPUT_FILE_PATH_REFACTORED, data:jsonString_Refactored_Result}];
        async.map(arrayOfOutputs, writeToJSON);

        function writeToJSON(element){
          fs.writeFile(element.filename, element.data, "utf8", err => {
            if(err){
            console.error(err)
            }
          });
        }
  }); 
 });
}
main();
