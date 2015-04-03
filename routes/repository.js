'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var user = req.session.loginUser;
  console.log(user);
  res.send(user);
});

module.exports = router;