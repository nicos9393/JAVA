let bienvenido = alert ("Bienvenido a Curso JS");
let nombre = prompt ("Ingrese su nombre").toLocaleLowerCase();
let intento = 1;

/* while (nombre != String) {
    alert("Completa un nombre");
    if (intento===3) {break;
        
    }
    intento= intento + 1;
    usuario = prompt("Ingrese su nombre");
}
if (intento ===3) {alert("No estas ingresando un nombre")
    
} else { alert(`Genial tu nombre es ${nombre}`)
    
} */

while(nombre ===""){
    alert("Completa un nombre");
  
    if(intento === 3){
      break;
    }
  
    intento = intento + 1; //intento++      intento += 1
    nombre = prompt("Ingrese un nombre").toLocaleLowerCase();
  }
  
  if(intento === 3){
    alert("ERROR: No estas ingresando un nombre"); 
  }else{
    alert(`GENIAL tu nombre es ${nombre}`);
  }


let edad = parseInt(prompt("Ingrese su edad")) ;

let nivelacion = prompt("¿Cual es tu nivel de Java Script?(Basico, Intermedio, Avanzado)").toUpperCase();


if ((nivelacion === "BASICO") || (nivelacion === "INTERMEDIO") || (nivelacion === "AVANZADO")) {
    alert("DATOS CORRECTOS")
    
} else {alert("ERROR: VUELVE A INTENTARLO")

}


if (Number.isInteger(edad)) {
    alert (`Hola ${nombre} tienes ${edad} años y tu nivel es ${nivelacion}`)
    
} else {
    alert("Favor ingrese datos correctos")
    
}
