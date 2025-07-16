function upper(n){
    for(let row=1;row<=(n-1)/2;row++){

        let str="";
        let leftStar=row;
        for(let i=1;i<=leftStar;i++){
            str+="*";
        };
        let spaces=n-2*row;
        for(let j=1;j<=spaces;j++){
            str+=" ";
        };
        let rightStar=row;
        for(let k=1;k<=rightStar;k++){
            str+="*";
        }
        console.log(str)
    }
}

function middle(n){
    let str="";
    for(let i=1;i<=n;i++){
        str+="*";
    }
    console.log(str);

}

function lower(n){
    for(let row=1;row<=(n-1)/2;row++){
        let str="";
        let leftstar=(n-1)/2-row+1;
        for(let i=1;i<=leftstar;i++){
            str+="*"
        }
        let spaces=2*row-1;
        for(let j=1;j<=spaces;j++){
            str+=" ";
        }
        let rightStar=(n-1)/2-row+1;
        for(let k=1;k<=rightStar;k++){
            str+="*"
        }
        console.log(str)
    }
    
}
upper(7)
middle(7);
lower(7)    