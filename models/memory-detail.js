'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('memory_detail', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    remain: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    rightCount: {
      type: DataTypes.INTEGER,
      field: 'right_count',
      allowNull: false,
      defaultValue: 0
    },
    wrongCount: {
      type: DataTypes.INTEGER,
      field: 'wrong_count',
      allowNull: false,
      defaultValue: 0
    },
    nextTime: {
      type: DataTypes.DATE,
      field: 'next_time',
      allowNull: false
    },
    lastTime: {
      type: DataTypes.DATE,
      field: 'last_time',
      allowNull: false
    }
  }, {
    freezeTableName: true,
    underscored: true
  });
};