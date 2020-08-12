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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "The field description cannot be empty"
            }
        },

        // allowNull defaults to true
    },
    created_at: {
        type: DataTypes.DATE
    },
    modified_at: {
        type: DataTypes.DATE
    },
    company_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Rol', // We need to choose the model name,
    tableName: 'base_rol',
    createdAt: 'created_at',
    updatedAt: 'modified_at'
});

Rol.belongsTo(Company, {
    foreignKey: 'company_id'
})

module.exports = Rol