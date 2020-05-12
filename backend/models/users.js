'use strict';
module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        user_id: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function(models) {
            // associations can be defined here
            }
        }
    });

    return users;
};
