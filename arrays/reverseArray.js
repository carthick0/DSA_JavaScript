function swap(i,j,arr){
    const temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp
}
function reverseArray(arr){
    let i=0;
    let j=arr.length-1;
    while(i<=j){
        swap(i,j,arr);
        i++;
        j--;
    }
}

let arr=[5,4,3,2,1];

reverseArray(arr);

console.log(arr)