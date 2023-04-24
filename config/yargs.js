const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: false,
        default:5,
        describe:"es la base de la tabla de multiplicar"
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        describe: "define si mostramos la tabla en el texto" // se muestra en el help
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: "limite de la tabla" // se muestra en el help
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw 'la base tiene que ser un numero tonton'
        }
        return true
    }).argv;

    module.exports = argv;