/**5. Este programa trata de pedir al usuario que teclee un número entre 1 y 5, si escribe 
alguno que esté fuera de ese rango deberá volver a pedir el número.  */



const prompt = require("prompt-sync")();
let rangoN=parseInt(prompt("________________-TECLEE UN NÚMERO EN EL RANGO DEL 1 AL 5 -________________ :"));

let n1= 1;
let nu2= 5;


while(rangoN<n1 || rangoN>nu2){ // || significa or , mientras que el numero sea manor que 1 y mayor que 5 , es decir fuera del rango 
    console.log(` ABVERTENCIA : EL NÚMRERO INGRESADO ESTA FUERA DEL RANGO ESTIMADO(1-5)`);
    rangoN=parseInt(prompt("________________-TECLEE UN NÚMERO EN EL RANGO DEL 1 AL 5 -________________ :"));
}

console.log(`EL NÚMRERO INGRESADO ESTA DENTRO  DEL RANGO ESTIMADO(1-5) :  ${rangoN} `);