//1. null 병합 연산자
//null 또는 undefined 가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log(var4);

let var5 = var1 ?? var2 ?? var3; //먼저 나오는 값이 null 또는 undefined가 아니면 그 값을 사용
console.log(var5);

let userName = "루카";
let displayName = userName ?? "기본값";
console.log(displayName);

//2. typeof 연산자
//값의 타입을 확인하는 연산자

let var6 = 1;
var7 = "hello";

let t1 = typeof var6;
console.log(t1);

//3. 삼항 연산자
// 조건 ? 값1 : 값2

let var8 = 1 > 2;
let var9 = var8 ? "참" : "거짓";
console.log(var9);
