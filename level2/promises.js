//promises are syntactical sugar that make the code more readable
const fs=require("fs");
const { promiseHooks } = require("v8");
function readfile(cb){
    fs.readFile("a.txt","utf-8",function(err,data){
        cb(data);
    });
}
function onDone(data){
    console.log(data)
}
readfile(onDone)
better way to write above code using promises
function readfile(){
    console.log("inside readfile");
    return new Promise(function(resolve){
        console.log("inside promise");
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log("before resolve");
            resolve(data);
        });
    })
}
function onDone(data){
    console.log(data);
}
let a=readfile();
console.log(a);
a.then(onDone);
pending resolved rejected

let p=new Promise(function(onDone){
    setTimeout(function(){
        onDone("foo");
    },2000); 
});
function callback(){
    console.log(p);
}
console.log(p);
p.then(callback);


.............async await...........
function myAsyncFunction(){
    let p=new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there!");
        },3000);
        
    });
    return p;
}
async function main(){
    // myAsyncFunction().then(function(value){
    //     console.log(value);
    // })
    let value=await myAsyncFunction();
    console.log("hi prashant");
    // console.log(value);
   //got rid of callbacks and .then syntax
}
main();
console.log("after main");

/callback hell
setTimeout(function(){
    console.log("hi there");
    setTimeout(function(){
        console.log("inside the second one");
    },2000)

},1000)

function myOwnSetTimeOut(callback,duration){
    setTimeout(callback,duration);
}
function promisifyMyOwnSetTime(duration){
    const p= new Promise(function(resolve){
        setTimeout(resolve("finally resolve"),duration);
    });
    return p;
}
myOwnSetTimeOut(function(){
    console.log("after settimeout");
},1000);
const ans=promisifyMyOwnSetTime(1000);
ans.then(function(value){
    console.log(value);
});
async function main(){
    let b=await promisifyMyOwnSetTime(1000);
    console.log(b);
}
main();