// controllers/expertoController.js
const experto = require('../model/Experto');

exports.createExperto = async (req, res) => {
    try {
        const experto = await Experto.create(req.body);
        res.send(experto);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getExpertos = async (req, res) => {
    try {
        const expertos = await Experto.findAll();
        res.send(expertos);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getExperto = async (req, res) => {
    try {
        const experto = await Experto.findByPk(req.params.id);
        if (experto) {
            res.send(experto);
        } else {
            res.status(404).send("Experto no encontrado");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateExperto = async (req, res) => {
    try {
        const result = await Experto.update(req.body, {
            where: { id: req.params.id }
        });
        if (result[0] === 1) {
            res.send("Experto actualizado");
        } else {
            res.status(404).send("Experto no encontrado");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteExperto = async (req, res) => {
    try {
        const result = await experto.destroy({
            where: { id: req.params.id }
        });
        if (result === 1) {
            res.send("Experto eliminado");
        } else {
            res.status(404).send("Experto no encontrado");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};