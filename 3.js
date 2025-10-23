/**3. El director de una escuela está organizando un viaje de estudios y requiere determinar 
cuánto debe cobrar a cada alumno y cuánto debe pagar a la compañía de viajes por el 
servicio. La forma de cobrar es la siguiente: 
a. * Si son 100 alumnos o más, el costo por cada alumno es de $65. 
b. * De 50 a 99 alumnos, el costo es de $70. 
c. * De 30 a 49 alumnos, el costo es de $95. 
d. * Menos de 30 alumnos, el costo de la renta del autobús es de $4000, sin 
importar el número de alumnos. 
Realiza un programa que permita determinar el pago a la compañía de autobuses y lo 
que debe pagar cada alumno por el viaje.  */

const prompt = require("prompt-sync")();
let saberC=parseInt(prompt("________________-INGRESE EL NÚMERO DE ALUMNOS-________________ :"));

let COSTOa= 65;
let alumnoA=100; 

// ALUMNOb= ("50,99");
let COSTOb=70;

let COSTOcD=95;
// ALUMNOcd=("30, 40")
let autobusPAGO= 4000;




if(saberC>=alumnoA){ // mayor o igual a 100
    console.log(  `   EL COSTO POR ALUMNO ES DE : ${COSTOa}`)

}else if(saberC>=50 && saberC<=99){
     console.log(`EL COSTO POR ALUMNO ES DE : ${COSTOb}`)

}else if(saberC>=30 && saberC<=49){
     console.log(`EL COSTO POR ALUMNO ES DE : ${COSTOcD}`)

}else if(saberC<30 && saberC>0){
     console.log(`EL COSTO POR ALUMNO ES DE : ${COSTOcD}`)

}
let pagototal = autobusPAGO/saberC;
 console.log(`EL PAGO A LA COMPAÑIA DE AUTOBUSES  ES DE : $${pagototal.toFixed(2)} POR LOS ALUMNOS INTERESADOS QUE SON : ${saberC}`) // .toFixed(2) es para redondear decimal a 2 



