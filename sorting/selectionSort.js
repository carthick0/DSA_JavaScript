
function getMinIndex(arr,i){
    let minIndex=i;//we assume first element is min element in array
    for(let j=i+1;j<arr.length;j++){
        //we going with the remaining array[i+1,n-1]
        if(arr[j]<arr[minIndex]){
            minIndex=j
        }
    }

    return minIndex

}
function selectionSort(arr){ //we assume integer array
    for(let i=0;i<arr.length;i++){
        //[i,n-1]->unsorted region
        let minIndex=getMinIndex(arr,i);
        //swap the ith element with minindex
        if(i!=minIndex){
            let temp=arr[i];
            arr[i]=arr[minIndex];
            arr[minIndex]=temp
        }
    }
}
let arr=[15,6,3,-1,2,10];

selectionSort(arr);
console.log(arr);