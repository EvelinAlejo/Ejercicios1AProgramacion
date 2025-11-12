// ternario 1 
const prompt=require("prompt-sync")();
function calificacion(){
    let pedir=parseInt(prompt("ingrese su califición : "));

    // ternario
    let verificar= pedir>6? ` APROBADO   CON : ${ pedir}`: `REPROBADO CON : ${ pedir}`
    console.log(`EL USUARIO INGRESO ${pedir} SU RESULTADO FINAL ES: ${ verificar}`)

}
calificacion();


// ternario 2 

function calificacion2(){
    let cali=parseInt(prompt("ingrese su califición : "));

    // ternario
    let resultado= cali>6 && cali<8? `REGULAR `: cali>=8? `EXCELENTE`:``;
    console.log(`EL USUARIO INGRESO ${cali} SU RESULTADO FINAL ES: ${ resultado}`)

}
calificacion2();