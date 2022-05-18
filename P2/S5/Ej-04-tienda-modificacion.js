//-- Lectura y modificación de un fichero
const fs = require('fs');

//-- Nombre del fichero JSON  a leer
const FICHERO_JSON = "Ej-03-tienda-json-fich.json";

//-- Nombre del fichero JSON de salida
const FICHERO_JSON_OUT = "Ej-04-tienda-modificacion.json";

//-- Leer fichero JSON
const tienda_json = fs.readFileSync(FICHERO_JSON);

//-- Crear la estrucutura tienda a partir del fichero
const tienda = JSON.parse(tienda_json);

//-- Modificacion
tienda[1]["nombre"] = "Icebreaker";


//Mostrar informacion sobre los datos de la tienda
console.log("Productos de la tienda: " + tienda.length);

//Recorrer los elementos de la tienda
tienda.forEach((element, index) => {
    console.log("Producto " + (index + 1) + ": " + element.nombre);
});

//-- Convertir la cadena a JSON
let myJSON = JSON.stringify(tienda);

//-- Guardar en el fichero de salida
fs.writeFileSync(FICHERO_JSON_OUT, myJSON);

console.log("Información guardada en fichero: " + FICHERO_JSON_OUT);
