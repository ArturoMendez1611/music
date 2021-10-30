'use strict' //Declaracion de variables obligatoriamente

var mongoose = require("mongoose"); //Conexion a la base de datos
var Schema = mongoose.Schema; //Esquema creacion de las tablas de la db

var EsquemaUsuarios = Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    rol: String,
    imagen: String
});

module.exports = mongoose.model('Usuarios', EsquemaUsuarios); //model crea la tabla con el nombre de 'Usuarios' y esquema son los campos de la tabla