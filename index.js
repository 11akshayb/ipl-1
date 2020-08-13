var mysql = require('mysql');
const dotenv = require('dotenv').config();
var sql = require('./ipl/sqlQueries.js');

var connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected to Database Succesfully as id ' + connection.threadId);
});

sql.tossAndMatches(connection)
sql.CHGayleStrikeRate(connection)
sql.CHGayleDismissals(connection)
sql.SuperOverEconomies(connection)
sql.CHGayleManofMatch(connection)

connection.end();