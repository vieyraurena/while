//Ingresar un número
//imprimir en la cosola todos los números divisibles y el conteo
let numero = parseFloat(prompt('Escriba un número entero positivo:'));

i = 0;
while (i < numero) {
  i = i + 1;
  //console.log(i)
  if (i % 3 == 0 && i % 5 !== 0){
    console.log(i + '🚀');
  } else if (i % 5 == 0 && i % 3 !== 0){
    console.log(i + '🍔');
  } else if (i % 3 == 0 && i % 5 == 0){
        console.log(i + '🍺');
  } else
  console.log(i);
}



