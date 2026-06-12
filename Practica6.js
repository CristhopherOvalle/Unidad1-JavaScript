// Determinar la letra de una calificación

// Este programa evalúa una calificación numérica
// y asigna una letra según el rango correspondiente.
// El resultado se muestra en la consola.

let nota = 85;

if (nota >= 90 && nota <= 100) {
    console.log("Resultado: A");
} else if (nota >= 80) {
    console.log("Resultado: B");
} else if (nota >= 70) {
    console.log("Resultado: C");
} else if (nota >= 60) {
    console.log("Resultado: D");
} else {
    console.log("Resultado: F");
}