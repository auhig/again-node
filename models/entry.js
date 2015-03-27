'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('entry', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    original: DataTypes.STRING,
    translation: DataTypes.STRING,
    phonetic: DataTypes.STRING,
    example: DataTypes.TEXT
  }, {
    freezeTableName: true,
    underscored: true
  });
};