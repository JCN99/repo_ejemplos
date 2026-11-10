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

let nota2 = 5;

if (nota2 < 5) {
  console.log("Suspenso");
} else if (nota2 === 5) {
  console.log("Aprobado");
} else if (nota2 === 6) {
  console.log("Bien");
} else if (nota2 === 7 || nota2 === 8) {
  console.log("Notable");
} else {
  console.log("Sobresaliente");
}

// Comprobar estado del semáforo y dar un aviso al conductor

let estado = "rojo";

// Si el semáforo está verde -> Puedes pasar
// Si el semáforo está rojo -> Quieto parao
// Si el semáforo está amarillo -> Cuidado

if (estado === "verde") {
  console.log("Puedes pasar");
} else if (estado === "rojo") {
  console.log("Quieto parao");
} else if (estado === "amarillo") {
  console.log("Cuidao");
} else {
  console.log("Semáforo estropeado.");
}

// ¿Pasar faltas?

let hay_alumnos = true;
let hay_profesor = true;

if (
  (hay_alumnos === true && hay_profesor === true) ||
  (hay_alumnos === false && hay_profesor === true)
) {
  console.log("Obligatorio pasar faltas.");
} else if (hay_alumnos === false && hay_profesor === false) {
  console.log("No obligatorio pasar faltas.");
}

// Dentro de la condición: && -> y
// || -> o

// Para optar a beca: calificion >= 7 y faltas < 20 %

let nombre = "Cayetano";
let calificacion = 8;
let faltas = 18;
let incidencias = 3;
if (
  (calificacion >= 7 && faltas < 20) ||
  (calificacion >= 7 && incidencias === 0)
) {
  // El alumno [nombre] opta a beca.
  console.log("El alumno " + nombre + " opta a beca.");
} else {
  console.log("El alumno " + nombre + " NO opta a beca.");
}
