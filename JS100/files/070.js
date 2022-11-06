// # 문제70 : 행렬 곱하기

// 행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
// 곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.

// ```jsx
// **입력**
// a = [[1, 2],
// 		[2, 4]]

// b = [[1, 0],
// 		[0, 3]]

// **출력
// [**[1, 6], [2, 12]]
// ```

// [
//     [
//         a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1] 
//     ],
//     [
//         a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]
//     ]
// ]
function solution(a, b) {
    let result = [];
    const len = a[0].length;

    if (len === b.length){
        for(let i=0; i<len; i++){ // result(하나의 행렬)로 완성
            let row = [];
            for(let j=0; j<len; j++){ // 원소를 행(row)에 담는 for 문
                let x = 0;
                for(let k=0; k<len; k++){ // 원소(x)를 구하는 for 문
                    x += a[i][k]*b[k][j];
                }
                row.push(x);
            }
            result.push(row);
        }
        return result;
    } else {
        return -1;
    }
}

const a = [[1, 2], [2, 4]];
const b = [[1, 0], [0, 3]];

console.log(solution(a, b));