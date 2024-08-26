//simple primitive
let firstName="Prashant";
let age=19;
let isMarried=true;
console.log("this person name is "+firstName+" and their age is "+age);
//if else statement
if(isMarried==true){
    console.log(firstName+" is married.");
}
else{
    console.log(firstName+" is not married.");
}
//loops
//for loop
let answer=0;
let i=0;
for(;i<=100;i++){
    answer=answer+i;
}
console.log("the answer is "+answer);
console.log(i--);
while(i>0){
    answer=answer-i;
    i--;
}
console.log(answer);
//complex primitive
//arrays 
let person1="Prashant";
let age1=23;
let gender1="male";

let person2="Harkirat";
let age2=20;
let gender2="male";

let person3="Rohini";
let age3=18;
let gender3="female";
const personArray=[person1,person2,person3];
for(let i=0;i<personArray.length;i++){
    console.log(personArray[i]);
}
const ages=[age1,age2,age3,16,21,34,54];
//find even numbers in ages array
for(let i=0;i<ages.length;i++){
    if(ages[i]%2==0){
        console.log(ages[i]);
    }
}
const genderArray=[gender1,gender2,gender3];
for(let i=0;i<personArray.length;i++){
    if(genderArray[i]=="male"){
        console.log(personArray[i]);
        
    }
}
//objects
const user1={
    firstName:person1,
    gender:gender1,
    metadata:{
        age:age1,
        address:"sidhbari"
    }
}
const user2={
    firstName:person2,
    gender:gender2,
    metadata:{
        age:age2,
        address:"sidhpur"
    }
}
const user3={
    firstName:person3,
    gender:gender3,
    metadata:{
        age:age3,
        address:"khanyara"
    }
}
const userarray=[user1,user2,user3];
for(let i=0;i<userarray.length;i++){
    if(userarray[i]["gender"]=="male"){
        console.log(userarray[i]["firstName"]);
    }
}
//userarray[i]["gender"]is same as userarray[i].name
for(let i=0;i<userarray.length;i++){
    if(userarray[i]["metadata"]["age"]<=20){
        console.log(userarray[i]["firstName"]);
        console.log(userarray[i]["metadata"]["address"]);
    }
}

