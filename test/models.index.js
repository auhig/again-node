'use strict';

const assert = require('assert');
const models = require('../models');

describe('Models.index', () => {

  before(() => models.sequelize.sync());

  describe('index', () => {
    it('all models', () => {
      assert.ok(models.User);
      assert.ok(models.Repository);
      assert.ok(models.Entry);
      assert.ok(models.Daily);
      assert.ok(models.Statistics);
    });
  });

  describe('user', () => {
    it('normal', done => {
      let User = models.User;
      User.create({
        username: 'test_user',
        password: 'encode_password',
        nickname: 'nickname'
      }).then(user => {
        assert.ok(user);
        assert.ok(user.id);
        return user.update({
          nickname: 'new_nickname'
        });
      }).then(user => {
        assert.equal('new_nickname', user.nickname);
        done();
      });
    });
  });

  describe('statistics', () => {
    it('normal', done => {
      models.Statistics.build({
        level: 1,
        remain: 20,
        hit: 100,
        miss: 10,
        combo: 2,
        nextTime: new Date(),
        lastTime: new Date()
      }).save().then(statistics => {
        assert.ok(statistics);
        assert.ok(statistics.createdAt);
        done();
      });
    });
  });

});
