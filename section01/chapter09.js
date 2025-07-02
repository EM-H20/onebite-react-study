//1. if 조건문
let num = 9;
if(num >= 10){
    console.log("num은 10이상 입니다");
    console.log(num>=10);
}
else{
    console.log("num은 10미만 입니다");
    console.log(num>=10);
}

//2. switch 조건문
let animal = "cat";
switch(animal){
    case "cat":{
        console.log("고양이");
        break;
    }
    case "dog":{    
        console.log("개");
        break;
    }
    case "bird":{
        console.log("새");
        break;
    }
    default:{
        console.log("기타 동물");
    }
}
