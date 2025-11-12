console.log("CICLO FOR BASICO")
for(let i = 0 ; i<5; i ++){
    console.log("iteración" + i);
}
//git , correo personal- github//
//la primer letra tiene que ser mayuscula//
const prompt=require("prompt-sync")(); //aqui estoy importando una libreria//
function Suma(){
    let numero1;
    let numero2;
    numero1= prompt("ingrese un valor entero:"); //esto es como el imput en python //
    numero2=prompt("ingresa otro numero: ") ;
let resultado= parseInt(numero1)+parseInt(numero2);
console.log(`LA SUMA DE ${numero1} Y ${numero2} ES: ${resultado}`); //BACKSTIP SE PUEDEN UTLIZAR VARIABLES Y CADENAS DE TEXTO ´´ //
} 
Suma(); //imprimir la función significa llamar a la función //
let resultado =1;
for(i=1;i<10;i++){
    resultado=resultado+1;
    console.log("el resultado es:" + resultado);
} 
