/** declaración de arreglos
 * tipos de datos ; 
 * primitivos
 * number 
 * null
 * string
 * undefined 
 * boolean
 * 
 * datos compuestos:
 * arrays
 * function
 * objetos
 */

let suma = 0;
function DatosArreglos() {
    let datos = [3, 7, 9, 3, 2, 0, 1, 8];
    console.log(datos[3]);
    console.log(datos.length); // .length para saber cuántas posiciones hay
    let posicion = 0; // para llevar el control del índice
    for (let valor of datos) { // recorre cada elemento del arreglo
        console.log(valor); // imprime el valor actual
        console.log(`LA POSICIÓN ES : ${posicion} Y SU CLAVE ES: ${valor}`);
        if (valor % 2 === 0) { // si el valor es par
            suma += valor;
            console.log(`LA SUMA TOTAL DE LOS ARREGLOS ES: ${suma}`);
        }
        posicion++; // incrementa el índice manualmente
    }
   /* for(let vas in datos){
         console.log(valor); // imprime el valor actual
        console.log(`LA POSICIÓN ES : ${posicion} Y SU CLAVE ES: ${valor}`);

    }**/
}
DatosArreglos();

 
