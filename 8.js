function sumRelatedOddProblem(n) {
    // Write code here
    let i=0;
    let sum=0;
    while(i<=n){
        if(i%2!=0){
            sum=sum+i;
        }
        i++;
    }
    console.log(sum);
}