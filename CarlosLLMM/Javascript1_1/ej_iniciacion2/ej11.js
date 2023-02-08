let cont = 0;
let numero;
let uno = 0;
let dos = 0;
let tres = 0;
do {
    num = Math.floor((Math.random() * 99) + 1);
    if ((numero != uno) && (numero != dos) && (numero != 3)) {
        document.write(num + "<br>"); cont++;
        if (cont == 1) {
            uno = numero;
        }if (cont == 2) {
            dos = numero;
        }if (cont == 3) {
            tres = numero;
        }
    }
} while (cont < 3);
