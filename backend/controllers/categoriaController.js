const categoriaModel = require('../models/categoriaModel');

const listarCategorias = async (req, res) => {

    try {

        const categorias =
            await categoriaModel.obtenerCategorias();

        res.json(categorias);

    } catch(error) {

        console.error(error);

        res.status(500).json({
            mensaje: 'Error al obtener categorías'
        });

    }
};

module.exports = {
    listarCategorias
};