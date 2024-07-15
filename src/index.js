const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

//Llamamos nuestra funcion conectarBD
conectarBD();
app.use(cors());

//Habilitamos express.json
app.use(express.json({extended: true}));

//rutas de mi aplicacion
app.use('/api/citas', require('../routes/citasRuta'));
app.use('/api/clientes', require('../routes/cliente'));
app.use('/api/productos', require('../routes/producto'));
app.use('/api/usuarios', require('../routes/usuarios'));
app.use('/api/auth', require('../routes/auth'));




//rutas de prueba y configuracion
app.get('/',(req, res) => {
    res.send("Bienvenidos estamos desde el navegador");
});

app.listen(port, () => console.log("Estamos conectados al servidor por el puerto: ",port));