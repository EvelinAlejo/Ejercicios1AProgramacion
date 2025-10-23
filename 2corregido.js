/**2. Realiza un programa que calcule la aceptación de una solicitud con base a los 
siguientes parámetros: edad, nota y sexo. 
a. * Mínimo: Nota (5), edad (18), sexo M -> POSIBLE 
b. * Mínimo: Nota (5), edad (18), sexo F -> ACEPTADA 
c. * Otros casos -> NO ACEPTADA */

const prompt = require("prompt-sync")();
console.log("_________________BIENVENIDO AL PROGRAMA DE SOLICITUD_____________")
console.log("                  LLENE LOS SIGUIENTES PARAMETROS:")

let notmaM=5;
let edad= 18;
let sexoM="M";
let sexoF="F";


let datosM=parseInt(prompt("INGRESE SU MINIMO: "))
let datosE=parseInt(prompt("INGRESE SU EDAD: "));
let datosSx=prompt("INGRESA TU SEXO (M/F)").toUpperCase(); //todo lo pasa a mayuscula 


console.log(datosM , "- " ,  datosE, "-" , datosSx) ;


let EVALUACIONM= datosM>=5?  `POSIBLE, LA NOTA INGRESADA ESTA DENTRO DEL RANGO   ` : `LA NOTA INGRESADA NO ESTA DENTRO DEL RANGO  ` ;
let EVALUACIONE= datosE >=edad?   ` POSIBLE , LA EDAD ESTA DENTRO DEL RANGO`:` DENEGADO , LA EDAD NO ESTA DENTRO DEL RANGO`;
let EVALUACIONSX=datosSx=="M" ? "SU SEXO ES MASCULINO " : datosSx==="F"? "SU SEXO ES FEMENINO": "NO ACEPTADO";
 
console.table([EVALUACIONM]); //console.table() espera un objeto o un array, no una cadena de texto.
console.table([EVALUACIONE]); // console.table([])
console.table([EVALUACIONSX]);