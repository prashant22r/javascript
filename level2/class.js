const ddog={
    Name:"doggie",
    legCount:4,
    speaks:"bhow bhow",
};
const ccat={
    Name:"cat",
    legCount:4,
    speaks:"meow meow",
};
function printline(animal){
    console.log("animal "+animal["Name"]+" "+ animal["speaks"]);
}
// printline(ddog);
// printline(ccat);
class Animal{
    constructor(name,legCount,speaks){
        this.name=name;
        this.legCount=legCount;
        this.speaks=speaks;
    }
    static myType(){
        console.log("Animal");
    }
    speak(){
       console.log("hi there "+this.speaks); 
    }
}
class Aliens{
    constructor(name,legCount,speaks){
        this.name=name;
        this.legCount=legCount;
        this.speaks=speaks;
    }
    static myType(){
        console.log("Alien");
    }
    speak(){
       console.log("hi there "+this.speaks); 
    }
}
Animal.myType();
let dog=new Animal("dog",4,"bhow-bhow");
let cat=new Animal("cat",4,"meow");
dog.speak();
cat.speak();