//promises are syntactical sugar that make the code more readable
const fs=require("fs");
// function readfile(cb){
//     fs.readFile("a.txt","utf-8",function(err,data){
//         cb(data);
//     });
// }
// function onDone(data){
//     console.log(data)
// }
// readfile(onDone)
//better way to write above code using promises
// function readfile(){
//     console.log("inside readfile");
//     return new Promise(function(resolve){
//         console.log("inside promise");
//         fs.readFile("a.txt","utf-8",function(err,data){
//             console.log("before resolve");
//             resolve(data);
//         });
//     })
// }
// function onDone(data){
//     console.log(data);
// }
// let a=readfile();
// console.log(a);
// a.then(onDone);
//pending resolved rejected

// let p=new Promise(function(onDone){
//     setTimeout(function(){
//         onDone("foo");
//     },2000); 
// });
// function callback(){
//     console.log(p);
// }
// console.log(p);
// p.then(callback);


//.............async await...........
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