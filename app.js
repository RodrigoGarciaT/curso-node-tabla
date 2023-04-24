const {crearArchivo} = require('./helpers/multiplicar')
const colors = require('colors');

const argv = require('./config/yargs')
base = argv.b
listar = argv.l
hasta = argv.h
crearArchivo(base, listar, hasta)
    .then(archivo => console.log(archivo.rainbow, "fue creado"))
    .catch(err=>console.log(err))