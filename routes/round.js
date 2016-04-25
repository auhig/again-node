'use strict';

const express = require('express');
const router = express.Router();
const manager = require('./manager');

router.get('/start', (req, res, next) => {
  res.send('error');
});
