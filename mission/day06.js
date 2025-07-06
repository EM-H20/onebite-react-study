// quiz 1
function splitAndCombine(arr) {
    let mid = arr.length / 2; //배열의 반으로 나눈 인덱스
    let front = arr.slice(0, mid); //배열의 처음부터 mid 인덱스까지
    let back = arr.slice(mid); //배열의 mid 인덱스부터 마지막까지
    return back.concat(front);  //배열을 복사하고, 새로운 요소를 추가하는 메서드
  }
  
let arr = [0, 1, 2, 3, 4, 5, 6, 7];
const result = splitAndCombine(arr);
console.log(result);

// 출력 결과 :
// [4,5,6,7,0,1,2,3]
  

//quiz 2
function printClickEventLogs(logs) {
    let clickLogs = logs.filter((log) => log.type === "click");
    //type이 "click"인 로그만 필터링

    //forEach로 clickLogs를 순회하면서
    clickLogs.forEach((log) => {
        //날짜를 Date 객체로 변환하고, 로컬 시간으로 변환
        console.log(`${log.type} :: ${new Date(log.date).toLocaleString()}`);
    });
}
  
printClickEventLogs([
    {
      type: "click",
      date: "2023-01-01T12:00:00Z",
    },
    {
      type: "hover",
      date: "2023-01-01T12:10:00Z",
    },
    {
      type: "scroll",
      date: "2023-01-01T12:15:00Z",
    },
    {
      type: "click",
      date: "2023-01-01T12:20:00Z",
    },
  ]);
  
// 출력 결과
// click :: 2023. 1. 1. 오후 9:00:00
// click :: 2023. 1. 1. 오후 9:20:00

// quiz 3
function getDiscountedMenus(menus) {
    let discountedMenus = menus.map((menu) => {
        return {
            ...menu, //menu 객체의 모든 프로퍼티를 복사
            discountedPrice: menu.price - 500,
            //discountedPrice 프로퍼티 추가, 500원 할인해서
        };
    });
    return discountedMenus;
}
  
const discountedMenus = getDiscountedMenus([
    { itemId: 1, name: "아메리카노", price: 3000 },
    { itemId: 2, name: "라떼", price: 3500 },
    { itemId: 3, name: "초콜릿 케이크", price: 5000 },
    { itemId: 4, name: "크로와상", price: 2800 },
]);
  
console.log(discountedMenus);
// 출력 결과 :
// { itemId: 1, name: '아메리카노', price: 3000, discountedPrice: 2500 },
// { itemId: 2, name: '라떼', price: 3500, discountedPrice: 3000 },
// { itemId: 3, name: '초콜릿 케이크', price: 5000, discountedPrice: 4500 },
// { itemId: 4, name: '크로와상', price: 2800, discountedPrice: 2300 }
  

//quiz 4
//출간일 기준으로 내림차순 정렬
function getSortedBooks(books) {
    let sortedBooks = books.sort((a, b) => {
        //b가 a 앞에 와라
        if (a.published > b.published) return -1;
        //a가 b 앞에 와라
        else if (a.published < b.published) return 1;
        //같으면 그대로
        else return 0;
    });
    return sortedBooks;
}
  
const sortedBooks = getSortedBooks([
    {
      title: "한입 리액트",
      published: new Date("2023. 04. 06"),
    },
    {
      title: "웹 프론트엔드 첫 걸음",
      published: new Date("2024. 04. 30"),
    },
    {
      title: "이펙티브 타입스크립트",
      published: new Date("2021. 06. 27"),
    },
    {
      title: "클린코드",
      published: new Date("2013. 12. 24"),
    },
]);
  
console.log(sortedBooks);
// 출력 결과 :
// { title: '웹 프론트엔드 첫 걸음', published: 2024-04-29T15:00:00.000Z},
// { title: '한입 리액트', published: 2023-04-05T15:00:00.000Z },
// { title: '이펙티브 타입스크립트', published: 2021-06-26T15:00:00.000Z},
// { title: '클린코드', published: 2013-12-23T15:00:00.000Z }
  
