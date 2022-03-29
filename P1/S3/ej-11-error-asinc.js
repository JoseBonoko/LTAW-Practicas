const fs = require('fs');

const FICHERO = 'fich11.txt';

fs.readFile(FICHERO, 'utf8', (err, data) => {

    if (err){   //--Ha ocurrido algún error
        console.log("Error!!");
        console.log(err.message);
    }else{  //--Lectura normal
        console.log("Lectura completada...");
        console.log("Contenido del fichero: \n");
        console.log(data);
    }
})