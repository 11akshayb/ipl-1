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

sql.tossAndMatches(connection)
sql.CHGayleStrikeRate(connection)
sql.CHGayleDismissals(connection)
sql.SuperOverEconomies(connection)

connection.end();