'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('memory_daily', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    level: {
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
    }
  }, {
    freezeTableName: true,
    underscored: true
  });
};