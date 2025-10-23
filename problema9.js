//9. Hacer un algoritmo que calcule e imprima la sumatoria de los números pares que hay entre 500 y 800. //


console.log("codigo que calcula  e imprime  la sumatoria de los números pares que hay entre 500 y 800");

//suma dde los números pares entre 500 y 800//

let suma = 0;
let contador=0;

for( i=500; i<=800; i++){
    if(i%2===0){
        console.log(i);//este es pra mostrar cada numero par /
        suma +=i;
        contador++;

    }
}

console.log(` CANTIDAD DE NÚMEROS PARES ES: ${contador}` );
console.log(` SUMA TOTAL: ${suma}` );

