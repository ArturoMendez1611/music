'use strict' //Declaracion de variables obligatoriamente

var mongoose = require("mongoose"); //Conexion a la base de datos
const artistas = require("./artistas");
var Schema = mongoose.Schema;

var EsquemaAlbum = Schema({
    titulo: String,
    descripcion: String,
    year: Number,
    imagen: String,
    artista: { type: Schema.ObjectId, ref: "Artista" }

});

module.exports = mongoose.model('Album', EsquemaAlbum);