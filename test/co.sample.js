'use strict';

const co = require('co');
const models = require('../models');
const moment = require('moment');
const User = models.User;
const UserRepository = models.UserRepository;
const Statistics = models.Statistics;

// co(function *() {
//   throw new Error('abc');
// }).catch(err => {
//   console.warn(`error has occurred ${err}`);
//   throw (err);
// });
//
// console.info('over');


// let result = co(function *() {
//   return 'b';
// });
//
// result.then(v => console.info(v));


co(function *() {
  let userId = 1, repositoryId = 2;
  let start = moment().startOf('day');
  let end = start.add(1, 'd');
  let count = yield Statistics.findAll({
    // include: [models.User],
    where: {
      'user_id': 'a'
    }


    // where: models.sequelize.where(models.sequelize.col(models.User, 'id'), 'a')
  });
  console.info(count.userId);
  console.info(start.toDate());
  console.info(end.toDate());
}).catch(err => {
  console.warn(`error has occurred ${err}`);
  throw (err);
});


// co(function *() {
//   let user = yield User.create({
//     username: 'test_user',
//     password: 'encode_password',
//     nickname: 'nickname'
//   });
//
//   let existed = yield User.findById(user.id);
//   console.info(existed.id);
//   console.info(existed.password);
// });
//
// let userId = 1, repositoryId = 2;
// co(function *() {
//   let userRepository = yield UserRepository.findOne({
//     where: {userId, repositoryId}
//   });
//   console.info(`this is ${userRepository}`);
// }).catch(err => {
//   console.warn(err);
// });
