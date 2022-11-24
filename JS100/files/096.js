// # 문제96 : 넓은 텃밭 만들기!

// 수연이는 밭농사를 시작하기로 마음을 먹었다. 집 앞 텃밭을 만들기로 하고 돌들을 제거하고 있는데 매우 큰 바위는 옮기지 못해 고심하고 있다.

// 이에 수연이는 다음과 같은 규칙을 정한다.

// 1. 바위를(바위는 '1'로 표기한다.) 피해 텃밭을 만들되 정사각형 모양으로 텃밭을 만든다.
// 2. 텃밭은 가장 넓은 텃밭 1개만 만들고 그 크기를 반환한다.
// 3. 만든 텃밭은 모두 '#'으로 처리한다.

// ```jsx
// <입출력 예시>

// **입력**

// 0 0 0 0 0
// 0 1 0 0 0
// 0 1 0 0 0
// 0 0 1 0 0
// 0 0 0 1 0

// **출력**

// 3 X 3

// 0 0 # # #
// 0 1 # # #
// 0 1 # # #
// 0 0 1 0 0
// 0 0 0 1 0

// **입력**

// 0 0 0 1 0
// 0 0 0 0 0
// 0 0 1 0 0
// 0 0 1 0 0
// 0 0 0 1 0

// **출력**

// 2 X 2

// # # 0 1 0
// # # 0 0 0
// 1 0 1 0 0
// 0 0 1 0 0
// 1 0 0 1 0

// /* ***********문제*********** */
// const 텃밭 = []; //입력받은 텃밭 리스트
// let 가꾼텃밭 = []; //텃밭을 가꾼 후 저장된 리스트

// // 코드를 작성해주세요


// // 방법 1
// const 텃밭 = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0],
//     [0, 1, 0, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 0, 1, 0]];

// function solution(텃밭){
//     const 넓이 = 텃밭[0].length;
//     const 높이 = 텃밭.length;

//     let 텃밭합 = [];
//     for (let i=0; i<텃밭.length; i++){
//         텃밭합.push(Array(텃밭.length).fill(0));
//     }
    
//     for(let i=0; i<높이; i++){
//         for(let j=0; j<넓이; j++){
//             if (텃밭[i][j] == 0){
//                 텃밭합[i][j] = 1;
//             } else {
//                 텃밭합[i][j] = 0;
//             }
//         }
//     }
//     console.log('텃밭합');
//     console.log(텃밭합);

//     for(let i=1; i<높이; i++){
//         for(let j=1; j<넓이; j++){
//             if (텃밭합[i][j] == 1){
//                 let min;
//                 if(텃밭합[i-1][j] > 텃밭합[i][j-1]){
//                     min = 텃밭합[i][j-1];
//                 } else if (텃밭합[i-1][j-1] > 텃밭합[i-1][j]) {
//                     min = 텃밭합[i-1][j];
//                 } else {
//                     min = 텃밭합[i-1][j-1]
//                 }
//                 텃밭합[i][j] = min + 1;
//             }
//         }
//     }

//     let maxValue = 0;
//     let x = 0;
//     let y = 0;

//     for (let i=0; i<높이; i++){
//         for (let j=0; j<넓이; j++){
//             if (maxValue < 텃밭합[i][j]){
//                 maxValue = 텃밭합[i][j]
//                 x = i
//                 y = j
//             }
//         }
//     }

//     // console.log(maxValue, x, y);
//     console.log(maxValue, 'X', maxValue);

//     for(let i=x - (maxValue - 1); i<x+1; i++){
//         for(let j=y - (maxValue - 1); j<y + 1; j++){
//         텃밭[i][j] = '#';
//         }
//     }

//     return 텃밭;
// }

// console.log(solution(텃밭));


// 방법 2
//문제 해설 강의 코드

let 텃밭 = `0 0 0 0 0
0 1 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 1 0`.replace(/1/g, '!').replace(/0/g, '1').replace(/!/g, '0');

let 역전텃밭 = [];
for(let row of 텃밭.split('\n')){
    역전텃밭.push(row.split(' '));
}

console.log('>> 0과 1을 역전해줌 => 역전텃밭 <<')
console.log(역전텃밭);
console.log('-------------------------');
function solution(역전텃밭){
    const 높이 = 역전텃밭.length;
    const 넓이 = 역전텃밭[0].length;

    // 문자열을 숫자로 바꿔주는 과정
    for(let i = 0; i < 높이; i++){
        for(let j = 0; j < 넓이; j++) {
            역전텃밭[i][j] = parseInt(역전텃밭[i][j], 10);
        }
    }
    console.log('>> 문자열을 숫자로 바꿔주기 <<');
    console.log(역전텃밭);
    console.log('-------------------------');
    let max = 0;
    let posX = 0;
    let posY = 0;

    for(let i = 1; i < 높이; i++){
        for(let j = 1; j < 넓이; j++){
            if(역전텃밭[i][j] == 1){
                let min;
                // 좌측 원소의 값이 가장 작을 경우
                if(역전텃밭[i-1][j] >= 역전텃밭[i][j-1]){
                    min = 역전텃밭[i][j-1];

                // 윗측 원소의 값이 가장 작을 경우
                } else if(역전텃밭[i-1][j] <= 역전텃밭[i][j-1]){
                    min = 역전텃밭[i-1][j];
                }
                // 대각선 원소의 값이 가장 작은 경우
                if(min > 역전텃밭[i-1][j-1]){
                    min = 역전텃밭[i-1][j-1];
                }
                // 현재 기준점이 그릴 수 있는 가장 큰 정사각형의 한 변의 길이
                역전텃밭[i][j] = min + 1;
                console.log(역전텃밭);
                        // 텃밭배열에서 가장 큰 숫자 찾기
                if(max < 역전텃밭[i][j]){
                max = 역전텃밭[i][j];
                posX = j;
                posY = i;
                }
            }
        }
    }
    console.log('>> 기준점 기준 그릴 수 있는 사각형의 크기 <<');
    console.log(역전텃밭);
    console.log('-------------------------');

	// 밭을 #으로 표기
  for(let i = posY - (max - 1); i < posY + 1; i++){
    for(let j = posX - (max - 1); j < posX + 1; j++) {
      역전텃밭[i][j] = '#';
    }
  }
  console.log('>> 밭을 #으로 표기 <<');
  console.log(역전텃밭);
  console.log('-------------------------');

	// 숫자를 다시 0과 1로 표기
  for (let i = 0; i < 높이; i++) {
    for (let j = 0; j < 넓이; j++) {
      if (역전텃밭[i][j] >= 1) {
        역전텃밭[i][j] = 0;
      } else if (역전텃밭[i][j] == 0) {
        역전텃밭[i][j] = 1;
      }
    }
  }

  console.log('>> 숫자를 다시 0과 1로 표기 <<');
  console.log(역전텃밭);
  console.log('-------------------------');

  console.log('>> 밭 출력 <<');
	for(let i of 역전텃밭){
    console.log(i);
  }
  console.log('-------------------------');
  
	// 크기 출력
  console.log('>> 크기 출력 <<');
  console.log(max + ' X ' + max);
}

solution(역전텃밭);