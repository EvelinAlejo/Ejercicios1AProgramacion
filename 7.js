/**7. Este programa le pide al usuario que vaya tecleando números una y otra vez, pero solo 
números pares, en caso de que teclee un número impar el programa acabará y dirá la 
cantidad de números pares ingresados (el 0 cuenta como par).  */

const prompt = require("prompt-sync")();
let cantidad = 0;
let NUMEROSPR=parseInt(prompt("________________-TECLEE UN NÚMERO PAR  (SI INGRESA UN NÚMERO IMPARES, EL PROGRAMA FINALIZARA ) -________________ :"));

while(NUMEROSPR %2===0 ){ // mientras que numerospr dividio entre 2 su reciduo sea cero es par 

    console.log("EL NÚMERO INGRESADO ES PAR")
    cantidad=cantidad+1;// solo incrementa el contador 
    NUMEROSPR=parseInt(prompt("________________-TECLEE UN NÚMERO PAR  (SI INGRESA UN NÚMERO IMPARES, EL PROGRAMA FINALIZARA ) -________________ :"));
   



} 
console.log(` EL NÚMERO INGRESADO ES IMPAR ${NUMEROSPR}`)
console.log(` LA CANTIDAD DE NÚMEROS PARES INGRESADOS ES: ${cantidad}`)
