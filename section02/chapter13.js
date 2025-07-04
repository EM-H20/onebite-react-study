// 1. Promise
// 비동기 작업을 효율적으로 처리할 수 있도록
// 도와주는 자바스크립트 내장 객체

// 비동기 작업
// 실행, 상태 관리, 결과 저장, 병렬 실행, 다시 실행 등

// 대기 (Pending) : 아직 작업이 완료되지 않은 상태 (예시 : 유튜브 로딩 상태)
// 성공 (Fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태
// 실패 (Rejected) : 비동기 작업이 실패한 상태 (예시 : 유튜브 로딩 실패)

// 대기 -> 성공 = 해결 (resolve)
// 대기 -> 실패 = 거부 (reject)

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });
  return promise;
}

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

//than 메서드
// 그 후에

// promise chaining 체이닝
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

add10(10)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
