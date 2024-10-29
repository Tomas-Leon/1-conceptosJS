//notacion literal

const cancion = {
  //propiedades => clave : valor
  titulo: "Cancion Animal",
  grupo: "Soda Estereo",
  anioLanzamiento: 1990,
  album: ["album 1", "album 2"],
  duracion: "4:07",
  estado: true,
  //metodos => clave : funcion
  reproducir: function () {
    document.write(
      `<p>... comenzando a reproducir la cancion "${this.titulo}" ▶️ </P>`
    );
  },
  stop: () => {
    document.write(`<p>... La cancion se detuvo ⏹ </P>`);
  },
};

//mostrar el objeto
console.log(cancion);
document.write(cancion);

//mostrar propiedades de un objeto
document.write(`<p>Titulo de la cancion: ${cancion.titulo}</p>`); //una forma
document.write(`<p>Duracion de la cancion: ${cancion.duracion}</p>`);
document.write(`<p>Grupo: ${cancion["grupo"]}</p>`); //otra forma
document.write(`<p>Discografica de la cancion: ${cancion.discografica}</p>`); //propiedad que no esta

//modificar una propiedad del objeto
cancion.duracion = "4:00";
document.write(`<p>Duracion de la cancion modificada: ${cancion.duracion}</p>`);

//agregar una propiedad a un objeto
cancion.discografica = "Columbia Records";
document.write(
  `<p>Discografica de la cancion agregada: ${cancion.discografica}</p>`
);

//borra una propiedad de un objeto
delete cancion.album;
document.write(`<p>Album de la cancion agregada: ${cancion.album}</p>`);

//usar metodo
cancion.reproducir();
cancion.stop();
