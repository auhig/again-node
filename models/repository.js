'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('repository', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT
  });
};

module.exports.type = {
  official: 0,
  private: 1,
  public: 2
};