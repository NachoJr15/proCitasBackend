const express = require('express');
const router = express.Router();
const {check} = require("express-validator");
const authController = require ("../controllers/authController");
const auth = require("../middleware/auth");

// autenticar el usuario con un email y un password
// api/auth

router.post(
    "/",
    [
        check("email", "Agregar un email válido").isEmail(),
        check("password", "El password debe tener minimo 10 caracteres").isLength({min: 10}),
    ],
    authController.autenticarUsuario
);

router.get('/', auth, authController.usuarioAutenticado);
module.exports = router;
