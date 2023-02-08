var palabra = prompt("escribe una palabra en minuscula");


function PonerPrimeraLetraEnMayuscula(pal) {
    // palabra.charAt(0); //nos devuelve la primera letra
    // palabra.slice(1); // nos devuelve el resto de la palabra quitando la primera letra
  return pal.charAt(0).toUpperCase() + pal.slice(1);
}

document.write(PonerPrimeraLetraEnMayuscula(palabra)); // nos devuelve la palabra con la primera letra mayuscula



