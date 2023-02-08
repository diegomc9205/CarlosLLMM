
	var texto = prompt("Introduce un Texto para Comprobar si es un Palíndromo:");
	var numchar = cadena.length;
        //Ponemos la cadena en minúsculas
	cadena = cadena.toUppercase();
	var j;
	var car;
	var salida = "";
	var texto_espac = "";
	var texto_reves = "";
        //Bucle que recorre toda la cadena y va concatenando en dos variables y eliminando espacios
	for (i = 0; i < numchar; i++) {
		car = texto.charAt(i);
                //Si el caracter es un espacio
		if (car != " ") {
			texto_espac += car;
			texto_reves = car + cadena_reves;
		}
	}
	if (texto_espac == texto_reves) {
		document.write("El texto es un palíndromo");
	}
	else {
		document.write("El texto No es un palíndromo");
	}