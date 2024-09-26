// function findSum(n){
//     let ans=0;
//     for(let i=0;i<n;i++){
//         ans+=i;
//     }
//     console.log(ans);
// }

// function findSumTill100(){
//     return findSum(100);
// }
// //delegating task till then doing other task -asynchronous function
// setTimeout(findSumTill100,1000);

// //busy waiting synchronous function
// function syncSleep(){
//     let a=1;
//     for(let i=0;i<1000000;i++){
//         a++;
//     }
// }
// // syncSleep();
// // findSumTill100();
// console.log("hello world");
// // for(let i=0;i<10;i++){
// //     console.log(i);
// // }

const fs=require("fs");
//filesystem module
fs.readFile("a.txt","utf-8",function(err,data){
  console.log(data);  
})
console.log("Prashant Here");
let a=0;
for(let i=0;i<10000000000;i++){
    a++;
}
console.log("Prashant Here again");