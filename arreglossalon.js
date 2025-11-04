/** declaración de arrglos 
 * tipos de datos ; 
 * primitivos
 * number 
 * null
 * string
 * undifiend 
 * booleam
 * 
 * datos compuestos:
 * arrays
 * function
 * objetos
 */let suma = 0;

function DatosArreglos(){
    let datos=[3,7,9,3,2,0,1,8]
     console.log(datos[3])
    console.log(datos.length) // .length para que me diga cuntas pociciones hay  o el tamaño delarreglo 
    
    for(i=0; i< datos.length; i++){// esto es para que se recorra el arreglo  con la iteración 
        console.log(datos[i]) // datos del arreglo pero con la iteración 
        console.log(`LA POSICIÓN ES : ${i} Y SU CLAVE ES: ${datos[i]}`) //el datos i es el areglo pero con iteración
        if(datos[i]%2===0){
             suma+= datos[i]
        console.log(` LA SUMA TOTAL DE LOS ARREGLOS ES: ${suma} ` )


        }
       

    } 
}DatosArreglos();
