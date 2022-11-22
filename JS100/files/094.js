// # 문제94 : 페이지 교체 - LRU 알고리즘

// LRU 알고리즘이란 페이지 교체 알고리즘으로써, Least Resently Used의 약자입니다. 즉 페이지 부재가 발생했을 경우 가장 오랫동안 사용되지 않은 페이지를 제거하는 알고리즘입니다.
// 이 알고리즘의 기본 가설은 가장 오랫동안 이용되지 않은 페이지는 앞으로도 사용할 확률이 적다는 가정하에 페이지 교체가 진행됩니다.
// 다음 그림을 참고해주세요.

// ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/422ab369-3222-4587-b739-a43b0e421225/_2019-10-23__11.02.10.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/422ab369-3222-4587-b739-a43b0e421225/_2019-10-23__11.02.10.png)

// 메모리의 크기가 i로 주어지고 들어올 페이지들이 n으로 주어졌을 때, 전체 실행시간을 구해주세요.

// 만약 스택 안에 같은 스케줄이 있다면 **hit** 이라고 하며 실행시간은 **1초** 입니다. 스택 안에 스케줄이 없다면 **miss** 라고 하며 실행시간은 **6초** 입니다.

// | 페이지 | 페이지 프레임 | 실행시간 |
// | --- | --- | --- |
// | BCBAEBCE | 3 | 33 |
// | ABCABCABC | 3 | 24 |
// | ABCEDF | 0 | 36 |
// - 예제 1번을 보면 페이지 프레임의 개수는 3개이고 스케줄은 'BCBAEBCE' 입니다. 5번의 miss를 기록하므로 **5번 * 6초 = 30초**가 되고  3번의 hit을 기록하므로 **3번 * 1초 = 3초**입니다. 2개를 합한 값이 실행시간이므로, 33초가 됩니다.

function solution(frame, pages){
    let time = 0;
    let queue = [];
    for (let i = 0; i < pages.length; i++){
        let index = queue.indexOf(pages[i])
        if (index !== -1) {
            // hit
            time += 1;
            queue.splice(index, 1)
            queue.push(pages[i])
        }
        else {
            // miss
            time += 6;
            if (queue.length == frame){
                queue.shift();
            }
            queue.push(pages[i])
        }
    }
    return time;
}
// const pages = prompt("들어올 페이지 입력").split('');
// const memory = ~~prompt("메모리의 크기 입력");

const pages = "ABCEDF".split('')
const memory = 0

console.log(solution(memory, pages));