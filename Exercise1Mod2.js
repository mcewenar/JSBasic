
/*let en = prompt("Ingrese un número");
if (en < 0) {
    en*(-1);
    document.writeIn("El numero es " + en);
}
else {
    document.writeIn("El número es " + en)
};*/
var numero = prompt('Escriba un número');
if (numero>=0){
    document.writeln('El número '+numero+' es positivo');
} else {
    document.writeln('El número '+numero+' es negativo');
}