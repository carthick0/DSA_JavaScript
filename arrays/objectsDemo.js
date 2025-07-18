let x={
    name:'Karthikeya',
    age:39

}

console.log(x["name"]);
console.log(x.name);

x.name="Karthik"

// console.log(x);

x.marks=38;
x["company"]="Gaggle";
console.log(x)

delete x.marks;
console.log(x)