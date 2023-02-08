var palabra = prompt("introduce la palabra");
document.write(comprobar(palabra));

function comprobar(texto) {

  var resultado = texto + " ";

  // Comprobar mayúsculas y minúsculas
  if(texto == texto.toUpperCase()) {
    resultado += " está formada sólo por mayúsculas";
  }
  else if(texto == texto.toLowerCase()) {
    resultado += " está formada sólo por minúsculas";
  }
  else {
    resultado += " está formada por mayúsculas y minúsculas";
  }

  return resultado;
}
