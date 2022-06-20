/* 
function mensaje (){
    codigo a ejecutar
}
*/
/* Funcion basica */
/* function mensaje(){
    console.log("Hola a todos");
}
mensaje(); */

/* let nombre = prompt("Ingrese el nombre");
alert("nombre ingresado es: " + nombre);
let nombre = prompt("Ingrese el nombre");
alert("nombre ingresado es: " + nombre);
let nombre = prompt("Ingrese el nombre");
alert("nombre ingresado es: " + nombre);
let nombre = prompt("Ingrese el nombre");
alert("nombre ingresado es: " + nombre); */
/* en ves de hacer esto creamos fucion: */
/* function pedirDato(){
    let nombre = prompt("Ingrese el nombre");
    alert("nombre ingresado es: " + nombre); 
}
pedirDato(); */

/* function pedirDatos(nombre, apellido){
console.log(`Hola como estas?${nombre} ${apellido}`);
}
pedirDatos("andres", "pepe");
pedirDatos("Kitty") */


/* function sumar (num1, num2) {
    return num1 + num2
}
console.log( sumar(3,4));

let resultado = () */
/* const sumar = (x, y) => { return x + y}; */
/* const nombre = nombre => `hola ${nombre}`
console.log(nombre("andres")); */
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21;
let precioProducto = 1000;
let descuento = 300;
let resultado = resta(suma(precioProducto, iva(precioProducto)),descuento);
/* resultado= resta(1000 + 1000*0.21, 300) = (1000 1000 * 0.21) - 300; */
console.log(resultado);
