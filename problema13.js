/** Realizar pseudocódigo y un diagrama de flujo que permita ingresar una 
calificación de 0 a 100 y mostrar , si es 90-100 , “EXCELENTE”, de 70-89 
“BIEN ”, menor de 70 “REPROBADO ”.  */

const prompt=require("prompt-sync")();
let cali=parseInt(prompt("ingresa tu calificación de 0 a 100: "))

if( cali>=90  && cali<=100){
    console.log(`LA CALIFICACIÓN INGRESADA ESTA EN EL RANGO DE EXCELENTE    , CON ${cali} ` );

}else if(cali>=70 && cali<=89){
      console.log(`LA CALIFICACIÓN INGRESADA ESTA EN EL RANGO DE BIEN, CON ${cali} ` );


}else if( cali>=0 && cali< 70){
      console.log(`LA CALIFICACIÓN INGRESADA ESTA EN EL RANGO DE REPROBADO , CON ${cali} ` );

}