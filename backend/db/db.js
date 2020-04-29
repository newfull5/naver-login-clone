const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0909',
  port     : '3306',
  database : 'naveruser'
});

connection.connect();

connection.query('SELECT * from user', function(err, rows, fields) {
    if (!err){
      console.log(rows[0]);
    }
    else
      console.log('Error while performing Query.', err);
  });
  
  connection.end();

