// 1.객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴 (대부분 사용)

// 2. 객체 프로처티 (객체 속성)
let person = {
    name : "Luca",
    age : 27,
    sex : "male",
};

// 3. 객체 접근
// 3.1 특정 프로퍼터에 접근 기능 (점 표기법, 괄호 표기법)
let name = person.name;
let age = person["age"];

console.log(name, age);

console.log(person);

// 3.2 새로운 프로퍼티 추가
person.job = "student";
person["isMan"] = true;
console.log(person);

// 3.3 프로퍼티 수정
person.name = "Elpair";
person["age"] = 25;
console.log(person);

// 3.4 프로퍼티 삭제
delete person.sex;
delete person["isMan"];
console.log(person);

let result1 = "name" in person;
let result2 = "isMan" in person;
console.log(result1, result2);