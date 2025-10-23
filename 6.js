/**6. En este programa se pedirá al usuario que teclee un número cada vez. El proceso acaba 
cuando teclee un 0 en caso contrario mostrará la suma de todos los números tecleados */


//console.clear(); // es para limpiar la consola al inicio del programa
const prompt = require("prompt-sync")();
let NUMEROS0=parseInt(prompt("________________-TECLEE UN NÚMERO (SI INGRESA CERO EL PROGRAMA FINALIZARA ) -________________ :"));

let finalizar = 0;
let suma= 0;

while(NUMEROS0!==0){ // mientras numero ingresado sea difernete de cero se pide el numero varias veces 
   
    console.log(` NÚMERO INGRESADO ${NUMEROS0}`)
    suma= suma + NUMEROS0;
    console.log(suma)

     NUMEROS0=parseInt(prompt("________________-TECLEE UN NÚMERO (SI INGRESA CERO EL PROGRAMA FINALIZARA ) -________________ :"));
    
}

console.log(`SUMA TOTAL: ${suma}`);

console.log("______________-PROGRAMA FINALIZADO , USTED INGRESO CERO__________________ ")

