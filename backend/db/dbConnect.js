const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0909',
    port: '3306',
    database: 'naveruser'
  });

  module.exports = connection;