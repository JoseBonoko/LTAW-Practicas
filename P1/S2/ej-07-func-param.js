//-- Ejemplo de paso de parámetros a funciones

//--Recibe dos parámetros y devuelve su suma
function suma(x, y){
    return x + y;
}

//-- Recibe un parámetro y lo imprime por la consola
function mensaje(msg){
    console.log(msg);
}

//-- Función que no recibe parámetros
function saluda(){
    mensaje("HOLA !!");
}

/* Función que recibe una función como parámetro
y simplemente la llama */
function call(func){
    console.log("--> Función recibida");

    //-- Llamar a la función pasada como argumento
    func();
}

//-- Llamar a la suma
let a = suma(2,3);

//--Probando la función mensaje
mensaje("Prueba")
mensaje(a);

//-- Probando la función call
call(saluda);

/* Se le pasa como parámetro una función que
se define dentro de los parámetros, en vez de fuera */
call( () => {
    mensaje("HOLI !!")
});