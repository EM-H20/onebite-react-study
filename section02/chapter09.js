// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링 하여 새로운 배열로 반환
let arr1 = [
    {name : "Luca", age : 27},
    {name : "dasd", age : 26},
    {name : "1234", age : 26},
];

const tennisPeople = arr1.filter((item) => item.age === 26);
console.log(tennisPeople);
console.log("------------------");

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고, 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const result1 = arr2.map((item, idx, arr)=> {
    console.log(idx, item);
    return item * 2;
});

console.log(result1);

let names = arr1.map((item) => item.name);
console.log(names);
console.log("------------------");

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = [10, 2, 5];
arr3.sort((a, b) => {
    //b가 a 앞에 와라
    if (a > b) return 1;
    //a가 b 앞에 와라
    else if (a < b) return -1;
    //같으면 그대로
    else return 0;
});
console.log(arr3);

// 4. toSorted
// 원본 배열은 놔두고 새로운 배열을 반환
let arr4 = [10, 2, 5];
let arr5 = arr4.toSorted(
    (a, b) => {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
    }
);

console.log(arr4);
console.log(arr5);
console.log("------------------");

// 5. join
// 배열의 모든 요소를 연결하여 문자열로 반환
let arr6 = ["hi", "hello", "nice"];
const joined = arr6.join(" ");
console.log(joined);
console.log("------------------");

