const express = require('express');

const router = express.Router();

const eventoController =
    require('../controllers/eventoController');

router.get(
    '/',
    eventoController.listarEventos
);

router.post(
  '/',
  eventoController.crearEvento
);

router.delete(
  '/:id',
  eventoController.eliminarEvento
);

router.put(
  '/:id',
  eventoController.actualizarEvento
);

module.exports = router;