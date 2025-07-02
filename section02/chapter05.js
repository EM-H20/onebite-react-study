// 1. 원시 vs 객체

let o1 = {name : "Luca"};
let o2 = o1;

let o3 = {...o1};

//얕은 비교
console.log(o1 === o2);
console.log(o1 === o3);

console.log(JSON.stringify(o1));
console.log(JSON.stringify(o2));
console.log(JSON.stringify(o3));

//깊은 비교
console.log(
    JSON.stringify(o1) === JSON.stringify(o3)
    //객체를 문자열로 변환하여 비교
);
