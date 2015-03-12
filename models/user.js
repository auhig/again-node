module.exports = function (sequelize, DataTypes) {
    return sequelize.define("user", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        sex: DataTypes.CHAR,
        description: DataTypes.TEXT
    }, {
        freezeTableName: true,
        underscored: true
    });
};