//1. 반복문
for(let i = 0; i < 10; i++){
    if(i % 2===0){
        continue;
    }
    console.log(i);
    if(i === 5){
        break;
    }
}