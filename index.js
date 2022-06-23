

 /*if (true) {console.log("la condicion es verdadera"); }*/
 /* let edad=24;
 if (edad==25) { console.log("tiene 25");
    
 }
if (edad===25) {console.log("tienes 25");
    
 } else {console.log("No tienes 25");
    
 } */

 /* let respuesta = prompt("terminaste la tarea");
if (respuesta==="si") {alert("puedes salir a jugar");
    } else {alert("No puede salir a jugar");
     } */
/* console.log(true && true);
console.log(true && false); */
// && es verdadero cuadno toads las condiciones son verdaderas
// ||es verdadero cuando al menos una de las condiciones es verdadera

/* let nombre= prompt("ingrese su nombre");
let edad= prompt ("ingrese su edad");
if (nombre!= "" && edad !="") {
    alert("datos correctos")
    
} else { alert("datos incorrectos");
    
} */

/* let notaAprobado= prompt("Quieres aprobar?");
let notaDesaprobado=prompt("no quieres aprobar?");
if (notaAprobado="si") {alert("Estudia!")
    
} else { alert("Dale pa")
    
} */

/* for (let i = 0; i < 10; i++) {
    console.log("PEDO",i);
    
/* } */
/* for (let i = 0; i < 3.length; i++) {
    alert("Hola a todos");
    
} */

/* for (let i = 0; i < 10; i++) {
    if(i==10);{break}} */
/* bucle infinitio: */
  /*   let repetir = true; 
    while(repetir) { console.log("hay sitio");} */

/*     let usuario= prompt("Ingrese sus usuario"); 
    while(usuario !="camila"){alert("usuario incorrecto")};
    usuario= prompt("ingrese el usuario"); */
 /*    let nombre = "nico"
    console.log(nombre); */

/*     clase 4  */
/* function Persona (nombre,apellido,direccion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
}

const persona1 = new Persona("andres", "sandoval", "AI 318");
const persona2 = new Persona("nico", "sandoval","Cesar Milsten");
console.log(persona1.nombre); */
/* 
function Perritos (nombre, edad,raza) {
    this.nombre = nombre;
    this.edad = edad;
    this.raza= raza;
}
const perrito1 = new Perritos ("Nina", 3 , "pichichu");
const perrito2 = new Perritos ("Piru", 3 , "pichichu");
console.log(perrito2); */
class Persona { 
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.hablando= hablando;
    }
hablar(){
  this.hablando = true;
}

}
const peronsa1 = new Persona ("nico", 28, false);
console.log(persona1);