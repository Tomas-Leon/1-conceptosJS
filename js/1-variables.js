//mensaje que muestro en consola
console.log('hola mundo');

//declarar o definir una variable (var - let - const)
let num1;

//declarar e inicializar una variable
let num2 = 20;
const pi = 3.14

//asignar el valor a una variable
num1 = 10;

//mostrar por consola el valor de la variable
console.log('variable num1 = '+ num1)
console.log('variable num2 = '+ num2)
console.log('variable pi = '+ pi)

//0-mostrar el mensaje en el documento html
document.write('0-la suma de los dos numeros es: '+(num1+num2))

//1-miltiplicar un numero por 10
let num3 = parseInt(prompt('Ingrese un numero'))
console.log('variable num3 = '+ num3)
document.write('<br>1-multiplicar un numero por 10: '+(num3*10))

//2-convertir de grados fahrenheit a celsius
let temp=70
console.log('variable temp = '+ temp)
document.write('<br>2-la temperatura en celsius es: '+(5/9)*(temp-32))

//3-calcular area y perimetro
let largo=20
let ancho=15
console.log('variable largo = '+ largo)
console.log('variable ancho = '+ ancho)
document.write('<br>3-el perimetro es: '+(2*(largo+ancho))+' y el area es: '+(largo*ancho))

//TIPOS DE DATOS
//-number: 10, 5.5
//-string: 'hola'
//-booleano: true, false
//-array: [1,2,3]
//-object:
//-null:
//-undefined: 