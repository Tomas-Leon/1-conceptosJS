//persona
//nombre, apellido, mail, tel, ciudad, pais, dni

//alumno
//comision, tipo, certificacion, asistencia, notas, promedio

class Persona {
  //propiedades privadas
  #apellido;
  #nombre;
  //constructor sabe crear las propiedades de mi objeto
  constructor(nombre, apellido, mail, telefono, ciudad, pais, dni) {
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.mail = mail;
    this.telefono = telefono;
    this.ciudad = ciudad;
    this.pais = pais;
    this.dni = dni;
    this.estado = true;
  }
  //propiedades computadas get y set
  get apellido() {
    return this.#apellido;
  }
  set apellido(nuevoApellido) {
    if (nuevoApellido.trim().length > 0) {
      this.#apellido = nuevoApellido;
    }
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    if (nuevoNombre.trim().length > 0) {
      this.#nombre = nuevoNombre;
    }
  }

  //metodos
  mostrarDatos() {
    document.write(`<ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Apellido: ${this.apellido}</li>
            <li>Mail: ${this.mail}</li>
            <li>Telefono: ${this.telefono}</li>
            <li>Ciudad: ${this.ciudad}</li>
            <li>Pais: ${this.pais}</li>
            <li>DNI: ${this.dni}</li>
            </ul>`);
  }
}

//usar la clase persona
const cristian = new Persona(
  "cristian",
  "arrieta",
  "cristian@mail.com",
  "543816778855",
  "famailla",
  "argentina",
  "35777886"
);

const dana = new Persona(
  "dana",
  "albornoz",
  "dana@gmail.com",
  "2281223344",
  "mar del plata",
  "argentina",
  "40223344"
);

console.log(cristian);
console.log(dana);

cristian.mostrarDatos();
dana.mostrarDatos();

dana.apellido = "Albornoz";

//acceder a una propiedad del objeto
document.write(
  `<p>Mostrar el nombre y apellido: ${dana.nombre}, ${dana.apellido}</p>`
);
