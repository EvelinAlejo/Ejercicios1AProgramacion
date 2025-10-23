/**4. Hacer un programa que pregunte al usuario si desea continuar. Si el usuario pulsa una 
letra n (mayúscula o minúscula), el programa finalizará. Cualquier otra entrada repetirá 
la pregunta.  */

const prompt=require("prompt-sync")();

let pregunta= prompt("DESEA CONTINUAR EJECUTANDO EL PROGRAMA (PULSE N PARA FINALIZAR ) : " ).toUpperCase();//no lleva paseint por que no van números  el toUperCase pasa todo a mayuscula
// prompt solo es para cadenas de texto

while(pregunta!=="N" ){ // mientras pregunta sea diferente de N
    console.log("CONTINUANDO CON EL PROGRAMA ............")
    pregunta=prompt("DESEA CONTINUAR EJECUTANDO EL PROGRAMA (PULSAR N PARA FINALIZAR) : ").toUpperCase();
}
console.log("programa finalizado ")

/**PASO 1: pregunta = "S"
PASO 2: ¿"S" !== "N"? → TRUE → ENTRA AL CICLO
PASO 3: Muestra "Continuando con el programa..."
PASO 4: Vuelve a preguntar 
 ingreso N y me muestra programa finalizado */