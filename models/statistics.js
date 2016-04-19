'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('statistics', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
    hit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    miss: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    combo: {
      type: DataTypes.INTEGER,
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