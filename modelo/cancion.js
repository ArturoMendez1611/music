'use strict' //Declaracion de variables obligatoriamente

var mongoose = require("mongoose"); //Conexion a la base de datos
var Schema = mongoose.Schema;

var EsquemaCancion = Schema({
    numero: String,
    nombre: String,
    duracion: String,
    file: String,
    album: { type: Schema.ObjectId, ref: "Album" }

});

module.exports = mongoose.model('Cancion', EsquemaCancion);