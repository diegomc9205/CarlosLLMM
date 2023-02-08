
let num = prompt("Introduce numero de repeticiones");

if (Number(num) == num) {
    
    if (num > 0 && num <= 50) {
        
        //BUCLE QUE VA DESDE 0 HASTA numrep
        for ( let i = 0; i <=num; i++) {
            //BUCLE DESDE 1 HASTA i
            for ( let a = 1; a <= i; a++) {
                document.write(a);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número introducido no es válido");
    }
} 
else {
    alert("No has introducido un número");
}
