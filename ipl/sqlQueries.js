const fs = require('fs');
const async = require('async');


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


async function tossAndMatches(database)
{
    const query = 'SELECT winner AS Team,Count(*) AS Count FROM matches WHERE winner=toss_winner GROUP BY winner;';
    var result= await dataHandler(database,query)
    var jsonString = JSON.stringify(result)
    fs.writeFile('public/sql-tossandMatch.json',jsonString, "utf8", err => {
        if(err){
        console.error(err)
        }
    });    return;
}

async function CHGayleStrikeRate(database)
{
    const query = 'SELECT season,SUM(batsman_runs)/COUNT(batsman)*100 AS sr FROM matches JOIN deliveries ON matches.id=deliveries.match_id WHERE batsman="CH Gayle" GROUP BY season;    ';
    var result= await dataHandler(database,query)
    var jsonString = JSON.stringify(result)
    fs.writeFile('public/sql-gayleStrikeRates.json',jsonString, "utf8", err => {
        if(err){
        console.error(err)
        }
    });    return;
}

async function CHGayleDismissals(database)
{
    const query = 'SELECT bowler,COUNT(*) AS Dismissals FROM deliveries WHERE player_dismissed="CH Gayle" GROUP BY bowler;'
    var result= await dataHandler(database,query)
    var jsonString = JSON.stringify(result)
    fs.writeFile('public/sql-CHGayleDismissals.json',jsonString, "utf8", err => {
        if(err){
        console.error(err)
        }
    });    return;
}

async function SuperOverEconomies(database)
{
    const query = 'SELECT bowler,SUM(total_runs)/(COUNT(bowler)/6) AS super_Economy FROM deliveries WHERE is_super_over!=0 GROUP BY bowler  ORDER BY super_Economy ASC LIMIT 1;'
    var result= await dataHandler(database,query)
    var jsonString = JSON.stringify(result)
    fs.writeFile('public/sql-superOver.json',jsonString, "utf8", err => {
        if(err){
        console.error(err)
        }
    });    return;
}
module.exports.tossAndMatches=tossAndMatches;
module.exports.CHGayleStrikeRate=CHGayleStrikeRate;

module.exports.CHGayleDismissals=CHGayleDismissals;
module.exports.SuperOverEconomies=SuperOverEconomies;
