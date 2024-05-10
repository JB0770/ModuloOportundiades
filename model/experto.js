// models/Experto.js
const { DataTypes } = require('sequelize');
const sequelize = require('.database');  // Asegúrate que la ruta al archivo de configuración es correcta

const Experto = sequelize.define('Experto', {
    IdExperto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    IdEstado: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    IdUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Especialidad: {
        type: DataTypes.STRING(255)
    },
    Descripcion: {
        type: DataTypes.STRING(255)
    },
    FotoUrl: {
        type: DataTypes.STRING(255)
    }
}, {
    tableName: 'Experto',
    timestamps: false  // Asumiendo que no necesitas las columnas de timestamp
});

module.exports = Experto;
