var mongoose = require('mongoose'); //Base de datos
var app = require('./app'); //Importar archivo app en una variable express
var port = process.env.PORT || 3977; //Puesto a utilizar
//Conexion  a la base de datos
mongoose.connect('mongodb://localhost:27017/proyecto', (err, res) => {
    if (err) {
        throw err; //Muestra error
    } else {
        console.log("Conexion Exitosa");
        app.listen(port, () => {
            console.log("Servidor de api rest de musica escuchando en http://localhost:" + port);
        });
    }
});