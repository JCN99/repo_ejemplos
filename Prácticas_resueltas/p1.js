// Solución ejercicio 1
// Apartado A
// for (let i = 0; i <= 10; i++) {
//   console.log("7 x " + i + " = " + 7 * i);
// }
// Apartado B
// for (let i = 3; i <= 9; i++) {
//   console.log("3 x " + i + " = " + 3 * i);
// }
// Solución ejercicio 2
// Apartado A
let edades = [15, 22, 16, 45, 12, 33, 19, 58, 27, 7];
let resultado = [];
for (let i = 0; i <= edades.length - 1; i++) {
  if (edades[i] % 2 === 1) {
    resultado.push(edades[i]);
  }
}
console.log("Array original: " + edades);
console.log("Array con edades impares: " + resultado);
// Apartado B
let edades1 = [15, 22, 16, 45, 12, 33, 19, 58, 27, 7];
let resultado1 = [];
for (let i = 0; i <= edades1.length - 1; i++) {
  if (edades1[i] % 2 === 0) {
    resultado1.push(i);
  }
}
console.log("Array original: " + edades1);
console.log("Array con edades pares: " + resultado1);
// Solución ejercicio 3
// Apartado A
let cadena = "sevillatieneuncolorespecial";
let sumatorio = 0;
for (let i = 0; i <= cadena.length - 1; i++) {
  if (
    cadena.charAt(i) === "a" ||
    cadena.charAt(i) === "e" ||
    cadena.charAt(i) === "i" ||
    cadena.charAt(i) === "o" ||
    cadena.charAt(i) === "u"
  ) {
    sumatorio++; // sumatorio = sumatorio + 1
  }
}
console.log("El número de vocales que aparece en la cadena es: " + sumatorio);

// Apartado A
let cadena1 = "sevillatieneuncolorespecial";
let sumatorio1 = 0;
for (let i = 0; i <= cadena.length - 1; i++) {
  if (
    cadena1.charAt(i) === "a" ||
    cadena1.charAt(i) === "e" ||
    cadena1.charAt(i) === "i" ||
    cadena1.charAt(i) === "o" ||
    cadena1.charAt(i) === "u"
  ) {
  } else {
    sumatorio1++; // sumatorio = sumatorio + 1
  }
}
console.log(
  "El número de consonantes que aparece en la cadena es: " + sumatorio1,
);
