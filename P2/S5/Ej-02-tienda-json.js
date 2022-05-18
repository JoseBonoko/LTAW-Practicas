/* Crear la variable tienda, que es una estrucutra
formada por dos productos */

const tienda_json = `[
    {
        "nombre": "Alhambra II",
        "descripcion": "Placa con FPGA ice40HX0K",
        "stock": 3
    },

    {
        "nombre": "Icestick",
        "stock": 10
    }
]`

//Crear la estructura tienda a partir de la tienda JSON
const tienda = JSON.parse(tienda_json);

//Mostrar informacion sobre los datos de la tienda
console.log("Productos de la tienda: " + tienda.length);

//Recorrer los elementos de la tienda
tienda.forEach((element, index) => {
    console.log("Producto " + (index + 1) + ": " + element.nombre);
});
