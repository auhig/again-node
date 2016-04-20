'use strict';

const winston = require('winston');
const path = require('path');
const fs = require('fs');

let root = path.join(__dirname, 'logs');
fs.existsSync(root) || fs.mkdirSync(root);

let logger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({
      filename: path.join(root, 'all.log'),
      maxsize: 5 * 1024 * 1024,
      maxFiles: 5
    })
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: path.join(root, 'error.log'),
      maxsize: 1024 * 1024,
      maxFiles: 1
    })
  ]
});

// logger.exitOnError = false;

module.exports = logger;
