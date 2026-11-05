    // ejercicio 1      -- ¿cual es el mayor?

function cualEsMayor(a, b)
{
    return(a>b) ? a : b;
 //   if(a>b){
   //     return a;
   // }   else {
    //    return b;
   // }
}
let mayor = cualEsMayor(10, 5);
console.log(mayor)



// ejercicio 2      -- encontrar resolucion
/**
* Nombre: ancho x alto
* 8K: 7680 x 4320
* 4K: 3840 X 2160
* WQHD: 2560 x 1440
* FHD: 1920 x 1080
* HD: 1280 x 720
*/
function nombreResolucion(ancho, alto) {    
if(ancho >= 7680 && alto >= 4320){   
    return "8K";
    } else if (ancho >= 3840 && alto >= 2160){
    return "4K";
    } else if (ancho >= 2560 && alto >= 1440){
    return "WQHD";
    } else if (ancho >= 1920 && alto >= 1080){
    return "FHD";
    } else if (ancho >= 1280 && alto >= 720){
    return "HD";
    } else {
    return false;
    }
} 
let nombre = nombreResolucion(1366, 768);
console.log(nombre);
let nombre2 = nombreResolucion(3840, 2160);
console.log(nombre2)



//ejercicio# 3     -- obtener un elemento por su indice

 function getbyIdx(arr, idx){
    if (idx < 0 || arr.length <= idx){
         return "Elemento no existe";
    }
     return arr[idx];
}
let resultado = getbyIdx([1,2], 1);
console.log(resultado);
let resultado2 = getbyIdx([1,2], 2);
console.log(resultado2);
let resultado3 = getbyIdx([1,2], -1);
console.log(resultado3);
let resultado4 = getbyIdx([1,2], 0);
console.log(resultado4);


// ejercicio 4      -- imprimir numeros impares

let i=0;
while (i<10){
    if(i%2!==0){
        console.log("impar", i);
    }
    i++;
}
