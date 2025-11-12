/**En el Municipio de Balancán, se presenta en varios actos sociales como señorita san Marcos, siendo su 
estadística vital 89-58-89 cm,. mide 1.70 mts y pesa 53 kg. Hacer un algoritmo para calcular e imprimir 
sus medidas en pulgadas, su estatura en pies y su peso en libras.   */


// Algoritmo Señorita_san_Marcos
const prompt =require("prompt-sync")();
let altura = parseFloat(prompt("INGRESA TU MEDIDA DE ALTURA EN METROS:"));
let altu = altura * 3.28084; // metros a pies
console.log("Tu altura en pies es: " + altu.toFixed(2));

let peso = parseFloat(prompt("INGRESA TU PESO EN KILOGRAMOS:"));
let pes = peso * 2.2046; // kg a libras
console.log("Tu peso en libras es: " + pes.toFixed(2));

let busto = parseFloat(prompt("INGRESA TU MEDIDA DE BUSTO EN CENTÍMETROS:"));
let bus = busto * 0.394; // cm a pulgadas
console.log("La medida de tu busto en pulgadas es: " + bus.toFixed(2));

let cintura = parseFloat(prompt("INGRESA TU MEDIDA DE CINTURA EN CENTÍMETROS:"));
let cinta = cintura * 0.394;
console.log("Tu medida de cintura en pulgadas es: " + cinta.toFixed(2));

let cadera = parseFloat(prompt("INGRESA TU MEDIDA DE CADERA EN CENTÍMETROS:"));
let pul = cadera * 0.394;
console.log("Tu medida de cadera en pulgadas es: " + pul.toFixed(2));