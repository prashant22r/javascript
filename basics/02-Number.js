function explainParseInt(value){
    console.log("original value: ",value);
    let result=parseInt(value);
    console.log("After Parse Int: ",result);
}
explainParseInt("42");
explainParseInt("aaa42px");
explainParseInt("3.14");
function explainParsefloat(value){
    console.log("original value: ",value);
    let result=parseFloat(value);
    console.log("After Parse Float: ",result);
}
explainParsefloat("42");
explainParsefloat("aaa42px");
explainParsefloat("3.14");