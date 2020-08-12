var mysql = require('mysql');
const dotenv = require('dotenv').config();
var sql = require('./ipl/sqlQueries.js');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: 'root',
  database: 'testdb'
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected Succesfully as id ' + connection.threadId);
});

<<<<<<< HEAD
sql.tossAndMatches(connection)
=======
con.query('SELECT winner,Count(*) FROM matches WHERE winner=toss_winner GROUP BY winner;', function (error, results, fields) {
    if (error)
        throw error;
>>>>>>> 446a066c53a1da85208f74337e169324d7f5c636


connection.end();