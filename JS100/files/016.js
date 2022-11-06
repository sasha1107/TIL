// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

let input = prompt("입력: ");
let output = input.split('');
output = output.reverse();
output = output.join('');

console.log(output);
