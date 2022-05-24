//-- Imprimir informacion sobre la petición recibida
const http = require('http');
const fs = require('fs');
const PUERTO = 8081;

const FORMULARIO = fs.readFileSync('form.html', 'utf-8');

const RESPUESTA = fs.readFileSync('form1-resp.html', 'utf-8');

const server =  http.createServer((req, res) => {

    //-- Construir el objeto url con la url de la solicitud
    const myURL = new URL(req.url, 'http://' + req.headers['host']);
    console.log("");
    console.log("Método: " + req.method);
    console.log("Recurso: " + req.url);
    console.log("   Ruta: " + myURL.pathname);
    console.log("   Parámetros: " + myURL.searchParams);

    //-- Por defecto entregar formulario
    let content_type = "text/html";
    let content = FORMULARIO;

    if (myURL.pathname == '/procesar'){
        content_type = 'text/html';
        content = RESPUESTA;
    }

    //-- Si hay datos en el cuerpo , se imprimen
    req.on('data', (cuerpo) =>{

        //-- Los datos del cuerpo son caracteres
        req.setEncoding('utf-8');
        console.log(`Cuerpo (${cuerpo.length} bytes)`);
        console.log(` ${cuerpo}`);
    });

    //-- Esto solo se ejecuta cuando llega al final del mensaje de solicitud
    req.on('end', () => {
        //-- Generar respuesta
        res.setHeader('Content-Type', content_type);
        res.write(content);
        res.end()
    });
});

server.listen(PUERTO);
console.log("Escuchando en puerto: " + PUERTO);