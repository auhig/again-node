'use strict';

var Sequelize = require('sequelize');
var database = require('../config').database;

// 数据库连接
var sequelize = new Sequelize(
  database.database,
  database.user,
  database.password,
  {
    host: database.host,
    storage: database.storage,
    dialect: database.dialect,
    pool: database.pool
  }
);

// 模型定义文件名
var models = [
  //'category',
  'entry',
  'memory-daily',
  'memory-detail',
  'repository',
  'user'
];

// 注册模型
models.forEach(function (model) {
  // 将文件名转换为驼峰式类名（例如：foo-bar -> FooBar）
  var className = model.replace(/(?:^|-)(\w)/g, function (m, c) {
    return c.toUpperCase();
  });
  module.exports[className] = sequelize.import(__dirname + '/' + model);
});

// 描述实体间依赖关系
(function (m) {
  //m.Repository.belongsTo(m.Category);

  m.Entry.belongsTo(m.Repository);
  m.Repository.hasMany(m.Entry, {as: 'Entries'});

  m.MemoryDetail.belongsTo(m.User);
  m.MemoryDetail.belongsTo(m.Entry);
  m.MemoryDetail.belongsTo(m.Repository);

  m.MemoryDaily.belongsTo(m.User);
  m.MemoryDaily.belongsTo(m.Entry);
  m.MemoryDaily.belongsTo(m.Repository);
})(module.exports);

//sequelize.sync();

module.exports.sequelize = sequelize;
