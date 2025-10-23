/**7. Hacer un algoritmo que lea un número N y que genere e imprima los números impares desde el número 
1 hasta el número leído, así como cuantos son.  */

const prompt=require("prompt-sync")();
let n=parseInt(prompt("INGRESA UN NÚMERO N : ")); //este es el limite del for //

for(i=1; i<=n; i++){ //esto recorre desde l numero ingresado hasta //
    if(i%2!==0){ //aqui checo si es par o impar//
        console.log(i);
    }

}
