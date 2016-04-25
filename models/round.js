'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('round', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    beginTime: {
      type: DataTypes.DATE,
      field: 'begin_time',
      allowNull: false
    },
    endTime: {
      type: DataTypes.DATE,
      field: 'end_time'
    }
  });
};
