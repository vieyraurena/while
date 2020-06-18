//  While
//
// Definir el numero
// Preguntarle al usuario numero
//Si el número no es el secreto, pedir el número
//Repetir hasta que el usuario introduzca el número secreto

let num = parseFloat(prompt('Adivine un número positivo'));
const numSecreto = 6;

while (num !== numSecreto) { 
    // no se pone el let, sin let para caerle encima otra ves a la variable ya que no era el correcto.
    num = parseFloat(prompt('Adivine un número positivo'));
}
//acá imprimo el mensaje
console.log(`ADIVINASTE el número es ${numSecreto}`);

