let grid=[[1,2,3],[4,5,6],[7,8,9]]

console.log(grid);

//To create an 2D array of 5x6 (5 rows and 6 cols)

let arr=Array(5); //this creates an outer array of 5 elements i.e Rows
for(let i=0;i<5;i++){
    let inner=Array(6).fill(i+1)//it creates 6 columns of each row

    arr[i]=inner;
}

arr[0][0]=0;


console.log(arr)
