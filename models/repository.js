'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('repository', {
    id: {
      type: DataTypes.UUID,
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
  }, {
    freezeTableName: true,
    underscored: true
  });
};

module.exports.type = {
  official: 0,
  private: 1,
  public: 2
};