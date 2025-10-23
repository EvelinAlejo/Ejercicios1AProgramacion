/**Juanita López trabaja en 4 ocupaciones donde le pagan un sueldo diferente por hora. Hacer un algoritmo 
para determinar e imprimir el sueldo de Juanita en 1 semana en la que trabajó las siguientes horas, con 
los siguientes sueldos: Trabajo A, 12 horas con un sueldo de $45 por hora; Trabajo B, 10 horas con un 
sueldo de 56; Trabajo C, 8 horas con un sueldo de $52 y en el D, 13 horas con un sueldo de $28 la hora.  */

//trabajos y horas //
let trabajoA=12;
let sueldoA=45;

let trabajoB=10;
let sueldoB=56; // `

let trabajoC= 8;
let sueldoC=52;


let trabajoD= 13;
let sueldoD=28;

let sueldoTotalA= trabajoA* sueldoA;
let sueldoTotalB= trabajoB* sueldoB;
let sueldoTotalC= trabajoC* sueldoC;
let sueldoTotalD= trabajoD* sueldoD;

//sueldo total //
let sueldoTotalSemanal= sueldoTotalD+ sueldoTotalA+ sueldoTotalB+ sueldoTotalC;
console.log( ` `);

//horas totales //
let sumaH = trabajoA + trabajoB + trabajoC + trabajoD;

console.log( ` en el trabajo A , sus horas trabajadas fueron: ${trabajoA} y sus sueldo por esas horas fueron ${sueldoTotalA}`);
console.log( ` en el trabajo B , sus horas trabajadas fueron: ${trabajoB} y sus sueldo por esas horas fueron ${sueldoTotalB}`);
console.log( ` en el trabajo C , sus horas trabajadas fueron: ${trabajoC} y sus sueldo por esas horas fueron ${sueldoTotalC}`);
console.log( ` en el trabajo D , sus horas trabajadas fueron: ${trabajoD} y sus sueldo por esas horas fueron ${sueldoTotalD}`);