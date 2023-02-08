let nota=prompt("introduce nota")

if (nota<2) {
    document.write(" Muy deficiente")
} else if (nota==3 || nota==4 ) {
    document.write(" Insuficiente")
}  else if (nota==5 || nota==6 ) {
    document.write(" Suficiente")
} else if (nota==6 || nota==7 ) {
    document.write("Bien")
} else if (nota==8 || nota==9 ) {
    document.write(" Notable")
} else if (nota==10) {
    document.write(" Sobresaliente")
}
