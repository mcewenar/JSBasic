//Se tiene el nombre, código del producto, el total de las ventas de un vendedor. Calcule su comisión teniendo en cuenta 
//que si el producto es de: Código 1 esta es del 5%, Código 2 esta es del 8%, Código 3 esta es del 3%. Imprima el nombre 
//y la comisión.

let name,cod, cod1 = 0.05, /*transform 5% to 0.05*/ cod2 = 0.08, cod3 = 0.03, sale, i = true;

while (i) {
  name = prompt("Enter the seller: ");
  cod = prompt("Enter ID of product: ");
  sale = prompt("Enter the sales : ");
  if (sale > 0 && (cod === "1" || cod === "2" || cod === "3")) {
    i = false;
    if (cod === "1") {
      alert(
        "NOMBRE DEL EMPLEADO: " +
          name +
          ", comisión " +
          sale * cod1
          
      );
      break;
    } else if (cod === "2") {
      alert(
        "NOMBRE DEL EMPLEADO: " +
          name +
          ", comisión " +
          sale * cod2
      );
      break;
    } else if (cod === "3") {
      alert(
        "Employee: " +
          name +
          ", comisión " +
          sale * cod3
      );
      break;
    }
  } else {
    alert("Wrong");
    i = true;
    continue;
  }
}