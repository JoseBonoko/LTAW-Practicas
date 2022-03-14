const http = require('http');

//-- Definir puerto
const PUERTO = 8080;

//-- Crear servidor
const server = http.createServer( (req,res) => {

    //-- Avisar que se ha recibido la petición
    console.log("Petición recibida!");

    /* Enviar una respuesta: Siempre es la misma respuesta
    Con el método res.write() se escribe el mensaje en el
    cuerpo de la respuesta */
    res.write("Soy el Happy Server!!\n");

    //-- Terminar la respuesta y terminarla
    res.end();
});

//-- Activar el servidor
server.listen(PUERTO);

console.log("Servidor activo. Escuchando en puerto: " + PUERTO);