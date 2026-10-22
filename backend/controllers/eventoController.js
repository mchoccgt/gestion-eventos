const eventoModel = require('../models/eventoModel');

const listarEventos = async (req, res) => {

    try {

        const eventos =
            await eventoModel.obtenerEventos();

        res.json(eventos);

    } catch(error) {

        console.error(error);

        res.status(500).json({
            mensaje: 'Error al obtener eventos'
        });

    }
};

const crearEvento = async (req, res) => {

  try {

    const resultado =
      await eventoModel.crearEvento(req.body);

    res.status(201).json({
      mensaje: "Evento creado",
      id: resultado.insertId
    });

  } catch(error) {

    console.error(error);

    res.status(500).json({
      mensaje: "Error al crear evento"
    });

  }
};

const eliminarEvento = async (
  req,
  res
) => {

  try {

    const { id } = req.params;

    await eventoModel.eliminarEvento(id);

    res.json({
      mensaje:
        "Evento eliminado"
    });

  } catch(error) {

    console.error(error);

    res.status(500).json({
      mensaje:
        "Error al eliminar"
    });

  }

};

module.exports = {
    listarEventos,
    crearEvento,
    eliminarEvento
};