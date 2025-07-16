// function leftPyramidPattern(n){
//    for(let row=1;row<=n;row++){ 
//    let str="";
//    let spaces=n-row;
//    for(let j=1;j<=spaces;j++){
//         str+=" ";
//     }
//     let stars=row;
//     for(let col=1;col<=stars;col++){
//         str+="*"
//     }
//    console.log(str)
//    }
// }

// leftPyramidPattern(4)

// function rightPyramidPattern(n){
//     for(let row=1;row<=n;row++){ // this row variable mimics our actual row

//    //whatever we are going to write inside the loop, we will be reapeting that again and again

//    let str="";
//    for(let col=1;col<=row;col++){

//     str+="*";
//     }
//    console.log(str)
//    }
// }

// rightPyramidPattern(4)



function pyramidPattern(n){
   for(let row=1;row<=n;row++){ 
   let str="";
   let spaces=n-row;
   for(let j=1;j<=spaces;j++){
        str+=" ";
    }
    let stars=2*row-1;
    for(let col=1;col<=stars;col++){
        str+="*"
    }
   console.log(str)
   }
}

pyramidPattern(4)



// function buttomRightDaimondPattern(n){
//     for(let row=1;row<=n;row++){ // this row variable mimics our actual row

//    //whatever we are going to write inside the loop, we will be reapeting that again and again

//    let str="";
//    for(let col=1;col<=n-row+1;col++){

//     str+="*";
//     }
//    console.log(str)
//    }
// }

// buttomRightDaimondPattern(4)



