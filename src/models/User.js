const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require("bcrypt");
class User extends Model { }

User.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1
    },
    alias: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    company_id: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    created_at: {
        type: DataTypes.DATE
    },
    updated_at: {
        type: DataTypes.DATE
    },
    deleted_at: {
        type: DataTypes.DATE
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name,
    tableName: 'users',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
});

User.beforeCreate(async (user, options) => {
    const hashedPassword = await bcrypt.hash(user.password,10)
    user.password = hashedPassword;
});

module.exports = User