'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('wordbook', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        name: DataTypes.STRING,
        description: DataTypes.TEXT
    }, {
        freezeTableName: true,
        underscored: true
    });
};