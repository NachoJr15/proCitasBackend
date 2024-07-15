const mongoose = require('mongoose');

//el modelo que vamos a implementar debe ser el mismo de la base de datos

const Schema = mongoose.Schema;

const productoSchema = mongoose.Schema({
    
    nombres:{
        type: String,
        required: true
    },
    origen:{
        type: String,
        required: true
    },
    codigo:{
        type: Number,
        required: true
    },
    peso:{
        type: Number,
        required: true
    },
    color:{
        type: String,
        required: true
    }    


},{versionkey: false});

module.exports = mongoose.model('Producto', productoSchema);