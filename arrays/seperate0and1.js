function swap(arr,i,j){
    const temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
function seperate(arr){
    let i=0;
    let j=arr.length-1;
    while(i<=j){
        //till the time i and j have to pass each other
        if(arr[i]==1){//we check if we have 1 at index i
            swap(arr,i,j);
            j--;
        }
        else{
            i++;
        }
    }
}

let arr=[1,1,0,1,0,0,1,0];
seperate(arr);
console.log(arr);