// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

// ```jsx
// **입출력**

// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD
// ```

const input = prompt("문자열을 입력하세요");
let result = "";
Array.from(input).forEach(char => {
    if (char.match(/[A-Z]/)){
        result += char.toLowerCase()
    }
    else if (char.match(/[a-z]/)){
        result += char.toUpperCase()
    }
    else {
        result += i;
    }
});
console.log(result)