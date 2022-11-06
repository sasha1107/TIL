// # 문제53 : 괄호 문자열

// 괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 그중 괄호의 모양이 바르게 구성된 문자열을 **바른 문자열**, 그렇지 않은 문자열을 **바르지 않은 문자열**이라 부르도록 하자. 

// (())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
// (해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)

// **입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.**

let inpStr = prompt("문자열을 입력하세요");
inpStr = inpStr.replace(/[^\{\[\(\)\}\]]/gm, ""); //  괄호만

console.log(inpStr)
let open = "[{(";
let close = "]})";
let result = "YES";


for (let i = 0; i < inpStr.length; i++){
    let openidx = open.indexOf(String(inpStr[i]));
    if (openidx !== -1 && inpStr.includes(close[openidx])) {
        closeidx = close.indexOf(String(close[openidx]));
        if (openidx === closeidx) {
            continue;
        }
        else {
            result = "NO";
            break;
        }
    }
    else if (openidx === -1) { // 닫는 괄호일때
        continue;
    }
    else {
        result = "NO";
        break;
    }
}
console.log(result);