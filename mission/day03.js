// quiz 1
let num = 100;
let num_cnt = 0;
for(let i = 1; i <= num; i++){
    if(num % i === 0){
        console.log(i);
        num_cnt++;
    }
}
console.log(`${num}의 약수 개수 : ${num_cnt}`);
console.log("------------------");

// quiz 2
function isPrimeNumber(num){
    if(num <= 0){
        return "1 이상의 수를 입력해주세요.";
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrimeNumber(-1));
console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));
console.log("------------------");

// 출력 결과 :
// true
// false
// true
// false

// quiz 3
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function calculate(num1, num2, operation) {
    console.log(operation(num1, num2));
}

calculate(5, 3, add);
calculate(5, 3, subtract);