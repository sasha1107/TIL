// 크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다.

// 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다. 
// 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 
// 하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다. 

// 입력
// 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********

// let input = 5;
// let arr = [];
// for (let i=1; i<input; i++) {
// 	let star = '';
// 	for (let j=1; j<=input-i; j++) {
// 		star += ' ';
// 	}
// 	for (let k=1; k<=2*i-1; k++) {
// 		star += '*';
// 	}
// 	arr  += star  + "\n";
// }

// console.log(arr);

// 재귀함수로 풀기
let star = '';
let cnt = 0; //공백을 찍어주기 위한 cnt
function makestar(num) {
    // num==0이 되면 재귀함수를 빠져나온다
    if (num == 0) {
        return;
    }
    // 공백을 찍어준다
    if (num != 0) {
        for (let j=0; j < cnt; j++) {
            star += ' ';
        }
    }
    //별을 찍어준다. 
    for (let i=1; i<=num*2-1; i++){
        star += '*';
    }
    star += '\n';
    cnt++;
    makestar(num-1);
}

const num = prompt("숫자를 입력하세요>");
makestar(num);
star = star.split('\n').reverse(); // 개행 기준으로 분리하고 순서를 뒤집는다.
star.shift() // 맨 마지막에 추가됐던 개행 제거
star = star.join('\n'); // 다시 개행을 배열 사이사이에 추가하여 완성
console.log(star);