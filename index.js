var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: 'testdb'
});


con.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + con.threadId);
});

con.query('SELECT winner,Count(*) FROM matches WHERE winner=toss_winner GROUP BY winner;', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});

con.end();