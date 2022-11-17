// **입력 예1)**

// ```jsx
// 손오공 야모챠 메지터 비콜로
// 70 10 55 40
// ```

// **출력 예1)**

// ```jsx
// {'손오공': 1, '메지터': 2, '비콜로': 3, '야모챠': 4}
// ```

// **입력 예2)**

// ```jsx
// ["홍길동","엄석대","연개소문","김첨지"]
// [2, 1, 10, 0]
// ```

// **출력 예2)**

// ```jsx
// {'연개소문': 1, '홍길동': 2, '엄석대': 3, '김첨지': 4}
// ```


let input = prompt('사람');
let score = prompt('점수');


let inputArr;
let scoreArr;
if (input.search(',') == -1) {
    inputArr = input.split(' ')
    scoreArr = score.split(' ');
}
else {
    inputArr = input.replaceAll(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣 | ,]/g, '').split(',');
    scoreArr = score.replaceAll(/[^0-9 | ,]/g, '').replaceAll(' ', '').split(',');
}

let scoreCp = scoreArr.slice().sort((a,b) => a-b); // 10 40 55 70
let index = [];
while (scoreCp.length > 0){
    index.push(scoreArr.indexOf(scoreCp.pop())) // 1 3 2 0
}
let result = {}
for (let i = 0; i < inputArr.length; i++){
    result[inputArr[index[i]]] = i+1;

}
console.log(result);