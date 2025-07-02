//1, Falsy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;
let f8 = false;

console.log(Boolean(f1));
console.log(Boolean(f2));
console.log(Boolean(f3));
console.log(Boolean(f4));
console.log(Boolean(f5));
console.log(Boolean(f6));
console.log(Boolean(f7));
console.log(Boolean(f8));

console.log("------------------");

//2, Truthy 한 값
let t1 = 1;
let t2 = "hello";
let t3 = true;
let t4 = {};
let t5 = [];
let t6 = function() {};
let t7 = 1n;
let t8 = -1n;
let t9 = -1;
let t10 = -1.1;
let t11 = -1.1;

console.log(Boolean(t1));
console.log(Boolean(t2));
console.log(Boolean(t3));
console.log(Boolean(t4));
console.log(Boolean(t5));
console.log(Boolean(t6));
console.log(Boolean(t7));
console.log(Boolean(t8));
console.log(Boolean(t9));
console.log(Boolean(t10));
console.log(Boolean(t11));

// 3. 활용 사례
function printName(person){
    if(!person){
        console.log("이름이 없습니다.");
        return;
    }
    console.log(person.name);
}

let person = {name : "Luca"};
printName(person);