function solution(n, k){
	let arr = n.split('').sort((a,b) => a-b);
	let result = [];
    for (let i = 0; i < k; i++) {
        result.push(arr.pop());
    }
	return result.join('')
}
const input = prompt('숫자를 입력하세요')
const k = parseInt(prompt('몇 개의 수를 선택하시겠습니까?'))
console.log(solution(input, k))