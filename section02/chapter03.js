// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log("------------------");


// 2. 객체의 구조 분해 할당
let person = {name : "Luca", age : 27, job : "student",};

let {name, age, job} = person;
console.log(name);
console.log(age);
console.log(job);
console.log("------------------");


// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, job}) => {
    console.log(name);
    console.log(age);
    console.log(job);
}

func(person);