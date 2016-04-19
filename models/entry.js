'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('entry', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    original: DataTypes.STRING,
    translation: DataTypes.STRING,
    phonetic: DataTypes.STRING,
    example: DataTypes.TEXT
  });
};