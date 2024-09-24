const currentDate=new Date();
console.log(currentDate);
console.log(currentDate.getMonth()+1);
console.log(currentDate.getDate());
console.log(currentDate.getFullYear());
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());
console.log(currentDate.getTime());//total milliseconds since 1970
function calculateSum(n){
    let a=0;
    for(let i=0;i<n;i++){
        a=a+i;
    }
    return a;
}
const beforeDate=new Date();
const beforeTimeInMs=beforeDate.getTime();
calculateSum();
const afterDate=new Date();
const afterTimeInMs=afterDate.getTime();
console.log(afterTimeInMs-beforeTimeInMs);
