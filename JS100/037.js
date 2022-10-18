// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

let input= prompt().split(' ') 
let 후보 = [...new Set(input)];

let result = {};
for (let i of 후보){ // 중복없이 후보만 객체에 넣어줌 카운트는 0으로 초기화
	result[i] = 0;
}
for (let i of input){ // input 돌며 카운트 더해주기
	result[i] += 1;
}
let max_val = Math.max(...Object.values(result));

for (let i of Object.keys(result)) {
	if (result[i] == max_val){
		console.log(`${i}(이)가 총 ${max_val}표로 반장이 되었습니다.`);
	}
}