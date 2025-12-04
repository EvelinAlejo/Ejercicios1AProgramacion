const prompt = require("prompt-sync")();

function agregarDatos() {
    let datos = [];

    let nombre = "";
    let edad = null;
    let peso = 0;
    let i = 0;
    let sueldo = 0;
    let totalSueldo = 0;

    let dimension = parseInt(prompt("ingrese la dimension de arreglo: "));

    while (i < dimension) {
        nombre = prompt("ingrese el nombre: ");
        edad = parseInt(prompt("ingrese la edad: "));
        peso = parseInt(prompt("ingrese el peso: "));
        sueldo = parseInt(prompt("ingrese el sueldo: "));

        let persona = { nombre, edad, peso, sueldo };

        datos.push(persona);
        i++;
    }

    datos.map((persona) => {
        totalSueldo += persona.sueldo;
        console.log(`se llama ${persona.nombre} y tiene ${persona.edad} años y su peso es de ${persona.peso} kg`);
        console.log(`y su sueldo es de ${persona.sueldo} pesos`);
    });

    console.log(`El total de sueldos es: ${totalSueldo} pesos`);
}

agregarDatos();