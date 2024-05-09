// controllers/rolController.js
const Rol = require('../model/Rol');

exports.createRol = async (req, res) => {
    try {
        const rol = await Rol.create(req.body);
        res.send(rol);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getRol = async (req, res) => {
    try {
        const rols = await Rol.findAll();
        res.send(rols);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getRol = async (req, res) => {
    try {
        const rol = await Rol.findByPk(req.params.id);
        if (rol) {
            res.send(rol);
        } else {
            res.status(404).send("Rol no encontrado");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateRol = async (req, res) => {
    try {
        const result = await Rol.update(req.body, {
            where: { id: req.params.id }
        });
        if (result[0] === 1) {
            res.send("Rol actualizado");
        } else {
            res.status(404).send("Rol no encontrado");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteRol = async (req, res) => {
    try {
        const result = await rol.destroy({
            where: { id: req.params.id }
        });
        if (result === 1) {
            res.send("Rol eliminado");
        } else {
            res.status(404).send("Rol no encontrado");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
