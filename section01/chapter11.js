//1. 함수
function greeting(){
    console.log("Hello");
}
greeting();


function getArea(width, height){
    return width * height;
}
console.log(getArea(10, 20));
console.log(getArea(30, 20));

//중첩 함수
function outer(){
    console.log("outer");
    function inner(){
        console.log("inner");
    }
    inner();
}
outer();

    
