// MANIPULACION DE ARRGLOS EJEMPLO ENE L SALON  ejemplo 1 

const prompt=require("prompt-sync")();

function ARREGLOS(){
    let frutas=[];
    //frutas.map(frutitas=> console.log(frutas))

    let dimension;
    dimension=parseInt(prompt("ingresa la cantidad de datos")); // es el numero hasta donde va a llegar la dimención
    let i=0;
 
    while(i < dimension){
        let frutitas =prompt("ingresa las frutas ") // solo prompt por que es de tipo string
        frutas.push(frutitas);
        i++


    }
    for(let fruta of frutas ){
        console.log(fruta)
    }

}
ARREGLOS();//node manipulacionARReglos.js