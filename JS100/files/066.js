// # 문제66

// 문제66 : 블럭탑쌓기

// 탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
// 순서에 맞게 쌓지 않으면 무너질 수 있습니다.

// 예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
// 선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

// - B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
// - B 다음 블럭이 C가 될 수 있습니다.

// 쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

// 1. 블럭은 알파벳 대문자로 표기합니다.
// 2. 규칙에 없는 블럭이 사용될 수 있습니다.
// 3. 중복된 블럭은 존재하지 않습니다.

// ```jsx
// **입력**
// 탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
// 규칙 = "ABD"

// **출력**
// ["가능", "불가능", "가능", "가능", "가능"]
// ```

let top = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = "ABD";
let newtop = [];
let result = [];
top.forEach(i => {
    newtop.push(i.replace(/[^ABD]/gm, ''));
})
console.log(top);
console.log(newtop);

function checkRule(str){
    if (str === rule){
        return "가능";
    }else if (str === ""){
        return "가능";
    }else if (str === rule[0] || str === rule[1] || str === rule[2]){
        return "가능";
    }
    else if (str === [rule[0], rule[1]].join('') || str === [rule[0], rule[2]].join('') || str === [rule[1], rule[2]].join('')){
        return "가능";
    }
    else{
        return "불가능";
    }
}

newtop.forEach(i => 
    result.push(checkRule(i)));
console.log(result);