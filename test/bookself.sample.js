'use strict';

const _ = require('lodash');

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'again',
    charset: 'utf8',
    debug: true
  }
});

const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

let User = bookshelf.Model.extend({
  tableName: 'user',

  // convert snake_case to camelCase
  parse: function (attr) {
    return _.reduce(attr, function (record, val, key) {
      record[_.camelCase(key)] = val;
      return record;
    }, {});
  },

  // convert camelCase to snake_case
  format: function (attr) {
    return _.reduce(attr, function (record, val, key) {
      record[_.snakeCase(key)] = val;
      return record;
    }, {});
  }
});

let UserRepository = bookshelf.Model.extend({
  tableName: 'user_repository',
  user: function () {
    return this.belongsToMany('user');
  }
}, {parse: true});

// User.where('username', 'test_user').fetch().then(users => {
//   console.info('+++++++++++++++++++++++++++++++++++++++');
//   console.info('+++++++++++++++++++++++++++++++++++++++');
//   console.info(users.createdAt);
//   console.info(users.get('createdAt'));
//   console.info('---------------------------------------');
//   console.info('---------------------------------------');
// });

UserRepository.where('user_id', '1').fetch().then(user => {
  console.info(user);
});