//1. 콜백 함수
function main(value){
    value();
}

main( (value = 30) => {
    // console.log(value);
});

//2. 콜백 함수의 활용

function repeat(count, callback){
    for(let i = 1; i <= count; i++){
        callback(i);
    }
}

repeat(5, (i)=>{
    console.log(i);
});

console.log("------------------");
repeat(5, (i)=>{
    console.log(i*2);
});