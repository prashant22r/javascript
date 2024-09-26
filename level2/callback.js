function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
// function sumofSquare(a,b){
//     const val1=square(a);
//     const val2=square(b);
//     return val1+val2;
// }
// function sumofCube(a,b){
//     const val1=cube(a);
//     const val2=cube(b);
//     return val1+val2;
// }//looks like repeating functions thus using callback
function sumofsomething(a,b,fn){
    console.log(fn);
    const val1=fn(a);
    const val2=fn(b);
    return val1+val2;
}//fn is callback function
console.log(sumofsomething(1,2,square));
console.log(sumofsomething(1,2,cube));

//anonymous function
const ans=sumofsomething(2,2,function (n){
    return n*n*n;
})
console.log(ans);