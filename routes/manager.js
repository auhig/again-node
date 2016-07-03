'use strict';

const co = require('co');
const logger = require('../logger');
const moment = require('moment');
const models = require('../models');
const User = models.User;
const Repository = models.Repository;
const UserRepository = models.UserRepository;
const Statistics = models.Statistics;

const manager = module.exports;

/**
 *
 * @type {Map} 回合缓存
 */
const cache = new Map();

function makeCacheKey(userId, repositoryId) {
  return {userId, repositoryId};
}

function getRound(userId, repositoryId) {
  let key = makeCacheKey(userId, repositoryId);
  let round = cache.get(key);
  if (round) {
    round.lastAccessedTime = new Date();
  }
  return round;
}

function setRound(userId, repositoryId, round) {
  let key = makeCacheKey(userId, repositoryId);
  cache.set(key, round);
}

/**
 * 开始新回合。
 *
 * @param userId 用户ID
 * @param repositoryId 库ID
 * @returns {*|Promise.<Round>} 回合实例
 */
manager.start = (userId, repositoryId) => {
  return co(function *() {

    // 确定当前用户拥有指定的库
    let userRepository = yield UserRepository.findOne({
      where: {userId, repositoryId}
    });
    if (!userRepository) {
      throw new Error(`Can not find UserRepository by userId ${userId} and repositoryId ${repositoryId}`);
    }

    // 检查缓存，如相应回合实例已存在，则直接返回
    let round = getRound(userId, repositoryId);
    if (round) {
      return round;
    }

    round = new Round();

    // 获取拖欠以及巩固条目
    let defaults = yield Statistics.findAll({
      where: {
        userId,
        repositoryId,
        nextTime: {
          $or: [
            null,
            {$lte: new Date()}
          ]
        }
      }
    });

    // 存在拖欠条目，且当日已经选取过新条目，则当前回合仅需偿还拖欠条目
    if (defaults.length > 0) {
      let start = moment().startOf('day');
      let end = start.add(1, 'd');
      let count = yield Statistics.count({
        where: {
          userId,
          repositoryId,
          createdAt: {
            $gte: start.toDate(),
            $lt: end.toDate()
          }
        }
      });
    }

    // 获取新条目


    return round;
  }).catch(err => {
    throw err;
  });
};

manager.complete = () => {

};

manager.pause = () => {

};

manager.hit = () => {

};

manager.miss = () => {

};

class Round {

  constructor() {
    this.lastAccessedTime = new Date();
    this.statistics = new Map();
  }

}
