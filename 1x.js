//
const prompt=require("prompt-sync")();

const ar=[1,2,3,4,5];

let maruchan_de_camaron =parseInt(prompt(`ingresa un numero a ecepcion de estos  ${ar} :___`));



while(ar.includes(maruchan_de_camaron)){
    console.log(`error el numero ingresa esta deintro del arreglo ⚠️ `) /**- Muestra un mensaje en la consola con un ícono de advertencia (⚠️)
 */
    maruchan_de_camaron =parseInt(prompt(`ingresa un numero a ecepcion de estos  ${ar} : ___`));
    console.log("felicidades")

}
/**ar.includes(...) es una función de JavaScript que verifica
 *  si un elemento está dentro de un arreglo.
 */

 /**
  * - ar.includes(...) → es una función que busca si un valor está dentro del arreglo ar.
- maruchan_de_camaron → es el valor que el usuario ingresó.

  */