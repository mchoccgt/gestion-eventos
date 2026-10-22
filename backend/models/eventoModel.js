const pool = require('../config/database');

const obtenerEventos = async () => {

    const [rows] = await pool.query(`
        SELECT
            e.id,
            e.nombre,
            c.nombre AS categoria,
            e.descripcion,
            e.fecha,
            e.lugar,
            e.precio,
            e.cupos_totales,
            e.cupos_disponibles
        FROM eventos e
        INNER JOIN categorias c
            ON e.categoria_id = c.id
        ORDER BY e.fecha
    `);

    return rows;
};

const crearEvento = async (evento) => {

  const {
    categoria_id,
    nombre,
    descripcion,
    fecha,
    lugar,
    precio,
    cupos_totales
  } = evento;

  const [resultado] = await pool.query(
    `
      INSERT INTO eventos
      (
        categoria_id,
        nombre,
        descripcion,
        fecha,
        lugar,
        precio,
        cupos_totales,
        cupos_disponibles
      )
      VALUES
      (?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      categoria_id,
      nombre,
      descripcion,
      fecha,
      lugar,
      precio,
      cupos_totales,
      cupos_totales
    ]
  );

  return resultado;
};

module.exports = {
    obtenerEventos,
    crearEvento
};