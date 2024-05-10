const {  DataTypes } = require('sequelize');
const sequelize = require('./database'); 



const Usuario = sequelize.define('Usuario', {
    
    idusuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idrol: {
        type: DataTypes.INTEGER,
        allowNull: true 
    },
    idevento: {
        type: DataTypes.INTEGER,
        allowNull: true 
    },
    idpatente: {
        type: DataTypes.INTEGER,
        allowNull: true 
    },

}, {
    tableName: 'usuarios', // Nombre exacto de la tabla en la base de datos
    timestamps: false // Ajusta esto según si tu tabla maneja timestamps
});

module.exports = Usuario;
