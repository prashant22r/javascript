//write the program to greet a person with their first and name
let firstName="Vishalli";
let lastName="Maini";
console.log("Good Morning "+firstName+" " +lastName);
//write a program that greets based on their gender
let Gender="female";
if(Gender=="male"||Gender=="MALE"){
    console.log("Hello Mister "+firstName+" "+lastName+".");
}
else{
    console.log("Hello Miss "+firstName+" "+lastName+".");
}
//write a program to print the biggest number in an array
let array=[100,10,5,1,4,2,111,22,3,44,7];
let size=array.length;
let max=0;
for(let i=0;i<size;i++){
    if(array[i]>max){
        max=array[i];
    }
}
console.log(max);
//write a program that reverse all the elements of an array