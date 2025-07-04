// 1. 동기와 비동기
// 동기 : 순차적으로 실행
// 비동기 : 병렬적으로 실행

// 자바스크립트는 싱글스레드임

// 동기
console.log(1);
console.log(2);

// 비동기 - web APIs 에서 실행됨
console.log(1);
setTimeout(() => {
    console.log(2);
}, 3000); //milliseconds
console.log(3);
