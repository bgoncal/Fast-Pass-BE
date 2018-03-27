exports.execute = function (query, callback) {
  const db = require('./dbconfig');
  const sql = require('mysql');
  const con = db.getConfig();
  con.query(query, (err,rows) => {
    if(err) throw err;
    callback(rows);
    console.log('Data received from Db:\n');
    console.log(rows);
  });
}
