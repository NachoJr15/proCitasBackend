const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

//creamos la ruta del Crud

router.post('/', productoController.agregarProductos);
router.get('/', productoController.mostrarProductos);
router.get('/:id', productoController.buscarProducto);
//router.put('/:id', productoController.actualizarProductos);    //Es similar al Patch
router.patch('/:id', productoController.modificarProductos); //Es similar al Put
router.delete('/:id', productoController.eliminarProductos);


module.exports = router;