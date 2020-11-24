//HARD WAY
/*let nums = [], j = true;

while (j) {
  nums[0] = prompt("Ingrese el primer número para comparar: ");
  nums[1] = prompt("Ingrese el segundo número para comparar: ");
  nums[2] = prompt("Ingrese el último número para comparar: ");
  if ((nums[0] > 0 || nums[0] < 0) &&
     (nums[1] > 0 || nums[1] < 0) &&
     (nums[2] > 0 || nums[2] < 0)) {
  
    j = false;
  } else {
    alert("no se permiten letras ni símbolos");
  }
}
if (nums[0] < nums[1] && nums[1] < nums[2]) {
  alert("Los números se ingresaron en forma ASCENDENTE");
} else if (nums[0] > nums[1] && nums[1] > nums[2]) {
  alert("Los números se ingresaron en forma DESCENDENTE");
} else {
  alert("Los números se ingresaron en forma ALEATORIA");
}*/
//Lea tres números y escriba un mensaje si los datos se escribieron en forma ordenada 
//(ya sea descendente o ascendentemente) y si no es así que muestre el respectivo mensaje.
//EASY WAY
let a = prompt("Enter one number");
let b = prompt("Enter second number");
let c = prompt("Enter the third number");
let t = true;
while (t) {
  if ((a > 0 || a < 0) && (b > 0 || b < 0) && (c > 0 || c < 0)) {
    t = false;

  }
  else {
    alert("The value are not number(s)")
    break;
  }
}
if (a < b && b < c) {
  alert("Grow it");
}
else if (a>b && b > c) {
  alert("Descend it")
}
else {
  alert("Random")
}