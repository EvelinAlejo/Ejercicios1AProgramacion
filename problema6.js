/**6. El ITSR diseño un plan para medir el índice de contaminación tal que 37 es aceptable, de 38 a 55 es 
desagradable, y arriba de 55 es peligroso. Hacer un Algoritmo que lea el índice de contaminación de la 
ciudad, y que imprima el mensaje correspondiente en función del índice. 
 */

console.log("BIENVENIDO AL ITSR");

const prompt=require("prompt-sync")();
let itrs= parseInt(prompt("ingresa el índice de contaminación: "));

if(itrs<=37){
    console.log(`EL ÍNDICE INGRESADO ${itrs} ES ACEPTABLE `);

}else if ( itrs<=38 && itrs<=55){
     console.log(`EL ÍNDICE INGRESADO ${itrs} ES DESAGRADABLE`);
}else if( itrs>55){
      console.log(`EL ÍNDICE INGRESADO ${itrs} ES PELIGROSO`);

}






