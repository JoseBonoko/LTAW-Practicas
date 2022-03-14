const http = require('http');

//-- Puerto
const PUERTO = 8080;

//-- Crear sevidor
const server = http.createServer( (req,res) => {

    //-- Aviso de recepción de petición
    console.log("Petición recibida!");

    /* Cabecera que indica el tipo de dato del
    cuerpo de la respuesta: Texto plano */
    res.setHeader('Content-Type', 'text/plain');

    //-- Mensaje del cuerpo
    res.write("Soy el Happy Server!\n");

    //-- Se termina y envía el mensaje
    res.end();
});

//-- Activar servidor
server.listen(PUERTO);

console.log("Servidor activo. Escuchando en puerto: " + PUERTO);