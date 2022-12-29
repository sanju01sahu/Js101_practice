let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13];
let min, max;
min=arr[0];
max=arr[0];
let max_index=0; 
let min_index=0;

for (let i = 0; i < arr.length; i++) {
    if(arr[i]>max){
        max_index=i;
    }
    if(arr[i]<min){
        min_index=indexof.arr[i];
    }
}
console.log("Index of maximum No.:"+max_index+"\nIndex of minimum No.:"+min_index);