function row(grid){
    let str=""
    for(let col=0;col<grid.length;col++){
        for(let row=0;srow<grid[col].length;row++){
            str+=grid[col][row]+" ";
        }
    }
    console.log(str)
}

let grid=[[1,2,3,4],[5,6,7,8,9],[10,11,12,13]]

row(grid)

