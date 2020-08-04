const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Company = require('./Company');

class Rol extends Model { }

Rol.init({
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
    description: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    created_at: {
        type: DataTypes.DATE
    },
    modified_at: {
        type: DataTypes.DATE
    },
    company_id: {
        type: DataTypes.UUID
    },
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Rol', // We need to choose the model name,
    tableName: 'base_rol',
    timestamps: false
});

Rol.belongsTo(Company,{
  foreignKey: 'company_id'
})

module.exports = Rol