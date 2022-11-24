// # 문제95 : 도장찍기

// 빈 종이에 stamp 모양으로 생긴 도장을 90*k 도로 회전하며 찍습니다. 도장은 N*N 크기이며 각 도장이 찍히는 부분은 1 이상의 자연수와 도장이 찍히지 않는 부분은 0으로 이루어져 있습니다.

// 도장의 크기 N과,
// 종이에 찍힌 도장 횟수를 표현한 stmp 배열과,
// 얼마만큼 회전할 것인지를 알려주는 회전수 k를 입력받았을 때 각 위치에서 몇 번 도장이 찍혔는지 그 결과값을 출력하세요.

// ```jsx
// **입력**

// 도장 = [
// [1,1,1,2],
// [2,0,0,0],
// [1,1,1,1],
// [0,0,0,0]]

// 회전 = 1

// **출력**

// [[1, 2, 3, 3], [2, 1, 0, 1], [1, 2, 1, 2], [0, 1, 0, 2]]
// ```



// const 도장 = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ];


const 도장 = [
    [1,1,1,2],
    [2,0,0,0],
    [1,1,1,1],
    [0,0,0,0]];

const 회전 = 1;

function rotate(stmp){
    N = stmp.length;
    let rot = [];
    for(let i = 0; i < N; i++){
        rot.push(Array(4).fill(0));
    }

    for (let i = 0; i < N; i++){
        for (let j = 0; j < N; j++){
            rot[j][N-1-i] = stmp[i][j];
        }
    }
    return rot;
}

function solution(stamp, n){
    let result = stamp
    let temp = stamp;
    
    for (let i =0; i<n; i++){
        temp = rotate(temp);

        for(let i = 0; i < temp.length; i++){
            for(let j = 0; j < temp[0].length; j++){
                result[i][j] += temp[i][j];
            }
        }
    }
    console.log(result);
}

solution(도장, 회전)