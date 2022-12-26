function divisibleBy3(number) {
   let a = number%10
   console.log(a);
    if (a%3==0){
        console.log(`Divisible`);
    }else {
        console.log(`Not Divisble`);
    }
}
divisibleBy3(6567)
