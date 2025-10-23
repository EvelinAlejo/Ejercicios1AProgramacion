/** Realizar pseudocódigo y un diagrama de flujo que permita pedir al 
usuario un numero n, y usando un ciclo for para que muestre la tabla 
de multiplicar.  */

const prompt=require("prompt-sync")();
let n=parseInt(prompt("ingresa un número : "));

for(i=1; i<=10; i++){
    
    console.log(` ${n} X ${i} = ${ i* n}`); 
}