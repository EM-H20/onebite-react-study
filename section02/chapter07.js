// 1. push 빠름
//배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr = [1, 2, 3];
const netLength = arr.push(4, 5, 6);

console.log(arr);
console.log(arr.length);
console.log(netLength);

// 2. pop 빠름
// 배열의 맨 뒤에 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const removedItem = arr2.pop();

console.log(arr2);
console.log(arr2.length);
console.log(removedItem);

// 3. shift 느림
// 배열의 맨 앞에 요소를 제거하고, 반환
let arr3 = [1, 2, 3];
const removedItem2 = arr3.shift();

console.log(arr3);
console.log(arr3.length);
console.log(removedItem2);

// 4. unshift 느림
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const netLength2 = arr4.unshift(4, 5, 6);

console.log(arr4);
console.log(arr4.length);
console.log(netLength2);

// 5. concat 빠름
// 배열을 복사하고, 새로운 요소를 추가하는 메서드
let arr5 = [1, 2, 3];
const arr6 = arr5.concat(4, 5, 6);

console.log(arr5);
console.log(arr6);
console.log("-----------------")

// 6. slice 빠름
// 마치 가위 처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환

let arr7 = [1, 2, 3, 4, 5 ];
const arr8 = arr7.slice(2, 5);
const arr9 = arr7.slice(2);
const arr10 = arr7.slice(-3);

console.log(arr7);
console.log(arr8);
console.log(arr9);
console.log(arr10);
console.log("-----------------")
