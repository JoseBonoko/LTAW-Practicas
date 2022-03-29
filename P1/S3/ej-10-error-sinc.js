const fs = require('fs');

//-- Fichero a leer
const FICHERO = 'fich11.txt';

try{
    const data = fs.readFileSync(FICHERO, 'utf8');
    console.log("Lectura síncrona de un fichero...");
    console.log("Lectura completada");
    console.log("Constenido del fichero: \n");
    console.log(data);
}catch (err){
    console.log("Error!!");
    console.log(err.message);
}