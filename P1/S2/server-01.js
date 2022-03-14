const http = require('http');

//-- Crear el servidor
const server = http.createServer();

/* Función de retrollamada de petición recibida
Cada vez que un cliente realiza una petición 
se llama a la función */
function atender(req, res){
    //-- req: http.IncomingMessage: Mensaje de solicitud
    //-- res: http.ServerResponse: Mensaeje de respueta (vacío)

    //-- Indicamos que se ha recibido una petición
    console.log("Petición recibida!");

    //-- Pero no enviamos respuesta (todavía)
}

//-- Activar la función de retrollamada del servidor
server.on('request', atender);

/* Activar el servidor a la escucha de peticiones
en el puerto 8080 */
server.listen(8080);