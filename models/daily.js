'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('daily', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
    hit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    miss: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    freezeTableName: true,
    underscored: true
  });
};