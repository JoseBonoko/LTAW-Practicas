const http = require('http');

//-- Puerto de escucha
const PUERTO = 8080;

/* Crear servidor.
La función de retrollamada de atención a las peticiones 
se crea dentro de los argumentos */
const server = http.createServer( (req, res) => {

    //-- Indicamos que se ha recibido una petición
    console.log("Petición recibida!");
});

//-- Activar servidor
server.listen(PUERTO);

console.log("Servidor activo. Escuchando en puerto: " + PUERTO);