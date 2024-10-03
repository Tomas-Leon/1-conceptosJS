/* if(condicion logica){
        todas las lineas de codigo que quiero si se cumple la condicion
}else{
        si no se cumple
}*/

//ejercicio 1 par impar

//const numero = parseInt(prompt("Ingrese un numero"));

// if (numero % 2 === 0) {
//    document.write ('El numero ingresado: '+ numero +' es par')
// } else {
//    document.write (`El numero ingresado: ${numero} es impar`)
// }

//ejercicio 2 edad votacion

const edad = parseInt(prompt("Ingrese su edad"))

if (edad >= 1 && edad <= 105){
    if ((edad >= 16 && edad < 18) || (edad > 70)){
        document.write ('Puede votar pero no es obligatorio')
    }
    if (edad < 16){
        document.write ('Usted no puede votar')
    }
    if (edad >= 18 && edad <= 70) {
        document.write ('Usted esta obligado a votar')
    }
}else{
    alert('ingresaste un valor invalido')
}