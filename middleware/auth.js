const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {

    // leer el token del header
    const token = req.headers("x-auth-token");

    // revisar si tenemos un token
    if (!token) {
        return res.status(400).json({msg: "No hay un token, permiso no valido"});
    }

    // valida el token

    try {
        const cifrado = jwt.verify(token, process.env.SECRETA);
        req.usuario = cifrado.usuario;
        next();

    } catch (error) {
        res.status(400).json({msg: "Token no válido"});
    }

}