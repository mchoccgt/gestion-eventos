const pool = require('../config/database');

const obtenerCategorias = async () => {

    const [rows] = await pool.query(
        'SELECT * FROM categorias ORDER BY nombre'
    );

    return rows;
};

module.exports = {
    obtenerCategorias
};