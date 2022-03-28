const http = require('http');

const PUERTO = 8090;

//-- Servidor: bucle principal de atención de clientes
const server = http.createServer((req, res) => {

    console.log("Petición recibida");

    //-- Happy server: generar respuesta
    //--Código: todo ok
    res.statusCode = 200;
    res.statusMessage = "OK :-)";
    res.setHeader('Content-Type', 'text/plain');
    res.write("Happy Server\n");
    res.end();
});

server.listen(PUERTO);

console.log("Ejemplo 4. Happy server listo!. Escuchando en puerto " + PUERTO);