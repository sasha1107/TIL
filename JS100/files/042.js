// 윤년 -> 2/29가 있다. 

// 1월: 31일
// 2월:28/29일
// 3월:31일
// 4월:30일
// 5월:31일
// 6월:30일
// 7월:31일
// 8월:31일
// 9월:30일
// 10월:31일
// 11월:30일
// 12월:31일


const a = parseInt(prompt('a 입력'));
const b = parseInt(prompt('b 입력'));
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function solution(a,b){
    const day = new Date(`2020-${a}-${b}`);
    return week[day.getDay()];
}

solution(5,24)