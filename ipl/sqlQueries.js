const fs = require('fs');
const async = require('async');
const all_in_One_Results={}

let dataHandler = (db,sql_query) => {
    var result = new Promise ((resolve,reject) => {
        db.query(sql_query,(err,results,fields) =>{
            if(err){
                reject(err);
            }else{
                resolve(results);
            }
        })
    })
   return result;
}

function JSONStringifying(result,funcKey){
    all_in_One_Results[funcKey]=result
    var jsonString=JSON.stringify(all_in_One_Results)
    fs.writeFile('./public/sql-solutions.json',jsonString, "utf8", err => {
        if(err){
        console.error(err)
        }
    }); 

}

async function tossAndMatches(data)
{
    const query = 'SELECT winner AS Team,Count(*) AS Count FROM matches WHERE winner=toss_winner GROUP BY winner;';
    var result= await dataHandler(data,query)
    // console.log(result);
    JSONStringifying(result,'tossAndMatches')
    return;
}

async function CHGayleStrikeRate(data)
{
    const query = 'SELECT season,SUM(batsman_runs)/COUNT(batsman)*100 AS sr FROM matches JOIN deliveries ON matches.id=deliveries.match_id WHERE batsman="CH Gayle" GROUP BY season;    ';
    var result= await dataHandler(data,query,'CHGayleStrikeRate')
    JSONStringifying(result,'CHGayleStrikeRate')    
    return;
}

async function CHGayleDismissals(data)
{
    const query = 'SELECT bowler,COUNT(*) AS Dismissals FROM deliveries WHERE player_dismissed="CH Gayle" GROUP BY bowler;'
    var result= await dataHandler(data,query)
    JSONStringifying(result,'CHGayleDismissals')
    return;
}

async function SuperOverEconomies(data)
{
    const query = 'SELECT bowler,SUM(total_runs)/(COUNT(bowler)/6) AS super_Economy FROM deliveries WHERE is_super_over!=0 GROUP BY bowler  ORDER BY super_Economy ASC LIMIT 1;'
    var result= await dataHandler(data,query)
    JSONStringifying(result,'SuperOverEconomies')
    return;
}

async function CHGayleManofMatch(database)
{
    const query = 'SELECT season,COUNT(player_of_match) AS ManofMatches FROM matches WHERE player_of_match="CH Gayle" GROUP BY season;'
    var result= await dataHandler(database,query)
    JSONStringifying(result,'CHGayleManofMatch')
    return;
}
module.exports.tossAndMatches=tossAndMatches;
module.exports.CHGayleStrikeRate=CHGayleStrikeRate;
module.exports.CHGayleManofMatch=CHGayleManofMatch;

module.exports.CHGayleDismissals=CHGayleDismissals;
module.exports.SuperOverEconomies=SuperOverEconomies;
