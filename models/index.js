'use strict';

const Sequelize = require('sequelize');
const database = require('../config').database;

// 数据库连接
const sequelize = new Sequelize(
  database.database,
  database.user,
  database.password,
  {
    host: database.host,
    storage: database.storage,
    dialect: database.dialect,
    pool: database.pool,
    define: {
      freezeTableName: true,
      underscored: true,
      underscoredAll: true
    }
  }
);

// 模型定义文件名
const models = [
  //'category',
  'daily',
  'entry',
  'repository',
  //'round',
  'statistics',
  'user',
  'user-repository'
];

// 注册模型
models.forEach(function (model) {
  // 将文件名转换为驼峰式类名（例如：foo-bar -> FooBar）
  let className = model.replace(/(?:^|-)(\w)/g, (m, c) => c.toUpperCase());
  module.exports[className] = sequelize.import(__dirname + '/' + model);
});

// 描述实体间依赖关系
(m => {
  //m.Repository.belongsTo(m.Category);

  m.Repository.hasMany(m.Entry, {as: 'Entries'});

  m.Entry.belongsTo(m.Repository);

  m.Daily.belongsTo(m.User);
  m.Daily.belongsTo(m.Entry);
  m.Daily.belongsTo(m.Repository);

  m.Statistics.belongsTo(m.User);
  m.Statistics.belongsTo(m.Entry);
  m.Statistics.belongsTo(m.Repository);

  //m.Round.belongsTo(m.User);
  //m.Round.belongsTo(m.Repository);

  m.UserRepository.belongsTo(m.User);
  m.UserRepository.belongsTo(m.Repository);
})(module.exports);

//sequelize.sync();

module.exports.sequelize = sequelize;
