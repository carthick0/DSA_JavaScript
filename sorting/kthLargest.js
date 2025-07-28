function kthLargestElement(arr,k){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]<arr[j+1]){
                const temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr[k-1]
}

let arr=[28,67,110,13,4];
console.log(kthLargestElement(arr,1));


function kthLargestElementInKiteration(arr,k){
    let n=arr.length;
    for(let i=0;i<k;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                const temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr[n-k]
}
console.log(kthLargestElementInKiteration(arr,2))