const prompt=require("prompt-sync")();
function juan(){
    let arreglovacio=[];
    let i=0;
    let almacen=0;
    let sueldototal=0;
    let suma=0;
    let dimencion=parseInt(prompt("ingresa la dimención del arreglo:__"))

    while(i<dimencion){
        let nombre=prompt("ingresa tu nombre:__");
        let sexo=prompt("ingresa tu sexo (F/M):__").toUpperCase()
        let sueldo=parseInt(prompt("ingresa tu sueldo:__"));
        let edad=parseInt(prompt("ingresa tu edad:__"));
        let rfc=parseInt(prompt("ingresa tu RFC (solo se ingresan letras ):__"));

        almacen={ nombre, sexo, sueldo, edad, rfc};
        arreglovacio.push(almacen);
        suma+=sueldo;
        console.log(`el total  a pagar por los 5 empleados  regristrados  son: ${dimencion} el total es : ${suma} $ pesos`)
        console.log(`los datos son : `, arreglovacio);
        i++;
    }


}juan();
