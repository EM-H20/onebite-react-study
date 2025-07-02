// 1. Date 객체를 생성하는 방법
let date1 = new Date(); //생성자
console.log(date1);

let date2 = new Date("2025-06-20");
console.log(date2);


// 2. 타임스탬프
// 특정 시간이 "1970년 1월 1일 00:00:00" 이후로 얼마나 지났는지의 시간을 밀리초로 나타낸 값
let ts1 = date1.getTime();

let date3 = new Date(ts1);
console.log(ts1);
console.log(date3);


// 3. Date 객체의 메서드
const year = date1.getFullYear();
const month = date1.getMonth() + 1;
const date = date1.getDate();

const hours = date1.getHours();
const minutes = date1.getMinutes();
const seconds = date1.getSeconds();

const milliseconds = date1.getMilliseconds();
const day = date1.getDay();

function showDate(date) {
    console.log(date.getFullYear(), date.getMonth() + 1, date.getDate());
    console.log(date.getHours(), date.getMinutes(), date.getSeconds());
    switch (date.getDay()) {
        case 0:
            console.log("일");
            break;
        case 1:
            console.log("월");
            break;
        case 2:
            console.log("화");
            break;
        case 3:
            console.log("수");
            break;
        case 4:
            console.log("목");
            break;
        case 5:
            console.log("금");
            break;
        case 6:
            console.log("토");
            break;
        default:
            console.log("기타");
            break;
    }
}

showDate(date1);

// 4. 시간 수정하기
date1.setFullYear(2026);
date1.setMonth(5);
date1.setDate(20);
date1.setHours(12);
date1.setMinutes(30);
date1.setSeconds(45);
date1.setMilliseconds(500);
console.log(date1);

showDate(date1);
console.log("------------------");

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toTimeString());
console.log(date1.toISOString());
console.log(date1.toLocaleString());
