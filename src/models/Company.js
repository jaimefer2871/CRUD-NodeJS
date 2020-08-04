const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database')

class Company extends Model { }

Company.init({
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    abrev: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    rif: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    path_logo: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    street: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    urbanization: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    avenue: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    building: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    mobile: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    phone: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    email: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    email_alternative: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    facebook: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    instagram: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    twitter: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    created_at: {
        type: DataTypes.DATE
    },
    modified_at: {
        type: DataTypes.DATE
    },
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Company', // We need to choose the model name,
    tableName: 'base_company',
    timestamps: false
});

module.exports = Company