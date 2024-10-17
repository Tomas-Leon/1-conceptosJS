//declarar un array vacio
const precios = [];
//------------------------------------------------------------------------------------

//declarar un array con datos
const peliculas = ["shrek 1", "titanic", "cars 1"];
//------------------------------------------------------------------------------------

//mostrar un array por pantalla
document.write(precios + "<br>");
document.write(peliculas);

//------------------------------------------------------------------------------------

//mostrar el array por consola
console.log(precios);
console.log(peliculas);

//------------------------------------------------------------------------------------

//cantidad de elementos de unn array
document.write(
  `<p>cantidad de elementos del array peliculas: ${peliculas.length}</p>`
);
document.write(
  `<p>cantidad de elementos del array precios: ${precios.length}</p>`
);

//------------------------------------------------------------------------------------

//mostrar un elemento del array
document.write(`<p>Mostrar un elemento de array: ${peliculas[1]}</p>`);

//------------------------------------------------------------------------------------

//mostrar un array completo
document.write(`<h2>Mostrar un elemento del array de pleiculas</h2>`);
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");

//------------------------------------------------------------------------------------
//                      agregar elementos en el array
//------------------------------------------------------------------------------------

//(1)-agregar al principio (.unshift)
peliculas.unshift("interestelar", "los increibles");

//---ver
document.write(
  `<h2>Agregamos dos elementos al principio, peliculas: ${peliculas.length}</h2>`
);
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");

//------------------------------------------------------------------------------------

//(2)-agregar al final (.push)
peliculas.push("furia de titanes");

//---ver
document.write(
  `<h2>Agregamos un elemento al final, peliculas: ${peliculas.length}</h2>`
);
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");

//------------------------------------------------------------------------------------

//(3)-agregar al medio (.splice(posicion,cuantos eliminar,elemento))
peliculas.splice(3, 0, "spiderman");

//---ver
document.write(
  `<h2>Agregamos un elemento al medio, peliculas: ${peliculas.length}</h2>`
);
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");

//------------------------------------------------------------------------------------

//modificar elementos en el array
peliculas[4] = "cars 2";

//---ver
document.write(
  `<h2>Modificamos un elemento, peliculas: ${peliculas.length}</h2>`
);
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");

//------------------------------------------------------------------------------------
//                        borrar elementos en el array
//------------------------------------------------------------------------------------

//(1)-borrar al principio (.shift)
peliculas.shift();

//---ver
document.write(
  `<h2>eliminamos un elemento del principio, peliculas: ${peliculas.length}</h2>`
);
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");

//------------------------------------------------------------------------------------

//(2)-borrar al medio (.splice(position, cantidad))
peliculas.splice(2, 1);

//---ver
document.write(
  `<h2>eliminamos un elemento del medio, peliculas: ${peliculas.length}</h2>`
);
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");

//------------------------------------------------------------------------------------

//(3)-borrar al final (.pop)
peliculas.pop();

//---ver
document.write(
  `<h2>Eliminamos un elemento del final, peliculas: ${peliculas.length}</h2>`
);
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");

//------------------------------------------------------------------------------------
