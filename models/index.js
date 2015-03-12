var Sequelize = require('sequelize');
var database = require('../config').database;

var sequelize = new Sequelize(
    database.database,
    database.user,
    database.password,
    {
        host: database.host,
        dialect: database.dialect,
        pool: database.pool
    }
);

// 模型定义文件名
var models = [
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

})(module.exports);

sequelize.sync().then(function () {
    console.info('All modal sync over');
});

module.exports.sequelize = sequelize;
