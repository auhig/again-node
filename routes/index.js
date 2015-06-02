'use strict';

var express = require('express');
var router = express.Router();
var packageJson = require('../package.json');

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
  res.render('index', {app_version: packageJson.version});
});

router.post('/login', function (req, res, next) {
  res.send('fixme');
});

router.post('/logout', function (req, res, next) {
  res.send('fixme');
});

module.exports = router;
