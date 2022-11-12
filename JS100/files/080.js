// # 문제80 : 순열과 조합

// **조합**이란 원소들을 조합하여 만들 수 있는 경우의 수이며 원소의 순서는 신경 쓰지 않습니다.
// **순열**이란 원소의 값이 같더라도 순서가 다르면 서로 다른 원소로 취급하는 선택법입니다.

// 한글의 자모 24자 중 자음은 총 14개입니다.
// 이 중 입력받은 자음을 n 개를 선택하여 나올 수 있는 모든 조합과, 조합의 수를 출력하고 싶습니다.

// ‘한글 맞춤법’의 제2장 제4항에서는 한글의 기본 자모 24자 “ㄱ(기역), ㄴ(니은), ㄷ(디귿), ㄹ(리을), ㅁ(미음), ㅂ(비읍), ㅅ(시옷), ㅇ(이응), ㅈ(지읒), ㅊ(치읓), ㅋ(키읔), ㅌ(티읕), ㅍ(피읖), ㅎ(히읗), ㅏ(아), ㅑ(야), ㅓ(어), ㅕ(여), ㅗ(오), ㅛ(요), ㅜ(우), ㅠ(유), ㅡ(으), ㅣ(이)”를 제시

// 나올 수 있는 모든 조합을 아래와 같이 출력해 주세요.

// **<--요구 조건-->**
// 1. 첫 번째 입력으로 선택할 한글 자음이 주어집니다.
// 2. 두 번째 입력으로 조합의 수가 주어집니다.
// 3. 주어진 조합의 수에 따라 조합과 조합의 수를 출력해 주세요.

// ```jsx
// **입력**
// ㄱ,ㄴ,ㄷ,ㄹ
// 3

// **출력**
// ['ㄱㄴㄷ', 'ㄱㄴㄹ', 'ㄱㄷㄹ', 'ㄴㄷㄹ']
// 4

const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1); 
        // 해당하는 fixed를 제외한 나머지 뒤
        const combinations = getCombinations(rest, selectNumber - 1); 
        // 나머지에 대해서 조합을 구한다.
        const attached = combinations.map((el) => [fixed, ...el]); 
        //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
        results.push(...attached); 
        // 배열 spread syntax 로 모두다 push
    });

    return results;
}
const arr = prompt('입력해주세요').split(',');
const n = parseInt(prompt('조합의 수를 입력해주세요'), 10);

console.log(getCombinations(arr, n).map(i => i.join('')))
console.log(`조합의 수 : ${getCombinations(arr, n).length}`)
