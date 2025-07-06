// quiz 1
const x = 15;
const y = 20;

let max = x > y ? x : y;
console.log(max);

// quiz 2
const a = true;

switch(typeof a){
    case "boolean":
        console.log("boolean");
        break;
    case "number":
        console.log("number");
        break;
    case "string":
        console.log("string");
        break;
    case "object":
        console.log("object");
        break;
    case "function":
        console.log("function");
        break;
    default:
        console.log("기타");
}

// quiz 3
let temperature = 10;

if(temperature >= 20){
    console.log("더움");
}
else if(temperature >=10){
    console.log("적당");
}
else if(temperature >= 0){
    console.log("추움");
}
else{
    console.log("매우 추움");
}