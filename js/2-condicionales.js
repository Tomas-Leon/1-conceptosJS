/* if(condicion logica){
        todas las lineas de codigo que quiero si se cumple la condicion
}else{
        si no se cumple
}*/

const numero = parseInt(prompt("Ingrese un numero"));

if (numero % 2 === 0) {
    document.write ('El numero ingresado: '+ numero +' es par')
} else {
    document.write (`El numero ingresado: ${numero} es impar`)
}
