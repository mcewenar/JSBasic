//Comparar 3 números entre sí y determinar cuál de ellos es menor y mostrarlo en pantalla.
    var a = prompt("Enter first number");
    var b = prompt("Enter second number");
    var c = prompt("Enter third number");
    if (a < b && a < c) {
        alert("El número " + a + " is minor");
    }
    else if (b < a && b < c) {
        alert("The number " + b + " is minor");
    }
    else if (c<a && c<b) {
        alert("The number " + c + " is minor");
    }
    else if (a==b && a==c && b==c) {
        alert("The numbers are equals");
    }
