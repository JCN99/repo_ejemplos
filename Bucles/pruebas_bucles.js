// Estructuras de repetición: bucles for

// Clase 10/11/2026

// Creación de arrays
let edades = [26, 49, 18, 12, 21, 17, 17, 18];
let nombres = ["Jesús", "Asun", "Marta", "Javier"];

console.log(edades);
console.log(edades[4]);
console.log(nombres[3]);
console.log(edades.length);

// Meter elementos al final del array --> push

let notas = [3, 2, 6, 8, 9, 10, 3, 5, 5, 7];
console.log(notas);
notas.push(1);
notas.push(6);
console.log(notas);

// Creación de bucles FOR

let notas_ud2 = [3, 2, 6, 8, 9, 10, 3, 5, 5, 7, 4, 6, 1];
let suma = 0;
for (let i = 0; i <= notas_ud2.length - 1; i++) {
  suma = suma + notas_ud2[i];
}
let media = suma / notas_ud2.length;
console.log(media);

// Determinar el nº de aprobados usando un bucle for
// let notas_ud2 = [3, 2, 6, 8, 9, 10, 3, 5, 5, 7, 4, 6, 1];

// Funciones
function contar_aprobados(array) {
  let contador = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    // Comprobar que la nota sea >= 5
    if (array[i] >= 5) {
      contador = contador + 1; //contador++
    }
  }
  console.log("El nº de aprobados es: " + contador);
}

let otroArray = [5, 5, 6, 7, 1, 2, 4, 9, 3];
contar_aprobados(otroArray);

// Mostrar console.log los números del 4 al 12

// for (let i = 4; i <= 12; i++) {
//   // i = i + 1;
//   console.log(i);
// }

// Recorrer un array

let a = [1, 3, 6, 32, 1, 0, 9];

// Operador % --> 7%2 = 1

let suma1 = 0;

for (let i = 0; i < a.length; i++) {
  suma1 = suma1 + (a[i] % 2);
}
console.log("El resultado es: " + suma1);

let animal = "perro";
console.log("El nº de caracteres es: " + animal.length);

for (let i = 0; i < animal.length; i++) {
  console.log(animal.charAt(i));
}
