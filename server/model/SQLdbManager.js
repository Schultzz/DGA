var mysql     =    require('mysql');
var _pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'dga',
    debug    :  false
});




module.exports = {

    pool : _pool

}