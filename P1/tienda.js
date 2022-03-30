//-- Importar módulos
const http = require('http');
const fs = require('fs');

//-- Establezco puerto de escucha
const PUERTO = 9090;

//--Creación del servidor
const server = http.createServer((req, res) => {
    console.log("\nPetición recibida");

    //--Construir el objeto url con la url de la petición
    const url = new URL(req.url, 'http://' + req.headers['host']);
    console.log("URL completa: " + url.href);
    console.log("Ruta: " + url.pathname);

    let code = 200;
    let code_msg = 'OK';
    let FICHERO = 'tienda.html';

    //--Analizo el tipo de recurso
    if(url.pathname != '/'){
        code = 404;
        code_msg = 'Not Found';
        FICHERO = 'error.html';
    }

    fs.readFile(FICHERO, 'utf8', (err, data) => {
        if (err){   //--Ha ocurrido algún error
            console.log("Error!!");
            console.log(err.message);
        }else{  //--Lectura normal
            console.log("Lectura completada...");
            console.log("Contenido del fichero: \n");
            console.log(data);

        }
        //--Crear mensaje de respuesta
        res.statusCode = code;
        res.statusMessage = code_msg;
        res.setHeader('Content-Type','text/html');
        res.write(data);
        res.end()
    });
});

server.listen(PUERTO);

console.log("Tienda de Jose Bonoko --> BonoSneakers.");
console.log("Escuchando en puerto " + PUERTO);