const fs = require('fs');
const async = require('async');

//var JSON_OUTPUT_FILE_PATH = './public/sql-data.json';

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

async function CHGayleStrikeRates(database)
{
    const query = 'SELECT season,SUM(batsman_runs)/COUNT(batsman)*100 AS sr FROM matches JOIN deliveries ON matches.id=deliveries.match_id WHERE batsman="CH Gayle" GROUP BY season;';
    var result= await dataHandler(database,query)
    //JSONstringifying(result)
    return result;
}

module.exports=CHGayleStrikeRates;