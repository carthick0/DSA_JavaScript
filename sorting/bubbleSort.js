function bubbleSort(arr){
    let isSwapped=false;
    for(let i=0;i<arr.length;i++){//it runs multiple times
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                isSwapped=true;
            }
        }
        if(isSwapped===false) break
    }
};

let arr=[4,39,29,3,1]
// bubbleSort(arr);
console.log(arr)


function bubbleSortRec(arr,k,i){
    if(k==0)return;
    if(i==k){
        bubbleSortRec(arr,k-1,0);
        return;
    }
        if(arr[i]>arr[i+1]){
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
    
    bubbleSortRec(arr,k,i+1)
}

bubbleSortRec(arr,arr.length-1,0);
console.log(arr);