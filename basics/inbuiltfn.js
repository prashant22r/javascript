let Name="Prashant Maini";
function getlength(str){
    console.log("original string : " , str);
    console.log("string length : ", str.length);
}
getlength(Name);

function getIndexOf(str,target){
    console.log("Index : ",str.indexOf(target));
}
getIndexOf(Name,"n");
function getLastIndexOf(str,target){
    console.log("Index : ",str.lastIndexOf(target));
}
getLastIndexOf(Name,"n");
//slice
function getSlice(str ,start ,end){
    console.log("After slice : ",str.slice(start,end));
}
getSlice(Name,2,5);
//substring
function getSubString(str,start ,end) {
    console.log("new substring : ",str.substr(start,end));
}
getSubString(Name,2,5);
//replace 
function replaceString(str,target,replacement){
    console.log("Replaced string : ",str.replace(target,replacement));
}
replaceString(Name,"Maini","Mishra");
//split on the bases of delimiter
const value="hi.my.name.is.prashant";
const words=value.split(".");
console.log(words);
//trim
const tri="      prashant maini     ";
console.log(tri.trim());
//to upper
console.log(value.toUpperCase());
