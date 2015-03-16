'use strict';

var Sequelize = require('sequelize');
var database = require('../config').database;

var sequelize = new Sequelize(
    database.database,
    database.user,
    database.password,
    {
        storage: database.storage,
        host: database.host,
        storage: database.storage,
        dialect: database.dialect,
        pool: database.pool
    }
);

// 模型定义文件名
var models = [
    'category',
    'memory-daily',
    'memory-detail',
    'user',
    'word',
    'wordbook'
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
    m.Wordbook.belongsTo(m.Category);

    m.Word.belongsTo(m.Wordbook);
    m.Wordbook.hasMany(m.Word, {as: 'Words'});

    m.MemoryDetail.belongsTo(m.User);
    m.MemoryDetail.belongsTo(m.Wordbook);
    m.MemoryDetail.belongsTo(m.Word);

    m.MemoryDaily.belongsTo(m.User);
    m.MemoryDaily.belongsTo(m.Wordbook);
    m.MemoryDaily.belongsTo(m.Word);
})(module.exports);

sequelize.sync();

module.exports.sequelize = sequelize;
