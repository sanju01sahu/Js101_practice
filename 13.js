let arr="school";
let arr2="";
let arr1="";

for(let i=arr.length-1;i>=0;i--){
    if(i<arr.length/2){
        arr1=arr1+arr[i];
    }else if(i>=arr.length/2){
        arr2=arr2+arr[i];
    }
}
console.log(arr1+arr2);
