let num1=prompt("escribe primer numero")
let num2=prompt("escribe segundo numero")
let num3=prompt("escribe tercer numero")

if (Number(num1)>Number(num2)) {
    if (Number(num1)>Number(num3)) {
        document.write(num1)
    }else{
        document.write(num3)
    }
   
} else if (Number(num2)>Number(num1)) {
    if (Number(num2)>Number(num3)) {
        document.write(num2)
    }else{
        document.write(num3)
    }
}else{
   
    document.write("son iguales")
}