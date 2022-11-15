// # 문제82 : 수학 괄호 파싱

// 수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다. 괄호는 소괄호밖에 없습니다.

// **입출력 예시**

// ```jsx
// 데이터 입력(1), 프로그램 종료(2) : 1
// 데이터를 입력하세요: 3 + 5
// True

// 데이터 입력(1), 프로그램 종료(2) : 1
// 데이터를 입력하세요: 5 + 7) * (3 * 5)
// False
// ```

// ```jsx
// function math(e){

//     //코드를 작성해주세요

// }
    
// while (1){
//     let order = prompt('데이터 입력(1), 프로그램 종료(2)');
//     if (order === 1){
//         const ex = prompt('데이터를 입력하세요');
//         console.log(math(ex));
//     } else {
//         break;
//     }
// }
// ```

function math(e){
    const 괄호 = ['(',')']
    let 괄호인덱스 = [];
    const input = e.replaceAll(' ', '').split('')
    input.forEach(i => {
        if (i === "(" || i === ")" || i === '{' || i === '}'){
            괄호인덱스.push(i)
        }
    });
    console.log(괄호인덱스);
    if (괄호인덱스.length % 2 !== 0){
        return "False";
    }
    while (괄호인덱스.length !== 0){
        if (괄호인덱스[0] === 괄호[0]  && 괄호인덱스[1] === 괄호[1]){
            괄호인덱스.splice(2);
        }
        else {
            return "False";
        }
    }
    return "True";
}
    
while (1){
    let order = ~~(prompt('데이터 입력(1), 프로그램 종료(2)'));
    if (order === 1){
        const ex = prompt('데이터를 입력하세요');
        console.log(math(ex));
    } else {
        break;
    }
}