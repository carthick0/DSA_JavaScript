function gridPattern(n){
    for(let row=1;row<=n;row++){ // this row variable mimics our actual row

   //whatever we are going to write inside the loop, we will be reapeting that again and again

   let str="";
   for(let col=1;col<=n;col++){

    str+="* ";
    }
   console.log(str)
   }
}

gridPattern(4)

// gridPattern(3,10);
