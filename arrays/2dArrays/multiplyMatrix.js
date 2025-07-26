function multiply(a,m,n,b,n,k){
    let c=Array(m);
    for(let i=0;i<m;i++){
        c[i]=Array(k).fill(0)
    }


    for(let i=0;i<m;i++){
        for(let j=0;j<k;j++){

            for(let x=0;x<n;x++){
                c[i][j]+=a[i][x]*b[x][j];
            }
        }
    }
    console.log(c);
}

let a=[[1,1],[2,2],[3,3]]
let b=[[1,1,1],[2,2,2]]

multiply(a,3,2,b,2,3)