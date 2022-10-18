// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.


// #1
let result = prompt("숫자 입력 > ").split(" ").reverse().join(" ");

console.log(result);

// #2
let input = prompt("숫자 입력 > ").split(" ").reverse();
let result = "";
input.forEach(i => {
    result += (i + ' ');
});

console.log(result);