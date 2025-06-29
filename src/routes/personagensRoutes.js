const express = require('express');
const router = express.Router();
const controller = require('../controllers/personagensController');

router.get('/personagens', controller.listarTodos);
router.get('/personagens/:id', controller.buscarPorId);
router.post('/personagens', controller.criar);
router.put('/personagens/:id', controller.atualizar);
router.delete('/personagens/:id', controller.deletar);

module.exports = router;
