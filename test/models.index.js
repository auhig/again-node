'use strict';

const assert = require('assert');
const models = require('../models');

describe('Models.index', () => {

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
    it('save success', (done) => {
      let User = models.User;
      User.create({
        username: 'test_user',
        password: 'encode_password',
        nickname: 'nickname'
      }).then(user => {
        assert.ok(user);
        assert.ok(user.id);
        done();
      });
    });
  });

});
