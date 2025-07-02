//1. 스코프 범위
//전역 스코프 : 전체 영역에서 접근 가능
//지역 스코프 : 특정 영역에서만 접근 가능

let value = 20; //전역 스코프
function main(){
    let value = 10; //지역 스코프
    console.log(value);
}

console.log(value); //전역 스코프
main(); //지역 스코프