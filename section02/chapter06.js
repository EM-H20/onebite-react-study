// 1. 배열 순회
let arr = [1, 2, 3, 4, 5];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("------------------");

// 1.2 for of 반복문 -> 배열에만 사용
for (let item of arr) {
    console.log(item);
}

console.log("------------------");

// 2. 객체 순회

let person = {
    name : "Luca",
    age : 27,
    job : "student",
};

// 2.1 Object.keys 사용
// 객체에서 Key를 배열로 반환
let keys = Object.keys(person);
console.log(keys);

for(let key of keys){
    const value = person[key];
    console.log(key,value);
}

console.log("------------------");

// 2.2 Object.values 사용
// 객체에서 Value를 배열로 반환
let values = Object.values(person);
console.log(values);

for(let value of values){
    console.log(value);
}

console.log("------------------");

// 2.3 for in -> 객체에만 사용
for(let key in person){
    console.log(key,person[key]);
}