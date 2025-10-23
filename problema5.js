/*5. Hacer un Algoritmo que lea 2 números, y si el primero es mayor que el segundo que calcule e imprima la 
suma de los dos, si el segundo es mayor que el primero que calcule e imprima la sumatoria de los dos 
números, y si los dos son iguales que obtenga el producto de ellos. */

const prompt=require("prompt-sync")();
let num1= parseInt(prompt("ingresa un numero: "));
let num2= parseInt(prompt("ingresa un numero: ")); // || esto es el or //
let verificar= num1> num2 ? `el  primer número ingresado es mayor y la suma es :  ${num1 + num2} ` 
:num2>num1 
?`el suegundo número es mayor y la suma es:  ${ num1+num2}`
:` el producto de los números es: ${num1 * num2}`



;
console.log(`${verificar} `);









