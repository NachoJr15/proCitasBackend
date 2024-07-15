const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

//creamos la ruta del Crud

router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.mostrarClientes);
router.get('/:id', clienteController.buscarCliente);
//router.put('/:id', clienteController.actualizarClientes);      //Es similar al Patch
router.patch('/:id', clienteController.modificarClientes);    //Es similar al Put
router.delete('/:id', clienteController.eliminarClientes);


module.exports = router;