'use strict' //Declaracion de variables obligatoriamente

var mongoose = require("mongoose"); //Conexion a la base de datos
var Schema = mongoose.Schema;

var EsquemaArtistas = Schema({
    nombre: String,
    adescripcion: String,
    imagen: String

});

module.exports = mongoose.model('Artistas', EsquemaArtistas);