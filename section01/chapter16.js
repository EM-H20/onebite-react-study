// 1. 상수 객체
const person = {
    name : "Luca",
    age : 27,
    sex : "male",
};
//추가, 삭제, 추가 가능함
person.name = "Elpair";
person.job = "student";
delete person.sex;

console.log(person);

// 2. 메서드
// 값이 함수인 프로퍼티를 말함
const person2 = {
    name : "Luca",
    age : 27,
    sex : "male",

    //메서드 선언
    showInfo () {
        console.log(`name : ${this.name}, age : ${this.age}, sex : ${this.sex}`);
    },
    showInfo2 : function() {
        console.log(`name : ${this.name}, age : ${this.age}, sex : ${this.sex}`);
    },
    showInfo3 : function() {
        console.log(`name : ${person2.name}, age : ${person2.age}, sex : ${person2.sex}`);
    },
    showInfo4 : () => {
        console.log(`name : ${person2.name}, age : ${person2.age}, sex : ${person2.sex}`);
    },

    sayHello (){
        console.log(`Hello, my name is ${this.name}`);
    },
};

person2.showInfo();
person2.showInfo2();
person2.showInfo3();
person2.showInfo4();
person2.sayHello();
