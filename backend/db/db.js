const express = require('express');
const router = express.Router();
const mysqldb = require('./dbConnect.js');

router.get('/login/api', function (req, res, next) {
  mysqldb.query('SELECT * from user', function (err, rows, fields) {
    if (!err) {
      console.log(rows[0]);
    }
    else
      console.log('Error while performing Query.', err);
  });

});

module.exports = router;


