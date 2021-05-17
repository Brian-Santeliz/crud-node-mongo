const { Router } = require('express');
const {
  obtener,
  agregar,
  actualizar,
  eliminar,
} = require('../controller/controller');
const router = Router();
router.get('/obtener', obtener);
router.post('/agregar', agregar);
router.put('/actualizar/:id', actualizar);
router.delete('/eliminar/:id', eliminar);

module.exports = router;
