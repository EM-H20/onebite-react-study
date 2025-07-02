// 5가지 요소 순호 및 탐색 메서드
// 1. forEach
// 배열의 모든 요소를 순회하며, 각 요소에 대해 특정 동작을 수행

let arr1 = [1, 2, 3];
arr1.forEach(function(item, index, array) {
    console.log(item);
});
console.log("------------------");


let doubledArr = [];
arr1.forEach((item) => {
    doubledArr.push(item * 2);
});
console.log(doubledArr);

console.log("------------------");

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메소드

let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);
console.log(isInclude);

console.log("------------------");

// 3. indexOf 얕은비교
// 특정 요소의 인덱스 (위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index);

let obj1 = [
    {name : "Luca", age : 27},
    {name : "dasd", age : 26},
    {name : "1234", age : 26},
    
]
console.log(obj1.indexOf({name : "Luca", age : 27}));

console.log("------------------");

// 4. findIndex 깊은비교
// 특정 조건을 만족하는 첫 번째 요소의 인덱스를 찾아서 반환하는 메서드
let arr4 = [1, 2, 3];
let foundIndex = arr4.findIndex((item) => item %2 !==0);
console.log(foundIndex);

console.log(obj1.findIndex((item) => item.name === "1234"));
console.log("------------------");

// 5. find
// 특정 조건을 만족하는 첫 번째 요소를 찾아서 반환하는 메서드
let arr5 = [
    {name : "ssssd", age : 27},
    {name : "dasd", age : 26},
    {name : "1234", age : 26},
]
console.log(arr5.find((item) => item.name === "ssssd"));
console.log("------------------");