/* Crear una variable con la estructura definida 
en un ficher JSON */
const fs = require('fs');

//-- Nombre del fichero JSON a leer
const FICHERO_JSON = "Ej-03-tienda-json-fich.json"

//-- Lectura del fichero
const tienda_json = fs.readFileSync(FICHERO_JSON);

//--Crear el objeto contenedor
const tienda = JSON.parse(tienda_json);

//Mostrar informacion sobre los datos de la tienda
console.log("Productos de la tienda: " + tienda.length);

//Recorrer los elementos de la tienda
tienda.forEach((element, index) => {
    console.log("Producto " + (index + 1) + ": " + element["nombre"]);
});

