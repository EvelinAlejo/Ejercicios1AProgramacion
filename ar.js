const prompt=require("prompt-sync")();
//length
let i =1;

let pedir=parseInt(prompt("INGRESA UN NUMERO : "))
let ar= [1,3,4,6,8,9,10]
while(pedir==2 || pedir==5 || pedir ==7){
    console.log(`este numero ${pedir}no esta dentro del arreglo ${ar}`)
    pedir=parseInt(prompt("INGRESA UN NUMERO : "))
    
    

}

if(ar.includes(pedir)){
        console.log(`el número ${pedir} esta dentro del arreglo `)

    }



