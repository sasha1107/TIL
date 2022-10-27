// 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.
// ```jsx
// **입력**
// hi

// **출력**
// ========================hi========================
// ```

let outstr = Array(50).fill("=");
const inpstr = prompt("문자열을 입력해주세요.");

for (let i = 0; i < inpstr.length; i++){
    outstr[Math.floor((50-inpstr.length)/2) + i] = inpstr[i]
}
console.log(outstr.join(""));