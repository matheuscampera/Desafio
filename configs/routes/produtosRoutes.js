// routes/produtosRoutes.js
const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

// Defina os endpoints da API para produtos
router.get('/', produtosController.getAllProdutos);
router.get('/:id', produtosController.getProdutoById);
router.post('/', produtosController.createProduto);
router.put('/:id', produtosController.updateProduto);
router.delete('/:id', produtosController.deleteProduto);

module.exports = router;
