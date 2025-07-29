function insertionSrot(arr){
    for(let i=1;i<arr.length;i++){
        let curr_element=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>curr_element){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=curr_element;
    }
}

let arr=[3,2,4,6,1];
insertionSrot(arr);
console.table(arr)