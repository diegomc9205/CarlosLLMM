let num1=prompt("escribe primer numero")
let num2=prompt("escribe segundo numero")

if (Number(num1)>Number(num2)) {
    document.write(num1)
} else if (Number(num2)>Number(num1)) {
    document.write(num2)
}else{
   
    document.write("son iguales")
}