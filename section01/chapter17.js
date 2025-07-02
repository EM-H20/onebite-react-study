// 1. 배열 생성
let arr1 = new Array(); //배열 생성자
let arr2 = []; //배열 리터럴

//여러 자료형 저장 가능
let arr3 = new Array(1, 2, 3, 4, 5);
let arr4 = [1, "hello", true, null, undefined, {name : "Luca", age : 27}, [1, 2, 3, 4, 5], function() {console.log("hello")}];

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

// 2. 배열 요소 접근
let item1 = arr4[7];
item1();
