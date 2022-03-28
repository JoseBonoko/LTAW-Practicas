const http = require('http');

const PUERTO = 8090;

//-- Servidor: bucle principal de atención de clientes
const server = http.createServer((req, res) => {

    console.log("Petición recibida");

    //-- Angry server: generar respuesta
    //--Código: todo ok
    res.statusCode = 404;
    res.statusMessage = "Not Found :-(";
    res.setHeader('Content-Type', 'text/plain');
    res.write("Angry Server\n");
    res.end();
});

server.listen(PUERTO);

console.log("Ejemplo 4. Angry server listo!. Escuchando en puerto " + PUERTO);