//1. 대입 연산자
let var1 = 1;

//2. 산술 연산자
let num1 = 3+2;
let num2 = 3-2;
let num3 = 3*2;
let num4 = 3/2;
let num5 = 3%2;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);


//3. 복합 대입 연산자
let num6  = 10;
num6 += 20;
console.log(num6);

//4.증강 연산자
let num7 = 10;
++num7;
num7++;
console.log(++num7); //전위연산
console.log(num7++); //후위연산

//5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
console.log(or, and, not);

//6. 비교 연산자
let comp1 = 1 === "1";
let comp2 = 1 !== 2;
console.log(comp1, comp2);

let comp3 = 2 > 1;
let comp4 = 2 < 1;
console.log(comp3, comp4);

let comp5 = 2 >= 1;
let comp6 = 2 <= 1;
console.log(comp5, comp6); 