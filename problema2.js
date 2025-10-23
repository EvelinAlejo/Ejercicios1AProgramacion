const prompt = require("prompt-sync")();

let edad=parseInt(prompt("ingresa la edad de la persona en años, para saber cunatas horas a dormido: "));
let verificaredad= isNaN(edad) || edad<=0? false: true;
let horasDormidas= verificaredad ? edad*365*8:0;
console.log(verificaredad
    ?`has dormido aproximadamente ${horasDormidas} horas en tu vida`
    :`Edad inavalida - ingrese un numero positivo`);


