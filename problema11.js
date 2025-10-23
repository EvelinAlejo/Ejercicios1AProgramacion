/** Realizar un pseudocódigo y diagrama de flujo que permita solicitar un 
numero al usuario, debe validar si es negativo, positivo, o si es cero.   */

const prompt=require("prompt-sync")();
let numero=parseInt(prompt("ingresa un numero : "));

if(numero<0 ){
    console.log("el numero ingresado es: negativo ")

}else if(numero>0){
       console.log("el numero ingresado es: positivo")


}else if(numero==0){
       console.log("el numero ingresado es: igual a cero  ")
} 