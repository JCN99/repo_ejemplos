// UD2. Introducción a la programación (JS)

// Concepto de variable. Creación y tipos.
// Martes 3 de noviembre
let edad1 = 32;
let edad2 = 49;
let media = (edad1 + edad2) / 2;
let pais = "Alemania";
let texto = " es la mejor del mundo";
let caracter = "A";
let booleano = true;
let booleano2 = false;
let suma_edades = edad1 + edad2;

//console.log(pais + texto);
//console.log(pais + " es la mejor del mundo");
//console.log(suma_edades);

// Estructuras de selección
// Jueves 5 de noviembre

let nota = 2;
// IF-ELSE SENCILLO
if (nota >= 5) {
  console.log("Estás aprobado.");
} else {
  console.log("Estás suspenso.");
}

//IF_ELSE ANIDADO

if (nota < 5) {
  console.log("Suspenso");
} else if (nota === 5) {
  console.log("Aprobado");
} else if (nota === 6) {
  console.log("Bien");
}
