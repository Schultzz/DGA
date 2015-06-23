var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'example.org',
    user     : 'bob',
    password : 'secret',
});

connection.connect(function(err) {
    // connected! (unless `err` is set)
});