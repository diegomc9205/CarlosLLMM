var numero = Number(prompt("Introduce un número entre 1 y 100"));
if((numero >= 1) && (numero <= 100)) {
    var a = 0;
    var b = 1;
    var c;
    document.write(a + "<br>");
    for (i = 0; i < (numero-1); i++) {
        c = a + b;
        document.write(c + "<br>");
        b = a;
        a = c;
    }
}
else {
    alert("Número erróneo");

}