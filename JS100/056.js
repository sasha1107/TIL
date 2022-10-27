// 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

//데이터
let nationWidth = {
    'korea': 220877,
    'Rusia': 17098242,
    'China': 9596961,
    'France': 543965,
    'Japan': 377915,
    'England' : 242900,
}
let sortedVal = Object.values(nationWidth).sort((a,b) => a-b);
console.log(`한국은 ${sortedVal.indexOf(nationWidth.korea)}번째로 작은 나라이다.`);

console.log(Object.entries(nationWidth).filter(i => i[1] === sortedVal[1])[0][0]);
console.log(nationWidth.England - nationWidth.korea);