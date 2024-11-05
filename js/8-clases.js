//persona
//nombre, apellido, mail, tel, ciudad, pais, dni

//alumno
//comision, certificacion, asistencia, notas, promedio

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

class Alumno extends Persona {
  #comision;
  #certificacion;
  constructor(
    nombre,
    apellido,
    mail,
    telefono,
    ciudad,
    pais,
    dni,
    comision,
    certificacion
  ) {
    //invoca al constructor de persona
    super(nombre, apellido, mail, telefono, ciudad, pais, dni);
    this.#comision = comision;
    this.#certificacion = certificacion;
    this.asistencia = 0;
    this.notas = [];
    this.promedio = 0;
  }

  get getComision() {
    return this.#comision;
  }

  set setComision(nuevaComision) {
    this.#comision = nuevaComision;
  }
  get getCertificacion() {
    return this.#certificacion;
  }

  set setCertificacion(nuevaCertificacion) {
    this.#certificacion = nuevaCertificacion;
  }

  //puedo agregar mis metodos
  obtenerPromedios() {
    let suma = 0;
    for (let i = 0; i < this.notas.length; i++) {
      suma = suma + this.notas[i];
    }
    return suma / this.notas.length;
  }
//polimorfismo
  mostrarDatos(){
    document.write(`<ul>
      <li>Nombre: ${this.nombre}</li>
      <li>Apellido: ${this.apellido}</li>
      <li>Mail: ${this.mail}</li>
      <li>Telefono: ${this.telefono}</li>
      <li>Ciudad: ${this.ciudad}</li>
      <li>Pais: ${this.pais}</li>
      <li>DNI: ${this.dni}</li>
      <li>Comision: ${this.getComision}</li>
      <li>Certificacion: ${this.getCertificacion}</li>
      <li>Notas: ${this.notas}</li>
      <li>Promedio: ${this.promedio}</li>
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

document.write(`<h2>Usando la clase alumno</h2>`);

const fabricio = new Alumno(
  "Fabricio",
  "Corrizo",
  "fabricio@mail.com",
  "434234234",
  "San miguel de tucuman",
  "Argentina",
  "34444444",
  "react2",
  "HTML,CSS,Bootstrap"
);

fabricio.mostrarDatos();
document.write(
  `<p>Comision actual: ${fabricio.getComision}</p>`
);

fabricio.setComision = 'comision react2'
document.write(
  `<p>Comision nueva: ${fabricio.getComision}</p>`
);
document.write(
  `<p>Certificacion: ${fabricio.getCertificacion}</p>`
);

//agregar notas a fabricio
fabricio.notas.push(5,4,6)
document.write(`<p>Alumno: ${fabricio.nombre}, ${fabricio.apellido} promedio actual: ${fabricio.obtenerPromedios()}`)