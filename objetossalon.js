////**ejemplo en el salón de objetos  mar 2 de dic
// que son los atributos  , json , Bson*/

let arreglos = ["evelin", 23, true]; //arreglo

let persona1 = { nombre: "evelin", edad: 18, peso: 50 }; // un Json es un objeto  node objetossalon.js
let persona2 = { nombre: "tania", edad: 18, peso: 40 };
let persona3 = { nombre: "luis estrada", edad: 19, peso: 57 };
let persona4 = { nombre: "brenda", edad: 18, peso: 76 };

// Crear un arreglo de personas para poder usar map
let personas = [persona1, persona2, persona3, persona4];

// Usar map en el arreglo de personas
personas.map((persona) => console.log(persona.nombre));

console.log(arreglos); // esto es para que yo pueda imprimir mi arreglo
console.log(personas); // esto es para imprimir el arreglo de personas
console.log(persona1.nombre); // esto es para que yo pueda imprimir mi objeto pero tambien pueda imprimir el valor de este
const prompt=require("prompt-sync")();


function AgregarDatos(){
    let datos=[]
    let edad= null;
    let nombre="evelin";
    edad=parseInt(prompt("ingresa tu edad :___")) 
    let persona={nombre,edad}
    datos.push(persona)
    console.log(datos)
}
AgregarDatos();







