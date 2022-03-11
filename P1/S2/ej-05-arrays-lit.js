//-- Ejemplo de arrays literales

//-- Crear una ista (arrray) de 4 elementos
const a = [1, 3, 5, 7];

//-- Monstrar el elemento 2
console.log("");
console.log("Elemento 2: " + a[2]);

//-- Recorrer todos los elementos
console.log("");
for(i in a){
    console.log(`a[${i}] = ${a[i]}`);
}

//-- Imprimir el número total de elementos
console.log("");
console.log("Cantidad de elementos: " + a.length);