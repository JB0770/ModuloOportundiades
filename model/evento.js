// models/Evento.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de que la ruta al archivo de configuración de la base de datos es correcta

const Evento = sequelize.define('Evento', {
    IdEventos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    IdTipoEvento: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Ubicacion: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'Eventos', // Asegúrate de que el nombre de la tabla coincida con lo que tienes en la base de datos
    timestamps: false     // Suponiendo que no necesitas columnas de marca temporal
});

module.exports = Evento;
