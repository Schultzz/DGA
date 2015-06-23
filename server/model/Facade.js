var db = require('./SQLdbManager');

var pool = db.pool;//Gets the pool from DBManager

function _getCoaches(callback) {

    pool.getConnection(function (error, connection) {
        if(error){
            //Handle upper layer error
        }
        else{
        connection.query("select * from coach", function (err, rows) {//CHANGE TO COACHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            connection.release();
            if (!err) {
                callback(rows);
            }
            else {
                callback()//FIND SUITABLE ERRORCODE
            }
        });
        }
    });
};

module.exports = {

    getCoaches: _getCoaches

};
