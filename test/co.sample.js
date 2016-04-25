'use strict';

const co = require('co');
const models = require('../models');
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
  let records = yield Statistics.findAll({
    where: {
      userId,
      repositoryId,
      nextTime: {$lte: new Date()}
    }
  });
  console.info(records);
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
