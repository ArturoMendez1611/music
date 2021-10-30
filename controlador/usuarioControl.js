'use strict'
//librerias

const bcrypt = require('bcrypt');
var usuariosModelo = require('../modelo/usuario');
var usuario = new usuariosModelo();
var url = require('url');

function prueba(req, res) {
    res.status(200).send({
        mesagge: 'Probando una accion del controlador de usuarios del api REST con node y mongo'
    });
}

function registrarUsuario(req, res) {
    console.log(params);
    var params = req.body; //recibe todos los datos por Por el Metodo POST

    //var params = url.parse(req.url, true).query; // Recibe los datos por el metodo GET y se separan los parametros
    // variables de la base de datos
    usuario.nombre = params.nombre;
    usuario.apellido = params.apellido;
    usuario.email = params.email;
    usuario.rol = 'ROLE_ADMIN';
    usuario.imagen = 'null';
    //Validacion de  la contraseña y se incripta con el metodo HASH 10= saltos que realiza
    if (params.password) {
        bcrypt.hash(params.password, 10, function(err, hash) {
            usuario.password = hash;
            console.log(usuario.password);
        });
        //Validacion de los demas campos 
        if (usuario.nombre != null && usuario.apellido != null && usuario.email != null) {
            usuario.save((error, respuesta) => {
                if (error) {
                    res.status(500).send({ mesagge: 'Error con la base de datos' });
                } else if (respuesta) {
                    //res.status(200).send({ mesagge: 'Datos almacenados' });
                    res.status(200).send({ usuario: respuesta });
                }
            });
        } else {
            res.status(404).send({ mesagge: 'se te olvido algun dato' });
        }
    } else {
        res.status(404).send({ mesagge: 'se te olvido la contraseña' });
    }

}

module.exports = {
    prueba,
    registrarUsuario
};