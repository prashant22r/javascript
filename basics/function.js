//function
function findSum(a,b){
    const sumValue=a+b;
    return sumValue;
}
const value1=findSum(1,2)
const value2=findSum(4,2)
console.log(value1);
console.log(value2);

//function can take other function as input(callback)
function Sum(num1,num2,fnToCall){
    const result=num1+num2;
    fnToCall(result);
}
function displayResult(data){
    console.log("Result of the sum is :" + data);
}
function displayResultPassive(data){
    console.log("Sum`s result is :" + data);
}
//you are only allowed to call one function to display result of sum
//use of callbacks
//passing function inside function
const ans=Sum(4,5,displayResult);

function calculateArithmetic(a,b,finalFn){
    const res=finalFn(a,b);
    return res;

}
function sum(a,b){
    const sumValue=a+b;
    return sumValue;
}
function minus(a,b){
    const minusvalue=a-b;
    return minusvalue;
}
const value = calculateArithmetic(2,6,minus);
console.log(value);

//setTimeout
function greet(){
    console.log("hello world");
    
}
function greetAlien(){
    console.log("hello alien");
    
}
setTimeout(greetAlien,3*1000)





