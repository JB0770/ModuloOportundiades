// models/Rol.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Asegúrate de que la ruta al archivo de configuración de la base de datos es correcta

const Rol = sequelize.define('Rol', {
    IdRol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Programa: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'Roles',  // Asegúrate de que el nombre de la tabla coincida con lo que tienes en la base de datos
    timestamps: false    // Suponiendo que no necesitas columnas de marca temporal
});

module.exports = Rol;
