const users={
    name:"prashant",
    age:19,
    gender:"male",
};
const finalString=JSON.stringify(users);
console.log(finalString);
const userss='{"name":"prashant","age":24,"gender":"male",}'//converted object into string
console.log(users[0]);
JSON.parse
JSON.stringify
const user=JSON.parse(users);
console.log(user["gender"]);