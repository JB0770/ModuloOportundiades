// controllers/eventoController.js
const evento = require('../model/Evento');

exports.createEvento = async (req, res) => {
    try {
        const evento = await Evento.create(req.body);
        res.send(evento);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getEventos = async (req, res) => {
    try {
        const eventos = await Evento.findAll();
        res.send(eventos);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getEvento = async (req, res) => {
    try {
        const evento = await Evento.findByPk(req.params.id);
        if (evento) {
            res.send(evento);
        } else {
            res.status(404).send("Evento no encontrado");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateEvento = async (req, res) => {
    try {
        const result = await Evento.update(req.body, {
            where: { id: req.params.id }
        });
        if (result[0] === 1) {
            res.send("Evento actualizado");
        } else {
            res.status(404).send("Evento no encontrado");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteEvento = async (req, res) => {
    try {
        const result = await Evento.destroy({
            where: { id: req.params.id }
        });
        if (result === 1) {
            res.send("Evento eliminado");
        } else {
            res.status(404).send("Evento no encontrado");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
