// models/EstadoExperto.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajusta la ruta según tu estructura de proyecto

const EstadoExperto = sequelize.define('EstadoExperto', {
    IdEstadoExperto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'EstadoExperto',
    timestamps: false // asumiendo que no necesitas las columnas de timestamps
});

module.exports = EstadoExperto;
