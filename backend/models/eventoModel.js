const pool = require('../config/database');

const obtenerEventos = async () => {

    const [rows] = await pool.query(`
        SELECT
            e.id,
            e.categoria_id,
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

const eliminarEvento = async (id) => {

  const [resultado] = await pool.query(
    `
      DELETE FROM eventos
      WHERE id = ?
    `,
    [id]
  );

  return resultado;
};

const actualizarEvento = async (
  id,
  evento
) => {

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
    UPDATE eventos
    SET
      categoria_id = ?,
      nombre = ?,
      descripcion = ?,
      fecha = ?,
      lugar = ?,
      precio = ?,
      cupos_totales = ?
    WHERE id = ?
    `,
    [
      categoria_id,
      nombre,
      descripcion,
      fecha,
      lugar,
      precio,
      cupos_totales,
      id
    ]
  );

  return resultado;

};

module.exports = {
    obtenerEventos,
    crearEvento,
    eliminarEvento,
    actualizarEvento
};
