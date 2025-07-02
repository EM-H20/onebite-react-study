//1. 묵시적 형 변환 : 자바스크립트 엔진이 알아서 형 변환

let num = 10;
let str = "20";

const result = num + str;
console.log(result);
console.log(typeof result);

//2. 명시적 형 변환 : 사용자가 지정
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);
console.log(typeof strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(10 + strToNum2);
console.log(typeof strToNum2);

//숫자 -> 문자
let num1 = 10;
let numToStr1 = String(num1);
console.log(num1 + numToStr1);
console.log(typeof numToStr1);
