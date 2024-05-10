// controllers/usuarioController.js
const Usuario = require('../model/Usuario');

exports.createUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.send(usuario);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.send(usuarios);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (usuario) {
            res.send(usuario);
        } else {
            res.status(404).send("Usuario no encontrado");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateUsuario = async (req, res) => {
    try {
        const result = await Usuario.update(req.body, {
            where: { id: req.params.id }
        });
        if (result[0] === 1) {
            res.send("Usuario actualizado");
        } else {
            res.status(404).send("Usuario no encontrado");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteUsuario = async (req, res) => {
    try {
        const result = await Usuario.destroy({
            where: { id: req.params.id }
        });
        if (result === 1) {
            res.send("Usuario eliminado");
        } else {
            res.status(404).send("Usuario no encontrado");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
