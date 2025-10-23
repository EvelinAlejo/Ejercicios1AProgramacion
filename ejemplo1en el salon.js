console.log(" evelin  ");

let numero1 = 3;
let numero2 = 2;

console.log("Números definidos:", numero1, numero2);

function suma(a, b, c) { 
    let resultado = a + b + c;
    console.log("Suma de", a, "+", b, "+", c, "=", resultado);
    return resultado;
}

// Llamar a la función y mostrar resultado
let total = suma(4, 4, 5);
console.log("Total retornado:", total);

console.log(" a chuchita la bolsearon ");  
var nombre = "Evelin"; // var es para variables //
var x=10;  
var g=23;
var s=x+g;
var m = x+ text + g; // esto es una concatenación por que tiene una cadena de texto //
console.log(x);
console.log(nombre);
console.log(s);
console.log(m);
var text ="evelin es mexicana "


var calificacion = parseFloat(prompt("Ingresa calificación")); // Convertir a número

if (calificacion >= 5 && calificacion <= 10 || calificacion == 11) {
    if (calificacion >= 7) {
        alert("Bien hecho");
    } else {
        alert("Reprobado");
    }
} else {
    alert("Ingresa una calificación válida");
}



