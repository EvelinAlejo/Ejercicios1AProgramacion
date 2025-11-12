/**1. Realiza un programa que calcule la potencia de un número, dado este y su exponente. 
Pueden ocurrir tres casos: 
a. * El exponente sea positivo: imprime resultado en pantalla. 
b. * El exponente sea 0, el resultado es 1. 
c. * El exponente sea negativo, el resultado es 1/potencia con el exponente 
positivo.  */

const prompt = require("prompt-sync")();
// Aquí se va a ingresar el numero que queremos elevar
let base = parseInt(prompt("INGRESA EL NÚMERO BASE QUE SE ELEVARA: "));
let exponente = parseInt(prompt("INGRESA EL NÚMERO QUE QUIERES QUE SEA EL EXPONENTE: "));

let resultado = 1;

// b. Si el exponente es 0, el resultado es 1
if (exponente === 0) {
    resultado = 1; // tiene que inicializar en uno por que si pongo 0 siempre me dara cero
    console.log( ` CUALQUIER NÚMERO ELEVADO A CERO ES ${resultado} ` );
} 
// c. Si el exponente es negativo
else if (exponente < 0) { // EXPONENTE MENOR A CERO 
    let exponentepositivo = -exponente; // Convierte el exponente negativo  a positivo -(-3)=3
    let resultadoPositivo = 1; // Variable para calcular la potencia positiva
    
    // Calcular la potencia con el exponente positivo
    for (let i = 0; i < exponentepositivo; i++) {
        resultadoPositivo = resultadoPositivo * base;
        // resultadoPositivo es mi acumuladora
        // Ejemplo: si base=3, exponentePositivo=2
        // i=0: resultadoPositivo=1*3=3
        // i=1: resultadoPositivo=3*3=9
        // i=2: ya no entra, resultado final=9
    }
    resultado = 1 / resultadoPositivo; // Aplicamos la fórmula para exponente negativo
    console.log( ` ${base} ELEVADO A: ${exponente} ES: 1/${base}^${exponentepositivo} = ${resultado} ` );
} 
// a. Si el exponente es positivo
else {
    // Calcular la potencia positiva inciso a 
    for (let i = 0; i < exponente; i++) {
        // la iteración solo va a caminar hasta donde llega el exponente que es 2
        resultado = resultado * base;  // resultado es mi acumuladora
        // res= 1*3= 3 , i++ vale 1 ,  res= 3*3base=9, i++ vale 2 , resultado=9, i=2, i<2 no sale del for 
        //si ingreso 4 elevado al cubo , resultado esta inicializado en( R1 * 4base )= 4, la i++=1, resultado vale=4 , 4*4BASE= 16 , i++=2 , resultado vale=16 4base = 64 , 
        //y se evalua la condición i<exponente = ya no , pues i ya es 3 y exponente ya es 3 sale del for */  
    }
    console.log( ` EL NÚMERO BASE ES: ${base} Y SU EXPONENTE ES: ${exponente} Y EL RESULTADO ES: ${resultado} ` );
}



/* 
git add .
git commit -m "hombre araña "
git push



*/ 