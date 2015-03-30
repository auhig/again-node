'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('round', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    beginTime: {
      type: DataTypes.DATE,
      field: 'begin_time',
      allowNull: false
    },
    endTime: {
      type: DataTypes.DATE,
      field: 'end_time',
      allowNull: false
    }
  }, {
    freezeTableName: true,
    underscored: true
  });
};