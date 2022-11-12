// # 문제78 : 원형 테이블

// 기린은 중국집에서 친구들과 만나기로 하고, 음식을 시켰습니다.
// 음식이 나오고 한참을 기다렸지만 만나기로 한 친구 2명이 오지 않았어요.

// 기린은 배가 너무 고파 혼자 음식을 먹기 시작합니다. 원형 테이블에는 N 개의 음식들이 있습니다.
// 한 개의 음식을 다 먹으면 그 음식의 시계방향으로 K 번째 음식을 먹습니다.
// 하지만 아직 오지 않은 친구들을 위해 2개의 접시를 남겨야 합니다.

// **마지막으로 남는 음식은 어떤 접시인가요?**

// ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd869860-5d2d-4428-873c-823013a0d879/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd869860-5d2d-4428-873c-823013a0d879/Untitled.png)

// ```jsx
// 입력은 2개의 정수로 이루어지며 공백으로 구분되어 입력됩니다.
// 첫 번째 숫자가 음식의 개수 N, 두 번째 숫자가 K입니다.
// 첫 번째 가져가는 음식이 K 번째 음식이며 나머지는 첫 번째 음식으로부터 시계방향으로 가져갑니다.

// **입력**
// 6 3

// ****남은 음식들의 번호를 배열의 형태로 출력합니다.

// **출력**
// [3, 5]
// ```

const user_input = prompt('입력해주세요').split(' ');
const n = parseInt(user_input[0], 10);
const k = parseInt(user_input[1], 10);

function sol(n, k) {
    let index = 0;
    // q에 n만큼의 숫자를 넣어준다.
    let q = [];
    for(let i = 0; i < n; i++){
        q.push(i + 1);
    }

    while (q.length > 2) {
        if (index > q.length-1) {
        // 순환하다 index가 q의 길이보다 클 경우에 q.length만큼 빼준다.
        // [1,2,3,4,5,6] -> 1다음 4가 빠지고 그 다음은 4+3 = 7(index : 6)이 빠져야 하는데
        // index(현재 빠져야 할 index)가 q.length보다 크므로 q.legnth, 즉 4를 빼준다.
        // 이걸 마지막 2개가 남을 때까지 반복한다.
        index -= q.length;
        }

        q.splice(index, 1);
        index += k;
        index -= 1;
    }

    return q;
}

console.log(sol(n, k));