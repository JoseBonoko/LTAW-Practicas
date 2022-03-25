const http = require('http');

const PUERTO = 8090;

//-- SERVIDOR: bucle principal de atención de clientes
const server = http.createServer((req,res) => {
    console.log("\nMENSAJE A");

    req.on('data', (cuerpo) => {
        console.log("MENSAJE B");
    });

    req.on('end', () => {
        console.log("MENSAJE C");

        //--Happy Server. Generar respuesta
        res.setHeader('Content-Type', 'text/plain');
        res.write("Soy el happy server\n");
        res.end();
    });

    console.log("MENSAJE D");

});

console.log("MENSAJE E");
server.listen(PUERTO);
console.log("MENSAJE F");