/*10. Hacer un algoritmo que lea un número N y que determine e imprima si es par o impar, y que sean mayores 
que cero.*/

const prompt=require("prompt-sync")();
let parimpar= parseInt(prompt("ingresa un número para verifivar si es par o impar: "));
const  vefificar= parimpar %2===0 && parimpar>=0 ? "ES PAR ": "ES IMPAR";
console.log(`EL NÚMERO INGRESADO ES: ${vefificar}  y mayor que cero ` );
