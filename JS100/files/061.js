let input = prompt("문자열을 입력하세요");
let temp = input[0];
let result = '';
let cnt = 0;
for (let i=0; i < input.length; i++) {
	if (input[i] === temp){
		cnt++;
	}
	else {
		result += temp + cnt;
		temp = input[i];
		cnt = 1;
	}
}
result += temp + cnt;
console.log(result);