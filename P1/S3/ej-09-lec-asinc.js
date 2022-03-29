//-- Importar el módulo FS
const fs = require('fs');

console.log("LEctura asíncrona de un fichero");

//-- Lectura asíncrona del fichero
fs.readFile("fich1.txt", "utf8", (err, data) => {

    //--Mostrar los datos en la consola cuando estén disponibles
    console.log("Lectura completada...");
    console.log("Contenido del fichero: \n");
    console.log(data);
});

console.log("Esperando al sistema de ficheros...");