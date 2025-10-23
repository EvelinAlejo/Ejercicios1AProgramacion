/**Realizar pseudocodigo y diagrama de flujo para validar la edad de una 
persona, si es mayor o igual a 18 se escribirá “ACCESO PERMITIDO” de 
lo contrario denegado   */

const prompt=require("prompt-sync")();
let edad=parseInt(prompt("ingresa tu edad: "))

let ver= edad >=18 ? ` ACCESO PERMITIDO ` : ` ACCESO DENEGADO` ;
console.log(` ${ver} YA QUE LA EDAD ES: ${ edad}` );