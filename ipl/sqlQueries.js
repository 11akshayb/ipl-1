const fs = require('fs');
const async = require('async');

var JSON_OUTPUT_FILE_PATH = './public/sql-data.json';

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

function JSONstringifying(result){
    var jsonString = JSON.stringify(result)
    fs.writeFile(JSON_OUTPUT_FILE_PATH,jsonString, "utf8", err => {
        if(err){
        console.error(err)
        }
    });
    
}

async function tossAndMatches(database)
{
    const query = 'SELECT winner AS Team,Count(*) AS Count FROM matches WHERE winner=toss_winner GROUP BY winner;';
    var result= await dataHandler(database,query)
    JSONstringifying(result)
    return;
}

module.exports.tossAndMatches=tossAndMatches;