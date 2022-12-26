


function calc(a,b ,c) {
    if (c == "+") {
        result = a+b
        console.log(result);
   } else if (
       c=="-"
   ){ result = a-b
    console.log(result);
}
    else if (c=="*") {
       result = a*b
       console.log(result);
   } else if(c=="/") {
       result = a/b
       console.log(result);
   }
}
calc(22, 2, "/")

console.log(calc(24, 2, "*"));
