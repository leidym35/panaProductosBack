const express = require('express');
const router = express.Router()
const ProductosController = require('../controllers/productos.controller')
//creacion de rutas
router.post('/addProducto', ProductosController.post)
router.get('/productos', ProductosController.get)
router.get('/productosDelete/:id', ProductosController.delete)

module.exports = router