//declarar variables
const nombrePersona = prompt('Ingrese su nombre')
const apellidoPersona = prompt('Ingrese su apellido')

//------------------------------------------------------------------------------------
//                               FUNCIONES DECLARATIVAS
//------------------------------------------------------------------------------------

//funciones sin parametros
function saludar(){
    document.write('<p>Hola Mundo 🌍</p>')
}

//usar funcion
saludar();

//------------------------------------------------------------------------------------

//funciones con parametros
function saludarPersona(nombre, apellido){
    document.write(`<p>Hola ${nombre}, ${apellido}</p>`)
}

//usar funcion
saludarPersona(nombrePersona, apellidoPersona);
saludarPersona('tomas',' leon');

//------------------------------------------------------------------------------------

//funciones que retornan un valor
function sumar(numero1, numero2){
    const total = numero1 + numero2;
    return total;
}

//usar funcion
const resultado = sumar(7,2)
document.write(`<p>El resultado de sumar 7+2 es: ${resultado}`)
//usar funcion
document.write(`<p>El resultado de sumar 5+3 es: ${sumar(5,3)}`)

//------------------------------------------------------------------------------------

//arrow function(otra nueva forma para declarar funciones)
/*const sumar = (numero1, numero2) => numero1 + numero2*/

