/*Se desea seleccionar un atleta para una maratón internacional, para seleccionarlo este debe haber terminado el 
maratón anterior, en un tiempo determinado. Los tiempos son 150 minutos para hombres menores de 40 años; 175 minutos
 para hombres con una edad mayor o igual a 40 años
 y 180 minutos para mujeres. Los datos a introducir 
 (leer) son: Sexo, Edad y tiempo efectuado en su maratón anterior.*/

let g, a, t, j=true;
while (j) {
    g = prompt("Enter the gender (m) or (f)");
    a = prompt("enter the age");
    t = prompt("Enter the time");

    if ((g === "m" || g === "M") && (a >= 18 && a < 40) && (t <= 150)) {
        document.writeln("Approve1");
        j = false;
    }
    else if ((g === "m" || g === "M") && (a >= 40) && (t <= 175)) {
        document.writeln("Approve2");
        j = false;

    }
    else if ((g === "f" || g === "F") && (a >= 18) && (t <= 180)) {
        document.writeln("Approve3");
        j = false;
    }
    else {
        alert("Don't passed");
    }
//j=false;
}