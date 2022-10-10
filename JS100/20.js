// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

const arr = prompt().split(" ");

const 몫 = Math.floor(parseInt(arr[0]) / parseInt(arr[1]));
const 나머지 = parseInt(arr[0]) % parseInt(arr[1]);

console.log(`${몫} ${나머지}`);