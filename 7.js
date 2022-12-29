function totalBill(N) {
    // Write code here
    let sum=80
    for(let i=1;i<=N;i++){
        if(i>=0 && i<=50){
            sum=sum+3;
        }else if(i>=51 && i<=150){
            sum=sum+5;
        }else if(i>=151){
            sum=sum+10
        }
    }
    console.log(sum)
}