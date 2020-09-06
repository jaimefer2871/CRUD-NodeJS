const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database')

class Company extends Model { }

Company.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1
    },
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
    address: {
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
    modelName: 'Company', // We need to choose the model name,
    tableName: 'companies',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
});

module.exports = Company