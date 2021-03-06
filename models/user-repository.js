'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user_repository', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      field: 'user_id'
    },
    repositoryId: {
      type: DataTypes.UUID,
      field: 'repository_id'
    }
  });
};
