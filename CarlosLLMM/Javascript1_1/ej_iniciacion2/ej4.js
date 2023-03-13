var sum =0;
do { 
    var n1 =prompt("introduce un número")
    if (Number(n1)==n1) {
        n1=Number(n1);
        sum=sum+n1;
    } else {
        if(n1!=null){
        alert(n1+"no es un numero")
        }
    }
    
} while (n1!=null);
document.write(sum)