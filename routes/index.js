'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // temp user ++++++++++++++++++++
  req.session.loginUser = {
    id: 1,
    username: 'hello',
    password: 'world',
    nickname: 'node'
  };
  // ------------------------------
  res.render('index', {title: 'Express'});
});

router.post('/login', function (req, res, next) {
  res.send('fixme');
});

router.post('/logout', function (req, res, next) {
  res.send('fixme');
});

module.exports = router;
