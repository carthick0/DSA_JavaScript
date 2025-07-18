function upper(n){
    for(let row=1;row<=n;row++){
        let spaces=row-1;
        let str="";
        for(let i=1;i<=spaces;i++){
            str+=" ";
        }
        let num=row;
        while(num<=n){
            str+=num+ " ";
            num++;
        }
        console.log(str)
    }
    
    for(let row =1;row<=n-1;row++){
        let spaces=n-row-1;
        let str="";
        for(let i=1;i<=spaces;i++){
            str+=" ";
        };
        let num=n-row
        while(num<=n){
            str+=num+" ";
            num++;
        }
        console.log(str)
    }
}

upper(7)