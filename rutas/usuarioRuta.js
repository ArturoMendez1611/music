'use strict'

var express = require('express');
var UsuarioControl = require('../controlador/usuarioControl');

var api = express.Router();

api.get('/probando-controlador', UsuarioControl.prueba);
api.post('/registrar', UsuarioControl.registrarUsuario); //Solo se cambia el mètodo de la api ya sea GET o POST

module.exports = api;