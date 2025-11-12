const prompt=require("prompt-sync")
 console.log("Evelin");

let numero1 = 3;
let numero2 = 2;
console.log("Números definidos:", numero1, numero2);

function suma(a, b, c) {
    let resultado = a + b + c;
    console.log(`Suma de ${a} + ${b} + ${c} = ${resultado}`);
    return resultado;
}

// Llamar a la función y mostrar resultado
let total = suma(4, 4, 5);
console.log("Total retornado:", total);

console.log("programación");

let nombre = "Evelin";
let x = 10;
let g = 23;
let s = x + g;

let text = "Evelin es mexicana ";
let m = x + text + g; // concatenación con texto

console.log("Valor de x:", x);
console.log("Nombre:", nombre);
console.log("Suma de x + g:", s);
console.log("Concatenación:", m);

// Solicitar calificación (solo funciona en navegador)
let calificacion = parseInt(prompt("Ingresa calificación"));

if (calificacion >= 5 && calificacion <= 10) {
    if (calificacion >= 7) {
        alert("Bien hecho");
    } else {
        alert("Reprobado");
    }
} else {
    alert("Ingresa una calificación válida");
}



