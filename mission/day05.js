// quiz 1 영화 리뷰 출력하기
function printMovieReview(movie) {
    console.log(`제목 : ${movie.title}`);
    console.log(`개봉 : ${movie.releaseYear}`);

    firstReview = movie.reviewers[0];
    console.log('첫 번째 리뷰어 :', firstReview || '리뷰어 미정');
}
  
printMovieReview({
    title: "하얼빈",
    releaseYear: 2024,
    reviewers: ["박정민", "김효빈", "이정환"],
});
  
// 출력 결과 :
// 제목 : 하얼빈
// 개봉 : 2023
// 첫 번째 리뷰어 : 박정민
  
printMovieReview({
    title: "위키드",
    releaseYear: 2024,
    reviewers: [],
});
  
// 출력 결과 :
// 제목 : 위키드
// 개봉 : 2024
// 첫 번째 리뷰어 : 리뷰어 미정
console.log("------------------");

// quiz 2 평균 성적 출력
function printAvgScore(students) {
    for (const key in students) {
        console.log(`${key}: ${students[key].scores.reduce((a, b) => a + b) / students[key].scores.length}`);
    }
}
printAvgScore({
    이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
    김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
    홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});
  
// 출력 결과 :
// 이정환: 30
// 김효빈: 64
// 홍길동: 58