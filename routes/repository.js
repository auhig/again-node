'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  let user = req.session.loginUser;
  console.log(user);
  res.send(user);
});

module.exports = router;