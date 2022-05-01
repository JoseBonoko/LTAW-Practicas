//-- Importar módulos
const http = require('http');
const fs = require('fs');
const { Console } = require('console');

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
    let FICHERO = '';

    //--Analizo el tipo de recurso
    if(url.pathname == '/'){
        FICHERO += 'tienda.html';
    }else{
        FICHERO += url.pathname.substr(1);
    }

    //-- Obtener tipo de recurso solicitado
    let file_type = FICHERO.split(".")[1];

    console.log("Recurso: " + FICHERO);
    console.log("Tipo de recurso: " + file_type);

    const mime_type = {
        'html': 'text/html',
        'css': 'text/css',
        'jpg': 'image/jpg',
        'png': 'image/png',
        'ico': 'image/x-icon'
    };

    let mime = mime_type[file_type];
    console.log("Tipo de mime: " + mime);

    //-- Lectura del fichero
    fs.readFile(FICHERO, 'utf8', (err, data) => {
        if (err){   //--Ha ocurrido algún error, fichero no encontrado
            console.log("Error!!");
            code = 404;
            code_msg = 'Not Found';
            FICHERO = 'error.html';
            data = fs.readFileSync(FICHERO);
            console.log(err.message);
        }else{  //--Lectura normal
            console.log("Lectura completada...");
            console.log("Contenido del fichero: \n");
            console.log(data);
        }
        //--Crear mensaje de respuesta
        res.statusCode = code;
        res.statusMessage = code_msg;
        res.setHeader('Content-Type', mime);
        res.write(data);
        res.end()
    });
});

//-- Activar la escucha del servidor por el puerto establecido
server.listen(PUERTO);

console.log("Tienda de Jose Bonoko --> BonoSneakers.");
console.log("Escuchando en puerto " + PUERTO);