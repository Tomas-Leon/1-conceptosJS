/*let contador = 1

while (contador <= 100){
    document.write(`<p>Numero: ${contador}</P>`)
    contador = contador + 1
}*/

//---------------------------------------------------------------

//do while-hacer mientras
/*Do{
    linea de codigo
    Linea de codigo que haga que no se cumpola en algun momento
}while (condicion logica)*/

/*let numero = 1

do{
    document.write(`<p>Numero: ${numero}</P>`)
    numero++ //numero = numero + 1
} while (numero <= 100)*/

//---------------------------------------------------------------

//for - si se cumple la condicion ejecuta el codigo
/*
    for( inicializar variable let ; condicion logica ; Incrementar o decrementar variable let ) {
        todas las lineas de codigo que quiero ejecutar
    } */

for (let i = 10; i >= 0; i--) {
  document.write(`<p>Cuenta regresiva: ${i}</P>`);
}
