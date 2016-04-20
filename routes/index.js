'use strict';

const express = require('express');
const router = express.Router();
const packageJson = require('../package.json');
const logger = require('../logger');

/* GET home page. */
router.get('/', (req, res, next) => {
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

router.post('/login', (req, res, next) => {
  res.send('fixme');
});

router.post('/logout', (req, res, next) => {
  res.send('fixme');
});

module.exports = router;
