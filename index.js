const fs = require('fs');
const mysql = require('mysql');
const csv = require('fast-csv');
 
// Import CSV Data to MySQL database
importCsvData2MySQL('./csv_data/matches.csv');
 
function importCsvData2MySQL(filename){
    let stream = fs.createReadStream(filename);
    let csvData = [];
    let csvStream = csv
        .parse()
        .on("data", function (data) {
            csvData.push(data);
        })
        .on("end", function () {
            // Remove Header ROW
            csvData.shift();
 
            // Create a connection to the database
            const connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'akshayb8357',
                database: 'testdb'
            });
 
            // Open the MySQL connection
            connection.connect((error) => {
                if (error) {
                    console.error(error);
                } else {
                    let query = 'INSERT INTO matches (id, season, city, date, team1, team2, toss_winner, toss_decision, result, dl_applied, winner, win_by_runs, win_by_wickets, player-of_match, venue, umpire1, umpire2 ,umpire3) VALUES ?';
                    connection.query(query, [csvData], (error, response) => {
                        console.log(error || response);
                    });
                }
            });
        });
 
    stream.pipe(csvStream);
}