//ejercicio cajero automatico
//pedir al usuario que ingrese una opcion: 1- consultar el saldo,
//2- depositar dinero, 3- extraer dinero, 4- salir

let saldo = 1000;
const opcion = parseInt(
  prompt(
    "seleccione una opcion 1- consultar el saldo, 2- depositar dinero, 3- extraer dinero, 4- salir"
  )
);

switch (opcion) {
  case 1:
    document.write("El saldo es $" + saldo);
    break;
  case 2:
    const deposito = parseFloat(prompt("Ingrese el monto a depositar"));
    if (deposito > 0) {
      saldo = saldo + deposito;
      document.write(`Depositaste $${deposito}, tu saldo actual es $${saldo}`);
    } else {
      document.write("ingresaste un saldo invalido");
    }
    break;
  case 3:
    const montoExtraer = parseFloat(prompt("Ingrese el monto a extraer"));
    if (montoExtraer > 0) {
      if (montoExtraer <= saldo) {
        saldo = saldo - montoExtraer;
        document.write(
          `Monto a extraer $${montoExtraer}, tu saldo actual es $${saldo}`
        );
      } else {
        document.write("saldo insuficiente");
      }
    }else{
        document.write("Cantidad invalida");
    }
    break;
  case 4:
    document.write("Salir");
    break;
  default:
    document.write("Seleccionasta una opcion invalida");
}
