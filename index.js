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
const playerDismissed=require("./ipl/playerDismissed");
const superOverEconomies=require("./ipl/superOverEconomies");


const tossMatchesWon_refactored =require("./ipl/TossMatchesWon-Refactored");
const manOfMatch_refactored =require("./ipl/manOfMatchEachSeason-Refactored");
const playersDismissed_refactored =require("./ipl/PlayersDismissed-Refactoring");
const superOverEconomies_refactored =require("./ipl/SuperOverEconomies-Refactoring");



const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_FILE_PATH_2 = "./public/tossAndMatchesWon.json";
const JSON_OUTPUT_FILE_PATH_3 = "./public/manOfMatchEachSeason.json";
const JSON_OUTPUT_FILE_PATH_4 = "./public/StrikeRate.json";
const JSON_OUTPUT_FILE_PATH_5 = "./public/PlayerDismissals.json";
const JSON_OUTPUT_FILE_PATH_6 = "./public/SuperOverEconomy.json";

const JSON_OUTPUT_FILE_PATH_REFACTORED = "./public/RefactoredData.json"


function main() {

  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let all_in_one_Result={};
      let refactoredResult={};
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries =>{
        let result = matchesPlayedPerYear(matches);
        let result2 = winsPerTeameachYear(matches);
        let result3=extraRunsConceded(deliveries);
        let result4=mosteconomicalBowlers(deliveries);
        let result5=mostManOfTheMatches(matches);
        let result6=winsPerVenue(matches);
        let result7 = winsByAllTeams(matches);
        let result102 = tosses(matches);

        let result801 = tossMatchesWon(matches);
        let result802 = manOfMatchEachSeason(matches);
        let result803 = strikerates(matches,deliveries);
        let result804 = playerDismissed(deliveries);
        let result806 = superOverEconomies(deliveries);

        let resultTossMatchesWon_refactored = tossMatchesWon_refactored(matches);
        let manOfMatchEachSeason_refactored = manOfMatch_refactored(matches);
        let resultPlayersDismissed_refactored = playersDismissed_refactored(deliveries);
        let resultSuperOverEconomies_refactored = superOverEconomies_refactored(deliveries);

        all_in_one_Result['matchesPlayedPerYear'] = result;
        all_in_one_Result['winsPerTeameachYear'] = result2;
        all_in_one_Result['extraRunsConceded'] = result3;
        all_in_one_Result['mosteconomicalBowlers'] = result4;
        all_in_one_Result['mostManOfTheMatches'] = result5;
        all_in_one_Result['winsPerVenue'] = result6;
        all_in_one_Result['winsByAllTeams'] =result7;
        all_in_one_Result['tosses'] =result102;
      
        refactoredResult['TossMatchesWon'] = resultTossMatchesWon_refactored
        refactoredResult['ManOfMatchEachSeason'] = manOfMatchEachSeason_refactored
        refactoredResult['PlayersDismissed'] = resultPlayersDismissed_refactored
        refactoredResult['SuperOverEconomy'] = resultSuperOverEconomies_refactored


        const jsonString =JSON.stringify(all_in_one_Result);
        fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
        if(err){
        console.error(err)
        }
      });

      const jsonString2 =JSON.stringify(result801);
        fs.writeFile(JSON_OUTPUT_FILE_PATH_2, jsonString2, "utf8", err => {
        if(err){
        console.error(err)
        }
      });
      const jsonString3 =JSON.stringify(result802);
        fs.writeFile(JSON_OUTPUT_FILE_PATH_3, jsonString3, "utf8", err => {
        if(err){
        console.error(err)
        }
      });
      const jsonString4 =JSON.stringify(result803);
        fs.writeFile(JSON_OUTPUT_FILE_PATH_4, jsonString4, "utf8", err => {
        if(err){
        console.error(err)
        }
      });
      const jsonString5 =JSON.stringify(result804);
        fs.writeFile(JSON_OUTPUT_FILE_PATH_5, jsonString5, "utf8", err => {
        if(err){
        console.error(err)
        }
      });
      const jsonString6 =JSON.stringify(result806);
        fs.writeFile(JSON_OUTPUT_FILE_PATH_6, jsonString6, "utf8", err => {
        if(err){
        console.error(err)
        }
      });

      const jsonString10 =JSON.stringify(refactoredResult);
        fs.writeFile(JSON_OUTPUT_FILE_PATH_REFACTORED, jsonString10, "utf8", err => {
        if(err){
        console.error(err)
        }
      });

  
  }); 
 });
}
main();
