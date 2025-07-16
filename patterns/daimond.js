function upperTriangle(n) {
    // Loop through each row from 1 to n
    for (let row = 1; row <= n; row++) {

        // Calculate the number of leading spaces for the current row
        let spaces = n - row;
        let str = "";

        // Add spaces to align stars centrally
        for (let j = 1; j <= spaces; j++) {
            str += " ";
        }

        // Calculate the number of stars: it increases with each row
        let stars = 2 * row - 1;

        // Add stars to the string
        for (let col = 1; col <= stars; col++) {
            str += "*";
        }

        // Print the current row of the upper triangle
        console.log(str);
    }
}

function lowerTriangle(n){
    //the lower triangle consist onlt n-1 rows
    for(let row=1;row<=n-1;row++){
        //for any given no row :we have spaces=row  
        let str="";
        let spaces=row;
        for(let j=1;j<=spaces;j++){
            str += " ";
        }
        //for every row when u increase the row number we decrease the no of stars
        //by the observation we get 2*(n-row)-1
        let stars=2*(n-row)-1;
        for(let col=1;col<=stars;col++){
            str+="*"
        };
        console.log(str)
    }
}
function diamond(n){
    upperTriangle(n);
    lowerTriangle(n)
};

diamond(5);