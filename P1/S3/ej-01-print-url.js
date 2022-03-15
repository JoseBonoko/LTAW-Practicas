//-- Construir un objeto URL
const myURL = new URL('http://localhost:8080/mi_tienda/listados.html?articulo=pendrive&color=blanco#descripcion');

//-- Imprimir la información de la URL
console.log(" * URL completa (href): " + myURL.href);
console.log(" * Origen: " + myURL.origin);
console.log("   * Protocolo: " + myURL.protocol);
console.log("   * Host: " + myURL.host);
console.log("   * Port: " + myURL.port);
console.log(" * Ruta: " + myURL.pathname);
console.log(" * Búsqueda: " + myURL.search);

//-- Recorrer todas las búsquedas
myURL.searchParams.forEach( (value,name) => {
    console.log("     * Parámetro: " + name + " = " + value);
});

//-- Imprimir directamente los valores de los parámetros
console.log("   * Artículo: " + myURL.searchParams.get('articulo'));
console.log("   * Color: " + myURL.searchParams.get('color'));
console.log("   * Otro: " + myURL.searchParams.get('otro'));

//-- Última parte: fragmento
console.log(" * Fragmento: " + myURL.hash);