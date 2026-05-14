const router = require('express').Router();
const criarSessaoController = require('../features/sessoes/sessao_controller');

router.post('/iniciar',criarSessaoController);

module.exports = router;