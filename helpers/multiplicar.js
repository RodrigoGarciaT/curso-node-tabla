const fs = require('fs')
 
const crearArchivo = async (base, listar, hasta) =>{
    try{
        let salida = ''
        for(let i =0; i<=hasta;i++){
            salida += (`${base}`+"*" +`${i}` +"="+`${base*i}`+"\n")
        }


       if(listar) {
        console.log(`      Tabla del ${base}         `)
        console.log("==========================")
        console.log(salida)
    }
        await fs.writeFileSync(`./salida/tabla-${base}`,salida)

        console.log("tabla creada bro")
        return `tabla-${base}`;
    }
    catch(err){
        throw err
    }
}

module.exports ={
    crearArchivo
}