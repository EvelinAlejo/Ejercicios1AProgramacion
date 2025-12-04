//tarea de evelin ángeles alejo estrada 
const prompt=require("prompt-sync")();
function camaron(){

    let arreglo=[1,2,3,4,5,]
    let pedir= parseInt(prompt("ingresa un número si se ingresa el cero el programa finalizara :___"));

    while(pedir !==0){ // mientras que pedir sea diferente de cero se ejecute 

        if(arreglo.includes(pedir)){
            console.log(` el número  ${pedir} ingresado esta dentro del arreglo `)
        }else if (pedir>5){
            console.log(`el número ingresado es mayor, sobrepasa los límites del arreglo  ${arreglo}`)

        }else{
            console.log("el número no esta dentro del arreglo")
        }
        pedir= parseInt(prompt("ingresa un número si se ingresa el cero el programa finalizara :___"));



    }


}camaron();


function alumno(){

    //arreglo dentro de un objeto 

    let estudiantes_ob ={
        nombre: null,
        edad:null,
        apellido:"alejo",
        matricula: 23456,
        notas : [90,100,89,86,97] // arreglo con :[]

    }

    let gato= parseInt(prompt("ingresa tu nombre:___" )); //usar .push()  es para arreglos ,  pero .push() solo funciona en arreglos no en objetos.


    let cat= parseInt(prompt("ingresa tu edad:___" ));

    estudiantes_ob.nombre=gato
    estudiantes_ob.edad=cat

    console.log(`los datos obtenidos del estudiante son: ` , estudiantes_ob)


}alumno()

function vocales(){
    let contador=0;
    let silabas=["a", "b", "c"];
    for(let i=0; i<silabas; i++){
        contador+=i

    }
}vocales();