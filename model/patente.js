// models/Patente.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de que la ruta al archivo de configuración de la base de datos es correcta

const Patente = sequelize.define('Patente', {
    IdPatentes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Titulo: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Categoria: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Resumen: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'Patentes',  // Confirma que el nombre de la tabla coincida con tu base de datos
    timestamps: false       // Asumiendo que no necesitas columnas de marca temporal
});

module.exports = Patente;
