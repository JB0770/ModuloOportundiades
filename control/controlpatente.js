// controllers/patenteController.js
const Patente = require('../model/Patente');

exports.createpatente = async (req, res) => {
    try {
        const patente = await Patente.create(req.body);
        res.send(patente);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getPatente = async (req, res) => {
    try {
        const patente = await Patente.findAll();
        res.send(patente);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getPatente = async (req, res) => {
    try {
        const patente = await Patente.findByPk(req.params.id);
        if (patente) {
            res.send(patente);
        } else {
            res.status(404).send("patente no encontrado");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updatePatente = async (req, res) => {
    try {
        const result = await Patente.update(req.body, {
            where: { id: req.params.id }
        });
        if (result[0] === 1) {
            res.send("patente actualizado");
        } else {
            res.status(404).send("patente no encontrado");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deletePatente = async (req, res) => {
    try {
        const result = await Patente.destroy({
            where: { id: req.params.id }
        });
        if (result === 1) {
            res.send("patente eliminado");
        } else {
            res.status(404).send("patente no encontrado");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
